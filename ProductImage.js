import React from "react";
import classes from './ProductImage.module.css'; // Use the correct casing;


const ProductImage=(props) =>{
    const currentHour=new Date().getHours()>9?new Date().getHours() :'0' + new Date().getHours();
    const currentMinute= new Date().getMinutes() >9 ? new Date().getMinutes() : '0' + new Date().getMinutes();
    return(
        <div className={classes.ProductImage}>
            <img src={props.currentimage} />
            {
                props.showheart?
                

                <div className={classes.Heart}>
                    <i class="fas fa-heartbeat"></i>
                    <p>78</p>
                </div>
                :
                
                <div className={classes.Time}>
                <p>{`${currentHour}: ${currentMinute}`}</p>
            </div>
            
            }
        </div>
    );
}
export default ProductImage;