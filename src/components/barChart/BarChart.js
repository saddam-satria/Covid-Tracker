import barStyle from './bar.module.css';
import ReactChart from 'react-apexcharts';
import Error from '../error/Error';
import Loaders from '../loaders/Loaders';

const BarChart = ({ data, loading, error, country }) => {
  if (error) {
    return <Error />;
  }

  return (
    <div className={barStyle.Bar}>
      {loading && <Loaders />}
      {!loading && data.length ? (
        <ReactChart
          type="bar"
          options={{
            colors: ['#8035f8', 'rgb(248, 50, 43)', 'rgb(64, 199, 37)'],
            chart: {
              id: 'basic-bar',

              stacked: true,
              animations: {
                enabled: true,
                easing: 'easeinout',
                speed: 800,
                animateGradually: {
                  enabled: true,
                  delay: 150,
                },
                dynamicAnimation: {
                  enabled: true,
                  speed: 350,
                },
              },
            },

            xaxis: {
              categories: data[0].map((item) => (item.provinceState === null ? '' : item.provinceState)),
            },
            plotOptions: {
              bar: {
                horizontal: false,
              },
            },
            title: {
              text: `covid 19 ${country}`,
            },
            legend: {
              position: 'top',
              horizontalAlign: 'left',
              offsetX: 40,
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
          series={[
            {
              name: 'Confirmed',
              data: data[0].map((item) => item.confirmed),
            },
            {
              name: 'Deaths',
              data: data[0].map((item) => item.deaths),
            },
            {
              name: 'Recovered',
              data: data[0].map((item) => (item.recovered === null ? 0 : item.recovered)),
            },
          ]}
        />
      ) : null}
    </div>
  );
};

export default BarChart;
