export default function Navbar(props) {
    return(
        <nav className={props.darkMode ? "dark" : ""}>
            <div className="mode" onClick={props.change}>
                <div className="light"></div>
            </div>
            <div className="logo--text">Hanouty</div>
        </nav>
    )
}