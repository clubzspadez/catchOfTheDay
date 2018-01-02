import React from 'react';
import {getFunName} from '../helpers';

class StorePicker extends React.Component {
	goToStore(event){
		event.preventDefault();
		//grab text from box
		const iDforStore = this.storeInput.value;
		console.log(this.storeInput.value);

		//transition from / to storeid
		this.context.router.transitionTo(`/store/${iDforStore}`);
	}
  render(){
    return (
    		<form className="store-selector" onSubmit={this.goToStore.bind(this)}>
    			{ /* COMMENTS */}
				<h2>Please enter a store</h2>
				<input type="text"  required placeholder="Store Name" defaultValue={getFunName()} ref={(input)=> {this.storeInput = input}}/>
				<button type="submit">Visit Store</button>
    		</form>
    	) 
  }

}

StorePicker.contextTypes = {
	router: React.PropTypes.object
}

export default StorePicker;
