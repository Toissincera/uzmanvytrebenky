// import React, { useState } from "react";
// import logo from "../logo.jpg";
// import backG from "../pexels-cup-of-couple-6177653backG.jpg";
import blurredlines from "../blurFinal1920x690.png";

function Main({ isUKR }) {
  return (
    <div
      className="container pb-3 px-3 rounded-bottom"
      style={{
        backgroundColor: "#F2D8BD",
      }}
    >
      <div
        className="p-5 bg-body-tertiary rounded-3"
        style={{ backgroundImage: `url(${blurredlines})` }}
      >
        <div
          className="container-fluid py-2"
          style={{ border: "3px dashed back" }}
        >
          {!isUKR && (
            <h1 className="display-5 fw-bold">
              Welcome to <br />
              English Vytrebenky
            </h1>
          )}
          {isUKR && (
            <h1 className="display-5 fw-bold">
              Ласкаво просимо до <br />
              English Vytrebenky
            </h1>
          )}
          {!isUKR && (
            <p className="col-md-8 fs-4">
              You have come to the right place if you... <br />
              ...want to learn to SPEAK English <br />
              ...know the words and grammar but cannot compose... <br />
              ...need Conversational English, not academic <br />
              ...prefer interactive classes with practice <br />
            </p>
          )}
          {isUKR && (
            <p className="col-md-8 fs-4">
              Ви прийшли в потрібне місце, якщо... <br />
              ...хочу навчитися говорити англійською <br />
              ...знає слова та граматику, але не вміє складати... <br />
              ...потрібна розмовна англійська, а не академічна <br />
              ...віддаю перевагу інтерактивним заняттям з практикою <br />
            </p>
          )}
          <a href="#JOINNOW">
            <button
              className="btn btn-success btn-lg"
              type="button"
              style={{ marginRight: "1rem" }}
            >
              {!isUKR && `Join Now`}
              {isUKR && `приєднуйся зараз`}
            </button>
          </a>
          <button
            className="btn btn-outline-success btn-lg"
            type="button"
            href="tel:+380932630214"
          >
            {!isUKR && `Call Us`}
            {isUKR && `дзвоніть нам`}
          </button>
        </div>
        {/* <div
          className="container-fluid py-2 w-20"
          style={{ border: "3px dashed back" }}
        >
          {!isUKR && (
            <h1 className="display-5 fw-bold">
              Welcome to <br />
              English Vytrebenky
            </h1>
          )}
          {isUKR && (
            <h1 className="display-5 fw-bold">
              Ласкаво просимо до <br />
              English Vytrebenky
            </h1>
          )}
          {!isUKR && (
            <p className="col-md-8 fs-4">
              You have come to the right place if you... <br />
              ...want to learn to SPEAK English <br />
              ...know the words and grammar but cannot compose... <br />
              ...need Conversational English, not academic <br />
              ...prefer interactive classes with practice <br />
            </p>
          )}
          {isUKR && (
            <p className="col-md-8 fs-4">
              Ви прийшли в потрібне місце, якщо... <br />
              ...хочу навчитися говорити англійською <br />
              ...знає слова та граматику, але не вміє складати... <br />
              ...потрібна розмовна англійська, а не академічна <br />
              ...віддаю перевагу інтерактивним заняттям з практикою <br />
            </p>
          )}
          <a href="#JOINNOW">
            <button
              className="btn btn-success btn-lg"
              type="button"
              style={{ marginRight: "1rem" }}
            >
              {!isUKR && `Join Now`}
              {isUKR && `приєднуйся зараз`}
            </button>
          </a>
          <button
            className="btn btn-outline-success btn-lg"
            type="button"
            href="tel:+380932630214"
          >
            {!isUKR && `Call Us`}
            {isUKR && `дзвоніть нам`}
          </button>
        </div> */}
      </div>

      
    </div>
  );
}

export default Main;