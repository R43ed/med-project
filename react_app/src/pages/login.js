import React from "react";

const Login = () => {
  return (
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
                  Login
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <header className="bg-dark" />

      <section className="py-4 py-xl-5">
        <div className="container">
          <div className="bg-dark border rounded border-0 border-dark overflow-hidden">
            <div className="row g-0">
              <div className="col-md-6">
                <img
                  className="w-100 h-100 fit-cover"
                  src="assets/img/Ei7dkTnXsAIIRS2.jpeg"
                  alt=""
                />
              </div>
              <div
                className="col-md-6 order-first order-md-last"
                style={{ minHeight: 250, paddingTop: 0, marginTop: 203 }}
              >
                <p
                  style={{
                    fontSize: 25,
                    fontWeight: "bold",
                    letterSpacing: 1,
                    color: "rgb(255,255,255)",
                    fontFamily: "Raleway, sans-serif",
                    textAlign: "center",
                  }}
                >
                  Member login
                </p>
                <div
                  style={{
                    background: "#f1f1f1",
                    borderRadius: 25,
                    padding: 7,
                    textAlign: "left",
                    marginRight: 104,
                    marginLeft: 103,
                  }}
                >
                  <i
                    className="fas fa-envelope"
                    style={{ marginLeft: 15, color: "rgb(152,152,152)" }}
                  />
                  <input
                    type="text"
                    style={{
                      background: "rgba(255,255,255,0)",
                      borderStyle: "none",
                      marginLeft: 10,
                      color: "rgb(152,152,152)",
                      fontFamily: "Raleway, sans-serif",
                      fontSize: 18,
                    }}
                    placeholder="Email"
                    defaultValue="Email"
                  />
                </div>
                <div
                  style={{
                    background: "#f1f1f1",
                    borderRadius: 25,
                    padding: 7,
                    marginTop: 15,
                    fontFamily: "Raleway, sans-serif",
                    marginRight: 102,
                    marginLeft: 103,
                    fontSize: 18,
                  }}
                >
                  <i
                    className="fas fa-lock"
                    style={{
                      marginLeft: 15,
                      color: "rgb(152,152,152)",
                      fontSize: 18,
                    }}
                  />
                  <input
                    type="text"
                    style={{
                      background: "rgba(255,255,255,0)",
                      borderStyle: "none",
                      marginLeft: 10,
                      color: "rgb(152,152,152)",
                      fontSize: 18,
                    }}
                    placeholder="Password"
                    defaultValue="Password"
                  />
                </div>
                <button
                  className="btn btn-primary text-center"
                  type="button"
                  style={{
                    margin: 13,
                    background: "rgb(20,76,74)",
                    paddingLeft: 39,
                    paddingRight: 39,
                    marginRight: "-3px",
                    marginLeft: 275,
                    fontFamily: "Raleway, sans-serif",
                  }}
                >
                  <a
                    href="/firnas_log"
                    style={{ color: "rgb(255,255,255)", fontSize: 18 }}
                  >
                    Login
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section />
    </>
  );
};

export default Login;
