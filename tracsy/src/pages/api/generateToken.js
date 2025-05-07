import jwt from "jsonwebtoken";

export default function handler(req, res) {
  if (req.method === "POST") {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ error: "Email é obrigatório" });
    }

    // Chave secreta diretamente no código
    const secretKey = "secreta-chave";

    const token = jwt.sign({ email }, secretKey, { expiresIn: "7d" });
    return res.status(200).json({ token });
  }

  return res.status(405).json({ error: "Método não permitido" });
}