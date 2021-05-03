import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Carousel from 'react-elastic-carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import MarineMammalsPieChart from './PieChart/MarineMammalsPieChart';
import WhalePieChart from './PieChart/WhalePieChart';
import DolphinPieChart from './PieChart/DolphinPieChart';
import SealPieChart from './PieChart/SealPieChart';
import SealionPieChart from './PieChart/SealionPieChart';
import SeaotterAndOtherPieChart from './PieChart/SeaotterAndOtherPieChart';
import './CountPieChartList.scss';


export default function CountPieChartList(props) {
  const result = props.result;
  const totalCount = result[0];
  const whaleCount = result.slice(1, 7);
  const dolphinCount = result.slice(7, 9);
  const sealCount = result.slice(9, 12);
  const sealionCount = result.slice(12, 14);
  const seaotterAndOtherCount = result.slice(14);
  const breakPoints = [{ width: 768, itemsToShow: 3 }];

  return (
    <div className="count-piechart-list">
      <Carousel breakPoints={breakPoints}>
        <Card className="count-piechart-list__card">
          <Image src="/images/ocean.jpeg" thumbnail fluid />
          <Card.Header className="count-piechart-list__header">Marine Mammals</Card.Header>
          <Card.Body>
            <MarineMammalsPieChart totalCount={totalCount} whaleCount={whaleCount} dolphinCount={dolphinCount} sealCount={sealCount} sealionCount={sealionCount} seaotterAndOtherCount={seaotterAndOtherCount} />
          </Card.Body>
        </Card>
        <Card className="count-piechart-list__card">
          <Image src="/images/whale.jpeg" thumbnail fluid />
          <Card.Header className="count-piechart-list__header">Whale</Card.Header>
          <Card.Body>
            <WhalePieChart whaleCount={whaleCount} />
          </Card.Body>
        </Card>
        <Card className="count-piechart-list__card">
          <Image src="/images/dolphin.jpeg" thumbnail fluid />
          <Card.Header className="count-piechart-list__header">Dolphin</Card.Header>
          <Card.Body>
            <DolphinPieChart dolphinCount={dolphinCount} />
          </Card.Body>
        </Card>
        <Card className="count-piechart-list__card">
          <Image src="/images/seal.jpeg" thumbnail fluid />
          <Card.Header className="count-piechart-list__header">Seal</Card.Header>
          <Card.Body>
            <SealPieChart sealCount={sealCount} />
          </Card.Body>
        </Card>
        <Card className="count-piechart-list__card">
          <Image src="/images/sealion.jpg" thumbnail fluid />
          <Card.Header className="count-piechart-list__header">Sea Lion</Card.Header>
          <Card.Body>
            <SealionPieChart sealionCount={sealionCount} />
          </Card.Body>
        </Card>
        <Card className="count-piechart-list__card">
          <Image src="/images/seaotter.jpeg" thumbnail fluid />
          <Card.Header className="count-piechart-list__header">Sea Otter and Other</Card.Header>
          <Card.Body>
            <SeaotterAndOtherPieChart seaotterAndOtherCount={seaotterAndOtherCount} />
          </Card.Body>
        </Card>
      </Carousel >
    </div>
  );
}