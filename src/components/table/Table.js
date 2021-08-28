import { Table } from 'reactstrap';
import tableStyle from './table.module.css';
import { useSelector } from 'react-redux';
import Error from '../error/Error';
import Loaders from '../loaders/Loaders';
import XLSX from 'xlsx';
import { createFilter } from 'react-search-input';
import BarChart from '../barChart/BarChart';

const TableData = ({ countryReport, term }) => {
  const data = useSelector((state) => state.cases.data);
  const loading = useSelector((state) => state.cases.loading);
  const error = useSelector((state) => state.cases.error);

  if (error) {
    return <Error />;
  }
  const downloadAsXLSX = (e) => {
    e.preventDefault();
    if (data.length) {
      const worksheet = XLSX.utils.json_to_sheet(data[0]);
      const workbook = XLSX.utils.book_new();

      XLSX.utils.book_append_sheet(workbook, worksheet, countryReport);
      // buffer

      let buffer = XLSX.write(workbook, {
        bookType: 'xlsx',
        type: 'buffer',
      });

      // Binary string
      XLSX.write(workbook, {
        bookType: 'xlsx',
        type: 'binary',
      });

      // Download

      XLSX.writeFile(workbook, 'covid-19.xlsx');
    }
  };

  const KEYS = ['provinceState'];

  return (
    <div className={tableStyle.table}>
      {loading && <Loaders />}
      {!loading && (
        <>
          <div className={tableStyle.container}>
            <button className={tableStyle.btn} onClick={downloadAsXLSX}>
              Export
            </button>
          </div>
          <Table id="table-to-xls" responsive borderless striped>
            <thead>
              <tr>
                <th>Province State</th>
                <th>Country Region</th>
                <th>Lat</th>
                <th>Long</th>
                <th>Confirmed</th>
                <th>Deaths</th>
                <th>Recovered</th>
                <th>Active</th>
                <th>Last Update</th>
              </tr>
            </thead>
            <tbody>
              {data.length
                ? data[0].filter(createFilter(term, KEYS)) < 1
                  ? ''
                  : data[0].filter(createFilter(term, KEYS)).map((country) => {
                      return (
                        <tr>
                          <td>{country.provinceState === null ? '-' : country.provinceState}</td>
                          <td>{country.countryRegion === null ? '-' : country.countryRegion}</td>
                          <td>{country.lat }</td>
                          <td>{country.long}</td>
                          <td>{country.confirmed === null ? '-' : country.confirmed.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</td>
                          <td>{country.deaths === null ? '-' : country.deaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</td>
                          <td>{country.recovered === null ? '-' : country.recovered.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</td>
                          <td>{country.active === null ? '-' : country.active.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</td>
                          <td>{new Date(country.lastUpdate).toDateString()}</td>
                        </tr>
                      );
                    })
                : null}
            </tbody>
          </Table>
          <BarChart country={countryReport} data={data} loading={loading} error={error} />
        </>
      )}
    </div>
  );
};

export default TableData;
