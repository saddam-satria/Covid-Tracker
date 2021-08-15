import React from 'react';
import { CardTitle, Container, Card, Row, Col, Spinner } from 'reactstrap';

const Cases = ({ title, data, loading }) => {
  return (
    <>
      <div className="mt-2">
        <div className="wrapper">
          <Container>
            <div className="title-indonesia">
              <h3 className="text-uppercase text-danger">{title}</h3>
              <div className="ms-auto"></div>
            </div>
            <Row>
              {loading && (
                <div className="spinner-container mt-3">
                  <Spinner children=""></Spinner>
                  <h5>Patuhi Prokes</h5>
                </div>
              )}

              {!loading &&
                data.map((item) => {
                  return (
                    <>
                      <Col md={4}>
                        <Card className="shadow">
                          <div className="count">
                            <span>{item.confirmed.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span>
                          </div>
                          <span>
                            Last update: <span>{new Date(data[0].lastUpdate).toDateString()}</span>{' '}
                          </span>
                          <CardTitle>Confirmed</CardTitle>
                        </Card>
                      </Col>
                      <Col md={4}>
                        <Card className="shadow recovery">
                          <div className="count">
                            <span>{item.recovered.value === 0 ? <span>Unknown</span> : ''}</span>
                          </div>
                          <span>
                            Last update: <span>{new Date(data[0].lastUpdate).toDateString()}</span>{' '}
                          </span>
                          <CardTitle>Recovery</CardTitle>
                        </Card>
                      </Col>
                      <Col md={4}>
                        <Card className="shadow deaths">
                          <div className="count">
                            <span>{item.deaths.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span>
                          </div>
                          <h5>
                            Last update: <span>{new Date(data[0].lastUpdate).toDateString()}</span>{' '}
                          </h5>
                          <CardTitle>Deaths</CardTitle>
                        </Card>
                      </Col>
                    </>
                  );
                })}
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
};

export default Cases;
