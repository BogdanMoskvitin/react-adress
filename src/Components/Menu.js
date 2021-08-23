import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Home from '../Pages/Home.js';
import Search from '../Pages/Search.js';

import home from '../img/home.svg';
import searchBlack from '../img/search-black.svg';
import table from '../img/table.svg';
import calendar from '../img/calendar.svg';
import map from '../img/map.svg';
import vidget from '../img/vidget.svg';
import setting from '../img/setting.svg';
import triangle from '../img/triangle.svg';
import user from '../img/user.svg';
import finance from '../img/finance.svg';
import exit from '../img/exit.svg';

import './Menu.css';



export default class Menu extends Component {

    constructor(props) {
        super(props);
        this.state = {isToggleOn: false};
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    } 

    render() {
        return (
            <div>
                <Router>
                    <div className="menu">
                        <p className="menu__title">Меню</p>
                        <div className="menu__cell">
                            <img src={home} alt="home" className="menu__img"/>
                            <Link className="menu__a" to='/'>Главная</Link>
                        </div>
                        <div className="menu__cell">
                            <img src={searchBlack} alt="search" className="menu__img"/>
                            <Link className="menu__a" to='/search'>Поиск адресов</Link>
                        </div>
                        <div className="menu__cell">
                            <img src={table} alt="tables" className="menu__img"/>
                            <Link className="menu__a" to='/'>Таблицы</Link>
                        </div>
                        <div className="menu__cell">
                            <img src={calendar} alt="calendar" className="menu__img"/>
                            <Link className="menu__a" to='/'>Календарь</Link>
                        </div>
                        <div className="menu__cell">
                            <img src={map} alt="map" className="menu__img"/>
                            <Link className="menu__a" to='/'>Карты</Link>
                        </div>
                        <div className="menu__cell">
                            <img src={vidget} alt="vidget" className="menu__img"/>
                            <Link className="menu__a" to='/'>Виджеты</Link>
                        </div>
                        <div className="menu__cell" onClick={ this.handleClick }>
                            <img src={setting} alt="setting" className="menu__img"/>
                            <Link className="menu__a" to='/'>Настройки</Link>
                            <img src={triangle} alt="triangle" className={this.state.isToggleOn ? 'triangle-active' : 'triangle'}/>
                        </div>
                        <div className={this.state.isToggleOn ? 'menu__cell_min' : 'close'}>
                            <img src={user} alt="user" className="menu__img"/>
                            <Link className="menu__a" to='/'>Настройки <br/>профиля</Link>
                        </div>
                        <div className={this.state.isToggleOn ? 'menu__cell_min' : 'close'}>
                            <img src={finance} alt="finance" className="menu__img"/>
                            <Link className="menu__a" to='/'>Управление <br/>финансами</Link>
                        </div>
                        <div className="menu__cell">
                            <img src={exit} alt="exit" className="menu__img"/>
                            <Link className="menu__a" to='/'>Выход</Link>
                        </div>
                    </div>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/search" component={Search}/>
                    </Switch>
                </Router>
            </div>
        )
    }
} 