/* eslint-disable no-unused-vars */
import {
  Button,
  DatePicker,
  Divider,
  Form,
  Input,
  Modal,
  Picker,
  PickerView,
  Selector,
  TextArea,
} from "antd-mobile";
import React, { useContext, useEffect, useState } from "react";
import "./NuevaTarea.css";
import { CheckOutline } from "antd-mobile-icons";
import { GlobalContext } from "../../context/GlobalContext";
import { useQuery } from "@apollo/client";
import { GET_CLIENTE } from "../../../graphql/queries/Cliente";

const NuevaTarea = () => {
  const [visible, setVisible] = useState(false);

  const [value, setValue] = useState([]);

  const [idSelector, setIdSelector] = useState();

  const [clientes, setClientes] = useState([]);
  const { userId } = useContext(GlobalContext);

  const { loading, error, data } = useQuery(GET_CLIENTE, {
    variables: {
      input:"",
      idUsuario: userId,
    },
  });

  console.log(data)

  useEffect(() => {
    if (data) {
      setClientes(data.getClientesLimitResolver);
    }
  }, [data]);

  console.log(clientes)

  const prioridad = [
    {
      label: (
        <div
          className={
            idSelector === "ALTA"
              ? "selector-alta seleccionado"
              : "selector-alta"
          }
        >
          <p className="selector-texto">ALTA</p>
        </div>
      ),
      value: "ALTA",
    },
    {
      label: (
        <div
          className={
            idSelector === "MEDIA"
              ? "selector-media seleccionado"
              : "selector-media"
          }
        >
          <p className="selector-texto">MEDIA</p>
        </div>
      ),
      value: "MEDIA",
    },
    {
      label: (
        <div
          className={
            idSelector === "BAJA"
              ? "selector-baja seleccionado"
              : "selector-baja"
          }
        >
          <p className="selector-texto">BAJA</p>
        </div>
      ),
      value: "BAJA",
    },
  ];

  const handleFormSubmit = (values) => {};

  return (
    <div className="detalle-tarea-contenedor">
      <Form
        layout="vertical"
        onFinish={(values) => handleFormSubmit(values)}
        footer={
          <Button
            block
            type="submit"
            color="primary"
            size="large"
            onClick={() => {
              Modal.alert({
                header: (
                  <CheckOutline
                    style={{
                      fontSize: 64,
                      color: "var(--adm-color-primary)",
                    }}
                  />
                ),
                title: "Tarea Cargada Correctamente",
                confirmText: "Cerrar",
              });
            }}
          >
            Cargar Tarea
          </Button>
        }
      >
        <Form.Item label="Cliente" name="cliente">
          <select className="select_nueva_tarea" required>
            <option value="" disabled selected hidden>
              Seleccione un cliente
            </option>
            {clientes && clientes.map((cliente) => (
              <option value={cliente.cli_id}>{cliente.cli_nombre}</option>
            ))}
          </select>
        </Form.Item>
        <Form.Item label="Asunto" name="asunto">
          <TextArea autoSize={true} placeholder="Detalle de Tarea"></TextArea>
        </Form.Item>
        <Form.Item label="Tipo de Tarea" name="tipoTarea">
          <select className="select_nueva_tarea" required>
            <option value="" disabled selected hidden>
              Seleccione tipo de tarea
            </option>
            <option value="Visita de Campo">Visita de Campo</option>
          </select>
        </Form.Item>
        <Form.Item label="Fuente" name="fuente">
          <select className="select_nueva_tarea" required>
            <option value="" disabled selected hidden>
              Seleccione fuente
            </option>
            <option value="Negocio">Negocio</option>
          </select>
        </Form.Item>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <div>
            <Form.Item label="Vencimiento" name="vencimiento">
              <input
                className="input-fechaHora"
                type="date"
                placeholder="Seleccione Fecha"
              />
            </Form.Item>
          </div>
          <div>
            <Form.Item label="Hora" name="hora">
              <input
                className="input-fechaHora"
                type="time"
                placeholder="Seleccione Hora"
              />
            </Form.Item>
          </div>
        </div>
        <Form.Item label="Prioridad" name="prioridad">
          <Selector
            style={{
              "--border-radius": "10px",
              "--border": "none",
              "--checked-border": "none",
              "--padding": "0px",
              fontSize: "16px",
            }}
            showCheckMark={false}
            label="Prioridad"
            options={prioridad}
            onChange={(v) => setIdSelector(v[0])}
          />
        </Form.Item>
      </Form>
    </div>
  );
};

export default NuevaTarea;
