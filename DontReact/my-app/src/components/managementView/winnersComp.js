import React,{Component } from 'react';

const WinnerMod =(props) =>{
    return(
        <div className="ui card" style={{ marginLeft: '8rem'}}>
            <div className="image">               
            </div>
            <div className="content">
                <a className="header">{props.team}</a>
                <div className="meta">               
                </div>
                <div className="description">                    
                    {
                        props.winnerNameList.map((winner) =>
                        {
                            return (<span style={{display:'block'}}>{winner.name} - ({winner.portfolio})</span>)
                        })
                    }                    
                </div>
            </div>
            <div className="extra content" style={{backgroundColor: 'lightseagreen'}}>
                <a style={{fontSize: '12pt',fontSamily: 'cursive'}}> 
                    <i className="gift icon"></i>
                    {props.place}
                </a>
            </div> 
        </div>     
    )
}


export default WinnerMod;