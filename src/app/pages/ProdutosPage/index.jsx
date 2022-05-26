import { styled, tableCellClasses, TableCell, TableRow, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import apiProduto from "../../shared/services/api/apiProduto";
import EditFormProduto from "../../shared/components/Modal/Produto/EditButton/form";
import CopyTableButton from "../../shared/components/Table/Buttons/Copy";
import DeleteTableButton from "../../shared/components/Table/Buttons/Delete";
import TableComponent from "../../shared/components/Table";
import EditTableButton from "../../shared/components/Table/Buttons/Edit";

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

const THeaderProdutos = [
  "Código",
  "GTIN",
  "Descrição",
  "Unidade",
  "Status",
  "",
];


function TableProdutos() {
  const [tBody, setTBody] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      const TBodyProdutos = await apiProduto.getAll();
      console.log(TBodyProdutos)
      setTBody(TBodyProdutos);
    };
    fetch();
  }, []);

  return (
    <>
      {tBody.map((data,index) => (
        <StyledTableRow key={index} >
          <StyledTableCell align="center">{data.prodCodigo}</StyledTableCell>
          <StyledTableCell align="center">
            {data.prodCodigoBarras}
          </StyledTableCell>
          <StyledTableCell align="center">{data.prodDescricao}</StyledTableCell>
          <StyledTableCell align="center">{data.unidades.unidUnidade}</StyledTableCell>
          <StyledTableCell align="center">{data.prodRecStatus === 'true'? <Typography>Desativado</Typography>:<Typography>Ativo</Typography>}</StyledTableCell>
          <StyledTableCell align="center" >
            <EditTableButton props={data.id}/>
            <CopyTableButton props={data.id}/>
            <DeleteTableButton props={data.id}/>
          </StyledTableCell>
        </StyledTableRow>
      ))}
    </>
  );
}

export default function PaginaProdutos() {
  return <TableComponent props={THeaderProdutos} component={TableProdutos} />;
}