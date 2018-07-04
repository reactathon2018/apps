import React,{ Component } from 'react';
import C3Chart from 'react-c3js';
import 'c3/c3.css';
import WinnerMod from './winnersComp';

class ManagementView extends Component {

    constructor(){
        super();
        this.state = {
            data :{
                columns: [ 
                    ['CFO', 30],
                    ['CMB', 50],
                    ['NTS', 50]
                ],
                type: 'pie',
                tooltip: {
                    
                }
            },
            Orgdata :{
                columns: [ 
                    ['CFO', 10],
                    ['CMB', 20],
                    ['NTS', 40]
                ],
                type: 'pie'
            },
            winners :[ {"team":"Dont React",
                        "winnerNameList" :[{name :"Ranjith",portfolio :"CMB"},
                                           {name :"Ramesh",portfolio :"CFO"},
                                           {name :"Arul",portfolio :"CMB"}],
                        "place":"1st place"},
                        {"team":"Team-2",
                        "winnerNameList" :[{name :"Members",portfolio :"CMB"},
                                           {name :"Members",portfolio :"CFO"},
                                           {name :"Members",portfolio :"CMB"}],
                        "place":"2nd place"},
                        {"team":"Team-3",
                        "winnerNameList" :[{name :"Members",portfolio :"CMB"},
                                           {name :"Members",portfolio :"CFO"},
                                           {name :"Members",portfolio :"CMB"}],
                        "place":"3rd place"}]
        };          
    }   

    render(){
        console.log(this.props);
        return (
            <div className="ui segment detailsList">
                <div>
                    <h2 style={{textAlign:'center'}}>Management Dashboard</h2>
                    <div className='filter'>Filter : Reactathon</div>
                    <div style={{padding:'1rem',marginLeft:'13.5rem'}}>
                        <h3>Participants (%) Per Organization</h3>
                    </div>
                    <div className="ui grid">                    
                        <div className="eight wide column" style={{marginTop:'5rem'}}>                            
                            <C3Chart data={this.state.data} />
                        </div>
                        <div className="eight wide column">
                            {
                                this.state.winners.map((winner) =>{
                                    return <WinnerMod {...winner} style={{display:'inline-block'}}/> 
                                })   
                            }                          
                        </div>                    
                    </div>
                </div>
                <div className="graphContainer">
                    <div className='filter'>Filter : Organisation</div>
                    <div style={{padding:'1rem',textAlign :'center'}}>
                        <h3>Hackathons (%) Per Organization</h3>
                    </div>
                    <div className="ui grid">                    
                        <div className="eight wide column" style={{marginTop:'3rem',marginLeft:'24rem'}}>                            
                            <C3Chart data={this.state.Orgdata} />
                        </div>                                        
                    </div>
                </div>
            </div>
        )
    }
}

export default ManagementView;