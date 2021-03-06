import React from "react";
import { Link } from "react-router-dom";

const Services = () => (
  <div className="page-background">
    <div className="grid-background">
      <div className="container" style={{ display: "flex" }}>
        <div className="row grid content-container">
          <div style={{ marginLeft: "50px" }}>
            <Link to="/webdesign">
              <i className="fa fa-code icon-web" />
              <h4 className="header__content grid-item">Web Designs</h4>
            </Link>
          </div>

          <div style={{ marginLeft: "50px" }}>
            <Link to="/databases">
              <i className="fas fa-database icon-db" />
              <h4 className="header__content grid-item">Databases</h4>
            </Link>
          </div>
          <div style={{ marginLeft: "50px" }}>
            <Link to="/Reports">
              <i className="fas fa-chart-line icon-report" />
              <h4 className="header__content grid-item"> Reporting </h4>
            </Link>
          </div>
          <div style={{ marginLeft: "50px" }}>
            <Link to="/integration">
              <i className="fas fa-filter icon-int" />
              <h4 className="header__content grid-item">Data Integration</h4>
            </Link>
          </div>
        </div>
      </div>
    </div>

    <h1>Select a Service!</h1>
  </div>
);

export default Services;
