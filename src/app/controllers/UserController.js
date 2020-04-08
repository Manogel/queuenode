import Mail from "../lib/Mail";

export default {
  async store(req, res) {
    const { name, email, password } = req.body;

    const user = { name, email, password };

    await Mail.sendMail({
      from: process.env.MAIL_FROM,
      to: `${name} <${email}>`,
      subject: "Cadastro de usuário",
      html: `Olá ${name} :D `,
    });

    return res.json(user);
  },
};
