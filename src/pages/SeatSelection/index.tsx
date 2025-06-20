import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { seats as initialSeats } from "../../data/seats";
import { posters } from "../../data/posters";
import styles from "./styles.module.css";

export default function SeatSelection() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [currentPosterIndex, setCurrentPosterIndex] = useState(0);

  const [selectedSeats, setSelectedSeats] = useState<number[]>([]);

  const toggleSeat = (seatId: number) => {
    if (selectedSeats.includes(seatId)) {
      setSelectedSeats(selectedSeats.filter(id => id !== seatId));
    } else {
      setSelectedSeats([...selectedSeats, seatId]);
    }
  };

  const handleConfirm = () => {
    if (selectedSeats.length === 0) {
      alert("Selecione pelo menos um assento!");
      return;
    }

    localStorage.setItem("reserva", JSON.stringify({
      sessao: id,
      assentos: selectedSeats
    }));

    navigate("/confirmacao");
  };

   useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPosterIndex((prev) => (prev + 1) % posters.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.leftSide}>
        <h1>Selecione seus assentos</h1>

        <div className={styles.screen}>
          <div className="tela">Tela</div>
        </div>

        <div className={styles.grid}>
          {initialSeats.map((seat) => (
            <button
              key={seat.id}
              className={`${styles.seat}
                ${!seat.isAvailable ? styles.occupied : ""}
                ${selectedSeats.includes(seat.id) ? styles.selected : ""}`}
              disabled={!seat.isAvailable}
              onClick={() => toggleSeat(seat.id)} >
              {seat.id}
            </button>
          ))}
        </div>

        <button className={styles.confirmBtn} onClick={handleConfirm}>
          Confirmar Reserva
        </button>
      </div>
      <div className={styles.sidebar}>
        <h2>Em cartaz</h2>
        <img
          src={posters[currentPosterIndex].posterUrl}
          alt={posters[currentPosterIndex].title}
          className={styles.poster}
        />
        <p className={styles.posterTitle}>{posters[currentPosterIndex].title}</p>
      </div>
    </div>
  );
}
