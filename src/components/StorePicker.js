import React from 'react';
import {getFunName} from '../helpers';

class StorePicker extends React.Component {
  render(){
    return (
    		<form className="store-selector">
    			{ /* COMMENTS */}
				<h2>Please enter a store</h2>
				<input type="text"  required placeholder="Store Name" defaultValue={getFunName()} />
				<button type="submit">Visit Store</button>
    		</form>
    	)
  }

}

export default StorePicker;
