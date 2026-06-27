import React from 'react'
 import { useState } from 'react'
const Form = () => {
const [title, setTitle] = useState('')
const [details, setdetails] = useState('')
const [task, settask] = useState([])
     const submitHander=(e)=>{
        e.preventDefault();
        const copytask=[...task]
       copytask.push({title,details})
       settask(copytask)
       setTitle('')
       setdetails('')

 }
 const deleteNotes=(idx)=>{
     const copyTask=[...task];
     copyTask.splice(idx,1)
     settask(copyTask)
 }
  return (
    <div className='min-h-screen lg:flex bg-black text-white'>

          <form  onSubmit={(e)=>{
            submitHander(e)

          }} 
          
          className='flex  lg:w-1/2 gap-4 flex-col  items-start p-10   '>

         <h1 className=' text-4xl mb-2 font-bold'>Add Notes</h1>
       
        <input
         type="text" 
         onChange={(e)=>{
            setTitle(e.target.value)
        }} 
         value={title}
        
        className='outline-none px-5 w-full  py-2 border-2  rounded'
        placeholder='Enter Notes Heading'
       />
        
       

        <textarea  onChange={(e)=>{
            setdetails(e.target.value)}}
             value={details}
             type="text" className=' outline-none px-5  w-full  h-30 py-2 border-2  rounded'
              placeholder='Enter deatial'
             
              />
        <button
         className='active:scale-95 bg-white h-10 w-full text-black font-bold px-5 py-2 rounded'>Add Notes</button>
      
       
      </form>
      <div className='lg:border-l-2 lg:w-1/2   p-10 '>
      <h1 className=' text-4xl font-bold'>Recent Notes</h1>
      <div id="right" className= ' shadow-lg rounded-lg flex flex-wrap gap-5 items-start justify-start  mt-6 h-full overflow-auto'>
        
        {task.map(function(el,idx){
             return  <div key={idx} className=" bg-white w-40 h-55 text-black flex justify-between flex-col items-start relative  w-40 rounded-xl bg-cover bg-center bg-no-repeat  px-4 pt-9 pb-4 bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')]">
                 <div >
                    <h3 className='font-bold text-lg leading-tight'>{el.title}</h3>
                       <p className='   leading-tight  mt-1 text-xs font-semibold text-gray-700' >{el.details}</p>
            </div>
            <button onClick={()=>{
              deleteNotes(idx)
            }} className="bg-red-500 rounded w-full active:scale-95 text-white font-bold text-xs py-1">Delete</button>
            </div>

            })}
         
      </div>
      </div>
      
    </div>
  )
}

export default Form
