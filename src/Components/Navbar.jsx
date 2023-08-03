import { AppBar, Box,  Drawer, IconButton, Toolbar, Typography } from "@mui/material"
import Card from "./Card";
import Drawers from "./Drawer";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';
import { MyContext } from "../context/provider";
import { useContext } from "react";
const Navbar=({enlaces})=>{
   
    const {setabrir}=useContext(MyContext)
    const {abrir}=useContext(MyContext)
    const {setopen}=useContext(MyContext)
    const {open}=useContext(MyContext)
    const {cantidad}=useContext(MyContext)


   
    return(
        <>
        

         <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{width:"100%",bgcolor:"#d3dddfee",zIndex:997}}>
        <Toolbar sx={{display:"flex",justifyContent:"space-around",alignItems:"center",p:1}}>
       
        <Box sx={{display:{xs :"block",md:"none"},bgcolor:"#1386EB",p:1}}>
                    <IconButton sx={{color:"black"}} onClick={()=>(setabrir(!abrir))} >
                    <MenuIcon sx={{color:"white"}}/>
                    </IconButton>
                </Box>
            <Box sx={{fontSize:23,fontWeight:"bold",color:"white",display:"flex",alignItems:"center"}}>
                <Box className="bordes"/>

                <Typography variant="h4" sx={{fontWeight:700, color:"#333333",fontFamily:"Anton, sans-serif"}}>
                MOXOM
            </Typography>
                <Box className="bordes2"/>

               
            
            </Box>
            <Box sx={{display:"flex",alignItems:"center"}}>
                
            <Box component="nav" sx={{display:{xs :"none",md:"block"}}}>
                <ul className="listas">
                    {
                        enlaces.map(item=>(
                            <li key={item.title}
                            ><a href={item.link}>{item.title}</a></li>)
                        )
                    }
                </ul>
            </Box>
            <Box sx={{display:"flex",alignItems:"center"}}>

                <Box  sx={{fontSize:20,fontWeight:"bold",padding:2.5 ,bgcolor:"#1386EB",color:"white",display:{xs :"none",md:"block"}}}><h6>BUY A TICKET</h6></Box >
                <Box sx={{bgcolor:"black",p:1,position:"relative"}} ><IconButton color="error" onClick={()=>(setopen(!open))}><ShoppingCartIcon sx={{color:"white"}} /></IconButton>
                <Box variant="body2" sx={{position:"absolute",color:"white",width:"30px",height:"30px",top:-10,borderRadius:"50%",bgcolor:"#FF292C",right:-10,display:"flex",justifyContent:"center", alignContent:"center",flexWrap:"wrap"}}><p>{cantidad}</p></Box>
                </Box >
            </Box>
            </Box>
        </Toolbar>
        </AppBar>
        </Box>
        <Drawer
      anchor="right"
      open={open}
      onClose={()=>(setopen(false))}
    >
    <Card s/>
    </Drawer>

    <Drawer
      anchor="left"
      open={abrir}
      onClose={()=>(setabrir(false))}
    >
    <Drawers enlaces={enlaces}/>
    </Drawer>

        </>
    )
}
export default Navbar