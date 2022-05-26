import {
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { style } from "./style";
import apiUnidade from "../../../../../services/api/apiUnidade";

export default function UnidadesMedidaForm(props) {
  const [status, setStatus] = useState(props.props.unidRecStatus);
  const [unidadeName, setUnidadeName] = useState(props.props.unidUnidade);

    const createUnidade = async () => {
    const newUnidade = {
      id: uuidv4(),
      unidUnidade: `${unidadeName}`,
      unidRecStatus: `${status}`,
      unidCreatedAt: new Date(),
      unidUpdatedAt: new Date(),
    };
    await apiUnidade.Create(newUnidade);
    window.location.reload();
  };
  
  return (
    <Box style={style}>
   
      <FormControlLabel
        control={<Checkbox defaultChecked />}
        label="Desativado"
        onClick={(e, value) => setStatus(value)}
        value={status}
      />
      <TextField
        id="outlined-basic"
        sx={{ width: "100%" }}
        label="Unidade de Medida"
        variant="outlined"
        onChange={(e) => setUnidadeName(e.target.value)}
        value={unidadeName}

      />
         <Button
        variant="contained"
        onClick={() => {
          createUnidade();
        }}
      >
        Confirmar
      </Button>
    </Box>
  );
}

