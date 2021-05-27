import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import SearchPage from './pages/SearchPage'
import Result from './pages/ResultPage'
import DetailPage from './pages/DetailPage'
import CariDetail from './pages/CariDetail'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={SearchPage} ></Route>
        <Route path="/result/:search" component={(props) => <Result {...props} />}></Route>
        <Route path="/detail/:id" component={(props) => <DetailPage {...props} />}></Route>
        <Route path="/resultDetail" component={(props) => <CariDetail {...props} />}></Route>
      </Switch>
    </Router>
  );
}

export default App;
