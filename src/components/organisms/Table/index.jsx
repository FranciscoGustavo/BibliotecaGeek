import React from 'react';

import THead from '../../molecules/THead';
import TBody from '../../molecules/TBody';

import { STable } from './styles';

const Table = ({
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
}) => (
    <STable {...getTableProps()}>
        <THead
            headerGroups={headerGroups}
        />
        <TBody
            getTableBodyProps={getTableBodyProps}
            rows={rows}
            prepareRow={prepareRow}
        />
    </STable>
);

export default Table;
