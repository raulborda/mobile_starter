/* eslint-disable react-hooks/exhaustive-deps */
import { CapsuleTabs } from "antd-mobile";
import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import InfoCliente from "../../infoCliente/InfoCliente";
import { ClienteTareas } from "./ClienteTareas";
import "./clienteIndividual.css";
import { ClienteNegocios } from "./ClienteNegocios";
import { GlobalContext } from "../../../context/GlobalContext";
import { Base64 } from "js-base64";

export const ClienteIndividual = () => {
  const { tabClienteActivo, setTabClienteActivo } = useContext(GlobalContext);
  const [clienteSelect, setClienteSelect] = useState(null);
  const [error, setError] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const search = location.search;
    const data = new URLSearchParams(search).get("data");
    let cliente = JSON.parse(Base64.decode(data));
    if (typeof cliente === "object" && cliente !== null) {
      setClienteSelect(cliente);
      setError(false);
    } else {
      setError(true);
    }
  }, [location]);

  useEffect(() => {}, [tabClienteActivo]);

  return error ? (
    <span>Hubo un error, por favor vuelva a clientes</span>
  ) : (
    clienteSelect && (
      <CapsuleTabs
        className="contenedor-cliente-individual"
        onChange={(v) => setTabClienteActivo(v)}
        defaultActiveKey={tabClienteActivo}
      >
        <CapsuleTabs.Tab title="Info" key="1">
          {tabClienteActivo === "1" && (
            <InfoCliente clienteSelect={clienteSelect} />
          )}
        </CapsuleTabs.Tab>
        <CapsuleTabs.Tab title="Tareas" key="2">
          {tabClienteActivo === "2" && (
            <ClienteTareas cliente={clienteSelect} />
          )}
        </CapsuleTabs.Tab>
        <CapsuleTabs.Tab title="Negocios" key="3">
          {tabClienteActivo === "3" && (
            <ClienteNegocios cliente={clienteSelect} />
          )}
        </CapsuleTabs.Tab>
      </CapsuleTabs>
    )
  );
};
