import loadersStyle from './loaders.module.css';
import loadersGif from './loaders.jpg';
import { Container } from 'reactstrap';

const Loaders = () => {
  return (
    <>
      <Container>
        <div className={loadersStyle.loaders}>
          <img className={loadersStyle.gif} src={loadersGif} alt="Loading" />
          <h3>wait a moment</h3>
        </div>
      </Container>
    </>
  );
};

export default Loaders;
