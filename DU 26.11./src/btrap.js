function include(ht, integ) {
  var script = document.createElement("script");
  script.src = ht;
  script.integrity = integ;
  script.crossorigin = "anonymous";

  document.getElementsByTagName("head").item(3).appendChild(script);
}
include(
  "https://code.jquery.com/jquery-3.5.1.slim.min.js",
  "sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
);
include(
  "https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js",
  "sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx"
);
