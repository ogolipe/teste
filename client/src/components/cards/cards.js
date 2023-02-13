import React from "react";
import "./card.css";
import FormDialog from "../dialog/dialogForm";

export default function Card(props) {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <FormDialog
        open={open}
        setOpen={setOpen}
        title={props.name}
        anotacao={props.anotacao}
        titulo={props.titulo}
        listCard={props.listCard}
        setListCard={props.setListCard}
        id={props.id}
      />
      <div className="card-container" onClick={() => setOpen(true)}>
        <h1 className="card-title">{props.name}</h1>
        <p className="card-id">{props.id}</p>
        <h3 className="card-titulo">{props.titulo}</h3>
        <p className="card-cartegory">{props.anotacao}</p>
        
      </div>
    </>
  );
}
