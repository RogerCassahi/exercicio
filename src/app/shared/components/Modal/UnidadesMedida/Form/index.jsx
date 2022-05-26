import { Button, Checkbox, FormControlLabel, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { style } from "./style";
import apiUnidade from "../../../../services/api/apiUnidade";

export default function UnidadesMedidaForm(props) {
  const [status, setStatus] = useState("");
  const [unidadeName, setUnidadeName] = useState("");

  const createUnidade = async () => {
    const newUnidade = {
      id: uuidv4(),
      unidRecStatus: `${status}`,
      unidUnidade: `${unidadeName}`,
      unidCreatedAt: new Date(),
      unidUpdatedAt: new Date(),
    };
    await apiUnidade.create(newUnidade);
    window.location.reload();
  };

  return (
    <Box style={style}>
      <FormControlLabel
        control={<Checkbox defaultChecked />}
        label="Desativado"
        onChange={(e, value) => setStatus(value)}
      />
      <TextField
        id="outlined-basic"
        sx={{ width: "100%" }}
        label="Unidade de medida"
        variant="outlined"
        onChange={(e) => setUnidadeName(e.target.value)}
      />
      <Box style={{ width: 600, display: "flex", justifyContent: "center" }}>
        <Button
          variant="contained"
          sx={{ width: 200, margin: "auto" }}
          onClick={() => {
           createUnidade();
       
          }}
        >
          Confirmar
        </Button>
      </Box>
    </Box>
  );
}
