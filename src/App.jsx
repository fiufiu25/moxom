
import Navbar from "./Components/Navbar"
import Redes from "./Components/Redes"
import Productos from "./Components/Productos"

import { useContext } from "react"
import { MyContext } from "./context/provider"
import InfoIcon from '@mui/icons-material/Info';
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import ContactPageIcon from '@mui/icons-material/ContactPage';
const App=()=>{
 

  const enlaces=[
    {title:"About",link:"#about",icon:<InfoIcon/>},
    {title:"Services",link:"#services",icon:<MiscellaneousServicesIcon/>},
    {title:"Gallery",link:"#gallery",icon:<CollectionsBookmarkIcon/>},
    {title:"Pricing",link:"#pricing",icon:<MonetizationOnIcon/>},
    {title:"Contact",link:"#contanct",icon:<ContactPageIcon/>}
  ]




  
return (
  <>
<header>

  <Navbar enlaces={enlaces}  />
  </header>

  <div className="wii">
    <Redes />
  
    <Productos />
    
     
   
  </div>
  </>
)
}
export default App