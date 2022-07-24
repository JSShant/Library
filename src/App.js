import Discounted from "./components/Discounted";
import Explore from "./components/Explore";
import Featured from "./components/Featured";
import Footer from "./components/Footer";
import Highlights from "./components/Highlights";
import Landing from "./components/Landing";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/home";
import Books from "./pages/Books";
import { books } from "./data.js";
function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Route exact path="/" component={Home} />
        <Route path="/books" render={() => <Books books={books} />} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
