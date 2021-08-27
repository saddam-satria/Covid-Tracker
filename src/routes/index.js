import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Container } from 'reactstrap';
import { useDispatch } from 'react-redux';

import { getDataCases } from '../actions/cases';
import FormInputGroupCountries from '../components/forminput/FormInputGroupCountries';
import Error from '../components/error/Error';
import Table from '../components/table/Table';

const Index = () => {
  const countries = useSelector((state) => state.countries.data);
  const loading = useSelector((state) => state.countries.loading);
  const error = useSelector((state) => state.countries.error);
  const [country, setCountry] = useState('Indonesia');
  const [term, setTerm] = useState('');

  const changeCountriesHandler = (country) => {
    setCountry(country);
  };

  if (error) {
    return <Error />;
  }

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDataCases(country));
  }, [country]);

  const handleInput = (term) => {
    setTerm(term);
  };
  return (
    <>
      <Container>
        <img className="headers-img" src="https://covid19.mathdro.id/api/og" alt=" covid global cases" />
        <FormInputGroupCountries handleInput={handleInput} loading={loading} data={countries} handler={changeCountriesHandler} />
        <Table term={term} countryReport={country} />
      </Container>
    </>
  );
};

export default Index;
