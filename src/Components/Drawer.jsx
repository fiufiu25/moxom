import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material"
import { useContext } from "react"
import { MyContext } from "../context/provider"
const Drawers=({enlaces})=>{
  const {setabrir}=useContext(MyContext)
    return(
        <>
        <Box sx={{ width: '100%', maxWidth: 360,minWidth:200, bgcolor: 'background.paper' }}>
      <nav aria-label="main mailbox folders">
      <Typography variant="h5" sx={{fontWeight:900, color:"black",textAlign:"center",pt:5}}>
                MOXOM
            </Typography>
        {
enlaces.map(item=>(
<List key={item.title}>
          <ListItem disablePadding>
            <ListItemButton href={item.link} onClick={()=>setabrir(false)} >
              <ListItemIcon>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.title}  />
            </ListItemButton>
          </ListItem>
          
        </List>
))
        }
        
      </nav>
      
    </Box>
        
        </>
    )
}
export default Drawers