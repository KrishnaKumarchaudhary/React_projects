import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project'
function App() {
  const [loading, setloading] = useState(true);
  const [jobs, setjobs] = useState([]);
  const [values, setvalues] = useState(0);
 
  const fetchJobs= async ()=>{
    const response = await fetch(url);
    const newJobs = await response.json();
    setjobs(newJobs);
    setloading(false);
  }
  useEffect(() => {
    fetchJobs()
  }, [])
  
  if(loading){
   return (
     <section className='section loading'>
       <h1>Loading......</h1>
     </section>
     );
    }
    else{
      const {company,dates,duties, title} = jobs[values];
     return (
     <section className="section">
       <div className='title'>
         <h2>expierence</h2>
         <div className='underline'>
         </div>
       </div>
       <div className='jobs-center'>
         <div className='btn-container'>
         {
           jobs.map((item,index)=>{
             return (
               <button key={index} onClick={()=>setvalues(index)}
              
               className={`job-btn ${index === values && 'active-btn'}`}
               >{item.company}</button>
             );
           })
         }
         </div>
         <article className='job-info'>
           <h3>{title}</h3>
           <h4>{company}</h4>
           <p className='job-date'>{dates}</p>
           {duties.map((duty,index) => {
             return(
               <div key={index} className='job-desc'>
                 <FaAngleDoubleRight className=''job-icon> </FaAngleDoubleRight>
                 <p> {duty}</p>
               </div>
             );
           }

           )}
         </article>

       </div>
       <button type="button" className="btn">
        more info
      </button>
     </section>
     )
    }
}

export default App
