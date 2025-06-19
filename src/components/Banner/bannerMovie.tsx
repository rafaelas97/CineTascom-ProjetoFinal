import styles from './Banner/styles.module.css';

interface BannerMovieCardProps {
  titulo: string;
  descricao: string;
  imagem: string;
}

export function BannerMovieCard({ titulo, descricao, imagem }: BannerMovieCardProps) {
  return (
    <div className={styles.banner}>
      <img src={imagem} alt={titulo} className={styles.bannerImage} />
      <div className={styles.bannerContent}>
        <h2>{titulo}</h2>
        <p>{descricao}</p>
        <button>Ingressos</button>
      </div>
    </div>
  );
}
