import {useEffect} from "react"
const API="https://jsonplaceholder.typicode.com/users"
import {useState} from "react"
import "./App.css"
import UserData from "./components/UserData"
const App =()=>{


const [users,setUsers]  =useState([]);


const fetchUsers=async(url)=>{
try{
const res=await fetch(url);
const data=await res.json();
if(data.length>0)
setUsers(data)
console.log(data)
}
catch(e)
{
  console.error(e);
}

}



useEffect(() =>{
fetchUsers(API)
},[])


return (
  <>
  <h1>TABLE</h1>
 <table className="table">
  
      <thead className="table--head">
        <tr>
        <th className="table-headtext">ID</th>
        <th className="table-headtext">Name</th>
        <th className="table-headtext">Email</th>
        <th className="table-headtext">Address</th>
        </tr>
      </thead>

      <tbody>
        <UserData users={users}/>
     </tbody>
 </table></>
)


 }
 export default App


 //first create useEffct that reacives callback fxns fetchUsers(API) and empty array
  //then create fetchUsers fxn that recives url and returns data using asynch and await .Here first async fxn takes url and then stores await fetch(url) and store to res .Now store await res.json to const data