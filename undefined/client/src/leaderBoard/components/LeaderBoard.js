import React from 'react';
import LeaderBoardList from '../../LeaderBoardList/components/LeaderBoardList';

export default class LeaderBoard extends React.Component{
    render(){
        return (
            <div>
                <div>
                    <LeaderBoardList {...this.props} />
                </div>
            </div>
        )
    }
}