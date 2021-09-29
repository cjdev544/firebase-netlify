import { useEffect, useState } from "react";
import "./App.css";
import { listendChange, uploadOrder } from "./firebase/config";

function App() {
  const [state, setState] = useState(0);

  const myOrder = {
    _id: "614b1023aaf4110016892d58",
    notas: "ninguna alergia",
    horaEntrega: "Lo antes posible",
    fechaEntrega: "Hoy",
    cubiertosParaPersonas: 3,
    direccionEnvio: {
      address: "Caracas",
      city: "Caracas",
      createdAt: "2021-09-11T14:18:02.527Z",
      id: "613cba9a0b0aef10786939ef",
      name: "Gerardo Arciniegas",
      phone: "4421068",
      postalCode: "0212",
      published_at: "2021-09-11T14:18:02.515Z",
      state: "dto Capital",
      title: "Casa de mi madre",
      updatedAt: "2021-09-19T16:17:42.607Z",
      user: {
        blocked: false,
        confirmed: true,
        createdAt: "2021-08-17T21:22:52.423Z",
        email: "jeffergca@gmail.com",
        id: "611c28ac7df35310dcdb8dd4",
        lastname: "Campos",
        name: "Jefferson",
        provider: "local",
        role: "611bbd304fffa52b740e705a",
        updatedAt: "2021-08-20T19:40:52.738Z",
        username: "d8713289-415a-4f0e-b32f-91f90a081b9e",
        __v: 0,
        _id: "611c28ac7df35310dcdb8dd4",
      },
    },
    id: "614b1023aaf4110016892d58",
    idPago: "pi_3JcTPSH50To1XM2m1DlaiwJd",
    costoEnvio: 5,
    createdAt: "2021-09-22T11:14:43.069Z",
    pedido: [
      {
        cantidadDelProducto: 1,
        descripcion:
          "Plátano maduro frito en lonchas, coronado con queso blanco fresco rallado",
        id: "6147887a2e11501458df4b3c",
        path: "tajadas-con-queso",
        precioUnitario: 4.5,
        producto: "Tajadas con queso",
        subTotal: 4.5,
      },
      {
        cantidadDelProducto: 1,
        descripcion: "Cachapa rellena de cerdo guisado desmechado",
        id: "614791582e11501458df4b4c",
        path: "cachapa-de-pernil",
        precioUnitario: 8.3,
        producto: "Cachapa de pernil ",
        subTotal: 8.3,
      },
    ],
    totalCompra: 28.3,
    totalProductos: 23.3,
    usuario: {
      blocked: false,
      confirmed: true,
      createdAt: "2021-08-17T21:22:52.423Z",
      email: "jeffergca@gmail.com",
      id: "611c28ac7df35310dcdb8dd4",
      lastname: "Campos",
      name: "Jefferson",
      provider: "local",
      role: "611bbd304fffa52b740e705a",
      updatedAt: "2021-08-20T19:40:52.738Z",
      username: "d8713289-415a-4f0e-b32f-91f90a081b9e",
      __v: 0,
      _id: "611c28ac7df35310dcdb8dd4",
    },
  };

  useEffect(() => {
    listendChange(myOrder.id);
  }, [state, myOrder.id]);

  const handleClick = () => {
    uploadOrder(myOrder, state, setState);
  };

  return (
    <div className="App">
      {state !== 0 && <p>Cambio el estado</p>}
      <h1>prueba de ordenes</h1>
      <button onClick={handleClick}>Enviar orden</button>
    </div>
  );
}

export default App;
