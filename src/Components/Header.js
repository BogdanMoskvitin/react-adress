import React, { Component } from 'react';
import logo from '../img/logo.svg';
import userRound from '../img/user-round.svg';
import './Header.css';

export default class Header extends Component {
    render() {
        return (
            <div>
                <div className="header">
                    <div className="container">
                        <div className="logo__box">
                            <img className="logo__img" src={logo} alt="logo"/>
                            <p className="logo__title">Wrench CRM</p>
                        </div>
                        <div className="user__box">
                            <img className="user__img" src={userRound} alt="user"/>
                            <p className="user__title">Имя Фамилия</p>
                        </div>
                    </div>
                </div> 
            </div>
        )
    }
}