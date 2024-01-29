export default function Product(props) {
    return(
        <div className={props.dark ? "darkProduct" : ""}>
            <div className="product">
                {/* <div className="id">{props.id}</div> */}
                <div className="name">{props.name}</div>
                <div className="category">{props.category}</div>
                <div className="price">{props.price} millim</div>
                <button className="del" onClick={(event) => props.delete(event, props.id)}>Delete</button>
                <button className="add" onClick={(e) => props.add( props.price)}>Add</button>
            </div>
        </div>
    )
}