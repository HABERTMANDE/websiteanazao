// api/mpesa/callback.js
export default async function handler(req, res) {
  console.log("Callback:", JSON.stringify(req.body, null, 2));
  res.status(200).json({ ResultCode: 0, ResultDesc: "Accepted" });
}