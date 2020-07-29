import React from 'react';

const THead = ({ headerGroups }) => (
    <thead>
        {headerGroups.map((headerGroup) => (
        <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
            <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
        </tr>
        ))}
    </thead>
);

export default THead;
