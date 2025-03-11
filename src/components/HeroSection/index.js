
import Email from '../Email';
import './HeroSection.css'

const HeroSection = () => {
    return(
        <div className='hero-container'>
            <div className='sub-container'>
                <h1>Unlimited movies, TV shows and more.</h1>
                <h3>Watch anywhere. Cancel anytime.</h3>
                <Email />
            </div>
        </div>
    )
}

export default HeroSection;