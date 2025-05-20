import { useEffect, useState } from 'react'
import './App.css'
import Table from "./Table"
import Page from "./Page"


function App() {

  const [data, setData] = useState([]);
 
  const fetchEmp = async()=>{
    try{
      const response = await fetch('https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json');
      setData(await response.json())
      
    }catch(e){
      alert('failed to fetch Data')
      console.log(e)
    }  
  }

  useEffect(()=>{fetchEmp()},[])
      

  const [currentPage, setCurrentPage] = useState(1);
    const lastIndex = currentPage*10;
    const firstIndex = lastIndex-10;
    const currentRow = data.slice(firstIndex, lastIndex)

 Math.ceil(data.length/10);
    

    const next = ()=>{
        if(currentPage<Math.ceil(data.length/10)){
            setCurrentPage((prev)=>prev+1);
        }else{
          setCurrentPage((prev)=>prev-1);
        }
    }
    const previous = ()=>{
        if(currentPage>1){
            setCurrentPage((prev)=>prev-1)
        }
    }

  return (
    <div style={{display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column', gap:40}}>
      <Table  data={currentRow}/>
      <Page 
      currentPage={currentPage}
      totalPages={Math.ceil(data.length/10)}
      previous={previous}
      next={next}
      />
    </div>
  )
}

export default App
