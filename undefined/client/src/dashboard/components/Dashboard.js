import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import C3Chart from 'react-c3js';
import 'c3/c3.css';

export default class Dashboard extends React.Component {  
    constructor(){
        super();
        this.state = {data: null, user: null};
    } 
    componentWillReceiveProps (props){
        this.setState({
            data: props.data,
            user: props.user ? props.user.toJS() : null
        });
    }     
    render() { 
        const data = this.state.user != null ? {
            columns: [
              ['Your Score', this.state.user.score],
              ['Max Score', 2350]
            ],
            type : 'pie'
          } : {};       
        console.log(this.state.user);
        // console.log(this.props.data);
        return(            
            <div className="body-container clear">
            {this.state.user != null ? 
                <div className="clear" style={{height: '350px', margin: '20px 100px', padding: '20px', boxShadow: 'rgba(120, 143, 147, 0.5) 0px 6px 16px 0px'}}>
                    <div className="col-md-3">
                        <img className="img-thumbnail" width="250px" src="https://cdn.iconscout.com/public/images/icon/free/png-512/avatar-user-coder-3579ca3abc3fd60f-512x512.png"/>
                        <div style={{ padding: '10px',  fontSize: '20px', fontWeight:'600'}}>{this.state.user.name}</div> 
                    </div>
                    <div className="col-md-3">
                        <div style={{ marginTop: '50px', padding: '10px',  fontSize: '100px', fontWeight:'600', color: '#1ba94c'}}>{this.state.user.badges}</div>                                
                        <div style={{ padding: '10px',  fontSize: '18px', fontWeight:'600'}}>Badges</div>
                    </div>
                    <div className="col-md-3">
                        <div style={{ marginTop: '50px', padding: '10px',  fontSize: '100px', fontWeight:'600', color: '#1ba94c' }}>{this.state.user.score}</div>                                
                        <div style={{ padding: '10px',  fontSize: '18px', fontWeight:'600'}}>Score</div>
                    </div>
                    <div className="col-md-3">
                        <C3Chart data={data}/>
                    </div>                    
                </div> : <div><h3>Please Sign In</h3></div>}
                {this.state.data != null ? <div className="cardContainer" style={{ padding:'20px', maxWidth: '1040px',margin: 'auto'}}>
                    <div className="activeContent" style={{marginBottom: '50px'}}>
                        <div style={{textAlign: 'left', fontWeight: '600', fontSize: '16px', marginBottom: '10px'}}> Registered Events</div>
                        <div className="activeContests">
                        <div> {
                            this.state.data.hackathons.map((item, index) => (
                                <Link to={`/hackthondetailview/${item.id}`} key={index}>
                                    <div  className="card" style={{padding: '20px',border:'2px solid #b3afaf', borderRadius:'10px',
                                                                marginBottom: '10px', cursor:'pointer', lineHeight: '25px' }}>
                                    
                                        <div  style={{fontWeight:'bold', fontSize: '18px', textAlign: 'left'}}>{item.name}</div>
                                        <div className="clear">
                                            <div className="float-left">
                                                <div> 
                                                    <span>Start Date : { moment (item.startDate).format("DD MMM  Y") } </span> 
                                                    <span style={{paddingLeft:'5px'}}>End Date : { moment(item.endDate).format("DD MMM  Y") } </span> 
                                                </div>                                                
                                            </div>
                                                <div className="float-right" style={{padding: '8px 20px', fontWeight:'bold', fontSize: '14px', color: '#FFF', background:'green'}}>Apply</div>
                                        </div>
                                    </div>
                                </Link>             
                            ))
                        }
                        </div>                            
                        </div>
                    </div>
                    <div className="archieveContent">
                        <div style={{textAlign: 'left', fontWeight: '600', fontSize: '16px',  marginBottom: '10px'}}> Participated Events</div>
                        <div className="archievedContests">
                        <div> {
                            this.state.data.hackathons.map((item, index) => (
                                <Link to={`/hackthondetailview/${item.id}`} key={index}>
                                    <div  className="card" style={{padding: '20px',border:'2px solid #b3afaf', borderRadius:'10px',
                                                                marginBottom: '10px', cursor:'pointer', lineHeight: '25px' }}>
                                    
                                        <div  style={{fontWeight:'bold', fontSize: '18px', textAlign: 'left'}}>{item.name}</div>
                                        <div className="clear">
                                            <div className="float-left">
                                                <div> 
                                                    <span>Start Date : { moment (item.startDate).format("DD MMM  Y") } </span> 
                                                    <span style={{paddingLeft:'5px'}}>End Date : { moment(item.endDate).format("DD MMM  Y") } </span> 
                                                </div>                                                
                                            </div>
                                                <div className="float-right" style={{padding: '8px 20px', fontWeight:'bold', fontSize: '14px', color: '#FFF', background:'grey'}}>View Solutions</div>
                                        </div>
                                    </div>
                                </Link>             
                            ))
                        }
                        </div>
                        </div>
                    </div>
                    
                </div> : <div></div>}
            </div>
        )
    }
}
