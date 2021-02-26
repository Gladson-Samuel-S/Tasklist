import Navlinks from './Navlinks'
import { useState } from 'react'

const Header = () => {

    const [open,setOpen] = useState(false)

    const changeOpen = () => {
        setOpen(!open)
    }
    return (

        <header>
            
            <div className="nav-container" >
                <div className="burger" open = {open} onClick = {changeOpen} >
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>

                <div className="logo">
                    <h1>Todolist</h1>
                </div>
            </div>

            <Navlinks open={open}/>

            <div className="btn">
                <button>Login</button>
            </div>
            
        </header>
    )
}

export default Header
