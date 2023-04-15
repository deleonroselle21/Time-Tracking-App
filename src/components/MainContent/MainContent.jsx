import React from 'react'
import CardComponent from '../Card/CardComponent'
import '../MainContent/mainContent.css'
import data from '../../data.json'
import ProfPic from '../../images/image-jeremy.png';
import ExerciseIcon from '../../images/icon-exercise.svg'

const MainContent = () => {

    const [time,setTime]=React.useState("daily");
    
     const picdata={
        Exercise:ExerciseIcon
     }

  
    function handleChange(event){
        if(event.target.name==="weekly")
        setTime("weekly");
        if(event.target.name==="daily")
        setTime("daily");
        if(event.target.name==="monthly")
        setTime("monthly");
    console.log(time)
    }

  return (
    <div className='mainContent__container'>
        <div className='name__container'>
            <div className="profile__info">
                <div className="prof-pic">
                <img src={ProfPic}></img>
                </div>
                <div>
                <p>Report for</p>
                <h1 className='firstName'>Jeremy Robson</h1>
                </div>
            </div>
            <div className="timeframe__navigation">
                <button onClick={handleChange} name="daily" >Daily</button>
                <button onClick={handleChange} name="weekly" >Weekly</button>
                <button onClick={handleChange} name="monthly"> Monthly</button>
            </div>
        </div>
        
      <div className="right__container">
            {
                data.map(item=><CardComponent data={item} cardName={item.title} timeframe={time} pic={picdata}  /> )
                
            }
        </div>
       
           
            
           
        
    </div>
  )
}

export default MainContent;