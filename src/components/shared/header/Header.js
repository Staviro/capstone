const Header = function(props) {
    return (
        <header className={props.style}>
            { props.children }
        </header>
    )
}

export default Header;