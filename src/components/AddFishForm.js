import React from 'react';

class AddFishForm extends React.Component {
  createFish(event){
  	event.preventDefault();

  }

  render(){
    return (
    		<form action="" className="fish-edit" onSubmit={(e) => this.createFish(e)}>
					<input  ref="" type="text" placeholder="Fish Name"/>
					<input type="text" placeholder="Fish Price"/>
					<select name="" id="">
						<option value="available">Fresh!</option>
						<option value="unavailable">Sold Out!</option>
					</select>
					<textarea placeholder="Fish Desc"></textarea>
					<input type="text" placeholder="Fish Image"/>
					<button type="submit">+ Add Item</button>
    		</form>
    	)
  }

}

export default AddFishForm;