import React from "react";
//import Popup from "reactjs-popup";
import './JobPopup.css';

class Popup extends React.Component {
  render() {
    return (
      <div className='popup'>
        <div className='popup_inner'>
          <h1>{this.props.text}</h1>
        <button onClick={this.props.closePopup}>close me</button>
        </div>
      </div>
    );
  }
}

export default Popup;

// class JobPopup extends React.Component {
//     render() {
//         return (
//   <Popup trigger={<button className="button"> Open Modal </button>} modal>
//     {close => (
//       <div className="modal">
//         <a className="close" onClick={close}>
//           &times;
//         </a>
//         <div className="header"> Modal Title </div>
//         <div className="content">
//           atum sed eius cumque, delectus saepe repudiandae
//           explicabo nemo nam libero ad, doloribus, voluptas rem alias. Vitae?
//         </div>
//         <div className="actions">
//           <Popup
//             trigger={<button className="button"> Trigger </button>}
//             position="top center"
//             closeOnDocumentClick
//           >
            
//           </Popup>
//           <button
//             className="button"
//             onClick={() => {
//               console.log('modal closed ')
//               close()
//             }}
//           >
//             close modal
//           </button>
//       </div>
//       </div>
//     )}
//   </Popup>
// );
// }
// }

//  export default JobPopup;
