import React, { Component } from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as listActions from '../actions/ListAction';

// material ui
import { List, ListItem, ListItemText } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import * as _ from 'lodash';

class ListContainer extends Component {
    render(){
        return(
            <div>
                <TextField
                    id="todo"
                    label="TODO"
                    value={this.props.list.todoCHANGE_TODO}
                    onChange={e=>{
                        this.props.listActions.changeTodo(e.target.value);
                    }}
                    onKeyPress={e=>{
                        if(e.key === "Enter"){
                            this.props.listActions.submitTodo();
                        }
                    }}
                    helperText="input TODO"
                    margin="normal"
                />
                <List component="nav">
                    {_.chain(this.props.list.list)
                        .filter(item => (!item.isDone))
                        .map((item ,idx)=> {
                        return (
                            <ListItem
                                button
                                key={idx}
                                onClick={()=>{this.props.listActions.toggleTodo(item.id)}}
                            >
                                <ListItemText primary={item.todo} />
                            </ListItem>
                        )
                    }).value()}
                </List>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    list: state.list
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    listActions: bindActionCreators(listActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(ListContainer);