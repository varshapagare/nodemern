import { useState, useEffect } from "react";
import StuDesign from "./stuDesign";
import Table from 'react-bootstrap/Table';


const Display = () => {

    const [myData,setMyData]=useState([]);
    const loadData=async()=>{
        let url="http://localhost:9000/student/stuDisplay";
        let response=await axios.get(url);
        console.log(response.data);
        setMyData(response.data)
    }
    useEffect(()=>{
        loadData();
    },[])

    const ans=myData.map((key)=><StuDesign

    rno={key.rollno}
    nm={key.name}
    ct={key.city}
    fs={key.fees}
    />)
    return ( 
        <>
            <h1>display page</h1>
            <Table striped bordered hover>
      <thead>
        <tr>
          <th>Roll no</th>
          <th> Name</th>
          <th>City</th>
          <th>Fees</th>
        </tr>
      </thead>
      <tbody>
        {ans}
    </tbody>
    </Table>

    </>
    )
}
export default Display;