import style from "./styles/App.module.css";
import { DataField } from "./components/DataField";
import { Fields } from "./components/SetDataFields";
import { useState } from "react";
import { PdfButton } from "./components/PdfButton";

function App() {
  let [data, setData] = useState(Fields);

  const handleChange = () => (e) => {
    let copy = Object.assign({}, data);
    copy[e.target.id].content = e.target.value;
    setData(copy);
  };

  return (
    <div className="App">
      <header className={style.Header}>
        Bitte füllen Sie alle Textfelder aus...
      </header>
      <div className={style.getInfos}>
        <form>
          {Object.keys(data).map((key) => {
            return (
              <DataField
                name={key}
                type={data[key].type}
                key={data[key].key}
                value={data[key].content}
                onChange={handleChange()}
              ></DataField>
            );
          })}
          <PdfButton
            text='Erstelle Formular "REGOLAMENTO DI ESERCIZIO"'
            number="1"
            data={data}
          ></PdfButton>
          {/*<PdfButton
            text='Erstelle Formular "PARTE I e PARTE II"'
            number="2"
            data={data}
        ></PdfButton>*/}
        </form>
      </div>
    </div>
  );
}

export default App;
