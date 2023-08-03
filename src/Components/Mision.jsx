import { Box, Button, Typography } from '@mui/material'
import { motion } from 'framer-motion'
import React from 'react'

export default function Mision({title,button}) {
  return (
    <Box sx={{maxWidth:400,minWidth:300,p:2}}
    component={motion.div}
 initial="hidden" whileInView="visible" viewport={{once:true,amount:0.5}}
 transition={{delay:0.5,duration:1.3}}
 variants={{
     hidden:{opacity:0,y:-40},
     visible:{opacity:1,y:0}
 }}
    >
       <Typography  variant='h5' sx={{fontFamily:"fantasy",textAlign:"center"}}>
        {title}
       </Typography>
       <Typography variant='body1' sx={{px:1,py:2,textAlign:"center",color:"#96B0B7"}}> 
       Quisque fermentum erat enim. Cras nec nisi at ipsum elementum tincidunt et nec nisi. Vivamus pharetra orci non elit egestas, vitae iaculis risus eleifend. Morbi dui odio, efficitur id enim et, cursus ultricies tortor. Vivamus quis mi lorem. Nunc condimentum, mi non dictum suscipit.
    </Typography>
      <Button variant="text" sx={{color:"white",width:"100%"}} color='inherit' >{button}</Button>
    </Box>
  )
}
