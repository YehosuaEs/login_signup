import {Fragment} from "react";
import {  
  BrowserRouter as Router,
  Routes,
  Route} from "react-router-dom"
import Login from "./components/login";
import Signup from "./components/signup";

function App() {
  
  return (
    <Fragment>
      <Router>
        <Routes>
          <Route path = "/" element={<Login/>}></Route>
          <Route path="/signup" element={<Signup/>}> </Route>
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
