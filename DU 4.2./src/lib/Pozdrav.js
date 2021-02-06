function Pozdrav() {
  let cas = new Date().getHours();
  return cas < 3
    ? "Dobrou noc!"
    : cas < 9
    ? "Dobré ráno!"
    : cas < 12
    ? "Dobré dopoledne!"
    : cas < 13
    ? "Dobré poledne a dobrou chuť, pokud právě obědváte!"
    : cas < 17
    ? "Dobré odpoledne!"
    : cas < 20
    ? "Dobrý podvečer!"
    : cas < 23
    ? "Dobrý večer!"
    : "Sbohem";
}
export default Pozdrav;
