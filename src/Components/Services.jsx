import { Box, Typography } from "@mui/material"
import { frame,motion } from "framer-motion"
const Services=()=>{
    return (<>
  
        
    <motion.div className="service" 
     initial="hidden" whileInView="visible" viewport={{once:true,amount:0.5}}
     transition={{delay:0.5,duration:0.2}}
     variants={{
         hidden:{opacity:0,y:-20},
         visible:{opacity:1,y:0}
     }}
    >
        <Box sx={{display:"flex",alignItems:"center" }}>
            <Box>
                <img src="https://assets.website-files.com/63a425aa14e99c5029d209fd/640c0cf8a86b83632d0e5622_icon-service-01.svg" width={100} alt="" />
            </Box>
            <Box><h4>
            SERVICE - 01
                </h4>
                
              <Typography variant="h5" sx={{fontWeight:800}}>
              INTERIOR DETAILING
                </Typography>  
                
                </Box>
        </Box>
        <Box>
        <motion.p
        
        initial="hidden" whileInView="visible" viewport={{once:true,amount:0.5}}
        transition={{delay:1,duration:1.4}}
        variants={{
            hidden:{opacity:0,y:-20},
            visible:{opacity:1,y:0}
        }}
        >Lorem ipsum dolor sit amet consectetur adipisicing elit. A vitae expedita 
                    incidunt quod at vero, numquam ipsum sit similique hic aut, minima, veritatis ab 
                    esse recusandae reprehenderit inventore quis ad!</motion.p>
        </Box>
    </motion.div>
    </>)
}
export default Services