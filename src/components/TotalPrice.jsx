export default function TotalPrice(props) {
    return(
        <div className="container">
            <label className={props.dark ? "darkText" : ""}>Total Price : </label>
            <div className={props.dark ? "darkText" : ""}>{props.totalPrice}</div>
            <div className="reset" onClick={props.click}>x</div>
        </div>
    )
}