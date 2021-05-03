import Card from 'react-bootstrap/Card';
import Carousel from 'react-elastic-carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function CountCard(props) {
  const speiceName = props.speiceName;
  const speiceCount = props.count;
  const breakPoints = [{ height: 1000, itemsToShow: 5 }];

  const displaySpeiceCount = speiceName.map((name, index) => {
    const count = speiceCount[index];
    return (
      <div key={index}>
        <Card style={{ width: '24rem', textAlign: 'center', color: 'white', margin: '0.25rem', background: 'lightblue' }}>
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{count}</Card.Text>
          </Card.Body>
        </Card>
      </div >);
  });

  return (
    <Carousel verticalMode breakPoints={breakPoints}>
      {displaySpeiceCount}
    </Carousel>
  );
}