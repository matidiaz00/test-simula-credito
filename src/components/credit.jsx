import React from 'react';
import PropTypes from 'prop-types';

const Credit = ({ data }) => (
  <div className="alert alert-light p-3 p-md-4 rounded-0 m-0">
    <h4 className="alert-heading">Datos enviados del formulario</h4>
    <pre className="mb-0">{JSON.stringify(data, null, 2)}</pre>
  </div>
);

Credit.propTypes = {
  data: PropTypes.object
};

export default Credit;