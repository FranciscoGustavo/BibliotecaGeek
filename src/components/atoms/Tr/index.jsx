import React from 'react';

const Tr = ({ rows, prepareRow }) => {
    const renderCells = (row) => row.cells.map((cell) => (
      <td {...cell.getCellProps()}>
        {cell.render('Cell')}
      </td>
    ));
  
    const renderRows = () => rows.map((row) => {
      prepareRow(row);
      return (
        <tr {...row.getRowProps()}>
          {renderCells(row)}
        </tr>
      );
    });
  
    return renderRows();
};

export default Tr;
