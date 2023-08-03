import { Box, Button, IconButton, Typography } from "@mui/material"
import FacebookIcon from '@mui/icons-material/Facebook';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import Numero from "./Numero";
import Services from "./Services";
import Principal from "./principal";
import { motion } from "framer-motion";
import Mision from "./Mision";
import Estadis from "./Estadis";
const Redes=()=>{
    return(
        <>
    <Box   sx={{display:"flex", justifyContent:"space-around",alignItems:"center",mb:5}} >
        <IconButton  >
        < FacebookIcon sx={{ color:"black"}}/>
        </IconButton>
        <IconButton >
        < CallIcon sx={{ color:"black"}}/>
        </IconButton>
        <IconButton >
        < EmailIcon sx={{ color:"black"}}/>
        </IconButton>
        <IconButton >
        < TwitterIcon sx={{ color:"black"}}/>
        </IconButton>
        <IconButton >
        < InstagramIcon sx={{ color:"black"}}/>
        </IconButton>
        <IconButton >
        < LocationOnIcon sx={{ color:"black"}}/>
        </IconButton>
        <IconButton >
        < WatchLaterIcon sx={{ color:"black"}}/>
        </IconButton>
        <IconButton >
        < FacebookIcon sx={{ color:"black"}}/>
        </IconButton>
    </Box>
    <Box >
        <Principal/>
    </Box>
    <Box  sx={{width:"100%",display:"flex",justifyContent:"center",alignItems:"center",gap:3,flexWrap:"wrap",pt:{xs:2,sm:6,lg:10}}}>
        <Numero numero="01" span="QUALITY" detalle={"GUARANTEED"}/>
        <Numero numero="02" span="NATURE" detalle={"FRIENDLY"}/>
        <Numero numero="03" span="FAST" detalle={"PROCESS"}/>
        <Numero numero="04" span="HIGHLY" detalle={"AFFORDABLE"}/>
    </Box>
    <Box id="about" sx={{bgcolor:"#102429",py:10}}>
    <Box 
    
    sx={{color:"white",justifyContent:"center",alignItems:"center",display:"flex",gap:2,flexWrap:"wrap",pb:5}}>
<Estadis title={"7 K"} sub={"CARDS"} kill={"DETAILED"}/>
<Estadis title={"7 K"} sub={"CARDS"} kill={"DETAILED"}/>
<Estadis title={"7 K"} sub={"CARDS"} kill={"DETAILED"}/>
<Estadis title={"7 K"} sub={"CARDS"} kill={"DETAILED"}/>

    </Box>
    <Box>
    <Box sx={{color:"white",justifyContent:"center",alignItems:"center",display:"flex",gap:5,flexWrap:"wrap"}}>
    
    <Mision title={"MOXOM VISION"} button={"BUY A TICKET"}/>
    <Mision title={"MOXOM MISION"} button={"CONTACT USE"}/>
    </Box>
    </Box>
    </Box>
   
   
   
  

    <Box sx={{position:"relative",width:"100%" ,zIndex:200,pt:10}} id={"services"}>
        <Typography  component={motion.h4}
        
        initial="hidden" whileInView="visible" viewport={{once:true,amount:0.5}}
        transition={{delay:0.5,duration:1.3,type:"spring",bounce:10}}
        variants={{
            hidden:{opacity:0,y:-20},
            visible:{opacity:1,y:0}
        }}
        variant="h4" className="title" sx={{textAlign:"center" ,fontWeight:"500",fontFamily:"fantasy",zIndex:900,mb:"-20px",position:"relative"}}> 
        MOXOM SERVICES
        </Typography> 
        <Box sx={{textAlign:"center",zIndex:100}} className="imgtitle">

        <Box component={"img"} width={280} sx={{ zIndex:100}}  src="https://assets.website-files.com/63a425aa14e99c5029d209fd/64117af3f98072a6b33ced9d_vector-brush-stroke.svg"></Box>
        </Box>
        
    
    <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",flexWrap:"wrap",pt:2}} >
     <Services/>
     <Services/>
     <Services/>
     <Services/>
     <Services/>
     <Services/>
     </Box>
     </Box>
        </>
    )
}
export default Redes