import {teaLoginAction} from "./action";

export function mapStateToProps(state) {
    return {
        value: state.id
    }
}

// Map Redux actions to component props
export function mapDispatchToProps(dispatch) {
    return {
        onClick: (id) => {
            dispatch(teaLoginAction(id));
            //bindActionCreators(teaLoginAction,dispatch);
        }
    }
}