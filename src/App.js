import { useEffect, useState } from "react";
import "./App.css";
import { listendChange, uploadOrder } from "./firebase/config";

function App() {
  const [state, setState] = useState(0);

  useEffect(() => {
    listendChange("JeffersonCampos38");
  }, [state]);

  const handleClick = () => {
    const myOrder = {
      order: {
        pedido: [
          { nombre: "arepa peluda", numero: 2 },
          { nombre: "arroz especial", numero: 1 },
        ],
        cubiertosParaPersonas: 2,
        ordenId: "dsf56g586vgfs6d4dsf",
      },
      userId: "JeffersonCampos38",
    };
    uploadOrder(myOrder, state, setState);
  };

  return (
    <div className="App">
      <h1>prueba de ordenes</h1>
      <button onClick={handleClick}>Enviar orden</button>
    </div>
  );
}

export default App;
