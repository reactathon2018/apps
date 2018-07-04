/** Constants */
export const SHOW_MODAL = 'SHOW_MODAL';
export const HIDE_MODAL = 'HIDE_MODAL';
export const SIGNIN_MODAL = "signin";
export const REGISTER_MODAL = "register";
export const NOMINATION_MODAL = "nomination";
export const SIGNUP_MODAL = "signup";

/** Action-creators */
export const loadModal = (modalType) => {
  return {
    type: SHOW_MODAL,
    modalType
  };
};

export const hideModal = () => {
  return {
    type: HIDE_MODAL
  };
};