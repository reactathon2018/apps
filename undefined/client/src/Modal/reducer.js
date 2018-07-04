/** Constants */
import { SHOW_MODAL, HIDE_MODAL } from './actions';
import { fromJS } from 'immutable';

/** Initial State */
const initialModalState = {
  modalType: null
};

/** Modal reducer */
export default function modalReducer(state = fromJS(initialModalState), action) {

  switch (action.type) {

    case SHOW_MODAL:
      // newState.modalType = action.modalType;
      state = state.set("modalType", fromJS(action.modalType));
      return state;

    case HIDE_MODAL:
      state = fromJS(initialModalState);
      return state;

    default:
      return state;
  }

}