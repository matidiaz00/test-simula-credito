import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ title, handlePage }) => (
    <header className="d-flex justify-content-between align-items-center mb-4">
        <button className="bg-transparent border-0 outline-0" onClick={() => handlePage(0)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M0 0h24v24H0z" fill="none"/>
                <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" fill="#ffffff"/>
            </svg>
        </button>
        <h1 className="h2 font-weight-bold m-0">
            {title}
        </h1>
        <span className="px-2">&nbsp;</span>
    </header>
);

Header.propTypes = {
    title: PropTypes.string,
    handlePage: PropTypes.func
};

export default Header;