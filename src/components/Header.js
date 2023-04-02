import React, {useState} from 'react';
import { FaShoppingCart } from "react-icons/fa";
import Order from "./Order";

const showOrders = (props) => {
    let summa = 0;
    props.orders.forEach(el => summa += Number.parseFloat(el.price))
    return(
        <div>
            {props.orders.map(el => (
                <Order onDelete={props.onDelete} key ={el.id} item = {el}/>
            ))}
            <p className='summa'>Сумма: {new Intl.NumberFormat().format(summa)}$</p>
        </div>
    )
}

const showNothing = () => {
    return(
        <div className='empty'>
            <h2>Ничего нет</h2>
        </div>
    )
}

const Header = (props) => {
    let [card,setCard] = useState(false)
    return (
        <header>
            <div>
                <span className='logo'>AirLine Company</span>
                <ul className='nav'>
                    <li>Про нас</li>
                    <li>Контакты</li>
                    <li>Кабинет</li>
                </ul>
                <FaShoppingCart onClick={() => setCard(card = !card)} className = {`icon ${card && 'active'}`}/>

                {card && (
                    <div className='shop-card'>
                        {props.orders.length > 0 ?
                        showOrders(props) : showNothing()}
                    </div>
                )}
            </div>
            <div className='presentation'></div>
        </header>
    );
};

export default Header;