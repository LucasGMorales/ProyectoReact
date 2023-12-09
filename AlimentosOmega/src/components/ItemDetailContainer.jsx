import { useParams } from 'react-router-dom';

import { useEffect, useState } from 'react';

import Container from 'react-bootstrap/Container';

import ItemDetail from "../components/ItemDetail";

import { getFirestore, getDoc, doc } from "firebase/firestore";





export const ItemDetailContainer = () => {
    const [item, setItem] = useState(null);

    const { id } = useParams();

    useEffect(() => {
        const db = getFirestore();
        const refDoc = doc(db, "items", id);
    
        getDoc(refDoc).then((snapshot) => {
            setItem({ id: snapshot.id, ...snapshot.data() });
        });
    }, [id]);
    
    return (<Container className='mt-3'> {item ? <ItemDetail item={item} /> : <>Loading...</>}</Container>);

}


export default ItemDetailContainer;