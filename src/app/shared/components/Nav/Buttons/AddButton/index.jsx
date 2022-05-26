import { Add } from "@mui/icons-material";
import { Button } from "@mui/material";
import { useState } from "react";
import ModalComponent from "../../../Modal";
import ProdutoForm from "../../../Modal/Produto/Form";
import UnidadeMedidaForm from "../../../Modal/UnidadesMedida/Form";

export default function AddButton() {
  const [page, setPage] = useState("");


  const openModal = () => {
    setPage(window.location.pathname);
  };

  return (
    <ModalComponent
      buttonName={
        <Button variant="contained" onClick={openModal}>
          <Add />
          Adicionar
        </Button>
      }
      title={page === "/" ? "Produto" : "Unidades de medida"}
      content={page === "/" ? <ProdutoForm /> : <UnidadeMedidaForm />}
    />
  );
}
