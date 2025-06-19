import styles from "../Footer/styles.module.css";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.slogan}>
        🎬 Cinema confortável é na <strong>Tascom Ingressos</strong>!
      </p>
      <div className={styles.social}>
        <a href="https://instagram.com" target="_blank" rel="noreferrer">
          <FaInstagram />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noreferrer">
          <FaFacebook />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noreferrer">
          <FaTwitter />
        </a>
      </div>
      <p className={styles.copyright}>
        © {new Date().getFullYear()} CineTascom. Todos os direitos reservados.
      </p>
    </footer>
  );
}
