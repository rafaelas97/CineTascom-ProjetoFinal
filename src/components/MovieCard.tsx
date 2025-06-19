import type { Movie } from "../data/movies";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";

interface Props {
  movie: Movie;
}

export function MovieCard({ movie }: Props) {
  return (
    <div className={styles.card}>
      <img src={movie.poster} alt={movie.title} />
      <h2>{movie.title}</h2>
      <p>{movie.caption}</p>
      <Link to={`/filme/${movie.id}`}>
        <button>Ver Detalhes</button>
      </Link>
    </div>
  );
}
