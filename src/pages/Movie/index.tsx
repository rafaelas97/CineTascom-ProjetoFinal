import { useParams, useNavigate } from "react-router-dom";
import { movies } from "../../data/movies";
import styles from "./styles.module.css";

export default function Movie() {
  const { id } = useParams();
  const navigate = useNavigate();

  const movie = movies.find((m) => m.id === Number(id));

  if (!movie) return <p>Filme não encontrado.</p>;

  return (
    <>
     
      <div className={styles.movieContainer}>
        <img className={styles.poster} src={movie.poster} alt={movie.title} />

        <div className={styles.details}>
          <h1>{movie.title}</h1>
          <p className={styles.description}>{movie.description}</p>

          <h3>Escolha um horário:</h3>
          <div className={styles.scheduleButtons}>
            {movie.times.map((time) => (
              <button
                key={time}
                onClick={() => navigate(`/sessao/${movie.id}/${time}`)}
              >
                {time}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
