import './index.css'


const FaqItem=(props)=>{
    const {details,showAnswer,isActive,hideAnswer}=props
    const {id,questionText,answerText}=details

    const handleShowAnswer=()=>{
        showAnswer(id);
    }
    const handleHideAnswer=()=>{
        hideAnswer(id)

    }


    return(
        <li className="list-item-container">
            <div className="question-container">
                <p className="question-text">{questionText}</p>
                {isActive?(<img src="https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png" alt="minus-icon" className="icon" onClick={handleHideAnswer}/>):
                (<img src="https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png" alt="plus-icon" className="icon" onClick={handleShowAnswer}/>)}
            </div>
            {isActive&&<div><hr/>
                <p className="answer-text">{answerText}</p></div>}
        </li>
    )

}

export default FaqItem
