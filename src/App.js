import './App.css'
import React from 'react'
import { getGLobal, indonesia,getDailyAction,getCountryAction} from './actions/cases'
import { useDispatch } from 'react-redux'
import Home from './routes/Home'
import PageNotFound from './components/PageNotFound'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  const dispatch = useDispatch()
  
  React.useEffect(() => {
    dispatch(indonesia())
    dispatch(getGLobal())
    dispatch(getDailyAction())
    dispatch(getCountryAction())
  }, [dispatch])

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact  component={Home}/> 
          <Route path="/*"   component={PageNotFound}/> 
        </Switch>
      </Router>
    </div>
  );
}

export default App

