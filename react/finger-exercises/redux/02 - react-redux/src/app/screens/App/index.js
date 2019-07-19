import React, { Component, Fragment } from 'react';
import { arrayOf, func } from 'prop-types';
import { bookSelectedPropType, booksPropTypes } from '@constants/propTypes';
import Navbar from '@components/Navbar';
import Footer from '@components/Footer';
import { connect } from 'react-redux';
import actionsCreators from '@redux/book/actions';

import Book from './components/Book';
import Search from './components/Search';
import ShoppingCart from './components/ShoppingCart';
import styles from './styles.scss';

class App extends Component {
  componentDidMount() {
    this.props.getBooks();
  }

  CONFIGURATION_BUTTON = {
    add: {
      text: 'Add to cart',
      function: this.props.addToCart
    },
    remove: {
      text: 'Remove',
      function: this.props.removeItem,
      isDanger: true
    }
  };

  renderBooks = item => {
    const showButton = !this.props.bookSelected.some(el => el.id === item.id);
    const configButton = showButton ? this.CONFIGURATION_BUTTON.add : this.CONFIGURATION_BUTTON.remove;
    return <Book key={item.id} data={item} configButton={configButton} />;
  };

  render() {
    const { books, bookSelected, onSearch } = this.props;
    return (
      <Fragment>
        <Navbar />
        <div className={styles.container}>
          <Search onSearch={onSearch} />
          {books && books.length ? (
            books.map(this.renderBooks)
          ) : (
            <div className={styles.noData}>
              <h2 className={styles.title}>No Data</h2>
            </div>
          )}
        </div>
        {bookSelected && bookSelected.length && <ShoppingCart />}
        <Footer />
      </Fragment>
    );
  }
}

App.propTypes = {
  books: arrayOf(booksPropTypes).isRequired,
  bookSelected: arrayOf(bookSelectedPropType).isRequired,
  getBooks: func.isRequired,
  onSearch: func.isRequired,
  addToCart: func.isRequired,
  removeItem: func.isRequired
};

const mapStateToProps = state => ({
  books: state.books,
  bookSelected: state.bookSelected
});

const mapDispatchToProps = dispatch => ({
  getBooks: () => dispatch(actionsCreators.getBooks()),
  onSearch: value => dispatch(actionsCreators.searchBook(value)),
  addToCart: item => dispatch(actionsCreators.addToCart(item)),
  addItem: itemId => dispatch(actionsCreators.addItem(itemId)),
  removeItem: itemId => dispatch(actionsCreators.removeItem(itemId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
