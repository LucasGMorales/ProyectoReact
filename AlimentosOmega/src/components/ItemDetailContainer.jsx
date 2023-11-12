import { useParams } from 'react-router-dom';

import { useEffect, useState } from 'react';

import Container from 'react-bootstrap/Container';

import {ItemDetail} from "../components/ItemDetail";

import { products } from '../../../json/productos';

import { Item } from './Item';





export const ItemDetailContainer = () => {
    const [item, setItem] = useState(null);

    const { id } = useParams();


    useEffect(() => {
        console.log(id);
        const mypromise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(products);
            }, 2000);
        });

        mypromise.then((response) => {
            const findById = response.find((item) => item.id === Number(id)
                );
                setItem(findById);
            
        });
    }, [id]);

    return (<Container className='mt-3'> {item ? <ItemDetail item={item} /> : <>Loading...</>}</Container>);

}