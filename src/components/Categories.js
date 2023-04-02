import React,{useState} from 'react';

const Categories = (props) => {
    const [category, setCategory] = useState([
        {
            key:'All',
            name:'All'
        },
        {
            key:'Economy',
            name:'Economy'
        },
        {
            key:'Premium Economy',
            name:'Premium Economy'
        },
        {
            key:'Business',
            name:'Business'
        },
        ]);
    return (
        <div className='categories'>
            {category.map(el => (
                <div key={el.key} onClick={()=> props.chooseCategory(el.key)}>{el.name}</div>
            ))}
        </div>
    );
};

export default Categories;