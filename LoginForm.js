import React, { Component } from 'react';
function Funex(props)
{
    return(
        <div>Welcome to {props.name}<br/>
         {props.children}</div>
    );
}
class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state={
            uname:""
        }
        this.fun=this.fun.bind(this);
        this.signIn=this.signIn.bind(this);
    }
    fun(e)
    {
        this.setState({uname:e.target.value})
    }
    signIn()
    {
        alert("Welcome to "+this.state.uname);
    }
    render() {
        return (
            <Funex name="Sita">                    
                User Name: <input type="text" onChange={this.fun} /> <br/>
                Pass Word: <input type="password" /> <br/>
                <input type="button" onClick={this.signIn} value="Sign In" />                                 
            </Funex>
        );
    }
}
export default LoginForm;