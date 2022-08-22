import { CapsuleTabs } from "antd-mobile";
import moment from "moment";
import ListaTarea from "../listaTareas/ListaTarea";
import "./Tareas.css";

const Tareas = () => {

  const ItemListaTarea = [
    {
      id: 1,
      usu_nombre: "Adrian Sabo",
      fechaHora: "08-22-2022 08:30",
      estado: 1,
      descripcion: "Llamar a Adrian, conversar sobre nuevos insumos",
      prioridad: "ALTA",
    },
    {
      id: 2,
      usu_nombre: "Horacio Mercol",
      fechaHora: "08-22-2022 08:40",
      estado: 1,
      descripcion: "Visitar Campo Oeste",
      prioridad: "ALTA",
    },
    {
      id: 3,
      usu_nombre: "Jorge Mayorga",
      fechaHora: "08-23-2022 09:00",
      estado: 1,
      descripcion: "Llamar a Jorge para Venta de Herbicidas",
      prioridad: "MEDIA",
    },
    {
      id: 4,
      usu_nombre: "Aida Campos",
      fechaHora: "08-24-2022 09:15",
      estado: 1,
      descripcion: "Venta Trigo",
      prioridad: "BAJA",
    },
    {
      id: 5,
      usu_nombre: "Adrian Sabo",
      fechaHora: "08-30-2022 09:30",
      estado: 1,
      descripcion: "Venta de Maíz",
      prioridad: "MEDIA",
    },
    {
      id: 6,
      usu_nombre: "Florencia Caverzasi",
      fechaHora: "08-31-2022 09:30",
      estado: 1,
      descripcion: "Venta de Soja",
      prioridad: "MEDIA",
    },
    {
      id: 7,
      usu_nombre: "Adrian Sabo",
      fechaHora: "09-01-2022 09:40",
      estado: 1,
      descripcion: "Venta de Maíz para temporada 2223",
      prioridad: "MEDIA",
    },
    {
      id: 8,
      usu_nombre: "Edgar jazz",
      fechaHora: "09-02-2022 10:00",
      estado: 1,
      descripcion: "Llamar para conversar sobre nuevos insumos",
      prioridad: "BAJA",
    },
    {
      id: 9,
      usu_nombre: "Adrian Sabo",
      fechaHora: "08-17-2022 10:00",
      estado: 1,
      descripcion: "Llamar a Adrian, conversar sobre nuevos insumos",
      prioridad: "BAJA",
    },
    {
      id: 10,
      usu_nombre: "Horacio Mercol",
      fechaHora: "08-17-2022 10:00",
      estado: 1,
      descripcion: "Visitar Campo Oeste",
      prioridad: "BAJA",
    },
    {
      id: 11,
      usu_nombre: "Jorge Mayorga",
      fechaHora: "08-18-2022 10:30",
      estado: 1,
      descripcion: "Llamar a Jorge para Venta de Herbicidas",
      prioridad: "BAJA",
    },
    {
      id: 12,
      usu_nombre: "Aida Campos",
      fechaHora: "08-19-2022 11:00",
      estado: 1,
      descripcion: "Venta Trigo",
      prioridad: "BAJA",
    },
  ];

  //! FILTRO POR SEMANA LISTA DE TAREAS - INICIO DEL METODO TAB 1

  let ES = [];

  const listaTareasES = () => { ItemListaTarea.map((tarea) => {
    let fecha = moment(tarea.fechaHora).format("DD-MM-YYYY")

    let StartES = moment().startOf("isoWeek").format("DD-MM-YYYY")

    let EndES = moment().endOf("isoWeek").format("DD-MM-YYYY")


    if (fecha >= StartES) {
      if (fecha <= EndES) {  
        ES.push(tarea);
      }
    }  
    return "Prueba lista tareas"
  })};

listaTareasES();
console.log("Lista de tareas ESTA SEMANA: ", ES);
//! FIN DE METODO PARA FILTRADO POR SEMANA TAB 1



  //! FILTRO POR SEMANA LISTA DE TAREAS - INICIO DEL METODO TAB 2

  let SP = [];

  const listaTareasSP = () => { ItemListaTarea.map((tarea) => {
    let fecha = moment(tarea.fechaHora).format("DD-MM-YYYY")

    let StartSP = moment().add(1, 'weeks').startOf('isoWeek').format('DD-MM-YYYY')

    let EndSP = moment().add(1, 'weeks').endOf('isoWeek').format('DD-MM-YYYY')


    if (fecha >= StartSP) {
      if (fecha <= EndSP) {  
        SP.push(tarea);
      }
    }  
    return "Prueba lista tareas"
  })};

listaTareasSP();
console.log("Lista de tareas SEMANA PROXIMA: ", SP);
//! FIN DE METODO PARA FILTRADO POR SEMANA TAB 2


  //! FILTRO POR SEMANA LISTA DE TAREAS - INICIO DEL METODO TAB 3

  let VC = [];

  const listaTareasVC = () => { ItemListaTarea.map((tarea) => {
    let fecha = moment(tarea.fechaHora).format("DD-MM-YYYY")

    let StartES = moment().startOf("isoWeek").format("DD-MM-YYYY")    

    if (fecha <= StartES) {
      VC.push(tarea);
    }  
    return "Prueba lista tareas"
  })};

listaTareasVC();
console.log("Lista de tareas VENCIDAS: ", VC);
//! FIN DE METODO PARA FILTRADO POR SEMANA TAB 3

  return (
    <CapsuleTabs defaultActiveKey="1" onChange={(key) => console.log(key)}>
      {/* PESTAÑA TAREAS ESTA SEMANA */}
      <CapsuleTabs.Tab title="Esta Semana" key="1">

        <ListaTarea ItemListaTarea={ES} />
      </CapsuleTabs.Tab>

      {/* PESTAÑA TAREAS SEMANA PROXIMA */}
      <CapsuleTabs.Tab title="Semana Prox." key="2">

        <ListaTarea ItemListaTarea={SP} />
      </CapsuleTabs.Tab>

      {/* PESTAÑA TAREAS VENCIDAS */}
      <CapsuleTabs.Tab title="Vencido" key="3">

        <ListaTarea ItemListaTarea={VC} />
      </CapsuleTabs.Tab>
    </CapsuleTabs>
  );
};

export default Tareas;
