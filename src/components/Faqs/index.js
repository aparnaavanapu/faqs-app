import {Component} from 'react'
import './index.css'
import FaqItem from '../FaqItem'

class Faqs extends Component{
    
    state={activeId:[]
    }
    showAnswer = (id) => {
        this.setState((prevState) => ({
          activeId: [...prevState.activeId,id], 
        }));
      };
      hideAnswer=(id)=>{
        this.setState(prevState=>(
            {
                activeId:prevState.activeId.filter(eachItem=>eachItem!==id)
            }
        ))
      }

    render(){
        const {faqsList}=this.props
        const {activeId}=this.state
        
        return(
            <div className="bg-container">
                <div className="card-container">
                    <h1 className="heading">FAQs</h1>
                    <ul>
                        {faqsList.map(eachItem=>(
                            <FaqItem key={eachItem.id} details={eachItem} hideAnswer={this.hideAnswer} showAnswer={this.showAnswer}  isActive={activeId.includes(eachItem.id)}/>
                        ))}
                    </ul>

                </div>
            </div>
        )
    }

}

export default Faqs