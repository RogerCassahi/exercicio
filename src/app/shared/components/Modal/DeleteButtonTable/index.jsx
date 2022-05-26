import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { Delete } from "@mui/icons-material";

import { useState } from "react";
import apiProduto from "../../../services/api/apiProduto";
import apiUnidade from "../../../services/api/apiUnidade";
import {style} from './style'


async function deleteContent(paginaAtual, id) {
  paginaAtual === "/" ? await apiProduto.delete(id) : await apiUnidade.delete(id);
}

export default function BasicModalDeletar({ props }) {
  const [open, setOpen] = useState(false);
  const [paginaAtual, setPaginaAtual] = useState("/");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const abrirModal = () => {
    const pagina = window.location.pathname;
    setPaginaAtual(pagina);
    handleOpen();
  };

  return (
    <div>

      <Button variant="contained" size="small" onClick={abrirModal}>
        <Delete />
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 400, height: "40%" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "column",
              height: "100%",
            }}
          >
            <h2 id="parent-modal-title">Deletar</h2>
            <p id="parent-modal-description">Deseja excluir esta informação?</p>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                height: "40px",
                width: "250px",
                alignContent: "center",
              }}
            >
              <Button
                onClick={() => {
                  handleClose();
                }}
                >
                Cancelar
              </Button>
              <ChildModal
                 close={handleClose}
                 id={props}
                 page={paginaAtual}
              />
            </Box>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}

function ChildModal(props) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    deleteContent(props.page,props.id)
    setOpen(true);
  }
  const handleClose = () => setOpen(false);
  const handleCloseAll = () => {
    handleClose();
    props.close();
    window.location.reload()

  };
  return (
    <>
      <Button onClick={handleOpen} variant="contained">
        Confirmar
      </Button>
      <Modal
        hideBackdrop
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 350, height:200,justifyContent:'space-around' }}>
          <p id="child-modal-description">Esta informação foi deletada</p>
          <Button variant="contained" onClick={handleCloseAll}>
            Fechar
          </Button>
        </Box>
      </Modal>
    </>
  );
}
