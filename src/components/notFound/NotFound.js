import { Container } from 'reactstrap';
import notFoundStyle from './notfound.module.css';

const NotFound = () => {
  return (
    <>
      <Container>
        <div className={notFoundStyle.NotFound}>
          <img className={notFoundStyle.img} src={process.env.PUBLIC_URL + '/img/notfound.png'} alt="Page Not Found" />
          <h2>Page Not Found</h2>
        </div>
      </Container>
    </>
  );
};

export default NotFound;
