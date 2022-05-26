import { Box } from '@mui/system'
import Search from './Search'
import {style} from './style'
export default function Header(){
    return(
        <Box style={style}>
        <Search/>
        </Box>
    )
}