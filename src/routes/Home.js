import React from 'react';
import { Container, Spinner } from 'reactstrap';
import { useSelector } from 'react-redux';
import Cases from '../components/Cases';
import Cart from '../components/Cart'
import CompareCart  from '../components/CompareCart';


const Home = () => {
  const indonesia = useSelector((state) => state.cases.data);
  const indonesiaLoading = useSelector((state) => state.cases.loading);
  const indonesiaError = useSelector((state) => state.cases.error);

  const global = useSelector((state) => state.globalCases.data);
  const globalLoading = useSelector((state) => state.globalCases.loading);
  const globalError = useSelector((state) => state.globalCases.error);

  const daily = useSelector((state) => state.daily.data)
  const dailyLoading = useSelector((state) => state.daily.loading)
  const dailyError = useSelector((state) => state.daily.error)


  return (
    <>
      <header className="mt-3 ">
        <Container>
          <div className="header-image">
            <img src="https://images.pexels.com/photos/3951600/pexels-photo-3951600.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="covid-tracker" />
          </div>
        </Container>
      </header>

      {indonesiaError && (
        <div className="spinner-container">
          <Spinner children=""></Spinner>
          <span>Oopsss Error </span>
        </div>
      )}
      {globalError && (
        <div className="spinner-container">
          <Spinner children=""></Spinner>
          <span>Oopsss Error </span>
        </div>
      )}
      {dailyError && (
        <div className="spinner-container">
          <Spinner children=""></Spinner>
          <span>Oopsss Error </span>
        </div>
      )}
      <Cases data={indonesia} title={'indonesia'} loading={indonesiaLoading} />
      <Cases data={global} title={'global'} loading={globalLoading} />

      <Cart cases={daily} loading={dailyLoading}/>

      <CompareCart/>
    </>
  );
};

export default Home;
