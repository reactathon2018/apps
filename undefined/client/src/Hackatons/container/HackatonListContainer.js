import React from 'react';
import HackatonList from '../components/HackatonList';
import { connect } from 'react-redux';
import { HACKATON_LIST_REQUEST_NAME, fetchHackatonList } from '../actions';
import { loadModal } from '../../Modal/actions';
import { NOMINATION_MODAL } from '../../Modal/actions';
import ChatModel from '../../chatModel/ChatModel';

export class HackatonListContainer extends React.Component {

    constructor(props){
        super(props);
        this.apply = this.apply.bind(this);
    }

    componentDidMount() {
        console.log("inside component did mount");
        this.props.fetchHackatonList();
    }

    apply(hackatonId){
        if(this.props.isAutenticated){
            this.props.loadModal(NOMINATION_MODAL);
        } else {
            alert("Please Sign in to apply");
        }
    }

    render() {
        return (
            <div>
                <HackatonList apply={this.apply} isLoading={this.props.hackatonListLoading} data={this.props.data} />
                <ChatModel/>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    hackatonListLoading : state.getIn(['httpReducer', 'requests', HACKATON_LIST_REQUEST_NAME, 'loading'], true),
    error : state.getIn(['httpReducer', 'request', HACKATON_LIST_REQUEST_NAME, 'error'], null),
    data : state.getIn(['hackatonsReducer', 'hackatonList'], null),
    isAutenticated: state.getIn(['userActionReducer', 'user', 'isAutenticated'], false),
    user: state.getIn(['userActionReducer', 'user', 'userInfo'], null),    
})


export default connect(mapStateToProps, { fetchHackatonList, loadModal })(HackatonListContainer);