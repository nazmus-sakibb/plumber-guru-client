import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login';
import AddService from './components/AddService/AddService';
import Navbar from './components/Navbar/Navbar';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Book from './components/Book/Book';
import NotFound from './components/NotFound/NotFound';
import AddTestimonial from './components/AddTestimonial/AddTestimonial';
import BookingList from './components/BookingList/BookingList';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Navbar/>
      <Router>
        <Switch>
          <Route path="/book/:id">
            <Book></Book>
          </Route>
          <Route path="/addService">
            <AddService></AddService>
          </Route>
          <Route path="/bookingList">
            <BookingList></BookingList>
          </Route>
          <Route path="/addTestimonial">
            <AddTestimonial></AddTestimonial>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
