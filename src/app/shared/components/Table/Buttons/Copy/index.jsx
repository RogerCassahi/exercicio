import { Button } from "@mui/material";
import ModalComponent from "../../../Modal";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import apiProduto from "../../../../services/api/apiProduto";
import { useEffect, useState } from "react";
import UnidadesMedidaForm from "../../../Modal/UnidadesMedida/CopyButton/form";
import CopyForm from "../../../Modal/Produto/CopyButton/form";

export default function CopyTableButton(props) {
  const [dados, setDados] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const resp = await apiProduto.getOne(props.id);
      setDados(resp);
    };

    fetch();
  }, []);
  return (
    <>
      <ModalComponent
        buttonName={
          <Button
            variant="contained"
            size="small"
            onClick={() => {
              fetch();
            }}
          >
            <ContentCopyIcon />
          </Button>
        }
        title={"Produto"}
        content={ window.location.pathname === '/' ? <CopyForm props={dados}/> :<UnidadesMedidaForm props={dados} />}
      />
    </>
  );
}
