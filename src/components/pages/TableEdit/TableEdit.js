import TableForm from '../../features/TableForm/TableForm';
import { useParams } from 'react-router-dom';

const TableEdit = () => {
    const { tableId } = useParams();

    return (
        <>
            <h2>Table {tableId}</h2>
            <TableForm />
        </>
    );
}

export default TableEdit;