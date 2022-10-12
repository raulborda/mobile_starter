import moment from "moment";
import { useEffect, useState } from "react";
import QueryResult from "../../queryResult/QueryResult";
import ListaTarea from "../listaTareas/ListaTarea";

export const TareasVencidas = ({tareasParametro, error, loading}) => {
  const [tareas, setTareas] = useState();
  // const [estado] = useState(1);

  const ordenarDatos = (tareas) => {
    let tareasOrdenadas;

    if (tareas) {
      tareasOrdenadas = tareas.sort(function (a, b) {
        return (
          new Date(
            moment(b.fechavencimiento, "DD/MM/YYYY").format("YYYY,MM,DD")
          ) -
          new Date(
            moment(a.fechavencimiento, "DD/MM/YYYY").format("YYYY,MM,DD")
          )
        );
      });
      setTareas(tareasOrdenadas);
    }
  };
  /* INTENTO 3000 REACT LISTA VIRTUAL*/
  // console.log("Tareas vencidas: ", tareas.length);

  /* INTENTO 3000 REACT LISTA VIRTUAL*/

  useEffect(() => {
    if (tareasParametro) {
      ordenarDatos(tareasParametro);
    }
  }, [tareasParametro]);

  return (
    <QueryResult loading={loading} error={error} data={tareas}>
      {tareas && 
        <div className="div_lista">
          <ListaTarea itemListaTarea={tareas} />
        </div>
      }
    </QueryResult>
    // <QueryResult loading={loading} error={error} data={tareas}>
    //   {tareas && (
    //     <FixedSizeList
    //       height={500}
    //       width={500}
    //       itemSize={getItemSize}
    //       itemCount={tareas.length}
    //     >
    //      {row}
    //     </FixedSizeList>
    //   )}
    // </QueryResult>
  );
};
