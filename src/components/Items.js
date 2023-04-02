import React from 'react';
import Item from "./Item";

const Items = (props) => {
    console.log(props)
    return (
        <main>
            {props?.items.map(el => (
                <Item onShowItem={props.onShowItem} key={el.id} item={el} onAdd={props.onAdd} />
            ))}
        </main>
    );
};

export default Items;