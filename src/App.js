import Header from "./components/Header";
import Main from "./components/Main";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./components/About";
import Footer from "./components/Footer";
import CompletedTasks from "./components/CompletedTasks";
import Signup from "./components/Signup";
import Login from "./components/Login";
import { AuthProvider } from "./contexts/AuthContext";
import PrivateRoute from "./components/PrivateRoute";
import ForgotPassword from "./components/ForgotPassword";

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <div className="app">
          <Switch>
            <Route path="/signup" component={Signup}></Route>
            <Route path="/login" component={Login}></Route>
            <Route path="/forgotpassword" component={ForgotPassword}></Route>
          </Switch>

          <div className="content">
            <PrivateRoute exact path="/" component={Header} />
            <PrivateRoute exact path="/" component={Main} />
            <PrivateRoute exact path="/" component={Footer} />

            <PrivateRoute path="/completedtasks" component={Header} />
            <PrivateRoute path="/completedtasks" component={CompletedTasks} />
            <PrivateRoute path="/completedtasks" component={Footer} />

            <PrivateRoute path="/About" component={Header} />
            <PrivateRoute path="/About" component={About} />
            <PrivateRoute path="/About" component={Footer} />
          </div>
        </div>
      </AuthProvider>
    </Router>
  );
};

export default App;
