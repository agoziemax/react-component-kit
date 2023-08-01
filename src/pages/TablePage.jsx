import React from 'react';
import Table from '../components/TableItems';
import images1 from '../images/agent-img2.svg';

function TablePage() {
  const data = [
    { name: 'Orange', color: 'bg-orange-500', score: 5, images: images1 },
    { name: 'Apple', color: 'bg-red-500', score: 3, images: images1 },
    { name: 'Banana', color: 'bg-yellow-500', score: 4, images: images1 },
    { name: 'Lime', color: 'bg-green-500', score: 1, images: images1 },
  ];

  const config = [
    {
      label: 'Name',
      render: (fruit) => fruit.name,
    },

    { label: 'Color', render: (fruit) => <div className={`p-3 m-2 ${fruit.color}`}></div> },

    { label: 'Score', render: (fruit) => fruit.score },
    { label: 'Image', render: (fruit) => <img src={fruit.images} alt='img1' /> },
  ];
  
  // To generate a random key for the table
  const keyFn = (fruit) => {
    return fruit.name;
  };

  return (
    <div className=' ml-5'>
      <Table data={data} config={config} keyFn={keyFn} />
    </div>
  );
}

export default TablePage;
