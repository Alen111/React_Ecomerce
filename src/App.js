import React, {useEffect, useState} from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Categories from "./components/Categories";
import Show from "./components/Show";

const App = () => {

    const [items, setItems] = useState([
        {
            id: 1,
            title: 'Moscow',
            img: 'moscow.jpeg',
            desc: 'Russia-Moscow',
            category: 'Economy',
            price: '100$',
        },
        {
            id: 2,
            title: 'New York',
            img: 'newyork.jpeg',
            desc: 'USA-New York',
            category: 'Premium Economy',
            price: '150$',
        },
        {
            id: 3,
            title: 'Egypt',
            img: 'egypt.jpeg',
            desc: 'Egypt-Cairo',
            category: 'Business',
            price: '300$',
        },
    ])
    const [orders, setOrders] = useState([]);
    const [currentItems, setCurrentItems] = useState([]);
    const [show,setShow] = useState(false);
    const [fullItem,setFullItem] = useState({
        fullItem: {}
    });

    function deleteOrder(id){
        setOrders(orders.filter((el) => el.id !== id));
    }

    function addToOrder(item) {
        let isInArray = false
        orders.forEach(el => {
            if(el.id === item.id) {
                isInArray = true
            }
        })
        if(!isInArray) {
            setOrders([...orders, item])
        }
    }

    function chooseCategory(category){
        if(category === 'All'){
            setCurrentItems(items)
        }else{
            setCurrentItems(items.filter(el=>el.category === category))
        }
    }

    function onShowItem(item){
        setFullItem({fullItem: item})
        setShow(!show)
    }


    useEffect(() => {
        setCurrentItems([...items]);
    }, []);

    return (
        <div className="wrapper">
            <Header orders={orders} onDelete={deleteOrder}/>
            <Categories chooseCategory ={chooseCategory}/>
            <Items onShowItem={onShowItem} onAdd={addToOrder} items={currentItems}/>

            {show && <Show item={fullItem} onAdd={addToOrder} onShowItem={onShowItem} />}
            <Footer/>
        </div>
    );
}


export default App;
/*
* git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/Alen111/ecommerce.git
git push -u origin main
*
* */