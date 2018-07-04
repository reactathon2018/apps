import React from 'react';
import C3Chart from 'react-c3js';
import 'c3/c3.css';

export default class AdminComponent extends React.Component {
    render() {
        const data = {
                columns: [
                    ['data1', 30, 200, 100, 400, 150, 250, 50, 100, 250]
                ],
                type: 'bar',
                labels: true
        };
        const axis = {
            x: {
                type: 'category',
                categories: ['Reacthon', 'Speedthon', 'Bos Speedthon', 'Speedthon Test', 'Devopsthon', 'Hackers', 'cat7', 'cat8', 'cat9']
            }
        }
        const  legend =  {
            show: false
        }
        const tooltip= {
            show: false
        }
        const data2 = {
            columns: [
                ['Active Users', 30, 200, 100, 400, 150, 250],
                ['Inactive Users', 130, 100, 140, 200, 150, 50]
            ],
            type: 'pie'
        }
        const data3 = {
            columns: [
                ['Active Hackthons', 30, 200, 100, 400, 150, 250],
                ['Inactive Hackthons', 130, 100, 140, 200, 150, 50]
            ],
            colors: {
                'Active Hackthons': '#FF5733',
                'Inactive Hackthons': 'rgb(23, 190, 207)'
            },
            type: 'pie'
        }
        const data4 = {
            columns: [
                ['John Snow', 30, 200, 100, 400, 150, 250],
                ['Merlin', 130, 100, 140, 200, 150, 50],
                ['Kishore', 130, 100, 140, 200, 150, 50],
                ['Vishnu', 130, 100, 140, 200, 150, 50],
                ['Abinesh', 130, 100, 140, 200, 150, 50],
                ['Aravind', 130, 100, 140, 200, 150, 50],
                ['Edison', 130, 100, 140, 200, 150, 50],
                ['Raj', 130, 100, 140, 200, 150, 50],
                ['Karthika', 130, 100, 140, 200, 150, 50],
                ['Vinoth', 130, 100, 140, 200, 150, 50]

            ],
            type: 'pie'
        }
        return (
            <div> 
                <div className="adminWrapper clear">
                    <div className="popularGames">
                        <div className="clear" style={{padding:'25px 0 0 53px'}}>
                            <div style={{fontSize: '20px', fontWeight:'600',  float:'left' } } className="align-left">Popular Hackthons</div>
                            <div style={{float:'right', marginRight:'50px', padding:'10px 20px', cursor:'pointer', background:'green', color: '#FFF', fontWeight: 'bold'}}>Create Events</div>
                            <div style={{float:'right', marginRight:'50px', padding:'10px 20px', cursor:'pointer', background:'green', color: '#FFF', fontWeight: 'bold'}}>Manage Events</div>
                            <div style={{float:'right', marginRight:'50px', padding:'10px 20px', cursor:'pointer', background:'green', color: '#FFF', fontWeight: 'bold'}}>Manage Users</div>
                        </div>
                        <div style={{boxShadow:'0 6px 16px 0 rgba(115,143,147,.4)', background: '#fff', margin: '30px 50px', borderTop:'1px solid rgb(231, 238, 239)', minHeight: '400px'}}>
                            <div style={{padding: '30px'}}>
                                <C3Chart data={data} axis = {axis}  legend = {legend} tooltip ={tooltip}/>
                            </div>
                        </div>
                    </div>
                    <div className="userOnline float-left" style={{width: '33.33%'}}>
                        <div style={{fontSize: '20px', fontWeight:'600', padding:'25px 0 0 53px' } } className="align-left">Users Online Status</div>
                        <div  style={{ padding:'30px', boxShadow:'0 6px 16px 0 rgba(115,143,147,.4)', background: '#fff', margin: '30px 50px', borderTop:'1px solid rgb(231, 238, 239)', minHeight: '400px'}}>
                            <C3Chart data={data2}/>
                        </div>
                    </div>
                    <div className="hackthonsOnline float-left" style={{width: '33.33%'}}>
                        <div style={{fontSize: '20px', fontWeight:'600', padding:'25px 0 0 53px' } } className="align-left">Hackthons Status</div>
                        <div  style={{ padding:'30px', boxShadow:'0 6px 16px 0 rgba(115,143,147,.4)', background: '#fff', margin: '30px 50px', borderTop:'1px solid rgb(231, 238, 239)', minHeight: '400px'}}>
                            <C3Chart data={data3}/>
                        </div>
                    </div>
                    <div className="top10-users float-left" style={{width: '33.33%'}}>
                        <div style={{fontSize: '20px', fontWeight:'600', padding:'25px 0 0 53px' } } className="align-left">Top 10 Users</div>
                        <div  style={{ padding:'30px', boxShadow:'0 6px 16px 0 rgba(115,143,147,.4)', background: '#fff', margin: '30px 50px', borderTop:'1px solid rgb(231, 238, 239)', minHeight: '400px'}}>
                            <C3Chart data={data4}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}