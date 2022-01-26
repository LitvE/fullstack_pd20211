import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../actions';

function UsersList(props) {
  const { users, isFetching, error, getUsers } = props;

  useEffect(() => {
    getUsers();
  }, []);

  const mapUser = ({ id, firstName, lastName, email }) => {
    return (
      <li key={id}>
        firstName: {firstName}, lastName: {lastName}, email: {email}
      </li>
    );
  };

  return (
    <>
      {isFetching}
      {error && <div>Error</div>}
      <ul>{users.map(mapUser)}</ul>
    </>
  );
}

const mapStateToProps = (state) => state.user;

const mapDispatchProps = (dispatch) => ({
  getUsers: () => dispatch(actionCreators.getUsersAction()),
});

export default connect(mapStateToProps, mapDispatchProps)(UsersList);