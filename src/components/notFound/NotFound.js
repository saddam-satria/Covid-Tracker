import { Container } from 'reactstrap';
import notFoundStyle from './notfound.module.css';
import notfoundImg from './notfound.png';

const NotFound = () => {
  return (
    <>
      <Container>
        <div className={notFoundStyle.NotFound}>
          <img className={notFoundStyle.img} src={notfoundImg} alt="Page Not Found" />
          <h2>Page Not Found</h2>
        </div>
      </Container>
    </>
  );
};

export default NotFound;
