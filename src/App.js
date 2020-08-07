import React, { Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Header from "./Components/Header&Footer/Header";
import Footer from "./Components/Header&Footer/Footer";
import TimeLine from "./Components/Timeline/TimeLine";
import Contacts from "./Components/Contacts/Contacts";
import Execom2020 from "./Components/Exexom2020/Execom2020";
import About from "./Components/About/About";
import Events from "./Components/Events/Events";


function App() {
  return (
      <Fragment>
        <Router basename="/finalVersion">
          <Header/>
          <Route path='/' exact component={Home}/>
          <Route path='/Timeline' component={TimeLine}/>
          <Route path='/Contacts' component={Contacts}/>
          <Route path='/Execom2020' component={Execom2020}/>
          <Route path='/About' component={About}/>
          <Route path='/Events' component={Events}/>
          <Footer/>
        </Router>
      </Fragment>
  );
}

export default App;
