import './Navbar.scss'

function Navbar() {
  return (
    <div className='navbar'>
      <div className="logo">
        <img src="logo.svg" alt="" />
        <span>Tetra Admin</span>
      </div>
      <div className="icons">
        <img src="/search.svg" alt="" />
        <img src="/app.svg" alt="" />
        <img src="/expand.svg" alt="" />
        <div className="notification">
          <img src="notifications.svg" alt="" />
          <span>1</span>
        </div>
        <div className="userDiv">
          <img src="https://tetracrystals.com/wp-content/uploads/2022/08/ali-raza.png" alt="" />
          <span>RAZA</span>
        </div>
        <img src="/setting.svg" alt="" />
      </div>
    </div>
  )
}

export default Navbar