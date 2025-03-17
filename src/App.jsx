import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from "axios"
import Card from './component/Card'
function App() {
  const [data, setData] = useState([])
  const [titleSort,setTitlesort]=useState(null);
  useEffect(()=>{
   async function show(){
      const res=await axios.get("https://jsonplaceholder.typicode.com/posts")
      console.log(res.data);
      setData(res.data)
    }

    show();
  },[])
  function handleTitleSorting(e){
  setTitlesort(e.target.value)
  
  const sortedData=data.sort((a,b)=>{
    if(titleSort==='a2d')
      return a.title-b.title
    else if(titleSort==='d2a')
      return b.title-a.title
  })
  setData(sortedData)
  }

  return (
    <>
     <h1>Cards</h1>
     <label>Sort by Title
     <select onChange={handleTitleSorting}>
      <option value={null}>Select</option>
      <option value="a2d">Asc to Des</option>
      <option value="d2a">Des to Asc</option>
     </select>
     </label>
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
