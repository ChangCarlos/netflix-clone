import { SignInBtn } from '../Button';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <img src='../assets/Logo.png' alt='logo'></img>
            <div className='sub-section-header'>
                <div className='lang-dropdown'>
                    <img src='../assets/globe-vector.png' alt='globe'></img>
                    <p>English</p>
                    <img src='../assets/bi_caret-down-fill.png' alt='arrow down'></img>
                </div>
                <SignInBtn />
            </div>
        </div>
    )
}

export default Header;