import { Button, Col, Row, ListGroup } from "react-bootstrap";
import { useSelector } from "react-redux";
import { getAllTables } from "../../../redux/tablesRedux";
import { Link } from "react-router-dom";

const Tables = () => {

    const tables = useSelector(getAllTables);

    return (
        <>
            <h2>All tables</h2>
            <ListGroup variant="flush">
                {tables.map(table => (
                    <ListGroup.Item className="d-flex justify-content-between align-items-start">
                        <div>
                            <h3 className="d-inline me-5">Table {table.id}</h3>
                            <span className="fw-bold">Status:</span> {table.status}
                        </div>
                        <Link to={'/table/' + table.id} className="btn btn-primary">
                            Show more
                        </Link>
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </>
    );
}

export default Tables;