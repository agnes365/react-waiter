import { useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getTableById, updateTableRequest } from '../../../redux/tablesRedux';
import { Form, Row, Col, Button } from "react-bootstrap";

const TableForm = props => {
    const { tableId } = useParams();

    const table = useSelector(state => getTableById(state, tableId));

    const [status, setStatus] = useState(table.status);

    const [peopleAmount, setPeopleAmount] = useState(table.peopleAmount);
    const [maxPeopleAmount, setMaxPeopleAmount] = useState(table.maxPeopleAmount);
    const [bill, setBill] = useState(table.bill);
    const [backToHome, setBackToHome] = useState(false);

    if (!table) return <Navigate to="/" />

    const actionSetStatus = (status) => {
        if (status === 'Cleaning' || status === 'Free')
            setPeopleAmount(0);
        else if (status === 'Busy')
            setBill(0);
        setStatus(status);
    }

    const actionSetPeopleAmount = (amount) => {
        if (amount >= 0 && amount <= 10 && amount <= maxPeopleAmount)
            setPeopleAmount(parseInt(amount));
    }

    const actionSetMaxPeopleAmount = (max) => {
        if (max >= 0 && max <= 10)
            setMaxPeopleAmount(parseInt(max));
        if (peopleAmount > max)
            setPeopleAmount(parseInt(max));
    }

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(updateTableRequest({ id: tableId, status, peopleAmount, maxPeopleAmount, bill }, () => setBackToHome(true)));
    };

    return (
        backToHome ?
            <Navigate to="/" />
            :
            <form onSubmit={handleSubmit}>
                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm="1" className="fw-bold" >Status:</Form.Label>
                    <Col sm="2">
                        <Form.Select value={status} onChange={e => actionSetStatus(e.target.value)}>
                            <option value="Free">Free</option>
                            <option value="Reserved">Reserved</option>
                            <option value="Busy">Busy</option>
                            <option value="Cleaning">Cleaning</option>
                        </Form.Select>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3 align-middle">
                    <Form.Label column sm="1" className="fw-bold" >People:</Form.Label>
                    <Col sm="1">
                        <Form.Control type="number" step="1" value={peopleAmount} onChange={e => actionSetPeopleAmount(e.target.value)} />
                    </Col>
                    /
                    <Col sm="1">
                        <Form.Control type="number" step="1" value={maxPeopleAmount} onChange={e => actionSetMaxPeopleAmount(e.target.value)} />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3 align-middle">
                    <Form.Label column sm="1" className="fw-bold" >Bill:</Form.Label>
                    $
                    <Col sm="1">
                        <Form.Control type="number" step="1" value={bill} onChange={e => setBill(parseInt(e.target.value))} />
                    </Col>
                </Form.Group>
                <Button type="submit">Update</Button>
            </form>
    );
};

export default TableForm;