import "./App.css";
import ErrorPage from "./pages/Error-Page/ErrorPage";
import Login from "./pages/Login/Login";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      {/* <Router>
        <Switch>
          <Route path="/login" exact element={<Login />} />
          <Route path="*" element={<ErrorPage />} />
        </Switch>
      </Router> */}
      <Login />
    </>
  );
}

export default App;
