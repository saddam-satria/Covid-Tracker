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
              name: 'Global',
              data: data[0].map((item) => item.confirmed.total),
            },
          ]}
          options={{
            chart: {
              type: 'area',
              zoom: {
                enabled: true,
                type: 'x',
                autoScaleYaxis: true,
              },
              stacked: false,
            },

            yaxis: {
              labels: {
                formatter: function (val) {
                  return (val / 1).toFixed(0);
                },
              },
              title: {
                text: 'Covid',
              },
            },
            dataLabels: {
              enabled: false,
            },
            colors: ['#8035f8', 'rgb(248, 50, 43)'],

            xaxis: {
              type: 'datetime',
              categories : data[0].map(item => item.reportDate)
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
            markers: {
              size: 0,
            },
            tooltip: {
              shared: false,
              y: {
                formatter: function (val) {
                  return (val / 1).toFixed(0);
                },
              },
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
