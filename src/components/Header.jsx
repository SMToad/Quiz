import headerImage from '../assets/quiz-logo.png';

export default function Quiz(){
    return (
        <header>
            <img src={headerImage} alt="A quiz logo with a paper board and pens"/>
            <h1>ReactQuiz</h1>
        </header>
    )
}