import Container from 'react-bootstrap/Container';

export const ItemListContainer = (props) => {
    return (<Container className='mt-3'><h1>{props.greeting}</h1></Container>);

}