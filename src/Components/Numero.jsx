import { Box, Typography } from "@mui/material"
import { frame, motion } from "framer-motion"
import Mision from "./Mision"
const Numero=({numero,span,detalle})=>{
    return(<>
    <Box sx={{textAlign:"center",padding:2}} component={motion.div}
     initial="hidden" whileInView="visible" viewport={{once:true,amount:0.5}}
     transition={{delay:0.5,duration:1.4}}
     variants={{
         hidden:{opacity:0,x:-20},
         visible:{opacity:1,x:0}
     }}
    >
        <Typography variant="h2" component={motion.div}
         initial="hidden" whileInView="visible" viewport={{once:true,amount:0.5}}
         transition={{delay:1.4,duration:1.4}}
         variants={{
             hidden:{opacity:0,y:-20},
             visible:{opacity:1,y:0}
         }}
        sx={{p:1,fontWeight:"bold",fontFamily:"fantasy"}}>
            {numero}
        </Typography>
        <Typography variant="body2"  sx={{p:1,fontWeight:"bold",color:"#1386EB"}} >
           {span}
        </Typography>
        <Typography variant="h5"  sx={{p:1,fontWeight:"500",fontFamily:"fantasy"}}>
       {detalle}
        </Typography >
    </Box>
   
    
    </>)
}
export default Numero