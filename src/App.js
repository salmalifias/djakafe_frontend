import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import SearchPage from './pages/SearchPage'
import Result from './pages/ResultPage'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={SearchPage} ></Route>
        <Route path="/result/:search" component={(props) => <Result {...props} />}></Route>
        <Route path="/result" exact component={Result}></Route>
      </Switch>
    </Router>
  );
}

export default App;
