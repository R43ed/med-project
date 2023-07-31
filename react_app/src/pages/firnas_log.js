import React from "react";

const FirnasLog = () => {
  return (
    <div>
      <>
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
                  background:
                    'url("assets/img/logo1.png") no-repeat, #00000000',
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
                    Firnas Aero
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <header className="bg-dark" />
        <section className="py-5" style={{ background: "#ffffff" }}>
          <div className="container text-center py-5">
            <a href="#"> </a>
            <a href="#"> </a>
            <a href="#"> </a>
          </div>
          <div className="m-5">
            <div
              id="backdrop"
              className="backdrop backdrop-transition backdrop-dark"
            >
              <div
                className="text-center w-100"
                style={{ position: "absolute", top: "50%" }}
              >
                <div
                  className="bg-light border rounded border-success shadow-lg m-auto"
                  style={{ width: 150, height: 150 }}
                >
                  <i
                    className="fa fa-upload d-block p-4"
                    style={{ fontSize: 50 }}
                  />
                  <span>Drop file to attach</span>
                </div>
              </div>
            </div>
            <div className="bg-light border rounded border-light pt-1 jumbotron py-5 px-4">
              <div className="alert alert-success invisible mt-5" role="alert">
                <span id="notify" />
              </div>
              <h1>
                File Drop
                <br />
              </h1>
              <p>
                <label className="form-label" htmlFor="form-files">
                  <a className="btn btn-secondary btn-sm" role="button">
                    Choose Files
                  </a>
                </label>
                &nbsp;or drag the files to anywhere on this page.
                <br />
              </p>
              <p id="filecount">
                <br />
              </p>
              <div id="list" />
              <form method="post">
                <input
                  className="form-control invisible"
                  type="file"
                  id="form-files"
                  name="files"
                  multiple=""
                />
                <button
                  className="btn btn-outline-primary d-block w-100"
                  type="submit"
                >
                  Submit
                </button>
                <button
                  className="btn btn-danger mt-5"
                  type="reset"
                  onclick="clearFiles()"
                >
                  Reset
                </button>
              </form>
            </div>
{/*  */}
            <div className="text-center bg-light border rounded border-dark shadow-lg p-3">
              <img id="image_preview" width={100} />
              <div>
              </div>
            </div>
{/*  */}
          </div>
          <h1 style={{ fontFamily: "Raleway, sans-serif", textAlign: "left" }}>
            <span style={{ backgroundColor: "rgba(255, 0, 0, 0)" }}>
              &nbsp;Interactive map&nbsp;
            </span>
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
      </>
    </div>
  );
};

export default FirnasLog;
