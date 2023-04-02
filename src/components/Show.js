import React from 'react';

const Show = (props) => {
    return (
        <div className='full-item'>
            <div>
                <img src={`/img/${props.item.fullItem.img}`} alt="items" onClick={() => props.onShowItem(props.item.fullItem)}/>
                <h2>{props.item.fullItem.title}</h2>
                <p>{props.item.fullItem.desc}</p>
                <p>{props.item.fullItem.category}</p>
                <b>{props.item.fullItem.price}</b>
                <div className='add-to-card' onClick={() => props.onAdd(props.item.fullItem)}>+</div>
            </div>
        </div>
    );
};

export default Show;