import React, { Component } from 'react'

const ec=React.createContext();
export class App1 extends Component {
    constructor(props) {
        super(props);
        this.state={
            Id:100,
            Name:"Sai"
        }
        this.fun=this.fun.bind(this);
    }
    fun()
    {
        this.setState({Id:102});
    }  
    render() {
        return (
            <div>
                    Employee Id: {this.state.Id}
                    <br/>
                    Employee Name: {this.state.Name}<br/>
                    <button onClick={this.fun}>Change</button>                    
                    <br/>
                    <ec.Provider value={this.state}>
                        <Emp />                    
                    </ec.Provider>
            </div>
        )
    }
}

class Emp extends Component
{
    static contextType=ec;
    render()
    {
        return(
           <div> Employee Id: {this.context.Id}<br/>
           <Emp1></Emp1> 
           </div>
        )
    }
}

class Emp1 extends Component
{
    static contextType=ec;
    render()
    {
        return(
           <h1> Employee Id: {this.context.Id} </h1>
        )
    }
}

export default App1