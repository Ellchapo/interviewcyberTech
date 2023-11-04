import { useState } from "react";


export default function App() {
  const [code, setCode] = useState(function Test () { return "hello"});
  let cnt="Write a simple react program to perform keyword search  and highlight the keyword in the given content"
  const [search,setSearch]=useState("");
  const [searched,setSearched]=useState("");
  
  const searchHandler =()=>{
    let ans=cnt.split(" ");
     let a = ans.map((word)=>{
      if(word === search)
      return word
    })
    setSearched(a);
  }
  return (
    <div>
     <span>{cnt}</span><br/>
     <input type='text' onChange={(e)=>{setSearch(e.target.value)}} ></input>
     <button onClick={searchHandler}>Button</button><br/>
     <span>{searched}</span>
    </div>
  );
}