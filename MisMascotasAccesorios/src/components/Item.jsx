export default function Item({ producto }) {
    return (
        <div>
            <img src={producto.img} alt={producto.alt} />
            <h2>{producto.title}</h2>
            <p>{producto.description}</p>
            <h3>$ {producto.price}</h3>
        </div>
    )
}
