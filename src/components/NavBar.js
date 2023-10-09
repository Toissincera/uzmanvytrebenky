import React from "react";
// import ukraine from "./ukraine.png";
import logoSVGVector4Colors from "../logoSVGVector4Colors.svg";

function NavBar(props) {
  return (
    <div
      className="container"
      style={{
        backgroundColor: "#F2D8BD",
        width: "100vw",
        // position: "sticky",
        // top: "0",
      }}
    >
      <header className="d-flex flex-wrap justify-content-center py-3 border-bottom">
        <a
          href="/"
          className="d-flex align-items-center m-1 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
        >
          <div style={{ width: "3.5rem" }}></div>
          <img
            src={logoSVGVector4Colors}
            style={{
              width: "4vw",
              border: "2px solid black",
              borderRadius: "3rem",
            }}
            alt=""
          />
          <span className="display-6 font-weight-bold">
            &nbsp;&nbsp;&nbsp;English Vytrebenky
          </span>
        </a>

        <ul className="nav nav-pills">
          <li className="nav-item">
            <button
              type="button"
              className="btn btn-outline-success d-inline-flex align-items-center mx-1 my-auto mt-3"
              href="tel:+380932630214"
            >
              📞+380-932-630-214
            </button>
          </li>
          <li className="nav-item">
            <a href="#ABOUTUS">
              <button
                className="btn btn-primary btn d-inline-flex align-items-center mx-1 my-auto mt-3"
                type="button"
                style={{ backgroundColor: "#2b7953" }}
              >
                {!props.isUKR && `About Us`}
                {props.isUKR && `Про нас`}
              </button>
            </a>
          </li>
          <li className="nav-item">
            <a href="#OFFERS">
              <button
                className="btn btn-primary btn d-inline-flex align-items-center mx-1 my-auto mt-3"
                type="button"
                style={{ backgroundColor: "#2b7953" }}
              >
                {!props.isUKR && `Offers`}
                {props.isUKR && `Пропозиції`}
              </button>
            </a>
          </li>

          <li className="nav-item">
            <a href="#DISCOVERTOPICS">
              <button
                className="btn btn-primary btn d-inline-flex align-items-center mx-1 my-auto mt-3"
                type="button"
                style={{ backgroundColor: "#2b7953" }}
              >
                {!props.isUKR && `Discover Topics`}
                {props.isUKR && `Знайти більше`}
              </button>
            </a>
          </li>
          <li className="nav-item">
            <button
              className="btn btn-primary mx-1 mt-3"
              onClick={() => props.changeLang(false)}
            >
              ENG
            </button>
            <button
              className="btn btn-warning mx-1 mt-3 mr-6"
              onClick={() => props.changeLang(true)}
            >
              UKR
            </button>
          </li>
        </ul>
      </header>
    </div>
  );
}

export default NavBar;
// {  !props.isUKR && ``}
// {  props.isUKR && ``}
