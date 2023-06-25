import dnclogo from '../../assets/logo-dnc.png';
import "./index.scss";

const Header = () => {
  return (
    //block 
    <div className='header'>
      <img className="header_img," src={dnclogo} alt='dnc logo'></img>
    </div>
  )
}

export default Header