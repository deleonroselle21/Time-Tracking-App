import React from 'react'
import './card-component.css'
import data from '../../data.json'
import ExerciseIcon from '../../images/icon-exercise.svg'
import Ellipsis from '../../images/icon-ellipsis.svg'


const CardComponent = (props) => {
   
   let current=props.data["timeframes"][props.timeframe]["current"];
   let previous=props.data["timeframes"][props.timeframe]["previous"];
   console.log(current);
   let pic;

   const title=props.data.title;
  /*
   const tf=props.timeframe;
   console.log(tf);
   if(tf==="weekly"){
    current=props.data.timeframes.weekly.current;
    previous=props.data.timeframes.weekly.previous;
   }
   if(tf==="daily"){
    current=props.data.timeframes.daily.current;
    previous=props.data.timeframes.daily.previous;
   }
   if(tf==="monthly"){
    current=props.data.timeframes.monthly.current;
    previous=props.data.timeframes.monthly.previous;
   }
*/
   
   //const sample=props.data.timeframes.tf.current;
  //console.log(sample);
   //const weeklyCurrent=props.data.timeframes.props.timeframe.current;

    let cardClass;
    switch(title) {
        case "Work":
          cardClass="work__card"
      
         
          
          break;
        case "Play":
          cardClass="play__card"
          break;
        case "Study":
            cardClass="study__card"
            break;
        case "Exercise":
            cardClass="exercise__card"
            break;
        case "Social":
             cardClass="social__card"
            break;
        case "Self Care":
            cardClass="selfcare__card"
                break;
        default:
          cardClass="work__card"
      }

     
  return (
<div className={`outside__container ${cardClass}`}>
    
    <div className="card__info"  >
      <div className='title__container'>
        <h1 className='card-title' >{title}</h1>
        <div className='img__container'>
        <img className="ellipsis" src={Ellipsis} alt="" />
        </div>
      </div>
        <div className='time-info'>
        <p className='card-currentTime'>{current}{current===0?"":current>1?"hrs":"hr"}</p>
        <p className='card-prevTime'>Last Week - {previous}{previous===0?"":previous>1?"hrs":"hr"}</p>
        </div>

    </div>
    </div>

  )
}

export default CardComponent