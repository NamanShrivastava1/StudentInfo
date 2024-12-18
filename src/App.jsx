import React, { useState } from "react";
import { use } from "react";

const App = () => {

  const [userName, setUserName] = useState('')
  const [DOB, setDOB] = useState('')
  const [enrollment, setEnrollment] = useState('')
  const [branch, setBranch] = useState('')
  const [image, setImage] = useState('')

  const [allusers, setAllusers] = useState([])
  

  const submitHandler = (e) => {
    e.preventDefault();

    const newArr = [...allusers, {userName, DOB, enrollment, branch, image}]
    setAllusers(newArr)


    setUserName('')
    setDOB('')
    setEnrollment('')
    setBranch('')
    setImage('')
  };

  const deleteHandler = (i)=>{
    const copyarr = [...allusers];
    copyarr.splice(i,1)
    setAllusers(copyarr)
  }

  return (
    <div className="">
      <div className="text-center">
        <div className="h-16 w-[40%] bg-gradient-to-r from-[#226AEB] to-[#3778ED] absolute left-[30%]"></div>
        <h1 className=" text-5xl font-bold m-10 absolute left-[30%] top-[3%]">STUDENT INFO PORTAL</h1>
        <img className="h-[200px] w-[100%] object-cover object-bottom"
         src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/subscribe-to-us-img.png" alt="" />
      </div>

      <div className="p-10">
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
        >
          <input
          className="w-[30%] h-[46px] border-2 border-zinc-400 px-4 py-2 rounded mr-10 mb-10" 
          type="text" placeholder="Enter Your Name" value={userName} 
          onChange={(e)=>{
            setUserName(e.target.value);
          }}
          />        
          <input
          className="border-2 border-zinc-400 px-4 py-2 rounded mb-10 " 
          type="date" value={DOB} 
          onChange={(e)=>{
            setDOB(e.target.value);
          }}
          />
          <br />
          <input
          id="enrol"
          className="w-[30%] h-[46px] border-2 border-zinc-400 px-4 py-2 rounded mr-10 mb-10" 
          type="text" placeholder="Enter Enrollment Number" value={enrollment} 
          onChange={(e)=>{
            setEnrollment(e.target.value);
          }}
          />
          <select className="w-[12%] h-[46px] border-2 border-zinc-400 px-4 py-2 rounded mr-10 mb-10" 
          type="text" placeholder="Enter Your Branch" value={branch}
          onChange={(e)=>{
            setBranch(e.target.value);
          }}>
            <option>Select Branch</option>
            <option value={'CSE'}>CSE</option>
            <option value={'AIML'}>AIML</option>
            <option value={'AIDS'}>AIDS</option>
            <option value={'AI'}>AI</option>
            <option value={'IT'}>IT</option>
            <option value={'EC'}>EC</option>
            <option value={'EX'}>EX</option>
            <option value={'ME'}>ME</option>
            <option value={'CE'}>CE</option>
          </select>
          <br />
          <input
           className="w-[30%] h-[46px] border-2 border-zinc-400 px-4 py-2 rounded mr-10 mb-10" 
          type="text" placeholder="Upload Your Photo" value={image} 
          onChange={(e)=>{
            setImage(e.target.value);
          }}
          />
          <button className="text-white bg-[#3779ED] px-4 py-2 rounded ml-4">Submit</button>
        </form>
      </div>

      <div className="p-5">
        {allusers.map(function(elem,i){

          return <div className=" bg-slate-200 w-[18%] px-8 py-5 rounded inline-block m-3 filter: drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06));">
            <img src={elem.image} alt="User Image" className=" rounded-full h-[120px] w-[120px] object-cover object-center mt-3 mx-auto"/>
            <h2 className="text-xl font-semibold mt-3">{elem.userName}</h2>
            <p className="text-sm mt-1">DOB: {elem.DOB}</p>
            <p className="mt-1">Enrollment: {elem.enrollment}</p>
            <p className="text-sm mt-1">Branch: {elem.branch}</p>
            
            <button onClick={(i)=>{
              deleteHandler(i)
            }} 
            className=" bg-yellow-500 px-2 py-1 mt-3 ml-44 rounded-full"><i class="ri-delete-bin-6-line"></i></button>
          </div>
        })}
      </div>

    </div>
  );
};

export default App;