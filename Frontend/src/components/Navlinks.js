const Navlinks = ({open}) => {
    return (
        
        <div className = {open ? 'header-info active' : 'header-info'} >
            <ul>
                <li><a href="#">Completed</a> </li>
                <li><a href="#">My lists</a></li>
            </ul>              
        </div>
    )
}

export default Navlinks
