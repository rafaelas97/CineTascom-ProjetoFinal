import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../Header/styles.module.css";
import { movies } from "../../data/movies";
import { type Movie } from "../../@types/Movie"; 

export default function Header() {
  const [busca, setBusca] = useState("");
  const [sugestoes, setSugestoes] = useState<Movie[]>([]);
  const navigate = useNavigate();

  const handleCadastroClick = () => {
    navigate("/");
  };

  const handleBuscaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valor = e.target.value;
    setBusca(valor);

    const sugestoesFiltradas = movies.filter((f) => f.title.toLowerCase().includes(valor.toLowerCase()));
    setSugestoes(valor.length > 0 ? sugestoesFiltradas : []);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const filmeEncontrado = movies.find(
      (f) => f.title.toLowerCase() === busca.trim().toLowerCase()
    );

    if (filmeEncontrado) {
      navigate(`/filme/${filmeEncontrado.id}`);
      setSugestoes([]);
      setBusca("");
    } else {
      alert("Filme não encontrado. Verifique o nome e tente novamente.");
    }
  };

  const handleSugestaoClick = (filme: Movie) => {
    setBusca (filme.title);
    setSugestoes([]);
    navigate(`/filme/${filme.id}`);
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
        {sugestoes.length > 0 && (
          <ul className={styles.listaSugestoes} >
            {sugestoes.map((filme) => (
              <li key={filme.id} onClick={() =>handleSugestaoClick(filme) } >
                {filme.title}
              </li>
            ))}
          </ul>
        )}
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
