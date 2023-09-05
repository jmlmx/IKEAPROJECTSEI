import { Link } from "react-router-dom";
import styles from './NavBar.module.scss'

export default function NavBar({ Entertainment, Furniture, HomeDecor, Appliance, Kitchen , Bedroom, Bathroom }) {

  return (
    <div className={styles.NavBar}>
        <Link to='/HomeScreen' className='entBtn'>Entertainment</Link>
        <Link to='/HomeScreen' className='furnBtn'>Furniture</Link>
        <Link to='/HomeScreen' className='hdBtn'>Home Decor</Link>
        <Link to='/HomeScreen' className='appBtn'>Appliance</Link>
        <Link to='/HomeScreen' className='kitBtn'>Kitchen</Link>
        <Link to='/HomeScreen' className='bedBtn'>Bedroom</Link>
        <Link to='/HomeScreen' className='batBtn'>Bathroom</Link>
      
    </div>
  )
}
