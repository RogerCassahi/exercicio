import {
  Autocomplete,
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { style } from "./style";
import apiProduto from "../../../../../services/api/apiProduto";
import apiUnidade from "../../../../../services/api/apiUnidade";
import { v4 as uuidv4 } from "uuid";

export default function CopyForm(props) {
  const [listUnidades, setListUnidade] = useState([]);
  const [items, setItems] = useState([]);

  const [status, setStatus] = useState(props.props.prodRecStatus);
  const [codigo, setCodigo] = useState(props.props.prodCodigo);
  const [gtin, setGtin] = useState(props.props.prodCodigoBarras);
  const [descricao, setDescricao] = useState(props.props.prodDescricao);
  const [unidade, setUnidade] = useState(props.props.unidadesId);
  const [origem, setOrigem] = useState(props.props.prodOrigem);
  

  const createProduto = async () => {
    const newProduto = {
      id: uuidv4(),
      prodRecStatus: `${status}`,
      prodCodigo: `${codigo}`,
      prodCodigoBarras: `${gtin}`,
      prodDescricao: `${descricao}`,
      unidadesId: `${unidade}`,
      prodOrigem: `${origem}`,
      prodCreatedAt: new Date(),
      prodUpdatedAt: new Date(),
    };
    await apiProduto.Create(newProduto);
    window.location.reload();
  };

  let list = [];
  useEffect(() => {
    const getUnidades = async () => {
      const unidades = await apiUnidade.getAll();
      unidades.map((data) => {
        return list.push({ label: `${data.unidUnidade}`, key: `${data.id}` });
      });
      setItems(unidades.lenght);
      setListUnidade(list);
    };

    getUnidades();
  }, [items]);

  
  return (
    <Box style={style}>
      <FormControlLabel
        control={<Checkbox defaultChecked />}
        label="Desativado"
        onChange={(e, value) => setStatus(value)}
        value={status}
      />
      <TextField
        id="outlined-basic"
        sx={{ width: "100%" }}
        label="Código"
        variant="outlined"
        value={codigo}
        onChange={(e) => setCodigo(e.target.value)}
      />
      <TextField
        id="outlined-basic"
        sx={{ width: "100%" }}
        label="GTIN"
        value={gtin}
        variant="outlined"
        onChange={(e) => setGtin(e.target.value)}
      />
      <TextField
        id="outlined-basic"
        sx={{ width: "100%" }}
        value={descricao}

        label="Descrição"
        variant="outlined"
        onChange={(e) => setDescricao(e.target.value)}
      />
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        onChange={(e, value) => setUnidade(value.key)}
        value={unidade}
        options={listUnidades}
        sx={{ width: "100%" }}
        renderInput={(params) => (
          <TextField {...params} label="Unidades de medida" />
        )}
      />
      <Autocomplete
        disablePortal
        value={origem}
        id="combo-box-demo"
        onChange={(e, value) => setOrigem(value.num)}
        options={origemList}
        sx={{ width: "100%" }}
        renderInput={(params) => <TextField {...params} label="Origem" />}
      />

      <Button
        variant="contained"
        onClick={() => {
          createProduto();
        }}
      >
        Confirmar
      </Button>
    </Box>
  );
}

const origemList = [
  {
    label: "PROR0 = 0 = Nacional, exceto as indicadas nos códigos 3, 4, 5 e 8",
    num: 0,
  },
  {
    label:
      "PROR0 = 1 = Estrangeira, importação direta, exceto a indicada no código 6",
    num: 1,
  },
  {
    label:
      "PROR0 = 2 = Estrangeira, adquirida no mercado interno, exceto a indicada no código 7",
    num: 2,
  },
  {
    label:
      "PROR0 = 3 = Nacional, mercadoria ou bem com conteúdo de importação superior a 40% e inferior ou igual a 70%",
    num: 3,
  },
  {
    label:
      "PROR0 = 4 = Nacional, cuja produção tenha sido feita em conformidade com os processos produtivos básicos de que tratam as legislações citadas nos ajustes",
    num: 4,
  },
  {
    label:
      "PROR0 = 5 = Nacional, mercadoria ou bem com conteúdo de importação inferior ou igual a 40%",
    num: 5,
  },
  {
    label:
      "PROR0 = 6 = Estrangeira, importação direta, sem similar nacional, constante em lista da CAMEX e gás natural",
    num: 6,
  },
  {
    label:
      "PROR0 = 7 = Estrangeira, adquirida no mercado interno, sem similar nacional, constante lista CAMEX e gás natural",
    num: 7,
  },
  {
    label:
      "PROR0 = 8 = Nacional, mercadoria ou bem com conteúdo de importação superior a 70%",
    num: 8,
  },
];
