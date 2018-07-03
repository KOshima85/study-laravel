import React, { Component } from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as listActions from '../actions/ListAction';

// material ui
import { List, ListItem, ListItemText, ListItemSecondaryAction } from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import CheckedIcon from '@material-ui/icons/Done';
import DeleteIcon from '@material-ui/icons/Delete';
import { TextField } from '@material-ui/core';
import { green } from '@material-ui/core/colors';
import * as _ from 'lodash';

class ListContainer extends Component {
    componentWillMount(){
        this.props.listActions.initList();
    }

    render(){
        return(
            <div>
                <TextField
                    id="todo"
                    label="TODO"
                    value={this.props.list.todo}
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
                    autoFocus
                />
                <List component="nav">
                    {_.chain(this.props.list.list)
                        // .filter(item => (!item.is_done))
                        .map((item ,idx)=> {
                        return (
                            <ListItem
                                button
                                key={idx}
                                onClick={()=>{this.props.listActions.toggleTodo(item.id)}}
                            >
                                {item.is_done ? (
                                    <CheckedIcon style={{fill:green[400]}}/>
                                ) : (<div></div>)}
                                <ListItemText primary={item.todo} />
                                <ListItemSecondaryAction>
                                    <IconButton
                                        onClick={()=>{this.props.listActions.deleteTodo(item.id)}}
                                    >
                                        <DeleteIcon />
                                    </IconButton>
                                </ListItemSecondaryAction>
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