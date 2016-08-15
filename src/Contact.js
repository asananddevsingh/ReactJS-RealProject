import React from 'react';

/*class Contact extends React.Component {
	render() {		
		return (			
				<li>{this.props.contact.name}: {this.props.contact.phone} </li>
		);
	}
};*/


/*Making functional stateless component*/
const Contact = ({contact, countryCode}) =>
<li>
	{contact.name + "  ::  " + countryCode + "-" + contact.phone}
</li>


export default Contact;