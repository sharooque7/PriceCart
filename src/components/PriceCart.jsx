import React from "react";
import "./PriceCart.css";
import "bootstrap/dist/css/bootstrap.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const priceCart = (props) => {
  let colName = props.col;
  let muted = props.muted;
  return (
    <div className={colName}>
      <div className="card" style={{ width: "19.5rem" }}>
        <div className="card-body">
          {/* prettier-ignore */ }
          <h5 className="card-title text-muted text-uppercase text-center">{props.type}</h5>
          <h6 className="text-center price">
            ${props.Price}
            <span className="months">/month</span>
          </h6>
          <hr />
          {/* prettier-ignore */ }
          <ul>
            <li style={{ listStyle: "none" }} className="py-2">
              <span><FontAwesomeIcon icon={faCheck} /></span>
              <span className="px-2">{props.User}</span>
            </li>
            <li style={{ listStyle: "none" }} className="py-2">
              <span>
                <FontAwesomeIcon icon={faCheck} />
              </span>
              <span className="px-2">{props.storage}</span>
            </li>
            <li style={{ listStyle: "none" }} className="py-2">
              <span> <FontAwesomeIcon icon={faCheck} /></span>
              <span className="px-2">Unlimited Public Projects</span>
            </li>
            <li style={{ listStyle: "none" }} className="py-2">
              <span> <FontAwesomeIcon icon={faCheck} /></span>
              <span className="px-2">Community Access</span>
            </li>
            <li style={{ listStyle: "none" }} className= {`py-2 text-${muted}`}>
              <span> <FontAwesomeIcon icon={faTimes} /></span>
              <span className="px-2">Unlimited Private Projects</span>
            </li>
            <li style={{ listStyle: "none" }} className = {`py-2 text-${muted}`}>
              <span> <FontAwesomeIcon icon={faTimes} /></span>
              <span className="px-2">Dedicated Phone Support</span>
            </li>
            <li style={{ listStyle: "none" }} className= {`py-2 text-${muted}`}>
              <span><FontAwesomeIcon icon={faTimes} /></span>
              <span className="px-2">{props.one ?'Free Subdomain':'Unlimited Free Subdomain'}</span>
            </li>
            <li style={{ listStyle: "none" }} className= {`py-2 text-${props.one && 'muted'}`}>
              <span> <FontAwesomeIcon icon={faTimes} /></span>
              <span className="px-2">Monthly Status Reports</span>
            </li>
          </ul>
          <button style={{ width: "80%" }} className="btn  btn-primary mx-4">
            BUTTON
          </button>
        </div>
      </div>
    </div>
  );
};

export default priceCart;
