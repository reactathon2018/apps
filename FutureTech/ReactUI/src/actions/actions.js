export const incrementCounter = () => {
    console.log("incrementCounter triggered ");
    return (dispatch) => {
        dispatch({ type: "INCREMENT"});      
    };
}
