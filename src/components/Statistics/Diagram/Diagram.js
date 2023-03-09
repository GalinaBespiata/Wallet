import {ArcElement, Chart as ChartJS, Legend, Tooltip} from 'chart.js';
import {Doughnut} from 'react-chartjs-2';
import expenses from './expenses.json';
import {DiagramWrapper} from './Diagram.styled';
import {useSelector} from "react-redux";
import {selectBalance} from "../../../redux/transactions/trans-selectors";

ChartJS.register(ArcElement, Tooltip, Legend);



export const Diagram = () => {

  const balance = useSelector(selectBalance)
  const balanceText = `₴ ${balance.toFixed(2)}`;
  console.log(balance)

   const data = {
    datasets: [
      {
        label: '# of Votes',
        data: expenses.map(expense => expense.percent),
        backgroundColor: expenses.map(expense => expense.color),
        borderColor: expenses.map(expense => expense.color),
        borderWidth: 1,
      },
    ],
  };

  const plugins = [
    {
      beforeDraw: function ({ width, height, ctx }) {
        ctx.restore();
        ctx.font = 20 + 'px sans-serif';
        ctx.textBaseline = 'top';
        const text = balanceText,
          textX = Math.round((width - ctx.measureText(text).width) / 2),
          textY = height / 2;
        ctx.fillText(text, textX, textY);
        ctx.save();
      },
    },
  ];
  return (
    <DiagramWrapper>
      <Doughnut data={data} plugins={plugins} type={'doughnut'} />
    </DiagramWrapper>
  );
};
