import React, { useState } from 'react';
import data from './data';
function App() {
  const [count, setcount] = useState(0);
  const [text, settext] = useState([]);
  
  const handleSubmit = (e) =>{
    e.preventDefault();
    let amount = parseInt(count);
  if (count<=0){
    amount = 1;
  }
  if(count>8)
  {
    amount = 8;
  }

    settext(data.slice(0,amount));

  }
  return (
  <section className='section-center'>
    <h3>Tried of boring lorem ipsum?</h3>
    <form className='lorem-form' onSubmit={handleSubmit}>
      <label htmlFor='amount'>Pagagraphs:</label>
      <input type='number' name='amount' id='amount' value={count}
      onChange={(e)=>setcount(e.target.value)}/>
      <button type='submit' className='btn'>generate</button>
    </form>
    <article className='lorem-text'>{
    text.map((item,index)=>{
      return <>
      <p key={index}>{text}</p>
      </>

    })} </article>
  </section>
    )
}

export default App;
