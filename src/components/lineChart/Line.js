import lineStyle from './line.module.css';
import { useSelector } from 'react-redux';
import Error from '../error/Error';
import Loaders from '../loaders/Loaders';
import LineChart from 'react-apexcharts';

const Line = () => {
  const data = useSelector((state) => state.daily.data);
  const error = useSelector((state) => state.daily.error);
  const loading = useSelector((state) => state.daily.loading);

  if (error) {
    return <Error />;
  }
  return (
    <div className={lineStyle.Line}>
      {loading && <Loaders />}
      {!loading && data.length ? (
        <LineChart
          series={[
            {
              name: 'China',
              data: data[0].map((item) => item.confirmed.china),
            },
            {
              name: 'Others',
              data: data[0].map((item) => item.confirmed.outsideChina),
            },
          ]}
          options={{
            chart: {
              type: 'line',
              zoom: {
                enabled: true,
              },
            },

            dataLabels: {
              enabled: false,
            },
            colors: ['#8035f8', 'rgb(248, 50, 43)'],

            xaxis: {
              categories: data[0].map((item) => item.reportDate),
            },
            title: {
              text: 'Covid Trend Line by daily',
              align: 'left',
            },
            stroke: {
              curve: 'straight',
            },
            legend: {
              show: true,
              position: 'top',
            },
            markers : {
              size : 0
            },
            responsive: [
              {
                breakpoint: 1000,
                options: {
                  chart: {
                    height: '80%',
                  },
                },
              },
            ],
          }}
        />
      ) : null}
    </div>
  );
};

export default Line;
