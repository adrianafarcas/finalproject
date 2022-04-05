import React from "react";
import "../css/homeStyle.css";
import { Button, Card } from "react-bootstrap";
import pic1 from "../photos/pic1.JPG";
import pic3 from "../photos/pic3.JPG";
import pic11 from "../photos/pic11.jpg";

function AppContainer() {
  return (
    <>
      <Card className="bg-dark text-white">
        <Card.Img src={pic1} alt="Card image" />
        <Card.ImgOverlay>
          <h1 className="title">Weingut am Löwenkopf</h1>
          <h2 className="subtitle"> A place like no other</h2>
        </Card.ImgOverlay>
      </Card>


      <div>
        <div className="container" id="about">
          <img id="pics" src={pic3}></img>
          <div className="content">
          <h4>EXQUISITE WINES FROM THE SLOPES OF THE UPPER MIDDLE RHINE VALLEY</h4>
          <p className="mt-auto">
            Our vineyards are located in the narrow valley of the Rhine, south
            of the Loreley, in the vicinity of the towns of Kaub (Middle Rhine
            wine-growing region) and Lorch (Rheingau wine-growing region).
            <br></br>
            <Button variant="outline-dark" size="sm" href="winery" className="mt-4">
              About Us
            </Button>
          </p>
          </div>
          
        </div>


       
        <div className="container" id="restaurant">
              <div className="content">
              <h4>RESTAURANT</h4>
              <p>
              Experience our bouquet restaurant and enjoy the Mediterranean
              ambience of the large, flower-decorated sun terrace. Let yourself be spoiled by many homemade dishes, from the traditional Straußwirtschaft cuisine to the specialties from the Free State of Flaschenhals.
            <br></br>
              <Button variant="outline-dark" size="sm" href="restaurant" className="mt-4">
              Visit our restaurant
            </Button>
            </p>
              </div>
            
            <img src={pic11} id="pics"></img>
           
            
        </div>
      </div>
    </>
  );
}

export default AppContainer;
