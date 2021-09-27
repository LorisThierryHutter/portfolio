import './App.css';

import Home from './Sections/Home';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Experimenthome from './Components/Experiments/Experimenthome'
import Navigation from './Components/Navigation';

function App() {



  return (
    <BrowserRouter>
    <div>
      <Navigation />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/Experimenthome" component={Experimenthome} />
      </Switch>
    </div>
  </BrowserRouter>
  );
}

export default App;
