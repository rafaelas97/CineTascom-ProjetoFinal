import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { seats as initialSeats } from "../../data/seats";
import { posters } from "../../data/posters";
import styles from "./styles.module.css";
import { movies } from "../../data/movies";

export default function SeatSelection() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [currentPosterIndex, setCurrentPosterIndex] = useState(0);
  const [occupiedSeats, setOccupiedSeats] = useState<number[]>([]);
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
    const [filmeId, horarioSelecionado] = (id || "").split("-");
    const filme = movies.find((m) => m.id === Number(filmeId))

    const reserva = {
      filme: filme?.title || "Filme desconhecido",
      horario: horarioSelecionado,
      sessao: `${filmeId}-${horarioSelecionado}`,
      assentos: selectedSeats
    };
    localStorage.setItem("reserva", JSON.stringify(reserva));
    console.log("🪑 Reserva salva:", reserva);
    

     const ocupadosSalvos = JSON.parse(localStorage.getItem("assentosOcupados") || "{}" );
      const atual = ocupadosSalvos[id!] || [];
      const atualizados = [...new Set([...atual, ...selectedSeats])];

      ocupadosSalvos[id!] = atualizados;
      localStorage.setItem("assentosOcupados", JSON.stringify(ocupadosSalvos));

    navigate("/confirmacao");
  };

   useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPosterIndex((prev: number) => (prev + 1) % posters.length);
    }, 2500);
    const ocupadosSalvos = JSON.parse(localStorage.getItem("assentosOcupados") || "{}");
    setOccupiedSeats(ocupadosSalvos[id!] || []);

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
                ${(!seat.isAvailable || occupiedSeats.includes(seat.id)) ? styles.occupied : ""}
                ${selectedSeats.includes(seat.id) ? styles.selected : ""}`}
              disabled={!seat.isAvailable || occupiedSeats.includes(seat.id)}
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
