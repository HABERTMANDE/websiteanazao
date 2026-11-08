// api/mpesa/stk-push.js - LIVE VERSION
export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ success: false, message: "Method not allowed" });

  const { phone, amount, accountReference, transactionDesc } = req.body;
  if (!phone || !amount) return res.status(400).json({ success: false, message: "Phone and amount required" });

  try {
    const auth = Buffer.from(`${process.env.MPESA_CONSUMER_KEY}:${process.env.MPESA_CONSUMER_SECRET}`).toString("base64");
    const tokenRes = await fetch("https://api.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials", {
      headers: { Authorization: `Basic ${auth}` },
    });
    const tokenData = await tokenRes.json();
    const token = tokenData.access_token;
    if (!token) return res.status(500).json({ success: false, message: "Failed to get M-Pesa token - check your keys in Vercel" });

    const shortcode = process.env.MPESA_SHORTCODE;
    const passkey = process.env.MPESA_PASSKEY;
    const timestamp = new Date().toISOString().replace(/[-:TZ.]/g, "").slice(0, 14);
    const password = Buffer.from(`${shortcode}${passkey}${timestamp}`).toString("base64");

    const stkRes = await fetch("https://api.safaricom.co.ke/mpesa/stkpush/v1/processrequest", {
      method: "POST",
      headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        BusinessShortCode: shortcode,
        Password: password,
        Timestamp: timestamp,
        TransactionType: "CustomerBuyGoodsOnline",
        Amount: Number(amount),
        PartyA: phone,
        PartyB: shortcode,
        PhoneNumber: phone,
        CallBackURL: "https://websiteanazao.vercel.app/api/mpesa/callback",
        AccountReference: accountReference || "Anazao Give",
        TransactionDesc: transactionDesc || "Anazao Give",
      }),
    });

    const stkData = await stkRes.json();
    console.log("STK:", stkData);

    if (stkData.ResponseCode === "0") {
      return res.status(200).json({ success: true, message: "Prompt sent" });
    } else {
      return res.status(400).json({ success: false, message: stkData.ResponseDescription || stkData.errorMessage || "Failed" });
    }
  } catch (e) {
    return res.status(500).json({ success: false, message: "Server error: " + e.message });
  }
}