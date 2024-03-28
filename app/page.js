'use client'
import axios from "axios";
import Image from "next/image";
import { useState , useEffect } from "react";
import './style2.css'
export default function Home() {
  const [data1,setData] = useState([]);
  const [ipData,setIpData] = useState('')
  const apiCall = async() => {
    const {data} = await axios.get('/api/hello')
    console.log(data);
    setData(data)
    data.forEach((e)=>{
      console.log(e.recipe.label)
    })
  }
  useEffect(()=>{
   apiCall();
  },[])
  async function hit()
  {
    setData([]);
    const {data} = await axios.post('/api/hello2',{
      text:ipData
    })
    console.log(data);
    setData(data)
    data.forEach((e)=>{
      console.log(e.recipe.label)
    })
  }
  return (
 <div>
    { data1.length  >  0 ?
    <div>
   <header style={{width:'100%' , display:'flex' , justifyContent:'center' , marginBottom:'20px' , padding:'20px'}}>
   <input type="text" style={{width:'200px' , padding:'9px' , fontWeight:'bold'}} value={ipData} onChange={(e)=>{
    // setData(e.target.value)
    setIpData(e.target.value)
   }}/>
   <button style={{border:'none' , backgroundColor:'red' , color:'white' , cursor:'pointer'}} onClick={hit}>Search</button>
  </header>
    <div style={{display:'flex' , justifyContent:'center' , alignItems:'center' , flexWrap:'wrap' , gap:'20px'}}>
      {
      data1.map(function(element , id){
           return (<div key={id} className="box" style={{padding:'10px' ,cursor:'pointer', width:'250px' ,  border:'2px solid black' , display:'flex' , flexDirection:'column' , alignItems:'center'}}>
            <h3 style={{textAlign:'center'}}>{element.recipe.label}</h3>
            <div style={{width:'200px'}} >
          <img src={element.recipe.image} style={{width:'100%' }} />
          </div>
          </div>  )
      })
    }
      </div>
      </div>
    : <div style={{display:'flex' , justifyContent:'center' , alignItems:'center' , height:'100vh'}}>
      <div style={{width:'190px'}}>
<img style={{width:'100%'}} src="https://blog.teamtreehouse.com/wp-content/uploads/2015/05/InternetSlowdown_Day.gif"/>
</div>
      </div>
    }
 </div>
  );
}
