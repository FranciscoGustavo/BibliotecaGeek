import React from 'react';

import { TR, TH } from './styles';

const THead = ({ headerGroups }) => (
    <thead style={{ display: 'block' }}>
        {headerGroups.map((headerGroup) => (
        <TR {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
            <TH {...column.getHeaderProps()}>{column.render('Header')}</TH>
            ))}
        </TR>
        ))}
    </thead>
);

export default THead;
