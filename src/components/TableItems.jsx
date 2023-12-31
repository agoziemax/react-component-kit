import React from 'react';

function TableItems({data, config, keyFn }) {
  const renderedHeaders = config.map((config) => {
    return <th key={config.label}>{config.label}</th>;
  });

  const renderedRows = data.map((rowData) => {
    const renderedCells = config.map((column) => {
      return (
        <td key={column.label}>
          {column.render(rowData)}

        </td>
      );
    });

    return (
      <tr className='border-b' key={keyFn(rowData)}>
        {renderedCells}
      </tr>
    );
  });

  return (
    <table className='table-auto border-spacing-2'>
      <thead>
        <tr className='border-b-2'>{renderedHeaders}</tr>
      </thead>
      <tbody>{renderedRows}</tbody>
    </table>
  );
}
export default TableItems;
