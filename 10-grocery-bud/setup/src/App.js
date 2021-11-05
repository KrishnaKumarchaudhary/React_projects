import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'
const getLocalStorage=()=>{
  let list = localStorage.getItem('list');
  if(list)
  {
    list= JSON.parse(list);
    return list;
  }
  return [];
}
function App() {
  const [name, setname] = useState('')
  const [list, setlist] = useState(getLocalStorage())
  const [isEditing, setisEditing] = useState(false)
  const [editID, seteditID] = useState(null)
  const [alert, setalert] = useState({show: true,msg:'Welcome to the Grocery Bud',type:'success'})
  const handleSubmit=(e)=>{
  e.preventDefault();
  if(!name)
  {
    setalert({show:true, msg:'Please enter some correct value!',type:'danger'})
    
  }else if(name && isEditing)
   {
     setlist(list.map((item)=>{
       if(item.id===editID)
       {
         return {...item,title:name}
       }
       return item;
     }))
     setname('');
    setalert({show:true, msg:'Item has Edited successfully!',type:'success'})
  }else{
    // show alert
    const newItem = {id: new Date().getTime().toString(),title: name};
    setlist([...list,newItem]);
    setname('');
    setalert({show:true, msg:'Item has Added successfully!',type:'success'})
  }

  }

  //edit indivdual item
  const editItem =(id)=>{
   const {title} = list.find((e)=>e.id===id);
   seteditID(id)
   setname(title)
   setisEditing(true);
  
  }
 //Delete indivdual item
 const deleteItem = (id)=>{
   console.log(id);
  const newList = list.filter((e)=>e.id!==id)
  setlist(newList);
  setalert({show:true, msg:'item has been removed!',type:'danger'})

 }
  //Remove Alert
  const shawAlert = (show=false, msg='', type='') =>{
    setalert({show,msg, type})
  } 

  //clare List
  const clearList = ()=>{
    console.log('Krishna');
    setlist('');
    setalert({show:true, msg:'All item has removed!',type:'success'})

  }

  // Adding to the localStorage
  useEffect(() => {
    localStorage.setItem('list',JSON.stringify(list))
  }, [list])
  return (<section className='section-center'>
    <form className='grocery-form' onSubmit={handleSubmit}>
    {alert.show && <Alert {...alert} removeAlert={shawAlert}/>}
    <h3>grocery bud</h3>
    <div className='form-control'>
    <input type='text' className='grocery' 
    placeholder='e. g. eggs' value={name}
    onChange={(e)=>setname(e.target.value)}/>
    <button type='submit' className='submit-btn'>
      {isEditing ? 'edit' : 'submit'}
    </button>
    </div>
    </form>
   {list.length>0 && ( <div className='grocery-container'>
      <List item={list} deleteItem={deleteItem} editItem={editItem}/>
      <button type='submit' className='clear-btn' onClick={clearList}>clear Items</button>

    </div>)}
  </section>
  )
}

export default App
