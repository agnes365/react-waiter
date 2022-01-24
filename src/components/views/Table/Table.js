import { ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const Table = ({ id, status, bill }) => {
    return (
        <ListGroup.Item className="d-flex justify-content-between align-items-start">
            <div>
                <h3 className="d-inline me-5">Table {id}</h3>
                <span className="fw-bold">Status:</span> {status}
                {status == 'Busy' ? <><span className="fw-bold ms-5">Bill:</span> {bill}</> : ''}
            </div>
            <Link to={'/table/' + id} className="btn btn-primary">
                Show more
            </Link>
        </ListGroup.Item>
    );
}

Table.propTypes = {
    id: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    bill: PropTypes.number.isRequired
}

export default Table;