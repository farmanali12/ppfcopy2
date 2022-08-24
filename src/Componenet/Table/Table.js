
import React, { useEffect, useState } from 'react'

import axios from "axios"
function Table() {
    const[data, setMydata] = useState([]);
    useEffect(() => {
        axios.get("https://admindevapi.wowtalent.live/api/admin/dashboard/installstatasticlist?fromdate=2022-06-01&todate=2022-07-01")
    //    axios.get("https://jsonplaceholder.typicode.com/posts")
            .then((responce) => {
                setMydata(responce.data.data)
                console.log(responce.data.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])
   
    return (
<div className='table'>
<table>
        <tr>
          <th>Date</th>
          <th>Day installs</th>
          <th>plateform</th>
          <th>Day Unistalls</th>
          <th>plateform</th>
          <th>churn Rate</th>
          <th>churn plateform</th>
        </tr>
        
        {
    data.map((val,id)=>{
        return(
            <tr key={id}>
          <td>{val.created_At}</td>
          <td>{val.android_install}</td>
          <td>{val.totalchurn}</td>
          <td>{val.ios_install}</td>
          <td>{val.totalchurn}</td>
          <td>{val.ios_churn}</td>
          <td>{val.android_churn}</td>
        </tr> 
        )
    })
}
      </table>

</div>
       
    )
}

export default Table