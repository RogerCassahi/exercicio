import { Checkbox, FormControlLabel } from "@mui/material";
export default function ShowDisabledButton() {

  return (
    <FormControlLabel
      control={<Checkbox />}
      onChange={(e, value) => console.log(value)}
      label="Listar desativados"
    />
  );
}
