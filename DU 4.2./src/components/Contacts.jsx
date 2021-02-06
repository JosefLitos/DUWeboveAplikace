import React from "react";
import Card from "./Card";
import contacts from "../contacts.json";

function getAll() {
  let ret = new Array(contacts.length);
  contacts.forEach((e) => {
    ret[e.id - 1] = <Card key={e.id - 1} src={e} />;
  });
  return ret;
}

function Contacts() {
  return (
    <div>
      <h1>Kontakty</h1>
      <div className="container">{getAll()}</div>
    </div>
  );
}

export default Contacts;
