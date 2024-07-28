import React, {Component} from 'react';
import classes from './App.module.css';

import ProductDetails from './Productdetails/productdetails';
import Topbar from './Topbar/Topbar';
import ProductImage from './ProductImage/ProductImage';

import ProductData from './Utils/ProductData';
class App extends Component {
state={
  productdata:ProductData,
  currentimagepos:0,
  showheart:false,
}

onClickupdate=(pos)=>{
  
  this.setState({currentimagepos:pos});
}

onfeatureclick=(pos)=>{
  let updatefeature=false;
  if(pos==1){ // means it click haert rate feature because it have values like time =0 gheart-=1 means true and false
    updatefeature=true;
  }
  this.setState({showheart:updatefeature});
}
  render()
  {
    return (
      <div className="App">
        <header className="App-header">
          <Topbar />
        </header>
  
        <div className={classes.MainContainer}>
          <div className={classes.ProductImage}>
            <ProductImage currentimage={this.state.productdata.colorOptions[this.state.currentimagepos].imageUrl}
            showheart={this.state.showheart}/>
          </div>
  
          <div className={classes.ProductData}>
            <ProductDetails data={this.state.productdata} 
            onClickupdate={this.onClickupdate} currentimagepos={this.state.currentimagepos }
            onfeatureclick={this.onfeatureclick} showheart={this.state.showheart}/>
          </div>
        </div>
      </div>
    );
  }
  
}

export default App;
