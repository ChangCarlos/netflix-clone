import Email from '../Email';
import Questions from '../Questions';
import './Faq.css'

const Faq = () => {
    return (
        <div className='faq-container'>
            <div className='faq-sub-container'>
                <h2>Frequently Asked Questions</h2>
                <div className='faq'>
                <Questions value='What is Netflix?'/>
                <Questions value='How much does Netflix cost?'/>
                <Questions value='Where can I watch?'/>
                <Questions value='How do I cancel?'/>
                <Questions value='What can I watch on Netflix?'/>
                <Questions value='Is Netflix good for kids?'/>
                </div>
                <Email />
            </div>
        </div>
    )
}

export default Faq;