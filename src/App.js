import "./App.css";
import React from "react";
import PriceCart from "./components/PriceCart";
import "bootstrap/dist/css/bootstrap.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faCheckSquare, faCoffee } from "@fortawesome/free-solid-svg-icons";

library.add(fab, faCheckSquare, faCoffee);

const App = () => {
  return (
    <div className="container mt-5 py-3 px-3 ">
      <div className="row">
        <PriceCart
          col="col-sm-12 col-lg-4 col-md-6"
          type="FREE"
          Price="0"
          User="Single User"
          storage="5GB Storage"
          one={true}
          muted="muted"
        />
        <PriceCart
          col="col-sm-12 col-lg-4 col-md-6"
          type="PLUS"
          Price="9"
          User="5 Users"
          storage="50GB Storage"
          one={true}
          muted=""
        />
        <PriceCart
          col="col-sm-12 col-lg-4"
          type="PRO"
          Price="49"
          User="Unlimited Users"
          storage="150GB Storage"
          one={false}
          muted=""
        />
      </div>
    </div>
  );
};

export default App;
