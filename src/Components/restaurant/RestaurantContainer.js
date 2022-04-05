import React from "react";
import "../../css/restaurantStyle.css";
import pic15 from "../../photos/pic15.jpg";
import pic11 from "../../photos/pic11.jpg";

const RestaurantContainer = () => {
  return (
    <>
      <h1>Restaurant</h1>
      <div className="container">
        <img src={pic15} className="pics"></img>
        <div>
          <h4 className="mt-5">Opening hours:</h4>
          <p>
            Thursday - Sunday <br />
            16:00 - 22:00 <br />
            We are looking forward to your visit! <br />
            Table reservations are requested!
          </p>
        </div>
      </div>
      <div className="container">
        <p className="p-3">
          <span>Dear friends, </span><br /> <br />
          visit our bouquet restaurant and enjoy the Mediterranean ambience of
          the large, flower-decorated sun terrace. <br />
           Let yourself be spoiled by many homemade dishes, from the traditional Straußwirtschaft kitchen to
          the specialties from the Free State of Flaschenhals.
          Enjoy the wines from our own production with their different
          characters, the different grape varieties and locations. <br /> <br />
          <span>We are looking forward to your visit!</span>
        </p>
        <img src={pic11} className="pics"></img>
      </div>
    </>
    
  );
};

export default RestaurantContainer;
