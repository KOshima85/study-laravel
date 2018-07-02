import React, { Component } from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as listActions from '../actions/ListAction';

class ListContainer extends Component {
    render(){
        this.props.listActions.initList();
        return(
            <div>list</div>
        )
    }
}

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    listActions: bindActionCreators(listActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(ListContainer);