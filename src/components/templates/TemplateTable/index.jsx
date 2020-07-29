import React, { useMemo} from 'react';
import { useTable } from 'react-table';

const useFunctionMemo = (object) => useMemo(
    () => object,
    [],
);

const TemplateTable = ({ data, columns }) => {
    const tableData = useFunctionMemo(data);
    const tableColumns = useFunctionMemo(columns);

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({ columns: tableColumns, data: tableData });

    return (
        <Table
            getTableProps={getTableProps}
            getTableBodyProps={getTableBodyProps}
            headerGroups={headerGroups}
            rows={rows}
            prepareRow={prepareRow}
        />
    );
};

export default TemplateTable;
