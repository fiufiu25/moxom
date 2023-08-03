import { Box, Button, Typography } from "@mui/material"
import { useContext } from "react";
import { MyContext } from "../context/provider";
import { motion } from "framer-motion";
import Comentarios from "./Comentarios";



const Productos=()=>{
    const {producto}=useContext(MyContext);
    console.log(producto)
    const {carrito}=useContext(MyContext);
    const {setcarrito}=useContext(MyContext);
    const {settotal}=useContext(MyContext);
    const {cantidad}=useContext(MyContext);
    const {setcantidad}=useContext(MyContext)
    const {total}=useContext(MyContext)
// para saber si el producto esta en la casita de compras
    const enviarcarrito=(product)=>{

        if(carrito.find(item=>item.id===product.id)){
            const products= carrito.map(item=>item.id===product.id?{...item,cantidad: item.cantidad + 1}:item)
            console.log(products)
            settotal(total+product.precio *product.cantidad)
          setcantidad((cantidad+product.cantidad))
        

            return setcarrito([...products])
        }
        settotal(total+product.precio *product.cantidad)
        setcantidad( cantidad+product.cantidad)
        
        
        setcarrito([...carrito,product])
       

    }


return(

    <>
    
  <Box sx={{position:"relative",width:"100%" ,zIndex:200,pt:10}} id={"pricing"}>
        <Typography  component={motion.h4}
        
        initial="hidden" whileInView="visible" viewport={{once:true,amount:0.5}}
        transition={{delay:0.5,duration:1.3}}
        variants={{
            hidden:{opacity:0,x:-20},
            visible:{opacity:1,x:0}
        }}
        variant="h4" className="title" sx={{textAlign:"center" ,fontWeight:"500",fontFamily:"fantasy",zIndex:900,mb:"-20px",position:"relative"}}> 
        MOXOM PRICING
        </Typography> 
        <Box sx={{textAlign:"center",zIndex:100}} className="imgtitle">

        <Box component={"img"} width={280} sx={{ zIndex:100}}  src="https://assets.website-files.com/63a425aa14e99c5029d209fd/64117af3f98072a6b33ced9d_vector-brush-stroke.svg"></Box>
        </Box>
        </Box>
    <Box sx={{display:"flex",flexDirection:"column",alignItems:"center",justifyItems:"center",pt:3}}>
    <div className="producto">
       <div className="prueba">
        <a href="">CARS</a>
       </div>
       <div>
        <a href="">SUVS</a>
       </div>
       <div>
        <a href="">TRUCKS</a>
       </div>
       <div>
        <a href="">BIKES</a>
       </div>
    </div>
    <div className="contenedor-produ">
    {
     producto&&
        producto.map(item=>(
            <Box key={item.id}  className="basic">
               <h6>{item.title}</h6>
               <h5>{item.precio}$</h5>
               <p>Pellentesque iaculis lorem</p>
            <p>Nulla dictum lectus sed</p>
            <p>Nullam non massa magna</p>
           
            <Button variant="outlined"  component={motion.button}
            
            
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}   
            onClick={()=>enviarcarrito(item)} color="inherit" sx={{width:"100%"}}>ADD TO CART</Button>
            
          
            
            </Box>  
        )
            )
    }
    </div>
    <Button variant="contained" sx={{p:2,width:"80%",mt:5}}>CONTACTS US</Button>
    </Box>
    <Box sx={{display:"flex",justifyContent:"center",alignContent:"center",flexWrap:"wrap",gap:2,pt:5,p:3}}>
    <Comentarios/>
    <Comentarios/>
    </Box>
     
    </>
)
}
export default Productos