/* eslint-disable no-unused-vars */
import { Button, DatePicker, Form, Input, Picker, TextArea } from "antd-mobile";
import React, { useState } from "react";
import dayjs from "dayjs";
import "./NuevaTarea.css";

const NuevaTarea = () => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <div>
        <h3>Nueva Tarea</h3>
      </div>
      <div className="form_nuevaTarea">
        <Form
          layout="horizontal"
          mode="card"
          footer={
            <Button block type="submit" color="primary" size="large">
              Cargar Tarea
            </Button>
          }
        >
          <Form.Item label="Cliente">
            <Input placeholder="Ingrese Cliente" />
          </Form.Item>
          <Form.Item
            label="Fecha"
            onClick={() => {
              setVisible(true);
            }}
          >
            <DatePicker
              visible={visible}
              onClose={() => {
                setVisible(false);
              }}
            >
              {(value) =>
                value ? dayjs(value).format("YYYY-MM-DD") : "Seleccione Fecha"
              }
            </DatePicker>
          </Form.Item>
          <Form.Item label="Tarea" style={{borderBottom:"1px solid #f4f4f4"}}>
            <TextArea rows={5} placeholder="Detalle de Tarea"></TextArea>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default NuevaTarea;

// flex : 1 1 auto;
// display : block;
// box-sizing : border-box;
// width : 1527.31px;
// max-width : 100%;
// max-height : 100%;
// padding : 0px;
// margin : 0px;

// background : rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
// border : 0px none rgb(51, 51, 51);
// outline : rgb(255, 0, 0) solid 1.99298px;
// appearance : none;
// min-height : 25.5px;
// text-align : left;
