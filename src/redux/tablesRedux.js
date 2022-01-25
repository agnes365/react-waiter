import { API_URL } from '../config';

//selectors
export const getAllTables = ({ tables }) => tables;
export const getTableById = ({ tables }, tableId) => tables.find(table => table.id === tableId);

// actions
const createActionName = actionName => `app/tables/${actionName}`;
const UPDATE_TABLE = createActionName('UPDATE_TABLE');
const UPDATE_TABLES = createActionName('UPDATE_TABLES');

// action creators
export const updateTable = payload => ({ type: UPDATE_TABLE, payload });
export const updateTables = payload => ({ type: UPDATE_TABLES, payload });

export const updateTableRequest = (table, callback) => {
  return dispatch => {
    const options = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(table),
    };

    fetch(API_URL + '/tables/' + table.id, options)
      .then(res => res.json())
      .then((t) => {
        dispatch(updateTable(table));
        callback();
      });
  }
}

export const fetchTables = (callback) => {
  return (dispatch) => {
    fetch(API_URL + '/tables')
      .then(res => res.json())
      .then(tables => {
        dispatch(updateTables(tables));
        callback();
      });
  }
}

const tablesReducer = (statePart = [], action) => {
  switch (action.type) {
    case UPDATE_TABLE:
      return statePart.map(table => (table.id === action.payload.id) ? { ...action.payload } : table);
    case UPDATE_TABLES:
      return [...action.payload];
    default:
      return statePart;
  };
};
export default tablesReducer;