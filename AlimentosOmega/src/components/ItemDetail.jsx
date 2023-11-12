export const ItemDetail = ({ item }) => {


    return <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="text-center">
            <h1>{item.title}</h1>
            <img src={item.pictureUrl} style={{ width: '20rem' }} alt={item.title} />
            <h4 >{item.description}</h4>
            <h3>Categoria: {item.category}</h3>
        </div>
    </div>
}