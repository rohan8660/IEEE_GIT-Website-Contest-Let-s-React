import React, { Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Header from "./Components/Header&Footer/Header";
import Footer from "./Components/Header&Footer/Footer";
import TimeLine from "./Components/Timeline/TimeLine";
import Contacts from "./Components/Contacts/Contacts";


function App() {
  return (
      <Fragment>
        <Router basename="/IEEE_GIT/">
          <Header/>
          <Route path='/' exact component={Home}/>
          <Route path='/Timeline' component={TimeLine}/>
          <Route path='/Contacts' component={Contacts}/>
          <Footer/>
        </Router>
      </Fragment>
  );
}

export default App;
