import uniqid from "uniqid";

let Fields = [];

Fields["Vorname"] = {
  type: "text",
  key: uniqid(),
  content: "",
};
Fields["Nachname"] = {
  type: "text",
  key: uniqid(),
  content: "",
};
Fields["Geburtsort"] = {
  type: "text",
  key: uniqid(),
  content: "",
};
/*Fields["Steuernummer"] = {
  type: "text",
  key: uniqid(),
  content: "",
};
Fields["Wohnort"] = {
  type: "text",
  key: uniqid(),
  content: "",
};
Fields["Gemeinde"] = {
  type: "text",
  key: uniqid(),
  content: "",
};
Fields["Provinz"] = {
  type: "text",
  key: uniqid(),
  content: "",
};
Fields["Postleitzahl"] = {
  type: "text",
  key: uniqid(),
  content: "",
};
Fields["Codice di rintracciabilità della pratica"] = {
  type: "text",
  key: uniqid(),
  content: "",
};*/

export { Fields };
