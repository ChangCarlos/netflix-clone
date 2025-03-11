import './Button.css'

export const SignInBtn = () => {
    return (
        <button type='button' className='signin-btn'>
            Sign In
        </button>
    )
}

export const GetStartedBtn = () => {
    return (
        <button type='button' className='getstarted-btn'>
            Get Started
            <img src='../assets/arrow-vector.png' alt='arrow vector'></img>
        </button>
    )
}