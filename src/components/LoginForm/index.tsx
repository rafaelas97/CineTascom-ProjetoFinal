import { useState } from "react";
import { registerWithEmail, loginWithGoogle } from "../../services/authService";
import styles from "./styles.module.css";

interface Props {
  onClose: () => void;
}

export default function LoginForm({ onClose }: Props) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mensagem, setMensagem] = useState("");

  const handleCadastroEmail = async () => {
    try {
      await registerWithEmail(email, senha);
      setMensagem("✅ Cadastro realizado com sucesso!");
      setEmail("");
      setSenha("");
    } catch (error) {
      setMensagem("❌ Erro ao cadastrar. Verifique o e-mail e a senha.");
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await loginWithGoogle();
      setMensagem("✅ Login com Google realizado!");
    } catch (error) {
      setMensagem("❌ Erro ao logar com Google.");
    }
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <h2>Cadastre-se</h2>
        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
        <button onClick={handleCadastroEmail}>Cadastrar com E-mail</button>
        <button onClick={handleGoogleLogin}>Entrar com Google</button>
        <button className={styles.btnFechar} onClick={onClose}>
          Fechar
        </button>
        {mensagem && <p>{mensagem}</p>}
      </div>
    </div>
  );
}
