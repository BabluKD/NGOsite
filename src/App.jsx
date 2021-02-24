import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
//import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import { Switch, Route, Redirect } from 'react-router-dom';

//pages
import Home from './pages/Home';
import Mission from './pages/Mission';
import Campaigns from './pages/Campaigns';
import Plans from './pages/Plans';
import Volunteers from './pages/Volunteers';
import Partners from './pages/Partners';
import Transparency from './pages/Transparency';
import Contact from './pages/Contact';
import Donate from './pages/Donate';
import Checkout from './pages/Checkout';
// import Login from './pages/LogReg/Login';

//components
import TitleBar from './components/TitleBar';
import MyNavbar from './components/MyNavbar'

const App = () => {
  return (
    <div className="App" style={{ position: "relative" }}>
      <TitleBar />
      <MyNavbar />
      <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/mission" component={Mission} />
        <Route exact path="/campaigns" component={Campaigns} />
        <Route exact path="/plans" component={Plans} />
        <Route exact path="/volunteers" component={Volunteers} />
        <Route exact path="/partners" component={Partners} />
        <Route exact path="/transparency" component={Transparency} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/donate" component={Donate} />
        <Route exact path="/checkout" component={Checkout} />
        {/* <Route exact path="/login" component={Login} /> */}
        <Redirect to="/" />
      </Switch>
      </div>
    </div>
  )
}

export default App;