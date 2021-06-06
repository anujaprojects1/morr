import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import Series from './components/Series'
import Movies from './components/Movies'
import Footer from './components/Footer';
import Error from './components/Error'

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/series" exact component={Series} />
        <Route path="/movies" exact component={Movies} />
        <Route component={Error} />
      </Switch>
      <Footer/>
    </div>
  </Router>
  );
}

export default App;
