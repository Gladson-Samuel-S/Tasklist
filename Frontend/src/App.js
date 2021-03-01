import Header from './components/Header'
import Main from './components/Main'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import About from './components/About'

const App = () => {
  return (
    <Router>
      <div className="app">
      <Header/>
        <div className="content">
          <Route exact path = '/'>
            <Main/>
          </Route>
          <Route path = '/About'>
            <About />
          </Route>
        </div>
      </div>
    </Router>
  );
}

export default App;
