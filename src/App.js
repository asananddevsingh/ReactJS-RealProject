import React from 'react';
import ReactDOM from 'react-dom';
import ContactsList from './ContactsList';

let contacts = [
	{ id:101, name: 'Anand Dev',	phone: '9599663363' },
	{ id:102, name: 'Uttam',	phone: '3238467737' },
	{ id:103, name: 'Dev ',	phone: '4374387774' },
	{ id:104, name: 'Gunnu',	phone: '3764377377' },
	{ id:105, name: 'Praveen',	phone: '8989283333' }
]

class App extends React.Component{
	render(){
		return (
			<div>
				<h1> Contact List </h1>
				<ContactsList contacts={this.props.contacts}/>
			</div>
		);
	}
};

ReactDOM.render(<App contacts={contacts}/>, document.getElementById('app'));