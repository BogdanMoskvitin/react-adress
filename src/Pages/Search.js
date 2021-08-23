import React, { Component } from 'react';
import './Search.css';
import searchWhite from '../img/search-white.svg';

const token = "3d5f46e6e12b88d621917bbc7a956c7763db6163";
const url = "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address";

export default class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    gettingAdress = async (e) => {
        e.preventDefault();
        const value = e.target.elements.value.value;

        let options = {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": "Token " + token
            },
            body: JSON.stringify({query: value})
        }

        
        await fetch(url, options)
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    data: result.suggestions
                })
            })
        .then(() => console.log(this.state.data))
    }

    render() {
        const list = (
            <ul>
                {this.state.data.map((post) =>
                    <li className="item" key={post.value}>
                        <div className="line"></div>
                        {post.value}
                    </li>
                )}
            </ul>
        )
        return (
            <div>
                <div className="search">
                    <p className="title">Поиск адресов</p>
                    <p className="subtitle">Введите интересующий вас адрес</p>
                    
                    <form onSubmit={this.gettingAdress}>
                        <input type="text" name="value" minLength="3" placeholder="Введите интересующий вас адрес"/>
                        <button>
                            <img src={searchWhite} alt="search"/>
                            <span>Поиск</span>
                        </button>
                    </form>
                    
                    <div className="addresses__box" >
                        <p className="addresses__title">Адреса</p>
                        {list}
                    </div>
                </div>
            </div>
        )
        
    }
}