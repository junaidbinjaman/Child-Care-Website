import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import AddReview from "./component/Dashboard/AddReview/AddReview";
import AddService from "./component/Dashboard/AddService/AddService";
import BookingList from "./component/Dashboard/BookingList/BookingList";
import BookService from "./component/Dashboard/BookService/BookService";
import Dashboard from "./component/Dashboard/Dashboard/Dashboard";
import MakeAdmin from "./component/Dashboard/MakeAdmin/MakeAdmin";
import OrderList from "./component/Dashboard/OrderList/OrderList";
import Home from "./component/Home/Home/Home";
import Login from "./component/Login/Login";
import PrivateRoute from "./component/Login/PrivateRoute/PrivateRoute";
import ManageService from "./component/Dashboard/ManageService/ManageService";

function App() {
  document.title = "Child Chare, The best Solution for parents";
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>{" "}
        <PrivateRoute path="/manageService">
          <ManageService />
        </PrivateRoute>{" "}
        <PrivateRoute path="/bookservice">
          <BookService />
        </PrivateRoute>{" "}
        <PrivateRoute path="/makeadmin">
          <MakeAdmin />
        </PrivateRoute>{" "}
        <PrivateRoute path="/orderlist">
          <OrderList />
        </PrivateRoute>{" "}
        <PrivateRoute path="/bookinglist">
          <BookingList />
        </PrivateRoute>{" "}
        <PrivateRoute path="/addreview">
          <AddReview />
        </PrivateRoute>{" "}
        <PrivateRoute path="/addservice">
          <AddService />
        </PrivateRoute>{" "}
        <PrivateRoute path="/dashboard">
          <Dashboard />
        </PrivateRoute>{" "}
        <Route path="/">
          <Home />
        </Route>{" "}
      </Switch>{" "}
    </Router>
  );
}

export default App;
