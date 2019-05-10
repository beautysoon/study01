import React from 'react';
import {connect} from "react-redux";
import {teaLoginAction} from "./action";
import {bindActionCreators} from "redux";

export function mapStateToProps(state) {
    return {
        value: state.id
    }
}

// Map Redux actions to component props
export function mapDispatchToProps(dispatch) {
    return {
        onClick: (id) => {
            // console.log(id);
            dispatch(teaLoginAction(id));
            //bindActionCreators(teaLoginAction,dispatch);
        }
    }
}