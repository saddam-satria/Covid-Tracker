import { Line } from 'react-chartjs-2';
import { Container, Spinner } from 'reactstrap';
import React from 'react';

const Cart = ({ cases, loading }) => {
  return (
    <>
      {loading && (
        <div className="spinner-container">
          <Spinner children=""></Spinner>
          <span>Tunggu sebentar ya...</span>
        </div>
      )}
      {!loading && (
        <div className="Cart">
          <Container>
            {cases.length ? (
              <Line
                data={{
                  labels: cases[0].map((item) => item.reportDate),
                  datasets: [
                    { data: cases[0].map((item) => item.totalConfirmed), label: 'Confirmed', borderColor: 'rgb(17, 35, 134)', fill: true },
                    { data: cases[0].map((item) => item.deaths.total), label: 'Deaths', borderColor: 'rgb(224, 38, 5)', backgroundColor: 'rgb(224, 38, 5)', fill: true },
                  ],
                }}
              ></Line>
            ) : null}
          </Container>
        </div>
      )}
    </>
  );
};

export default Cart;
