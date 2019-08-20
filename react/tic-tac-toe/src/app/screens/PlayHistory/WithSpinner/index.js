import React from 'react';
import Spinner from 'react-spinkit';

const withSpinner = showLoad => Component =>
  function WrappedComponent(props) {
    return showLoad(props) ? <Spinner name="three-bounce" color="#00ADEE" /> : <Component {...props} />;
  };

export default withSpinner;
