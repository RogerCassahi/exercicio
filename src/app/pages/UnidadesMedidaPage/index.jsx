import {
  styled,
  tableCellClasses,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import TableComponent from "../../shared/components/Table";
import CopyTableButton from "../../shared/components/Table/Buttons/Copy";
import DeleteTableButton from "../../shared/components/Table/Buttons/Delete";
import EditTableButton from "../../shared/components/Table/Buttons/Edit";
import apiUnidade from "../../shared/services/api/apiUnidade";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const THeaderUnidadesMedida = ["Unidade de medida", "Status", ""];

export default function UnidadesMedidaPage() {
  return (
    <TableComponent
      props={THeaderUnidadesMedida}
      component={TabelaUnidadesMedida}
    />
  );
}

function TabelaUnidadesMedida() {
  const [tBody, setTBody] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      const TBodyProdutos = await apiUnidade.getAll();
      setTBody(TBodyProdutos);
    };
    fetch();
  }, []);
  return (
    <>
      {tBody.map((data, index) => (
        <StyledTableRow key={index}>
          <StyledTableCell align="center">{data.unidUnidade}</StyledTableCell>
          <StyledTableCell align="center">
            {data.prodRecStatus === "true" ? (
              <Typography>Desativado</Typography>
            ) : (
              <Typography>Ativo</Typography>
            )}
          </StyledTableCell>
          <StyledTableCell align="center">
            <EditTableButton id={data.id} />
            <CopyTableButton id={data.id} />
            <DeleteTableButton id={data.id} />
          </StyledTableCell>
        </StyledTableRow>
      ))}
    </>
  );
}
