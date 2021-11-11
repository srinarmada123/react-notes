import React, { Component } from 'react';

class Sample1 extends Component {
    constructor(props) {
        super(props);
        this.state={
            Employees:[]
        }
    }
    componentDidMount()
    {
        fetch("http://localhost:3000/employees").then(res=>res.json()).then((r)=>{
            this.setState({Employees:r})
        })
    }
    render() {
        return (
            <div>
                <table border="1" rules="all">
                    <thead>
                    <tr>
                        <th>EMP ID</th>
                        <th>EMP NAME</th>
                        <th>EMP SALARY</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                        this.state.Employees.map(emp=>(                            
                            <tr key={emp.empNo}>
                        <td>
                            {emp.empNo}  
                        </td>
                        <td>{emp.empName}</td>
                        <td>{emp.salary}</td>
                    </tr>
                        ))
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Sample1;