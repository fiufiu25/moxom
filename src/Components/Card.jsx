import { Box, Button, IconButton, Typography } from "@mui/material"
import BackspaceIcon from '@mui/icons-material/Backspace';
import { useContext } from "react";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { MyContext } from "../context/provider";


const Card=()=>{
 const {carrito}=useContext(MyContext)
 const {setcarrito}=useContext(MyContext)
 const {settotal}=useContext(MyContext)
 const {total}=useContext(MyContext)
 const {setcantidad}=useContext(MyContext)
 const {cantidad}=useContext(MyContext)
 const {setopen}=useContext(MyContext)
 const aumentar=(product)=>{ 
    const updatedCart = carrito.map((item) =>{
      if(item.id==product.id){
        const actualizar={...item,cantidad:item.cantidad+1}
      settotal(total+actualizar.precio)
      setcantidad(cantidad+1)
      return actualizar;
      }
return item
    })
    return setcarrito(updatedCart)
 }




  const disminuir=(product)=>{
    const updatedCart = carrito.map((item) =>{
        if(item.id==product.id){
          const actualizar={...item,cantidad:item.cantidad-1}

        settotal(total-actualizar.precio)
        setcantidad(cantidad-1)
        

        return actualizar;
         
        }
  
 
     
  return item
  
      })
      
      const filteredCart = updatedCart.filter((item) => item.cantidad !=0);
      return setcarrito(filteredCart)

  
  }

 
    const eliminar=(item)=>{
    const actualizar=carrito.filter(elemet=>elemet.id!==item.id)
    settotal(total- item.precio*item.cantidad)
    setcantidad(cantidad- item.cantidad)
   setcarrito(actualizar)

 
    }


  
    return (
        <>
        <div className="carrito"   >
            <Box sx={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
            <Typography  variant="h5" sx={{fontFamily:"impact"}}>
             YOUR CART
            </Typography>
            <IconButton sx={{color:"black"}} onClick={()=>setopen(false)}>
                 <BackspaceIcon/>
            </IconButton>
            </Box>

            {
                carrito.length>0?(
<Box  sx={{display:"flex",flexDirection:"column",flexGrow:1}}>
         <Box sx={{flexGrow:1}}>      
                {
                    carrito&&
                carrito.map(item=>(
    <Box sx={{display:"flex",alignItems:"center",justifyContent:"space-between",p:2}} key={item.id}>
                    <div>
                        <Typography variant="h6" sx={{fontWeight:"bold"}} >
                            {item.title}
                        
                        </Typography >
                        <Typography variant="body1">
                            s/{item.precio*item.cantidad}
                        </Typography>
                        <Button sx={{width:"100%"}} onClick={()=>eliminar(item)}> Remover</Button>
                    </div>
                    <Box sx={{borderRadius:"50%",width:40,height:40,bgcolor:" rgba(128, 128, 128, 0.293)",display:"flex",justifyContent:"center",alignItems:"center"}}>
                     <p>{item.cantidad}</p>
                    </Box>
                    <Box sx={{display:"flex" ,flexDirection:"column"}}>
                        <IconButton onClick={()=>aumentar(item)}><ExpandLessIcon/></IconButton> <IconButton onClick={()=>disminuir(item)} ><ExpandMoreIcon/></IconButton>
                    </Box>
                </Box>
               
                ))
            }
            </Box> 
            <Box >

            <Box sx={{display:"flex",alignItems:"center",justifyContent:"space-between",p:2}}>
                    <p>SubTotal:</p>
                    <Typography variant="h6" sx={{fontWeight:"bold"}}>S/{total}</Typography>
                </Box>
                <Button variant="contained" sx={{width:"100%"}}>CONTINUE  TO CHECKOUT</Button>
                </Box> 
            </Box>
           
               
                ):
                (
                <div> <Typography variant="h5" sx={{textAlign:"center",fontWeight:600,mt:10}}>No Hay Pedidos</Typography></div>
                )
            }
            
            
        </div>
        </>
    )
}
export default Card