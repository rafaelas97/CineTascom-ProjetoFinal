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

  useEffect(() => {
    const dados = localStorage.getItem("reserva");
    if (dados) {
      const parsed = JSON.parse(dados);
      setReserva(parsed);
      setTipoIngresso(Array(parsed.assentos.length).fill("inteira")); // valor inicial
    }
  }, []);

  const [filmeId, horario] = reserva?.sessao.split("-") || [];
  const filme = movies.find((m) => m.id === Number(filmeId));

  const calcularValorTotal = () => {
    return tipoIngresso.reduce((acc, tipo) => {
      return acc + (tipo === "inteira" ? 20 : 10); // valores fictícios
    }, 0);
  };

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
      horario,
      assentos: reserva?.assentos,
      tipoIngresso,
      pagamento,
      valorTotal: calcularValorTotal()
    };

    console.log("🧾 Compra finalizada:", resumo);
    alert("Compra realizada com sucesso!");
    localStorage.removeItem("reserva");
    navigate("/");
  };

  if (!reserva) return <p>Carregando reserva...</p>;

  return (
    <div className={styles.container}>
      <h1>Finalizar Compra</h1>

      <div className={styles.box}>
        <h2>{filme?.title}</h2>
        <p><strong>Horário:</strong> {horario}</p>
        <p><strong>Assentos:</strong> {reserva.assentos.join(", ")}</p>
      </div>

      <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
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
              <option value="inteira">Inteira - R$20,00</option>
              <option value="meia">Meia - R$10,00</option>
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

        <h3>Total: R${calcularValorTotal()},00</h3>

        <button type="button" onClick={finalizarCompra}>
          Confirmar e Finalizar Compra
        </button>
      </form>
    </div>
  );
}
