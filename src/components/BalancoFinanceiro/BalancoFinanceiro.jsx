import Cartao from "../Cartao/Cartao";
import CartaoCabecalho from "../Cartao/CartaoCabecalho/CartaoCabecalho";
import CartaoCorpo from "../Cartao/CartaoCorpo/CartaoCorpo";
import styled from "styled-components";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend,
);


const BalancoFinanceiro = () => {
  return (
    <Cartao>
      <CartaoCabecalho>Gastos por categoria</CartaoCabecalho>
      <CartaoCorpo>
        <AreaChart>
          <Pie data={data} />
        </AreaChart>
      </CartaoCorpo>
    </Cartao>
  );
};
export default BalancoFinanceiro;
