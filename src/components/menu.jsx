const Menu = ({images}) =>{
    return(
        <div className="menu-content">
            {images.map(i => <img key={i} src={i} alt="" className="menu-image" />)}
        </div>
    )
}

export default Menu