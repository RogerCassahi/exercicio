import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { styled, tableCellClasses, TableCell } from "@mui/material";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

export default function TableComponent(props) {
  return (
    <TableContainer component={Paper} style={{ width: 900, margin: "auto" }}>
      <Table sx={{ minWidth: 600 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            {props.props.map((data) => {
              return <StyledTableCell align="center">{data}</StyledTableCell>;
            })}
          </TableRow>
        </TableHead>
        <TableBody>{<props.component />}</TableBody>
      </Table>
    </TableContainer>
  );
}