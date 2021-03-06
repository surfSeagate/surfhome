import React from "react";
import ServicesMenu from "../components/ServicesMenu";
//import Services from "../components/Services";

const WebDesign = () => (
  <div className="page-background">
    <ServicesMenu />
    <div>
      <div className="container">
        <h1>Web Services</h1>
        <div
          className="display-6 text-left my-4"
          id="accordion"
          style={{ boxShadow: "4px 2px 2px" }}
        >
          <div>
            <div className="card-header " style={{ background: "#A8A8A8" }}>
              <h3>
                <a
                  href="#collapse1"
                  data-parent="#accordion"
                  data-toggle="collapse"
                >
                  <span className="ui-right">UI - Experience</span>
                  <span className="ui-left">
                    <img
                      className="images icon-pad"
                      src="/images/icons/react.ico"
                      alt="reacting"
                    />
                    <img
                      className="images icon-pad"
                      src="/images/icons/js_LXQ_icon.ico"
                      alt="Glenn Curry"
                    />

                    <img
                      className="images icon-pad"
                      src="/images/icons/redux_lhz_icon.ico"
                      alt="Glenn Curry"
                    />
                  </span>
                </a>
              </h3>
            </div>

            <div id="collapse1" className="collapse show">
              <div className="card-body">
                Today's modern UI front-end, client side web apps are almost
                always single page apps (SPA's). The content written to the
                screen is based on events and properties that call another
                'component' loaded in memory and this allows for a snappier user
                experience without having to go back to the server and request a
                new page on every event click or change. I utilize Javascript
                ES6 and React.js components to accomplish this UI experience,
                along with React routing and Redux state management for seamless
                navigation.
              </div>
            </div>
          </div>

          <div>
            <div className="card-header" style={{ background: "#BEBEBE" }}>
              <h3>
                <a
                  href="#collapse2"
                  data-parent="#accordion"
                  data-toggle="collapse"
                >
                  <span className="styling-right">Styling</span>
                  <span className="styling-left">
                    <img
                      className="images icon-pad"
                      src="/images/icons/bootstrap_A40_icon.ico"
                      alt="Glenn Curry"
                    />
                    <img
                      className="images icon-pad"
                      src="/images/icons/sass.ico"
                      alt="Glenn Curry"
                    />
                  </span>
                </a>
              </h3>
            </div>

            <div id="collapse2" className="collapse">
              <div className="card-body">
                Styling has everything to do with preference and enhances your
                website and conveys a theme. CSS is the underlying foundation,
                but I utilize several modules including bootstrap libraries,
                materialize.css and bootswatch.css. For bigger projects, I
                incorporate Sass and bundle all the styling into a loader.
              </div>
            </div>
          </div>

          <div>
            <div className="card-header" style={{ background: "#C8C8C8" }}>
              <h3>
                <a
                  href="#collapse3"
                  data-parent="#accordion"
                  data-toggle="collapse"
                >
                  <span className="server-right">Server Side</span>

                  <span className="server-left">
                    <img
                      className="images icon-pad"
                      src="/images/icons/nodejs_EWH_icon.ico"
                      alt="Glenn Curry"
                    />
                    <img
                      className="images icon-pad"
                      src="/images/icons/express.ico"
                      alt="Glenn Curry"
                    />
                    <img
                      className="images icon-pad"
                      src="/images/icons/mongoose_PXP_icon.ico"
                      alt="Glenn Curry"
                    />
                    <img
                      className="images icon-pad"
                      src="/images/icons/passport.ico"
                      alt="Glenn Curry"
                    />
                  </span>
                </a>
              </h3>
            </div>

            <div id="collapse3" className="collapse">
              <div className="card-body">
                Some larger projects require server side coding. I utilize
                Node.js, along with Express, Mongoose and a host of other
                middleware components such as Passport to create models and API
                calls for routes concerned with authentication - oAuth2 or
                incorporating a payment credit card module like Stripe. There
                are literally thousands of API's written and available to be
                consumed by your website. From weather data, spotify music
                libaries to updated DOW market numbers or updated sports scores,
                a simple Restful API is available and can be used to bring the
                data into your site. Utilizing Node.js and Express makes this
                easy. Almost all modern API's use JSON files, which is the
                standard. If you need an API created from your data store, it is
                a staright foward process.
              </div>
            </div>
          </div>

          <div>
            <div className="card-header" style={{ background: "#D3D3D3" }}>
              <h3>
                <a
                  href="#collapse4"
                  data-parent="#accordion"
                  data-toggle="collapse"
                >
                  <span className="db-right">Databases</span>

                  <span className="db-left">
                    <img
                      className="images icon-pad"
                      src="/images/icons/sql_x0g_icon.ico"
                      alt="Glenn Curry"
                    />
                    <img
                      className="images icon-pad"
                      src="/images/icons/mongodb.ico"
                      alt="Glenn Curry"
                    />
                    <img
                      className="images icon-pad"
                      src="/images/icons/firebase.ico"
                      alt="Glenn Curry"
                    />
                  </span>
                </a>
              </h3>
            </div>

            <div id="collapse4" className="collapse">
              <div className="card-body">
                In order to store data such as user authentication, profiles,
                blog entries or product information, you'll need a backend
                database. For smaller sets of data, Firebase will suffice.
                MongoDB is a good solution if you have a larger volume of data
                but still a simple schema structure. Both Firebase and MongoDB
                are considered NoSQL databases. If you already have data stored
                in MySQL or SQL Server, I can write the middleware to connect to
                those databases as well.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default WebDesign;
