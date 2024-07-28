import React from "react";
import classes from './Productdetails.module.css'; // Use the correct casing;
import ProductData from '../Utils/ProductData';


    const Productdetails=(props) =>{ 
        const coloroptions=props.data.colorOptions.map((item,pos)=>{
            const classArr=[classes.Productlist]
            if(pos===props.currentimagepos)
            {
                classArr.push(classes.SelectedProduct);
            }
            return(
                <img key={pos} className={classArr.join(' ')} src={item.imageUrl} alt={item.styleName} 
                onClick={() => props.onClickupdate(pos)} />    
                );
        });

        const featurelist=props.data.featureList.map((item,pos)=>{
            const classArr=[classes.Item];
            if(pos===1 && props.showheart)
            {
                classArr.push(classes.SelectedItem);
            }
            else if(pos==0 && !props.showheart){
                classArr.push(classes.SelectedItem);
            }
            return(
                <button onClick={() => props.onfeatureclick(pos)} key={pos} className={classArr.join(' ')}>{item}</button>
                );
        });
    return(
        <div className={classes.ProductData}>
          <h1 className={classes.ProductDatatitle}>{ProductData.title}</h1>
          <p className={classes.ProductDatadescription}>{ProductData.description}</p>
          <h3 className={classes.Sectionhead}>Select Color</h3>
          <div>
            {coloroptions}
            {/* <img className={[classes.Productlist, classes.SelectedProduct].join(' ')} src="red1.jpeg" alt="Red"/>
            <img className={classes.Productlist} src="red1.jpeg" alt="Red"/>
            <img className={classes.Productlist} src="red1.jpeg" alt="Red"/>
            <img className={classes.Productlist} src="red1.jpeg" alt="Red"/> */}
          </div>
          <h3 className={classes.Featureshead}>Features</h3>
          <div>
            {featurelist}
          </div>
            <button className={classes.buy}>Buy Now</button>
        </div>
    )
}
export default Productdetails;