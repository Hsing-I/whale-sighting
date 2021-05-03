import Header from './Header';
import CountList from './CountList';
import CountGraph from './CountGraph';
import useSpeiceCountData from '../hooks/useSpeiceCountData';
import './Home.scss';

export default function Home() {
  const { count, specieName, result } = useSpeiceCountData();

  return (
    <div className="home-container">
      <div className="header-container">
        <Header />
      </div>
      <div className="main-container">
        <div className="countlist-container">
          <CountList count={count} specieName={specieName} />
        </div>
        <div className="countgraph-container">
          <CountGraph count={count} result={result} />
        </div>
      </div>
    </div>
  );
}
