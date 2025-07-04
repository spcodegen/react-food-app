import React, { useEffect, useState } from 'react'

function Search() {
  const [query,setQuery] = useState("");  
  useEffect(()=>{
    function demo() {
        console.log("Demo function executed");
    }
    demo()
  },[query])
  
  return (
    <div>
        <input type="text" value={query} onChange={(e) => setQuery(e.target.value)}/>
    </div>
  )
}

export default Search