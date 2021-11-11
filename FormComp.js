import React from 'react';  
class FormComp extends React.Component {  
constructor(props) {  
super(props);  
this.updateSubmit = this.updateSubmit.bind(this);  
this.input = React.createRef();  
}  
updateSubmit(event) {  
alert('Successful entry');  
event.preventDefault();  
}  
render() {  
return (  
<form onSubmit={this.updateSubmit}>  
<h1>Uncontrolled Form</h1>  
<label>Email:  
<input type="text" ref={this.input} />  
</label>  
<input type="submit" value="Submit" />  
</form>  
);  
}  
}  
export default FormComp;