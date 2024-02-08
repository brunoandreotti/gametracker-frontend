import { string, func } from 'prop-types';
import { Card } from 'react-bootstrap';

const GameTrackItem = ({ img, title, onClick }) => {
  return (
    <Card
      bg="dark"
      text="white"
      border="secondary"
      className="mt-5 mx-3"
      style={{ width: '18rem' }}
      onClick={onClick}
    >
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
      </Card.Body>
    </Card>
  );
};

GameTrackItem.propTypes = {
  img: string,
  title: string,
  onClick: func
};

export default GameTrackItem;
