import React from 'react';
import '../LeaderBoardList.css';

export default class LeaderBoard extends React.Component {
    render() {
        let data = this.props.data || [],
            rows = [];
         rows = new Array(data.length > 10 ? 10 : data.length).fill(0).map((z, i) => {
            let un = data[i].userName,
                en = data[i].earnings;
            return (
                <div className="clear" key={i} style={{borderBottom: '1px solid #e7eeef'}}>                    
                    <div className="float-left" style={{width: '33.33%', padding: '10px', fontWeight:'600', fontSize: '14px'}} >{un}</div>
                    <div className="float-left" style={{width: '33.33%', padding: '10px',  fontWeight:'600', fontSize: '14px'}} >{en.toFixed(2)}</div>
                    <div className="float-left" style={{width: '33.33%', padding: '10px', fontWeight:'600', fontSize: '14px'}} >{data[i].userId}</div>
                </div>
            );
        });
        return (
            <div>
                <div style={{boxShadow:'rgba(0, 0, 0, 0.2) 0px 2px 4px -1px', padding:'20px'}}>
                    <div style={{ maxWidth: '1000px', margin:'auto'}}>
                        <div style={{ textAlign:'left', color: 'rgb(165, 155, 155)', fontSize: '14px'}}>Leaderboard</div>
                        <div style={{ textAlign:'left', fontSize: '20px', fontWeight:'600'}}>Leaderboard</div>
                    </div>
                </div>
                <div className='leaderboard'>
                    <div className="leaderBoardHeader clear" style={{borderBottom: '1px solid #e7eeef', borderTop: '1px solid #e7eeef'}}> 
                        <div className="float-left" style={{width: '33.33%', padding: '10px', color:'#738f93', fontWeight:'600', fontSize: '16px'}}>Hacker Name</div>
                        <div className="float-left"  style={{width: '33.33%', padding: '10px', color:'#738f93', fontWeight:'600', fontSize: '16px'}}>Rank</div>
                        <div className="float-left"  style={{width: '33.33%', padding: '10px', color:'#738f93', fontWeight:'600', fontSize: '16px'}}>Score</div>
                    </div>
                    <div>{rows}</div>
                </div>
            </div>
        )
    }
}