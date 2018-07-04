import {combineReducers} from 'redux';
import HackList from './reducer-hacklist';
import ActiveEvent from './reducer-active-event';
import Events from './reducer-event-list'
import registerdetails from './reducer-register-details'


/*
 * We combine all reducers into a single object before updated data is dispatched (sent) to store
 * Your entire applications state (store) is just whatever gets returned from all your reducers
 * */

const allReducers = combineReducers({
    hacks: HackList,
    activeEvent: ActiveEvent,
    events: Events,
    register: registerdetails
});

export default allReducers
