
import './App.css';
// import Navbar from '../src/components/Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../src/components/Header/Header';
import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Container } from 'react-bootstrap';
import Portfolio from '../src/components/Portfolio/Portfolio';
import Contact from '../src/components/Contact/Contact';
import Home from '../src/components/Home/Home';


function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Container fluid>
          {/* <Navbar /> */}
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/portfolio" exact component={Portfolio} />
            <Route path="/contact" exact component={Contact} />
          </Switch>
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
