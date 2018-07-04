import React,{Fragment} from 'react';
import TopView from './EventTiles/TopView.jsx';
import UpComing from './EventTiles/UpComing.jsx';
import OnGoing from './EventTiles/OnGoing.jsx';
import Completed from './EventTiles/Completed.jsx';

class EventBody extends React.Component {

    render(){
        return (
            <Fragment>
                <TopView/>
                <div className="SubTilesWrapper">
                    <label className="heading4">Up Coming Events</label>
                    <UpComing/>
                    <label className="heading4">On Going Events</label>
                    <OnGoing/>
                    <label className="heading4">Completed Events</label>
                    <Completed/>
                </div>
            </Fragment>
        );
    }

}
export default EventBody;