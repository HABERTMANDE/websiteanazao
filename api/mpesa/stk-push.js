// api/mpesa/stk-push.js - SANDBOX - WITH BROWSER HEADERS TO BYPASS 403
export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ success: false, message: "Method not allowed" });

  const { phone, amount, accountReference, transactionDesc } = req.body;
  if (!phone || !amount) return res.status(400).json({ success: false, message: "Phone and amount required" });

  try {
    const consumerKey = "ARSej5NtMRAaCsb9oEbNkNSXzLWzM1BMgYJ9MVbJPx2MyUgU";
    const consumerSecret = "PZAPmdHbtG79vxN6b9DUdssFpCJoTet43ItOnuP5c0aMJHWJ5pGrNHmRRCw137T6";
    const shortcode = "174379";
    const passkey = "bfb279f9aa9bdbcf158e97dd71a467cd2e0c893059b10f78e6b72ada1ed2c919";

    const auth = Buffer.from(`${consumerKey}:${consumerSecret}`).toString("base64");

    // Browser-like headers to bypass Safaricom firewall
    const browserHeaders = {
      Authorization: `Basic ${auth}`,
      "Accept": "application/json",
      "Content-Type": "application/json",
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
      "Accept-Language": "en-US,en;q=0.9",
      "Cache-Control": "no-cache",
    };

    const tokenRes = await fetch("https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials", {
      method: "GET",
      headers: browserHeaders,
    });
    const tokenText = await tokenRes.text();
    console.log("TOKEN STATUS:", tokenRes.status, "BODY:", tokenText.slice(0,500));
    let tokenData;
    try { tokenData = JSON.parse(tokenText); } catch { return res.status(500).json({ success: false, message: `Token failed - Status ${tokenRes.status}: ${tokenText.slice(0,200)}` }); }
    
    const token = tokenData.access_token;
    if (!token) return res.status(500).json({ success: false, message: "Failed to get token: " + JSON.stringify(tokenData) });

    const timestamp = new Date().toISOString().replace(/[-:TZ.]/g, "").slice(0, 14);
    const password = Buffer.from(`${shortcode}${passkey}${timestamp}`).toString("base64");

    const stkRes = await fetch("https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        "Accept": "application/json",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
      },
      body: JSON.stringify({
        BusinessShortCode: shortcode,
        Password: password,
        Timestamp: timestamp,
        TransactionType: "CustomerPayBillOnline",
        Amount: Number(amount),
        PartyA: phone,
        PartyB: shortcode,
        PhoneNumber: phone,
        CallBackURL: "https://websiteanazao.vercel.app/api/mpesa/callback",
        AccountReference: accountReference || "Anazao Give",
        TransactionDesc: transactionDesc || "Anazao Give",
      }),
    });

    const stkText = await stkRes.text();
    console.log("STK STATUS:", stkRes.status, "BODY:", stkText.slice(0,500));
    let stkData;
    try { stkData = JSON.parse(stkText); } catch { return res.status(500).json({ success: false, message: `STK failed - Status ${stkRes.status}: ${stkText.slice(0,200)}` }); }

    if (stkData.ResponseCode === "0") {
      return res.status(200).json({ success: true, message: "Prompt sent" });
    } else {
      return res.status(400).json({ success: false, message: stkData.ResponseDescription || stkData.errorMessage || "Failed" });
    }
  } catch (e) {
    console.log("SERVER ERROR:", e);
    return res.status(500).json({ success: false, message: "Server error: " + e.message });
  }
}