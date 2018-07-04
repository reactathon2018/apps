import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import Spinner from '../../spinner/spinner';
export default class HackatonList extends React.Component {
    render() {
        const data = this.props.data ? this.props.data.toJS() : 'no data';
        console.log(data);
        return (
            <div>
                {
                    (this.props.isLoading) ? <div style={{position:'absolute', top:'50%', bottom: '0', left:'0', right: '0'}}><Spinner/></div> : 
                    this.getCardList()
                }
            </div>
        )
    }
    handleClick = ( event ) => {
        
    }
    getCardList = () => {
        //${p.number}
        var data = this.props.data.toJS();
        data = data.data;
        console.log(data, "data")
        return  <div className="body-container clear">
                    <div style={{boxShadow:'rgba(0, 0, 0, 0.2) 0px 2px 4px -1px', padding:'20px'}}>
                       <div style={{ maxWidth: '1000px', margin:'auto'}}>
                            <div style={{ textAlign:'left', color: 'rgb(165, 155, 155)', fontSize: '14px'}}>All Events</div>
                            <div style={{ textAlign:'left', fontSize: '20px', fontWeight:'600'}}>Events</div>
                        </div>
                    </div>
                    <div className="cardContainer" style={{ padding:'20px', maxWidth: '1040px',margin: 'auto'}}>
                       <div className="activeContent" style={{marginBottom: '50px'}}>
                            <div style={{textAlign: 'left', fontWeight: '600', fontSize: '16px', marginBottom: '10px'}}> Active Events</div>
                            <div className="activeContests">
                            <div> {
                                data.hackathons.map((item, index) => (
                                    
                                        <div  key={index} className="card" style={{padding: '20px',border:'2px solid #b3afaf', borderRadius:'10px',
                                                                    marginBottom: '10px', cursor:'pointer', lineHeight: '25px' }}>
                                            <Link to={`/hackthondetailview/${item.id}`}>
                                                <div  style={{fontWeight:'bold', fontSize: '18px', textAlign: 'left'}}>{item.name}</div>
                                            </Link>    
                                            <div className="clear">
                                                <div className="float-left">
                                                    <div> 
                                                        <span>Start Date : { moment (item.startDate).format("DD MMM  Y") } </span> 
                                                        <span style={{paddingLeft:'5px'}}>End Date : { moment(item.endDate).format("DD MMM  Y") } </span> 
                                                    </div>                                                
                                                </div>
                                                    <div onClick={() => this.props.apply(item.id)} className="float-right" style={{padding: '8px 20px', fontWeight:'bold', fontSize: '14px', color: '#FFF', background:'green'}}>Apply</div>
                                            </div>
                                        </div>
                                            
                                ))
                            }
                         </div>
                                
                            </div>
                        </div>
                        <div className="archieveContent">
                            <div style={{textAlign: 'left', fontWeight: '600', fontSize: '16px',  marginBottom: '10px'}}> Archieved Events</div>
                            <div className="archievedContests">
                            <div> {
                                data.hackathons.map((item, index) => (
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
                       
                    </div>
                </div>
    }
}