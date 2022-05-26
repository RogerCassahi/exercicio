import { Edit } from "@mui/icons-material";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import apiProduto from "../../../../services/api/apiProduto";
import ModalComponent from "../../../Modal";
import EditForm from "../../../../components/Modal/UnidadesMedida/EditButton/form/";
import EditFormProduto from "../../../../components/Modal/Produto/EditButton/form";

export default function EditTableButton({props}) {
  const [dados, setDados] = useState("");

  useEffect(() => {
    const fetch = async () => {
      const resp = await apiProduto.getOne(props);
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
            <Edit />
          </Button>
        }
        title={"Produto"}
        content={
          window.location.pathname === "/" ? (
            <EditFormProduto props={dados} />
          ) : (
            <EditForm props={dados} />
          )
        }
      />
    </>
  );
}
