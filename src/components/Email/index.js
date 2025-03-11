import { GetStartedBtn } from '../Button'
import './Email.css'

const Email = () => {
    return (
        <div className='email-container'>
            <p className='email-title'>Ready to watch? Enter your email to create or restart your membership.</p>
            <div className='email-input-container'>
                <input type='email' required className='input-email' placeholder='Email address'></input>
                <GetStartedBtn />
            </div>
        </div>
    )
}

export default Email;