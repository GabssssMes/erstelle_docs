import React from "react";
import style from "../styles/PdfButton.module.css";
import download from "downloadjs";

import { PDFDocument, rgb } from "pdf-lib";
import fileOne from "../Documents/Regolamento di Esercizio BT (CEI 0-21_2022).pdf";
//import fileOne from "../Documents/form_to_flatten.pdf";
import fileTwo from "../Documents/Allegato_A_-_MU_Parte_I_e_Parte_II__FTV_200kW_20_dic-3.pdf";

const PdfButton = (props) => {
  const createPDF = async (e) => {
    e.preventDefault();

    let existingPdfBytes;
    if (props.number === "1")
      existingPdfBytes = await fetch(fileOne).then((res) => res.arrayBuffer());
    else if (props.number === "2")
      existingPdfBytes = await fetch(fileTwo).then((res) => res.arrayBuffer());

    const pdfDoc = await PDFDocument.load(existingPdfBytes);
    const pages = pdfDoc.getPages();
    console.log(pdfDoc);
    if (props.number === "1") {
      pages[0].drawText(
        props.data["Vorname"].content + " " + props.data["Nachname"].content,
        {
          x: 130,
          y: 657,
          size: 10,
        }
      );
      pages[0].drawText(props.data["Geburtsort"].content, {
        x: 170,
        y: 620,
        size: 10,
      }); /*
      pages[0].drawText(props.data["Steuernummer"].content, {
        x: 170,
        y: 589,
        size: 10,
      });*/
    }

    const pdfBytes = await pdfDoc.save();
    download(
      pdfBytes,
      "Regolamento di Esercizio BT (CEI 0-21_2022).pdf",
      "application/pdf"
    );
  };

  return <button onClick={createPDF}>{props.text}</button>;
};

export { PdfButton };
