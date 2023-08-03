import { Box, Typography } from '@mui/material'
import { motion } from 'framer-motion'
import React from 'react'

export default function Estadis({title,sub,kill}) {
  return (
    <>
    <Box sx={{maxWidth:300,minWidth:200,display:"flex",justifyContent:"center",alignItems:"center",flexWrap:"wrap",gap:1}} >
<Box>
<Typography variant='h2' component={motion.h2}
 initial="hidden" whileInView="visible" viewport={{once:true,amount:0.5}}
 transition={{delay:0.5,duration:1.3}}
 variants={{
     hidden:{opacity:0,y:-20},
     visible:{opacity:1,y:0}
 }}

sx={{color:"white",fontFamily:"fantasy",fontWeight:700}}>{title}</Typography>
</Box>
<Box>
<Typography variant='body1' component={motion.p}
 initial="hidden" whileInView="visible" viewport={{once:true,amount:0.5}}
 transition={{delay:0.5,duration:1.3}}
 variants={{
     hidden:{opacity:0,x:-20},
     visible:{opacity:1,x:0}
 }}

sx={{color:"#1386EB"}}>{sub}</Typography>
<Typography variant='h5' component={motion.h5}
 initial="hidden" whileInView="visible" viewport={{once:true,amount:0.5}}
 transition={{delay:0.5,duration:1.3}}
 variants={{
     hidden:{opacity:0,x:-20},
     visible:{opacity:1,x:0}
 }}

sx={{color:"white",fontFamily:"fantasy"}}>{kill}</Typography>
</Box>
    </Box>
    </>
  )
}
