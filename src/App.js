import { useEffect } from 'react';
import './App.css';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import { getCountries } from './actions/cases';
import Home from './routes';
import NotFound from './components/notFound/NotFound';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountries());
  }, []);
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="*" exact component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
