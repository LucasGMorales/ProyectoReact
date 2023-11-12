import { useParams } from 'react-router-dom';

import { useEffect, useState } from 'react';

import Container from 'react-bootstrap/Container';

import { products } from '../../../json/productos';

import { ItemList } from './itemList';

export const ItemListContainer = (props) => {
    const [items, setItems] = useState([]);

    const { id } = useParams();


    useEffect(() => {
        console.log(id);
        const mypromise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(products);
            }, 2000);
        });

        mypromise.then((response) => {
            if (!id) {
                setItems(response);
            } else {
                const filterByCategory = response.filter(
                    (item) => item.category === id
                );
                setItems(filterByCategory);
            }
        });
    }, [id]);

    console.log(items);

    return (<Container className='mt-3'>
        <h1>{props.greeting}</h1>
        <ItemList items={items} />
    </Container>);

}