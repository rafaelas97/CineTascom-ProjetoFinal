import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../Header/styles.module.css";
import { movies } from "../../data/movies";

export default function Header() {
  const [busca, setBusca] = useState("");
  const navigate = useNavigate();

  const handleCadastroClick = () => {
    navigate("/");
  };

  const handleBuscaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBusca(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const filmeEncontrado = movies.find(
      (f) => f.title.toLowerCase() === busca.trim().toLowerCase()
    );

    if (filmeEncontrado) {
      navigate(`/filme/${filmeEncontrado.id}`);
    } else {
      alert("Filme não encontrado. Verifique o nome e tente novamente.");
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>CineTascom</div>
      <form onSubmit={handleSubmit} className={styles.formBusca}>
        <input
          type="text"
          placeholder="Buscar filme..."
          value={busca}
          onChange={handleBuscaChange}
          className={styles.inputBusca}
        />
        <button type="submit" className={styles.btnBusca}>
          Buscar
        </button>
      </form>
      <button onClick={handleCadastroClick} className={styles.btnCadastro}>
        Cadastrar
      </button>
    </header>
  );
}
