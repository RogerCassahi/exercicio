import { Box } from "@mui/system";
import AddButton from "./Buttons/AddButton";
import NavigationButtons from "./Buttons/NavigationButtons";
import ShowDisabledButton from './Buttons/ShowDisabledButton'
import {style} from './style'
export default function Nav() {
  return (
    <Box style={style}>
      <AddButton />
      <NavigationButtons />
      <ShowDisabledButton/>
    </Box>
  );
}
