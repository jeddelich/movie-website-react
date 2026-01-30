import "./Menu.css"

function Menu({setMenuStatus, setAboutModal, setContactModal}) {
  
function menuAbout() {
    setMenuStatus(false)
    setAboutModal(true)
}

function menuContact() {
    setMenuStatus(false)
    setContactModal(true)
}
    
return (
    <div className="menu">
        <button className="close-menu__icon--wrapper" onClick={() => setMenuStatus(false)}>
            <i className="fa-solid fa-xmark close-menu__icon"></i>
        </button>
        <ul className="menu__list">
            <li className="menu__list--links" onClick={() => menuAbout()}>About</li>
            <li className="menu__list--links" onClick={() => menuContact()}> Contact</li>
        </ul>
    </div>
  )
}

export default Menu