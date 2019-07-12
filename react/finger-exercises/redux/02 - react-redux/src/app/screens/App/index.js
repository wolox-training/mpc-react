import React, { Component, Fragment } from 'react';
import store from '@redux/store';
import Navbar from '@components/Navbar';
import Footer from '@components/Footer';

import actionsCreators from '../../../redux/book/actions';

import Book from './components/Book';
import Search from './components/Search';
import ShoppingCart from './components/ShoppingCart';
import styles from './styles.scss';

class App extends Component {
  state = {
    books: [],
    bookSelected: []
  };

  componentDidMount() {
    store.subscribe(() => {
      const { books, bookSelected } = store.getState();
      this.setState({ books, bookSelected });
    });

    store.dispatch(actionsCreators.getBooks());
  }

  onSearch = value => {
    store.dispatch(actionsCreators.searchBook(value));
  };

  addToCart = item => {
    store.dispatch(actionsCreators.addToCart(item));
  };

  addItem = itemId => {
    store.dispatch(actionsCreators.addItem(itemId));
  };

  removeItem = itemId => {
    store.dispatch(actionsCreators.removeItem(itemId));
  };

  CONFIGURATION_BUTTON = {
    add: {
      text: 'Add to cart',
      function: this.addToCart
    },
    remove: {
      text: 'Remove',
      function: this.removeItem,
      isDanger: true
    }
  };

  renderBooks = item => {
    const showButton = !this.state.bookSelected.some(el => el.id === item.id);
    const configButton = showButton ? this.CONFIGURATION_BUTTON.add : this.CONFIGURATION_BUTTON.remove;
    return <Book key={item.id} data={item} configButton={configButton} />;
  };

  render() {
    const { books, bookSelected } = this.state;
    return (
      <Fragment>
        <Navbar />
        <div className={styles.container}>
          <Search onSearch={this.onSearch} />
          {books && books.length ? (
            books.map(this.renderBooks)
          ) : (
            <div className={styles.noData}>
              <h2 className={styles.title}>No Data</h2>
            </div>
          )}
        </div>
        {bookSelected && bookSelected.length && (
          <ShoppingCart data={bookSelected} addItem={this.addItem} removeItem={this.removeItem} />
        )}
        <Footer />
      </Fragment>
    );
  }
}

export default App;
