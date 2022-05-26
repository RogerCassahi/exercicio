import { TextField } from "@mui/material";

export default function Search() {
  return (
    <>
      <TextField
        style={{ width: "60%" }}
        id="outlined-basic"
        label="Pesquisar..."
        onChange={(e, value) => console.log(e.target.value)}
        variant="outlined"
      />
    </>
  );
}
