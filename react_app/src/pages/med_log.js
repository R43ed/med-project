import React from "react";

const MedLog = () => {
  return (
    <div>
      <nav
        className="navbar navbar-expand-md sticky-top py-3 navbar-dark"
        id="mainNav"
        style={{ background: "#025F5F", color: "#00544D" }}
      >
        <div className="container">
          <button
            data-bs-toggle="collapse"
            className="navbar-toggler"
            data-bs-target="#navcol-1"
          >
            <span className="visually-hidden">Toggle navigation</span>
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse"
            id="navcol-1"
            style={{ borderStyle: "none", color: "rgba(0,84,77,0)" }}
          >
            <button
              className="btn btn-primary"
              data-bss-hover-animate="flash"
              type="button"
              style={{
                background: 'url("assets/img/logo.png") no-repeat, #00000000',
                backgroundSize: "cover, auto",
                width: 292,
                height: 102,
                transform: "perspective(0px)",
                color: "rgba(0,0,0,0)",
                marginRight: 23,
                paddingRight: 0,
                paddingBottom: 0,
                marginBottom: 21,
                borderColor: "#025F5F",
              }}
            />
            <button
              className="btn btn-primary"
              type="button"
              style={{
                background: 'url("assets/img/logo1.png") no-repeat, #00000000',
                backgroundSize: "cover, auto",
                width: 341,
                height: 104,
                transform: "perspective(0px)",
                color: "rgba(0,0,0,0)",
                paddingBottom: 0,
                marginBottom: 3,
                marginRight: 12,
                paddingRight: 0,
                marginTop: 34,
                borderColor: "#025F5F",
              }}
            />
            <ul className="navbar-nav mx-auto">
              <li className="nav-item" />
              <li className="nav-item" />
              <li className="nav-item" style={{ color: "#000000" }} />
              <li className="nav-item" style={{ color: "#000000" }} />
              <li className="nav-item" style={{ color: "#000000" }}>
                <a
                  className="nav-link"
                  href="contacts.html"
                  style={{
                    fontFamily: "Raleway, sans-serif",
                    color: "#ffffff",
                    marginLeft: 470,
                    marginRight: 1,
                    fontSize: 20,
                  }}
                >
                  <i
                    className="fa fa-user"
                    style={{
                      fontSize: 24,
                      marginLeft: "-33px",
                      marginRight: 9,
                      color: "#ffffff",
                    }}
                  />
                  AlMadinah
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <header className="bg-dark" />
      <section className="py-5" style={{ background: "#ffffff" }}>
        <h1 style={{ fontFamily: "Raleway, sans-serif", textAlign: "left" }}>
          &nbsp;Interactive map&nbsp;
        </h1>
        <iframe
          allowFullScreen=""
          frameBorder={0}
          src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDxtN3EIvOZbySarXA28x2XWFcsL7_nrDc&q=Madinah+Saudi+Arabia&zoom=11"
          width="100%"
          height={400}
          style={{ height: 500 }}
        />
      </section>
      <section />
      <section />
    </div>
  );
};

export default MedLog;
