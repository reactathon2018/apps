import React from 'react';

export default class HackthonDetailView extends React.Component {
    render(){
        return (
            <div className="clear" style={{margin: '20px', padding: '20px', boxShadow: 'rgba(120, 143, 147, 0.5) 0px 6px 16px 0px'}}>
                <div style={{}}>
                    <div className="align-left" style={{fontSize:'20px', fontWeight:'600'}}>Problem title</div>
                    <div className="align-left" style={{fontSize:'15px', paddingTop: '10px'}}>
                        Yahoo! Internal Hack Day Event at Yahoo! HQ (Sunnyvale, CA, USA), June 6, 2006
                        A hackathon (also known as a hack day, hackfest or codefest) is a design sprint-like event in which computer programmers and others involved in software development, including graphic designers, interface designers, project managers, and others, often including subject-matter-experts, collaborate intensively on software projects.[1]

                        The goal of a hackathon is to create usable software. Hackathons tend to have a specific focus, which can include the programming language used, the operating system, an application, an API, or the subject and the demographic group of the programmers. In other cases, there is no restriction on the type of software being created.
                    </div>
                </div>
                <div className="solution align-left float-left" style={{width: '70%'}}> 
                     <div style={{fontWeight: '600', fontSize: '18px', paddingTop: '20px' }}>Give your solution here</div>
                     <textarea style={{height: '400px', width: '100%', resize: 'none', margin: '10px 0 10px 0 ', padding: '10px', border: '1px solid #c3c3c3', borderRadius: '6px'}} placeholder="Type your solution here"></textarea>
                     <textarea placeholder="Paste your github URL" style={{width: '100%', resize: 'none', margin: '10px 0 10px 0 ', padding: '10px', border: '1px solid #c3c3c3', borderRadius: '6px'}}></textarea>
                     <div style={{ float:'right', padding: '10px 40px', background: 'green', fontWeight: 'bold', color:'#FFF'}}>Submit Solution</div>
                </div>
            </div>
        )
    }
}