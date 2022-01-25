import { ListGroup, Spinner } from "react-bootstrap";
import { useSelector } from "react-redux";
import { getAllTables, fetchTables } from "../../../redux/tablesRedux";
import Table from '../../views/Table/Table';
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const Tables = () => {

    const dispatch = useDispatch();
    const [loader, setLoader] = useState(true);
    useEffect(() => dispatch(fetchTables(() => setLoader(false))), [dispatch]);
    
    const tables = useSelector(getAllTables);

    return (
        loader ?
            <Spinner animation="border" />
            :
            <ListGroup variant="flush">
                {tables.map(table => (
                    <Table key={table.id} id={table.id} status={table.status} bill={table.bill} />
                ))}
            </ListGroup>
    );
}

export default Tables;