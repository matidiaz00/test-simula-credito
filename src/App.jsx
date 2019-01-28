import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';
import Calculator from './components/calculator';
import Detail from './components/detail';
import Credit from './components/credit';
import Header from './components/header';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      page: 0,
      data: {}
    };
    this.handleForm = this.handleForm.bind(this);
    this.handlePage = this.handlePage.bind(this);
  };

  handleForm = data => this.setState({ data });

  handlePage = page => this.setState({ page });

  render() {
    const { page, data } = this.state;
    return (
      <section className="bg-secondary text-white p-3 p-sm-4 m-0 m-md-4 wrapper">
        {
          (page === 0) ?
            <Calculator handlePage={this.handlePage} handleForm={this.handleForm}/>
          : (page === 1) ?
            <div>
              <Header handlePage={this.handlePage} title="Crédito"/>
              <Credit data={ data }/>
            </div>
          :
            <div>
              <Header handlePage={this.handlePage} title="Detalle de cuotas"/>
              <Detail/>
            </div>
        }
      </section>
    )
  }
};

App.propTypes = {
  page: PropTypes.number,
  data: PropTypes.object,
  handleForm: PropTypes.func,
  handlePage: PropTypes.func
};

export default hot(module)(App);