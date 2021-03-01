const Button = ({color , text , onClick}) => {
 
    return (
        <button onClick={onClick} className='btnadd' style={{ backgroundColor:color }}>{text}</button>
    )
}

export default Button
