import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <Route path="/" component={Home} exact></Route>
      <Route path="/about" component={About}></Route>
      <Route path="/projects" component={Projects}></Route>
      <Route path="/contact" component={Contact}></Route>
    </Router>
  );
}

export default App;
