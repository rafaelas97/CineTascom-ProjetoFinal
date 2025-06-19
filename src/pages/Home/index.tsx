import { movies } from "../../data/movies";
import { MovieCard } from "../../components/MovieCard";
import { DestaqueCarousel } from "../../components/Destaque/destaque";
import styles from "./styles.module.css";

export default function Home() {
  const destaque = movies[0]; 
  return (
      <div className={styles.container}>
        <DestaqueCarousel destaque={destaque} />
        <h1>🎬 Filmes em Cartaz</h1>
        <div className={styles.carousel}>
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    
  );
}
