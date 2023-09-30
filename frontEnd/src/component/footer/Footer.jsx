import { Box, Typography, Button } from "@mui/material"

const Footer = () => {
  return (
    <Box
    sx={{
bgcolor:"#2b3445",
py:1.3,
borderTopLeftRadius:8,
borderTopRightRadius:8
    }}
    >
<Typography  color="HighlightText"
justifyContent={"center"}
display={"flex"}
alignItems={"center"}
variant="h6"
sx={{fontSize:18}}
>
  Designed & Developed By 
  <Button   sx={{textTransform:"capitalize",color:"#ff7790",
fontSize:"18px",mx:0.5
}} >    
Mohammed Mansour
  </Button>
   © 2023
  </Typography>      



    </Box>
  )
}

export default Footer             