import React from "react";
import "../../css/wineryStyle.css";
import pic8 from "../../photos/pic8.jpg";
import pic13 from "../../photos/pic13.jpg";
import pic14 from "../../photos/pic14.jpg";
import logo from "../../photos/logo.jpg";
import { Card } from "react-bootstrap";
import {grapes} from "./grapes.js";
import { GrapesContext } from "./grapesContext";
import CardComponent from "./cardComponent";

const WineryContainer = () => {
  return (
    <>
      <Card className="bg-dark text-white">
        <Card.Img src={pic8} alt="Card image" />
        <Card.ImgOverlay>
          <h1 className="title">Viticulture in a World Heritage Site</h1>
        </Card.ImgOverlay>
      </Card>

      <div className="container">
        <p className="p-5">
          Our vineyards are located in the narrow valley of the Rhine , south of
          the Loreley, in the vicinity of the towns of Kaub (Middle Rhine
          wine-growing region) and Lorch (Rheingau wine-growing region).{" "}
          <br></br>Weathered slate soils with various admixtures of silicates,
          quartzite or loess-loam are predominant here. Each of our Kauber &
          Lorcher vineyards is unique with its own character. It is important to
          preserve this unique character - also known as terroir - and to bring
          it out in our wines. Riesling and Pinot Noir have proven themselves
          here in the Middle Rhine Valley for centuries.
        </p>

        <img src={pic13} className="pics"></img>
      </div>
      <div className="container">
        <img src={pic14} className="pics"></img>

        <p className="p-5">
          A good 90% of our approx. 3.5 hectares of vineyards are planted with
          these two grape varieties - Riesling and Pinot Noir. The remaining 10%
          are divided between Regent (a new, fungus-resistant red wine variety
          with a Mediterranean wine character) and the Pinot Blanc, which is
          extremely popular with our wine lovers. <br></br> Steep slopes and
          steep slopes with a slope of up to 70% guarantee our vines intensive
          sunshine. <br></br> We practice natural vine cultivation, taking into
          account existing resources and integrated into a concept of optimal
          vine care. The result: high-quality wines and sparkling wines with
          optimum digestibility.
        </p>
      </div>

      <div className="container">
        <img src={logo} id="logo"></img>
        <p>
          We are a member of the Mittelrhein-Riesling Charter and are committed
          to producing high-quality Riesling wines. The slate soil , the steep
          slopes and the climatic conditions of a unique wine culture landscape
          result in the special character of our wines.
        </p>
      </div>
      <h4>Our Grapes</h4>
      <div className="container" >
        <GrapesContext.Provider value={{grapes}}>
          <CardComponent/>
        </GrapesContext.Provider>
        
        
      </div>
    </>
  );
};

export default WineryContainer;
