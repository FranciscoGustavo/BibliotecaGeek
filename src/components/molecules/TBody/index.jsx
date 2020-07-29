import React from 'react';

import Tr from '../../atoms/Tr';

const TBody = ({
    getTableBodyProps,
    rows,
    prepareRow,
}) => (
    <tbody {...getTableBodyProps()}>
        <Tr
            rows={rows}
            prepareRow={prepareRow}
        />
    </tbody>
);

export default TBody;
