import CountBarChart from './CountBarChart';
import CountPieChartList from './CountPieChartList';
import "./CountGraph.scss";

export default function CountGraph(props) {
  const totalCount= props.count[0];
  
  return (
    <div className="countgraph">
      <div className="countgraph__barchart-container">
        <div className="countgraph__barchart-container__text">There are a totoal of <span className="countgraph__barchart-container__total">{totalCount}</span> marine mammals being spotted</div>
        <CountBarChart result={props.result}/>
      </div>
      <div className="countgraph__piechart-container">
        <CountPieChartList result={props.result} />
      </div>
    </div>

  );
};