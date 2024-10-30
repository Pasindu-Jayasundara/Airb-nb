import logo from '../../public/assets/airbnb-logo.png'
import '../../public/css/Navbar.css'

export default function Navbar() {
  return (
    <nav>
        <img src={logo} alt="" className='nav-logo'/>
    </nav>
  )
}