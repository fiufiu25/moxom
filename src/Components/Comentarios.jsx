import { Box, Paper, Popper, Rating, Stack, Typography } from '@mui/material'
import React from 'react'

export default function Comentarios() {
  return (
  <Box sx={{textAlign:"center",maxWidth:420,minWidth:200,pt:1}}>
<Paper sx={{p:3,bgcolor:"#D8E7EB"}}  elevation={12}>
<Box sx={{display:"flex",gap:1,textAlign:"center",justifyContent:"center",alignItems:"center"} }>
      <Box component={"img"} width={50} src="https://assets.website-files.com/63a425aa14e99c5029d209fd/63c8f4eafccaf931c0ccd596_image-testimonial-2.webp"/> 

      <Typography variant='h6' sx={{fontWeight:800,p:1,fontSize:16}}>MICHAEL BRONSON</Typography>
    </Box>
    <Typography variant='body2' sx={{p:1,color:"#4F6970",lineHeight:1.5,fontWeight:500}}>
    Nulla fermentum mi ac rutrum sagittis. Etiam ex purus, porttitor facilisis nibh eu, suscipit scelerisque nibh. Morbi laoreet ornare turpis in dapibus quis sem odio venenatis eleifend.
    </Typography>
    <Stack spacing={1}>
      
      <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly sx={{width:"100%"}} />
    </Stack>
</Paper>
  
  </Box>
  )
}
