import React  from "react";
import { Jumbotron, Button } from "reactstrap";
import "../../App.css";

const Header = () => {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <img
              className="header-logo"
              src={require("./spreadshop_logo.svg")}
              alt="Spreadshirt-log"
            />
          </div>
        </div>
        <Jumbotron className="header-jumbotron">
          <div className="container">
            <div className="row row-header align-items-center">
              <div className="col-12 col-auto align-self-center">
                <h3 className="header-text text-center">Sell Custom T-Shirt</h3>
                <br />
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col-12 col-auto align-self-center">
                <p className="text-center">
                  Make money with custom t-shirt and other apparel in your Shop.
                </p>
              </div>
            </div>
            <div className="row justify-content-center">
              <Button
                disabled
                color="warning"
                className="text-white start-shopping-button"
              >
                Start Your Free Shop
              </Button>
            </div>
          </div>
        </Jumbotron>
      </div>
    );
};
export default Header;
