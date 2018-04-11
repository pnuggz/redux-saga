/* eslint-disable react/prop-types */
import React from 'react';
import {connect} from 'react-redux';
import Dashboard from '../components/Dashboard';

const Contest = (props) => {
  return(
    <div>
      TEST
      <Dashboard contest={props.contest} />
    </div>
    );
};

const mapStateToProps =(state) => ({
    contest : state.contest,
});

function mapDispatchToProps(dispatch) {
  return {
    loadContest : function() {
      return dispatch({type: 'LOAD_CONTEST'});
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Contest);
