import React from 'react';
import spinner from '../images/spinner2.svg'
import "./App.css";


class Loader extends React.Component {
  render() {
    return (
        <div className="loader">
         <img src={spinner} alt="loading" />
        </div>
    )
  }
}
export default Loader