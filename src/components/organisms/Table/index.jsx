import React from 'react';

import THead from '../../molecules/THead';
import TBody from '../../molecules/TBody';

const Table = ({
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
}) => (
    <table {...getTableProps()}>
        <THead
            headerGroups={headerGroups}
        />
        <TBody
            getTableBodyProps={getTableBodyProps}
            rows={rows}
            prepareRow={prepareRow}
        />
    </table>
);

export default Table;
