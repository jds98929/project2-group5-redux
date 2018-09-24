import * as React from "react";
import logo2 from '../../assets/logo2.jpeg';
import { IRegisterState, IState } from "../../reducers";
import * as registerActions from '../../actions/register-new-user/register.actions';
import { RouteComponentProps } from "react-router";
import { environment } from "../../environment";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

interface IProps extends RouteComponentProps<{}>, IRegisterState {
    createFirstName: (firstName: string) => any,
    createLastName: (lastname: string) => any,
    createUsername: (username: string) => any,
    createPassword: (password: string) => any,
    showError: (errorMessage: string) => any,
    submit: (userInfo: any) => any
}

export class RegisterNewUser extends React.Component<IProps, {}>{
    constructor(props: any) {
        super(props);
    }
    public submit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        fetch(environment.context + 'users', {
            body: JSON.stringify(this.props.userInfo),
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'POST',
        })
            .then(resp => {
                console.log(resp)
                if (localStorage.getItem('username')) {
                    this.props.showError('Username already exists');
                } else if (resp.status === 201) {
                    return resp.json();
                } else {
                    this.props.showError('Failed to create user at this moment');
                }
                throw new Error('Failed to create user');
            })
            .then(resp => {
                localStorage.setItem('user', JSON.stringify(resp));
                this.props.history.push('/home');
            })
            .catch(err => {
                console.log(err);
            });
    }
    public enterFirstName = (event: any) => {
        this.props.createFirstName(event.target.value);
    }

    public enterLastName = (event: any) => {
        this.props.createLastName(event.target.value);
    }
    public enterUsername = (event: any) => {
        this.props.createUsername(event.target.value);
    }
    public enterPassword = (event: any) => {
        this.props.createPassword(event.target.value);
    }
    public render() {
        const { errorMessage, userInfo } = this.props;
        return (
            <div id="register-container">
                <form className="form-signin border border-primary" onSubmit={this.submit}>

                    <h1 className="h3 mb-3 font-weight-normal" id="please-register">Please enter the following info</h1>

                    <label htmlFor="registerFirstName" className="sr-only">First Name</label>
                    <input
                        onChange={this.enterFirstName}
                        value={userInfo.firstName}
                        type="text"
                        id="registerFirstName"
                        className="form-control"
                        placeholder="First Name"
                        required />
                    <label htmlFor="registerLastName" className="sr-only">Last Name</label>
                    <input
                        onChange={this.enterLastName}
                        value={userInfo.lastName}
                        type="text"
                        id="registerLastName"
                        className="form-control"
                        placeholder="Last Name"
                        required />
                    <label htmlFor="registerUsername" className="sr-only">Username</label>
                    <input
                        onChange={this.enterUsername}
                        value={userInfo.username}
                        type="text"
                        id="registerUsername"
                        className="form-control"
                        placeholder="Username"
                        required />

                    <label htmlFor="registerPassword" className="sr-only">Password</label>
                    <input
                        onChange={this.enterPassword}
                        value={userInfo.password}
                        type="password"
                        id="registerPassword"
                        className="form-control"
                        placeholder="Password"
                        required />

                    <button className="btn btn-lg btn-primary btn-block" type="submit">Create Account</button>
                    {errorMessage && <p id="error-message-register">{errorMessage}</p>}
                </form>
                <div>
                    <p><Link to ="/sign-in">Cancel account creation and head back to sign-in</Link></p>
                </div>
                <div className="row">
                    <br />
                    <img src={logo2} className="rounded-circle" id="sign-in-picture" width="300" height="200"></img>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: IState) => (state.register);
const mapDispatchToProps = {
  createFirstName: registerActions.createFirstName,
  createLastName: registerActions.createLastName,
  createUsername: registerActions.createUsername,
  createPassword: registerActions.createPassword,
  showError: registerActions.showError
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterNewUser);