
// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import qs from 'query-string';

// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import Nav from '../../Nav/Nav'


// class BioIdentify extends Component {

//     componentDidMount = () => {
//         const searchObject = qs.parse(this.props.location.search)
//         console.log('ID searchObject', searchObject.id);
//         this.props.dispatch({ type: 'GET_IDENTIFY', payload: searchObject.id });
//         console.log('GET_IDENTIFY', this.props.reduxState.bioReducer);
        
//     }

//     render() {
//         return (
//             <div>
//                 <center>
//                     <div>
//                         <h1>
//                             IDENTIFICATION 
//                         </h1>
//                     </div>

//                     <div>{this.props.reduxState.bioReducer.map(id =>
//                 <div>
// <p className="bioDivs">PASSPORT: FALSE (HARD CODED)</p>
// <p className="bioDivs">U.S. IDENTIFICATION: FALSE (HARD CODED)</p>
// <p className="bioDivs">NOTES: THIS NEEDS TO BE ADDED </p>
//                 </div>
// )}
// </div>

//     render() {
//         return (
//             <div>
// <Nav pageName='IDENTIFICATION' volunteer home='/home' /> 
//                 <center>
//                     <div>{this.props.reduxState.bioReducer.map(id =>
//                 <div>
// <p className="bioDivs">PASSPORT: FALSE (HARD CODED)</p>
// <p className="bioDivs">U.S. IDENTIFICATION: FALSE (HARD CODED)</p>
// <p className="bioDivs">NOTES: THIS NEEDS TO BE ADDED </p>
//                 </div>
// )}
// </div>


//                     {/* <label>PASSPORT: Y/N</label> <br/>
//                     <div className="bioDivs" >
//                     </div> <br/>
//                     <label> US ID: Y/N</label> <br/>
//                     <div className="bioDivs" >
//                     </div> <br/>
//                     <label> NOTES </label> <br/>
//                     <div className="bioDivs" >
//                     </div> <br/> */}
//                 </center>
//             </div>
//         );
//     }
// }

// const mapReduxStateToProps = (reduxState) => ({
//     reduxState
//     });

// export default connect(mapReduxStateToProps)(BioIdentify);