import { Button } from "@mui/material";
import { useState } from "react";
import BasicModalDeletar from "../../../Modal/DeleteButtonTable";

export default function DeleteTableButton({props}) {
  const [id, setId] = useState("");

  return (
    <>
      <Button
        style={{ minWidth: "25px", color: "#2f2f2f" }}
        onClick={(e) => {
          setId(props);
        }}
      >
        <BasicModalDeletar props={id} page={window.location.pathname} />
      </Button>
    </>
  );
}
