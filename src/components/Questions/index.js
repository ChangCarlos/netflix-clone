import './Questions.css'

const Questions = (props) => {
    return (
        <div className='question'>
            <p>{props.value}</p>
            <img src='../assets/plus-vector.png' alt='plus vector'></img>
        </div>
    )
}

export default Questions;