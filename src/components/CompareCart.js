import React from 'react';
import { useSelector } from 'react-redux';
import { Container, FormGroup, Label, Input, Spinner, Row, Col } from 'reactstrap';
import { Bar } from 'react-chartjs-2';
import { getCasesCountries } from '../actions/cases';
import { useDispatch } from 'react-redux';

const CompareCart = () => {
  const [country, setCountry] = React.useState('Afghanistan');
  const countries = useSelector((state) => state.country.data);
  const dispatch = useDispatch();

  const getCasesCountry = useSelector((state) => state.casesCountries.data);
  const getCasesCountryLoading = useSelector((state) => state.casesCountries.loading);

  React.useEffect(() => {
    dispatch(getCasesCountries(country));
  }, [dispatch, country]);

  return (
    <div className="compare-cart">
      <Container>
        <h3>Order By Country</h3>

        <FormGroup>
          <Label for="countries">Select By Country</Label>
          <div className="select-country">
            <Input type="select" name="countries" id="countries" onChange={(e) => setCountry(e.target.value)}>
              {countries.length
                ? countries[0].countries.map((item, index) => {
                    return (
                      <>
                        <option key={index} value={item.name}>
                          {item.name}
                        </option>
                      </>
                    );
                  })
                : null}
            </Input>
          </div>
        </FormGroup>

        {getCasesCountryLoading && (
          <div className="spinner-container">
            <Spinner children="">Loading tunggu sebentar ...</Spinner>
          </div>
        )}
        {!getCasesCountryLoading && getCasesCountry.length ? (
          <>
            <Row>
              <Col md={12}>
                <Bar
                  data={{
                    labels: [new Date(getCasesCountry[0].lastUpdate).toDateString()],
                    datasets: [
                      {
                        label: 'Positive',
                        data: [getCasesCountry[0].confirmed.value],
                        backgroundColor: 'rgb(17, 35, 134)',
                      },
                      {
                        label: 'Deaths',
                        data: [getCasesCountry[0].deaths.value],
                        backgroundColor: 'rgb(224, 38, 5)',
                      },
                    ],
                  }}
                ></Bar>
              </Col>
            </Row>
          </>
        ) : null}
      </Container>
    </div>
  );
};

export default CompareCart;
