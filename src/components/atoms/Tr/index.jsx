import React from 'react';

import { TD, TR } from './styles';

const Tr = ({ rows, prepareRow }) => {
    const renderCells = (row) => row.cells.map((cell) => (
      <TD {...cell.getCellProps()}>
        {cell.render('Cell')}
      </TD>
    ));
  
    const renderRows = () => rows.map((row) => {
      prepareRow(row);
      return (
        <TR {...row.getRowProps()}>
          {renderCells(row)}
        </TR>
      );
    });
  
    return renderRows();
};

export default Tr;
