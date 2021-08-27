import loadersStyle from './loaders.module.css';

import { Container } from 'reactstrap';

const Loaders = () => {
  return (
    <>
      <Container>
        <div className={loadersStyle.loaders}>
          <img className={process.env.PUBLIC_URL + '/img/loaders.jpg'} src={loadersGif} alt="Loading" />
          <h3>wait a moment</h3>
        </div>
      </Container>
    </>
  );
};

export default Loaders;
