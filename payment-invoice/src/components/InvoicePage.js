import React, { useState, useEffect } from 'react';
import MaterialTable from 'material-table';

function InvoicePage() {
const[data,setData] = useState([]);

const columns = [
  { title: "ID", field: "id" },
  { title: "USERNAME", field: "username" },
  { title: "NAME", field: "name" },
  { title: "EMAIL", field: "email" },
  { title: "PHONE", field: "phone" },
  { title: "WEBSITE_LINK", field: "website" },
]

useEffect(() => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(resp => resp.json())
    .then(resp => {
      // console.log(resp)
      setData(resp)
    })
}, [])

return (
    <div style={{marginTop:45}}>
    <MaterialTable
      title="Invoices"
      columns={ columns }
      data={ data }
      options={{
        headerStyle: { position: 'sticky',
                       top: 0, fontSize: 15, 
                       color:'#FF9800', 
                       fontFamily:'cursive'},
        rowStyle: {
          backgroundColor: '#84ffff',
        },
        search: true
      }}
    />
    </div>
  );
}

export default InvoicePage;







































