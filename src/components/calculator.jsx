import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Slider from 'rc-slider';

class Calculator extends Component {

    constructor(props) {
        super(props);
        this.state = {
            montoValue: 19500,
            plazoValue: 16,
            cuotaxMesValue: 19500 / 16
        };
        this.handleMonto = this.handleMonto.bind(this);
        this.handlePlazo = this.handlePlazo.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };
    
    handleMonto = montoValue => {
        this.setState({ 
            montoValue,
            cuotaxMesValue: montoValue / this.state.plazoValue
        });
    };
    
    handlePlazo = plazoValue => {
        this.setState({ 
            plazoValue,
            cuotaxMesValue: this.state.montoValue / plazoValue
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.handleForm(this.state);
        this.props.handlePage(1);
    };
    
    setCurrency = (number, toFixed) => {
        if (toFixed > 0) {
            return (number).toFixed(toFixed).replace(/\d(?=(\d{3})+\.)/g, '$&,')
        } else {
            const n = String(number), p = n.indexOf('.');
            return n.replace(
                /\d(?=(?:\d{3})+(?:\.|$))/g,
                (m, i) => p < 0 || i < p ? `${m}.` : m
            )
        }
    };

    render() {
        const { montoValue, plazoValue, cuotaxMesValue } = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <h1 className="m-0 text-center h2 font-weight-bold">Simulá tu crédito</h1>
                <div className="pt-4 pb-4 px-2 overflow-hidden">
                    <div className="d-block d-sm-flex justify-content-between align-items-center">
                        <h2 className="m-0 h4 text-uppercase font-weight-light text-center text-sm-left">Monto Total</h2>
                        <span className="data-box d-block border border-white h3 px-3 py-1 mb-0 my-2 my-sm-0 font-weight-bold money">{this.setCurrency(montoValue, 0)}</span>
                    </div>
                    <div className="pt-2 px-3 pb-2">
                        <Slider
                            min={5000}
                            max={50000}
                            defaultValue={montoValue}
                            marks={{ 5000: '$ 5.000', 50000: '$ 50.000' }}
                            onChange={this.handleMonto}
                        />
                    </div>
                </div>
                <div className="pb-4 px-2 overflow-hidden">
                    <div className="d-block d-sm-flex justify-content-between align-items-center">
                        <h2 className="m-0 h4 text-uppercase font-weight-light text-center text-sm-left">Plazo</h2>
                        <span className="data-box d-block border border-white h3 px-3 py-1 mb-0 my-2 my-sm-0 font-weight-bold money">{plazoValue}</span>
                    </div>
                    <div className="pt-2 px-3 pb-2">
                        <Slider
                            min={3}
                            max={24}
                            defaultValue={plazoValue}
                            marks={{ 3: 3, 24: 24 }}
                            onChange={this.handlePlazo}
                        />
                    </div>
                </div>
                <div className="bg-info text-center d-block d-md-flex justify-content-between align-items-center font-weight-bold p-3 py-md-1">
                    <h3 className="m-0 h5 text-md-left text-uppercase font-weight-bold">Cuota fija por mes</h3>
                    <span className="m-0 pt-2 pt-md-0 h1 text-md-right font-weight-bold money">{this.setCurrency(cuotaxMesValue, 2)}</span>
                </div>
                <div className="d-block d-sm-flex justify-content-between align-items-center font-weight-bold">
                    <button type="submit" className="btn btn-success btn-lg text-uppercase w-100 my-2 mr-sm-2 mb-0 font-weight-bold">Obtené crédito</button>
                    <button onClick={() => this.props.handlePage(2)} className="btn btn-primary btn-sm text-uppercase d-block flex-shrink-1 mx-auto m-sm-0 px-2 font-weight-bold">Ver detalle de cuotas</button>
                </div>
            </form>
        )
    }
}

Calculator.propTypes = {
    montoValue: PropTypes.number,
    plazoValue: PropTypes.number,
    cuotaxMesValue: PropTypes.number,
    handleMonto: PropTypes.func,
    handlePlazo: PropTypes.func,
    handleSubmit: PropTypes.func
};

export default Calculator;