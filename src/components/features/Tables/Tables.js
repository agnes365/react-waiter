import { ListGroup } from "react-bootstrap";
import { useSelector } from "react-redux";
import { getAllTables } from "../../../redux/tablesRedux";
import Table from '../../views/Table/Table';

const Tables = () => {

    const tables = useSelector(getAllTables);

    return (
        <ListGroup variant="flush">
            {tables.map(table => (
                <Table key={table.id} id={table.id} status={table.status} bill={table.bill} />
            ))}
        </ListGroup>
    );
}

export default Tables;