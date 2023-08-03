import { createContext, useState } from "react"

export const MyContext =createContext();
const productos=[
    {id:1,title:"BASIC",precio:120,cantidad:1},
    {id:2,title:"STANDARD",precio:170,cantidad:1},
    {id:3,title:"PREMIUN",precio:200,cantidad:1},
    {id:4,title:"ULTIMATE",precio:220,cantidad:1}
  ]
const Proivider=({children})=>{
    
const [carrito,setcarrito]=useState([])
const[cantidad ,setcantidad]=useState(0)
const[total,settotal]=useState(0)
const [numero,setnumero]=useState(0)
const [producto,setproducto]=useState(productos)
const [open,setopen]=useState(false)
const [abrir,setabrir]=useState(false)
console.log("olitas de olitas",producto)

    return(
        <>
        <MyContext.Provider 
value={{carrito,setcarrito,total,settotal,numero,setnumero,producto,setproducto,open,setopen,setabrir,abrir,cantidad,setcantidad}} >

{children}
        </MyContext.Provider>
        
        </>
    )
}
export default Proivider