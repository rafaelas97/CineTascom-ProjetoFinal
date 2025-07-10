import emailjs from "@emailjs/browser";

const SERVICE_ID = "service_bpdpan6";
const TEMPLATE_ID = "template_rat0seq";
const PUBLIC_KEY = "mn2whyYjHfuX3hPpl";

export const enviarEmailConfirmacao = async (dados: {
  name: string;
  email: string;
  movie: string;
  time: string;
  seats: string;
  total: string;
}) => {
  try {
    const response = await emailjs.send(SERVICE_ID, TEMPLATE_ID, dados, PUBLIC_KEY);
    console.log("✅ Email enviado:", response.status, response.text);
    return true;
  } catch (error) {
    console.error("❌ Erro ao enviar email:", error);
    return false;
  }
};
