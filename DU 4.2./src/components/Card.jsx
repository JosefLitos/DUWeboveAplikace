import React from "react";

function Card(props) {
  return (
    <div className="contact">
      <h2>{props.src.name}</h2>
      <img
        className="m-auto d-block rounded-circle"
        src={props.src.img}
        alt={props.src.name}
      />
      <p className="m-auto">
        E-mail:{" "}
        <b>
          <a href={"mailto:" + props.src.email}>{props.src.email}</a>
        </b>
      </p>
      <p className="m-auto">
        Telefon: <b>{props.src.tel}</b>
      </p>
    </div>
  );
}

export default Card;
