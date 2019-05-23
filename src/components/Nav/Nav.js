import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';

const Nav = (props) => {
    return (
        <div className="nav">
            {props.backArrow ?
                <div className="navLeft2"
                    onClick={() => { props.history.push(props.backArrow) } }>
                    <i className="fas fa-chevron-left"></i>
                </div>
                :
                <div className="navLeft2"
                    onClick={() => { props.history.goBack() }}>
                    <i className="fas fa-chevron-left"></i>
                </div>
            }
            <div className="navTitle">
                <h2 className="navH2">{props.pageName}</h2>
            </div>

            <div className="navRight2">
                {props.home ?
                    <Link to={props.home}>
                        <i className="fas fa-home"></i>
                    </Link>
                    :
                    <Link to='/home'>
                        <LogOutButton className="nav-link" />
                    </Link>
                }


            </div>
            }
                </div>)
}

// const Nav = (props) => (
//   <div className="nav">

//   <div className="navLeft">
//     <i class="fas fa-chevron-left"></i>
//   </div> 

//   <div className="navTitle">
//     <h2 className="navH2">VARIABLE NAME</h2>
//   </div>

//   <div className="navRight">
//   <Link to="/home">
//         {/* Show this link if they are logged in or not,
//         but call this link 'Home' if they are logged in,
//         and call this link 'Login / Register' if they are not */}
//         {props.user.id ? <i class="fas fa-home"></i> : 'Login'}
//       </Link>
//     </div>

//   </div>
// );


// const Nav = (props) => (
//   <div className="nav">
//     <Link to="/home">
//       <h2 className="nav-title">VARIABLE NAME</h2>
//     </Link>
//     <div className="nav-right">
//       <Link className="nav-link" to="/home">
//         {/* Show this link if they are logged in or not,
//         but call this link 'Home' if they are logged in,
//         and call this link 'Login / Register' if they are not */}
//         {props.user.id ? 'Home' : 'Login / Register'}
//       </Link>
//       {/* Show the link to the info page and the logout button if the user is logged in */}
//       {props.user.id && (
//         <>
//           <LogOutButton className="nav-link"/>
//         </>
//       )}
//       {/* Always show this link since the about page is not protected */}
//     </div>
//   </div>
// );

// Instead of taking everything from state, we just want the user
// object to determine if they are logged in
// if they are logged in, we show them a few more links 
// if you wanted you could write this code like this:
// const mapStateToProps = ({ user }) => ({ user });



// const mapStateToProps = state => ({
//   user: state.user,
// });

// export default connect(mapStateToProps)(Nav);
export default withRouter(Nav);