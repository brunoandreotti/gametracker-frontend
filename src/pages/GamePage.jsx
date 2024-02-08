import 'bootstrap/dist/css/bootstrap.min.css';
import './GamePage.css';

import { useEffect, useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import GameTrackItem from '../components/gameTrackItem/GameTrackItem';
import GameTrackModal from '../components/gameTrackModal/GameTrackModal';
import NavigationBar from '../components/navBar/NavigationBar';
import { api } from '../utils/ApiUtil';

function GamePage() {
  const [gameTracks, setGameTracks] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  

  useEffect(() => {
    const fetchData = async () => {
      const response = await api.get('/gametrack');

      if (response.data.success) {
        setGameTracks(response.data.data);
      }
    };
    fetchData();
  }, []);

  

  return (
    <>
      <NavigationBar />

      <Container className="d-flex flex-row flex-wrap justify-content-evenly align-items-center mb-5">
        {gameTracks.map(gameTrack => {
          return (
            <GameTrackItem
              key={gameTrack.id}
              img={gameTrack.game.imageUrl}
              title={gameTrack.game.name}
              onClick={() => setModalShow(true)}
            />
          );
        })}
        { modalShow ? <GameTrackModal modalShow={modalShow} setModalShow={setModalShow} /> : ""}
        <Button className="mt-5" variant="outline-success">
          Adicionar jogo
        </Button>
      </Container>
    </>
  );
}

export default GamePage;
