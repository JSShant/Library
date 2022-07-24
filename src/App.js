import Footer from "./components/Footer";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/home";
import Books from "./pages/Books";
import { books } from "./data.js";
import BookInfo from "./pages/BooksInfo.jsx";
import Cart from "./pages/Cart";
import { useEffect, useState } from "react";

function App() {
  const [cart, setCart] = useState([]);
  function addToCart(book) {
    setCart([...cart, { ...book, quantity: 1 }]);
  }
  function changeQuantity(book, quantity) {
    setCart(
      cart.map((item) => {
        return +item.id === +book.id
          ? {
              ...item,
              quantity: quantity,
            }
          : item;
      })
    );
  }
  function removeItem(item) {
    setCart(cart.filter((book) => book.id !== item.id));
  }
  function numberOfItems() {
    let counter = 0;
    cart.forEach((item) => {
      counter += +item.quantity;
    });
    return counter;
  }
  return (
    <Router>
      <div className="App">
        <Nav numberOfItems={numberOfItems()} />
        <Route exact path="/" component={Home} />
        <Route exact path="/books" render={() => <Books books={books} />} />
        <Route
          path="/books/:id"
          render={() => (
            <BookInfo books={books} addToCart={addToCart} cart={cart} />
          )}
        />
        <Route
          path="/cart"
          render={() => (
            <Cart
              books={books}
              cart={cart}
              changeQuantity={changeQuantity}
              removeItem={removeItem}
            />
          )}
        />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
