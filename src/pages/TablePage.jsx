import React from 'react'
import Table from '../components/Table.jsx';


function TablePage() {

  const data = [
    { name: 'Orange', color: 'bg-orange-500', score: 5 },
    { name: 'Apple', color: 'bg-red-500', score: 3},
    { name: 'Banana', color: 'bg-yellow-500', score: 4 },
    { name: 'Lime', color: 'bg-green-500', score: 1 },
  ];
  return (
    <div className=' ml-5'>
      <Table data={data}/>
    </div>
  )
}

export default TablePage
