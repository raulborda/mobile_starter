export const prioridad = (idSelector) => [
  {
    label: (
      <div
        key={1}
        className={
          idSelector === 1 ? "selector-alta seleccionado" : "selector-alta"
        }
      >
        <p className="selector-texto">ALTA</p>
      </div>
    ),
    value: 1,
  },
  {
    label: (
      <div
        key={2}
        className={
          idSelector === 2 ? "selector-media seleccionado" : "selector-media"
        }
      >
        <p className="selector-texto">MEDIA</p>
      </div>
    ),
    value: 2,
  },
  {
    label: (
      <div
        key={3}
        className={
          idSelector === 3 ? "selector-baja seleccionado" : "selector-baja"
        }
      >
        <p className="selector-texto">BAJA</p>
      </div>
    ),
    value: 3,
  },
];
