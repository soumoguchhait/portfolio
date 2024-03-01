
import { useState } from 'react';
import "./edu.css";
const Education=(props)=>{
  const[data1,setData1]=useState();
  const[data2,setData2]=useState();
  const[data3,setData3]=useState();

  const handleInput=(props1,props2,props3)=>{
setData1(props1);
setData2(props2);
setData3(props3);

console.log(props1,props2,props3);
  }
    return(
        <>
        <div id="education" className='edu-container'>
        <h2>Education</h2>
        <div className="horizontal-line"></div>
        <ul>
            <li><button className='button1' onClick={()=>handleInput(props.collegeName,props.collegeDate,props.graduationInfo)}>Graduation</button></li>
            <li><button className='button2' onClick={()=>handleInput(props.instituteName,props.instituteDate,props.instituteInfo)}>Diploma</button></li>
            <li><button className='button3' onClick={()=>handleInput(props.schoolName,props.schoolDate,props.hscInfo)}>Schooling</button></li>

        </ul>
        
        
        

        <div className="show">
            <h3 className='name'>{data1?data1:props.collegeName}</h3>
            <h3 className='date'>{data2?data2:props.collegeDate}</h3>
            <h3 className='info'>{data3?data3:props.graduationInfo}</h3>

        </div>
        </div>
        </>
    )
};
export default Education;