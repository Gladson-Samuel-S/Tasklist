import { Link, links } from 'react-router-dom'

const Navlinks = ({open}) => {
    return (
        
        <div className = {open ? 'header-info active' : 'header-info'} >
            <ul>
                <li><Link to="./about">About</Link> </li>
                <li><Link to="./">My lists</Link></li>
            </ul>              
        </div>
    )
}

export default Navlinks
