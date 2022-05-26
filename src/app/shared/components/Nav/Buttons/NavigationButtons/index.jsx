import { Button, ButtonGroup } from "@mui/material";
import { Link } from "react-router-dom";

export default function NavigationButtons() {
  return (
    <ButtonGroup variant="outlined" aria-label="outlined button group">
      <Link to="/">
        <Button>Produtos</Button>
      </Link>
      <Link to="/unidadesmedida">
        <Button>Unidades de Medida</Button>
      </Link>
    </ButtonGroup>
  );
}
