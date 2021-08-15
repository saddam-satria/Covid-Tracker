import React from 'react';
import { Container } from 'reactstrap';
import { useHistory } from 'react-router';

const PageNotFound = () => {
  const [redirect, setRedirect] = React.useState(false);
  const history = useHistory();
  React.useEffect(() => {
    setRedirect(true);
    setTimeout(() => {
      setRedirect(false);
      history.push('/');
    }, 2000);
  }, []);
  return (
    <Container>
      <div className="error mt-3">
        <img src={process.env.PUBLIC_URL + '/img/error.png'} alt="page not found" />
        <h2>Page Not Found</h2>
        {redirect && <h5>Redirecting ...</h5>}
      </div>
    </Container>
  );
};

export default PageNotFound;
