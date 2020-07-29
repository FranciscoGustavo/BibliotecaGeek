import React from 'react';

import { TH } from './styles';

const THead = ({ headerGroups }) => (
    <thead>
        {headerGroups.map((headerGroup) => (
        <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
            <TH {...column.getHeaderProps()}>{column.render('Header')}</TH>
            ))}
        </tr>
        ))}
    </thead>
);

export default THead;
