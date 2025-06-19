import styles from "./styles.module.css";
import type { Movie } from "../../data/movies";

interface DestaqueCarouselProps {
  destaque: Movie;
}

export function DestaqueCarousel({ destaque }: DestaqueCarouselProps) {
  return (
    <div
      className={styles.banner}
      style={{ backgroundImage: `url(${destaque.banner})` }}
    >
      <div className={styles.overlay}>
        <h2>{destaque.title}</h2>
        <p>{destaque.caption}</p>
        <a href={`/filme/${destaque.id}`}>
          <button>Comprar ingresso</button>
        </a>
      </div>
    </div>
  );
}
