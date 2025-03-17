import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from "axios"
import Card from './component/Card'
function App() {
  const [data, setData] = useState([])
  const [titleSort,setTitlesort]=useState("");
  const [idSort,setIDSort]=useState("");
  useEffect(()=>{
   async function show(){
      const res=await axios.get("https://jsonplaceholder.typicode.com/posts")
      console.log(res.data);
      setData(res.data)
    }
    show();
  },[])
  function handleSorting(){
   let sortedData=[...data]

   if(titleSort){
    sortedData.sort((a,b)=>
      titleSort==='a2d'?a.title.localeCompare(b.title):
      b.title.localeCompare(a.title))
   }

   if(idSort){
    sortedData.sort((a,b)=>
    idSort==='a2d'?a.userId-b.userId:
    b.userId-a.userId
    )
  }
   setData(sortedData)
  }
  


  return (
    <>
     <h1>Cards</h1>
     <label>Sort by Title
     <select value={titleSort} onChange={(e)=>setTitlesort(e.target.value)}>
      <option value="">Select</option>
      <option value="a2d">Asc to Des</option>
      <option value="d2a">Des to Asc</option>
     </select>
     </label>
     <label>Sort by UserID
     <select value={idSort} onChange={(e)=>setIDSort(e.target.value)}>
      <option value="">Select</option>
      <option value="a2d">Asc to Des</option>
      <option value="d2a">Des to Asc</option>
     </select>
     </label>

     {/* <label>
        Filter by UserID:
        <input
          type="number"
          value={userIdFilter}
          onChange={(e) => setUserIdFilter(e.target.value)}
          placeholder="Enter User Id"
        />
      </label> */}

     <button onClick={handleSorting}>Sort</button>
     {
      data.map((ele)=>(
        <div key={ele.id}>
          <Card  ele={ele}/>
        </div>
      ))
     }
    </>
  )
}

export default App
