import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import sampleFishes from '../sample-fishes.js'

class App extends React.Component {
  constructor(){
    super();
    this.addFish = this.addFish.bind(this);
    this.loadSamples = this.loadSamples.bind(this);
    this.state = {
      fishes : {},
      order : {}
    }
  }
  addFish(fish){
    const fishes = {...this.state.fishes};
    const stamp = Date.now();
    fishes[`fishes-${stamp}`] = fish;
    this.setState({fishes});
  }
  loadSamples(){
    this.setState = {
      fishes: sampleFishes
    }
  }
  render(){ 
    return (
    		<div className="catch-of-the-day">
          <div className="menu"> 
            <Header tagline="Fresh Fish"/>
          </div>
          <Order />
          <Inventory addFish={this.addFish} loadSamples={this.loadSamples} />
        </div>
    	)
  }

}

export default App;