import React from 'react';

const Item = (props) => {


    return (
        <div className='item'>
            <img src={"./img/" + props.item.img} alt="items" onClick={()=> props.onShowItem(props.item)}/>
            <h2>{props.item.title}</h2>
            <p>{props.item.desc}</p>
            <p>{props.item.category}</p>
            <b>{props.item.price}</b>
            <div className='add-to-card' onClick={()=> props.onAdd(props.item)}>+</div>
        </div>
    )
};

export default Item;