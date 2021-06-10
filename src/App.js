
import './App.css';
import Header from './components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Portfolio from '../src/components/Portfolio/Portfolio';
import Home from '../src/components/Home/Home';
import Contact from '../src/components/Contact/Contact';
import Footer from '../src/components/Footer/Footer';


function App() {
  return (
    <div className="app">
      <BrowserRouter>
      <div>
          <Header />
          <hr />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/portfolio" exact component={Portfolio} />
            <Route path="/contact" exact component={Contact} />
          </Switch>
          <Footer/>
          </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
