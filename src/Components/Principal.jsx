import { Box, Typography } from "@mui/material";
import { frame, motion } from "framer-motion";

export default function Principal() {
  return (
   <>
   <Box sx={{display:"flex",alignItems:"center",justifyContent:"center",minHeight:200,maxHeight:600,position:"relative"}}>


    <Box  
     component={motion.div}
     initial="hidden" whileInView="visible" viewport={{once:true,amount:0.5}}
     transition={{delay:0.5,duration:1}}
     variants={{
         hidden:{opacity:0,y:60},
         visible:{opacity:1,y:0}
     }}
    
    sx={{width:{xs:130,sm:160,md:200},height:{xs:240,sm:270,md:350},bgcolor:"#1386EB",position:"relative" ,display:"flex",justifyContent:"center",alignContent:"center",flexDirection:"column",flexWrap:"wrap",gap:5}}>
   <Box  sx={{width:{xs:80,sm:110,md:150},height:{xs:190,sm:220,md:280},bgcolor:"black"}}/>


   <Box sx={{width:{xs:80,sm:110,md:150},height:{xs:190,sm:220,md:280},bgcolor:"black"}}/>

    </Box>
    <Box sx={{minWidth:300,maxWidth:1600,bgcolor:"#D8E7EB",overflow:"hidden",objectFit:"contain" ,position:"absolute",display:"flex",fontSize:{xs:65,sm:90,md:130,lg:200},fontWeight:900,fontFamily:"fantasy"}}>
    <Box  sx={{color:"#B4CFD6"}} >
        <motion.h2 
        initial="hidden" whileInView="visible" viewport={{once:true,amount:0.5}}
    transition={{delay:0.5,duration:1.4}}
    variants={{
        hidden:{opacity:0,y:20},
        visible:{opacity:1,y:0}
    }} >
            M

        </motion.h2>
        </Box>
 
        <Box  sx={{color:"#B4CFD6"}}>
        <motion.h2 
        initial="hidden" whileInView="visible" viewport={{once:true,amount:0.5}}
    transition={{delay:0.5,duration:1.4}}
    variants={{
        hidden:{opacity:0,y:20},
        visible:{opacity:1,y:0}
    }} >
            O
        </motion.h2>
        </Box>
        <Box  sx={{color:"#B4CFD6"}}>
        <motion.h2 
        initial="hidden" whileInView="visible" viewport={{once:true,amount:0.5}}
    transition={{delay:0.5,duration:1.4}}
    variants={{
        hidden:{opacity:0,y:20},
        visible:{opacity:1,y:0}
    }} >
            X
        </motion.h2>
        </Box>
        <Box  sx={{color:"#B4CFD6"}}>
        <motion.h2 
        initial="hidden" whileInView="visible" viewport={{once:true,amount:0.5}}
    transition={{delay:0.5,duration:1.4}}
    variants={{
        hidden:{opacity:0,y:20},
        visible:{opacity:1,y:0}
    }} >
            O
        </motion.h2>

        </Box>
        <Box  sx={{color:"#B4CFD6"}}>
        <motion.h2 
        initial="hidden" whileInView="visible" viewport={{once:true,amount:0.5}}
    transition={{delay:0.5,duration:1.4}}
    variants={{
        hidden:{opacity:0,y:20},
        visible:{opacity:1,y:0}
    }} >
            M
        </motion.h2>
        </Box>
    </Box>
    <Box sx={{fontSize:35,position:"absolute"}}>
        <Typography variant="h2" component={motion.h2}
       
         initial="hidden" whileInView="visible" viewport={{once:true,amount:0.5}}
     transition={{delay:0.5,duration:1.4}}
     variants={{
         hidden:{opacity:0,y:-20},
         visible:{opacity:1,y:0}
     }}
      
        sx={{fontFamily:"fantasy,Anton, sans-serif",fontSize:{xs:"60px",sm:"70px",md:"90px",lg:"150px",fontWeight:500}}}>MOXOM</Typography>
    </Box>
    <Box component={motion.img} 
     initial="hidden" whileInView="visible" viewport={{once:true,amount:0.5}}
     transition={{delay:0.5,duration:1.7}}
     variants={{
         hidden:{opacity:0,x:-50},
         visible:{opacity:1,x:0}
     }}
    
    sx={{width:{xs:"240px",sm:"350px",md:"400px",lg:"500px"},position:"absolute",top:{xs:130,sm:130,md:180,lg:180},ml:{xs:5,sm:8,md:20,lg:40}}} src="https://assets.website-files.com/63a425aa14e99c5029d209fd/63dd105317a3565dc7edad87_image-hero-p-800.webp"></Box>
   </Box>
   </>
  )
}
