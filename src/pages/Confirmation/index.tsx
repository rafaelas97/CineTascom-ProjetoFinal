import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { movies } from "../../data/movies";
import styles from "./styles.module.css";

interface Reserva {
  sessao: string;
  assentos: number[];
}

export default function Confirmation() {
  const navigate = useNavigate();
  const [reserva, setReserva] = useState<Reserva | null>(null);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [tipoIngresso, setTipoIngresso] = useState<string[]>([]);
  const [pagamento, setPagamento] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);


  useEffect(() => {
    const dados = localStorage.getItem("reserva");
    if (dados) {
      const parsed = JSON.parse(dados);
      setReserva(parsed);
      setTipoIngresso(Array(parsed.assentos.length).fill("inteira")); 
    }
  }, []);

  if (!reserva) return <p>Carregando reserva...</p>;

  const [filmeId] = reserva.sessao.split("-");
  const filme = movies.find((m) => m.id === Number(filmeId));

  const calcularValorTotal = () =>
    tipoIngresso.reduce((acc, tipo) => acc + (tipo === "inteira" ? 45 : 22.50),
     0
);

  const finalizarCompra = () => {
    if (!nome || !email || !cpf || !pagamento) {
      alert("Preencha todos os campos!");
      return;
    }

    const resumo = {
      nome,
      email,
      cpf,
      filme: filme?.title,
     
      assentos: reserva?.assentos,
      tipoIngresso,
      pagamento,
      valorTotal: calcularValorTotal()
    };

    console.log("🧾 Compra finalizada:", resumo);
    setShowSuccess(true);
    localStorage.removeItem("reserva");
  };
  return (
    <>
      {showSuccess && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <h2>Compra realizada com sucesso!</h2>
            <p> Um e-mail com o comprovante será enviado em instantes. <br />
            Aproveite o filme!
            </p>
            <button
              className={styles.modalButton}
              onClick={() => navigate("/")} > OK
            </button>
          </div>
        </div>
      )}
    <div className={styles.container}>
      <h1>Finalizar Compra</h1>
      <div className={styles.box}>
        <div className={styles.content}>
          {filme?.poster && (
            <img src={filme.poster} alt={`Pôster de ${filme?.title}`} 
            className={styles.posterImg} />
          )}
          <div className={styles.infos}>
            <h2>{filme?.title}</h2>
            {filme?.caption && (
              <p className={styles.caption}>{filme.caption}</p>
            )}
            <p>
              <strong>Horário:</strong> {reserva.sessao}
            </p>
            <p>
              <strong>Assentos:</strong> {reserva.assentos.join(", ")}
            </p>
        </div>
      </div>
    </div>
      <form className={styles.form} onSubmit={(e) => e.preventDefault()}> 
        <h2>Preencha os campos</h2>
        <input type="text" placeholder="Nome completo" value={nome} onChange={(e) => setNome(e.target.value)} />
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="text" placeholder="CPF" value={cpf} onChange={(e) => setCpf(e.target.value)} />

        <h3>Tipo de Ingresso:</h3>
        {reserva.assentos.map((assento, index) => (
          <div key={assento} className={styles.ingressoRow}>
            <label>Assento {assento}:</label>
            <select value={tipoIngresso[index]} onChange={(e) => {
              const novo = [...tipoIngresso];
              novo[index] = e.target.value;
              setTipoIngresso(novo);
            }}>
              <option value="inteira">Inteira - R$45,00</option>
              <option value="meia">Meia - R$22,50</option>
            </select>
          </div>
        ))}

        <h3>Forma de Pagamento:</h3>
        <select value={pagamento} onChange={(e) => setPagamento(e.target.value)}>
          <option value="">-- Selecione --</option>
          <option value="espécie">Espécie</option>
          <option value="débito">Cartão de Débito</option>
          <option value="crédito">Cartão de Crédito</option>
          <option value="pix">PIX</option>
        </select>

        <h3>Total: R${calcularValorTotal().toFixed(2).replace(".",",")}</h3>

        <button id="final" type="button" onClick={finalizarCompra}>
          Confirmar e Finalizar Compra
        </button>
      </form>
    </div>
  );
</>)}
