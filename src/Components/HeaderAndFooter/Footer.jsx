import React from "react";
import { Jumbotron, Button } from "reactstrap";
import "../../App.css";

const Footer = () => {
    return (
      <div className="container-fluid">
        <Jumbotron className="footer-jumbotron">
          <div className="container">
            <div className="row row-footer align-items-center">
              <div className="col-12 col-auto align-self-center">
                <h3 className="header-text text-center">
                  Ready to Start Selling Your Merch?
                </h3>
                <br /><br />
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col-12 col-auto align-self-center">
                <p className="text-center">
                  No matter your passion, we'll make it happen.
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
export default Footer;
