// import React from 'react';
// import './CreateAccount.css';

// export class CreateAccount extends React.Component {

//     state = {
//         username: '',
//         email: '',
//         password: ''

//     }

// 	render() {
// 		return (
//             <div className="box-login">
// 		        <h2 className="title-text">Create an Account</h2>
//                 <form>
//                     <div className="form-field">
//     {/*                 <label for="username">Username</label> */}
//                         <input type="text" id="username" name="username" placeholder="Username" onChange={ event => this.setState({username: event.target.value})} />
//                     </div>
//                     <div className="form-field">
//     {/*                 <label for="email">Email</label> */}
//                         <input type="text" id="email" name="email" placeholder="Email" onChange={ event => this.setState({email: event.target.value})} />
//                     </div>
//                     <div className="form-field">
//     {/*                  <label for="password">Password</label> */}
//                         <input type="text" id="password" name="password" placeholder="Password" onChange={ event => this.setState({password: event.target.value})} />
//                     </div>
//                     <div className="form-field">
//     {/*                  <label for="confpassword">Confirm Password</label> */}
//                         <input type="text" id="confpassword" name="confpassword" placeholder="Confirm Password" />
//                     </div>
//                 </form>
//                 <div className="test">
//                     <button type="button">Sign up</button>
//                 </div>
//     {/*            <div className="tologin">Already have an account? <a href="">Login here</a>.</div>  */}
// 		    </div>
//         )
// 	}
// }

// export default CreateAccount;