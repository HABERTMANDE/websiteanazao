// api/mpesa/stk-push.js - SANDBOX VERSION - DEBUG
export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ success: false, message: "Method not allowed" });

  const { phone, amount, accountReference, transactionDesc } = req.body;
  if (!phone || !amount) return res.status(400).json({ success: false, message: "Phone and amount required" });

  try {
    console.log("ENV CHECK:", {
      hasKey: !!process.env.MPESA_CONSUMER_KEY,
      hasSecret: !!process.env.MPESA_CONSUMER_SECRET,
      shortcode: process.env.MPESA_SHORTCODE,
      hasPasskey: !!process.env.MPESA_PASSKEY,
    });

    if (!process.env.MPESA_CONSUMER_KEY || !process.env.MPESA_CONSUMER_SECRET) {
      return res.status(500).json({ success: false, message: "Missing MPESA keys in Vercel - check Environment Variables" });
    }

    const auth = Buffer.from(`${process.env.MPESA_CONSUMER_KEY}:${process.env.MPESA_CONSUMER_SECRET}`).toString("base64");
    const tokenRes = await fetch("https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials", {
      headers: { Authorization: `Basic ${auth}` },
    });
    const tokenText = await tokenRes.text();
    console.log("TOKEN STATUS:", tokenRes.status, "BODY:", tokenText);
    let tokenData;
    try { tokenData = JSON.parse(tokenText); } catch { return res.status(500).json({ success: false, message: `Token failed - Status ${tokenRes.status}: ${tokenText.slice(0,200) || "Empty response from Safaricom - check keys"}` }); }
    
    const token = tokenData.access_token;
    if (!token) return res.status(500).json({ success: false, message: "Failed to get token: " + JSON.stringify(tokenData) });

    const shortcode = process.env.MPESA_SHORTCODE;
    const passkey = process.env.MPESA_PASSKEY;
    const timestamp = new Date().toISOString().replace(/[-:TZ.]/g, "").slice(0, 14);
    const password = Buffer.from(`${shortcode}${passkey}${timestamp}`).toString("base64");

    const stkRes = await fetch("https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest", {
      method: "POST",
      headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
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
    console.log("STK STATUS:", stkRes.status, "BODY:", stkText);
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