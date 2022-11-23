import { React, useState } from "react";
import Boton from "./components/Boton";
import Input from "./components/Input";
import { evaluate } from "mathjs";
import { RiDeleteBack2Fill } from "react-icons/ri";

function App() {
  const [value, setValue] = useState("");
  function manejarClick(val) {
    setValue(value + val);
  }
  function calcular() {
    const resul = evaluate(value);
    setValue(resul);
  }
  function eliminarC() {
    try {
      setValue(value.substring(0, value.length - 1));
    } catch {
      setValue("");
    }
  }
  function eliminar() {
    setValue("");
  }
  return (
    <>
      <h1>Calculadora con React</h1>
      <div className="container">
        <div className="pantalla">
          <Input value={value}></Input>
        </div>
        <div className="container-botones">
          <Boton manejarClick={eliminar}>C</Boton>
          <Boton manejarClick={eliminarC}>
            <RiDeleteBack2Fill />
          </Boton>
          <Boton manejarClick={manejarClick}>/</Boton>
          <Boton manejarClick={manejarClick}>1</Boton>
          <Boton manejarClick={manejarClick}>2</Boton>
          <Boton manejarClick={manejarClick}>3</Boton>
          <Boton manejarClick={manejarClick}>*</Boton>         
          <Boton manejarClick={manejarClick}>4</Boton>
          <Boton manejarClick={manejarClick}>5</Boton>
          <Boton manejarClick={manejarClick}>6</Boton>
          <Boton manejarClick={manejarClick}>-</Boton>
          <Boton manejarClick={manejarClick}>7</Boton>
          <Boton manejarClick={manejarClick}>8</Boton>
          <Boton manejarClick={manejarClick}>9</Boton>
          <Boton manejarClick={manejarClick}>+</Boton>
          <Boton manejarClick={manejarClick}>0</Boton>
          <Boton manejarClick={manejarClick}>.</Boton>
          <Boton manejarClick={calcular}>=</Boton>
        </div>
      </div>
    </>
  );
}

export default App;
