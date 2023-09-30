import { ExpandMore, KeyboardArrowRightOutlined } from "@mui/icons-material";


import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";


const Links = ({title}) => {
  return (




    <Box  sx={{zIndex:999, ":hover":{cursor:"pointer"} ,
    "&:hover .totate":{rotate:"-90deg",},
      display: "flex", alignItems: "center",
      position:"relative",
      ":hover .show-when-hover":{display:"block"}
      }}>
      <Typography variant="body1">{title}</Typography>
      <ExpandMore className="totate" sx={{ transition:",5s", fontSize: "16px", ml: .21 }} />


      <Box className="show-when-hover"  sx={{position:"absolute", top:"100%",
        minWidth:"170px",left:"50%",
        transform:"translatex(-50%)",
        display:"none"
       }}
         >
        <Paper sx={{mt:2}}    >

          <nav aria-label="secondary mailbox folders">
            <List>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText sx={{".MuiTypography-root":{fontSize:"15px",
                fontWeight:300,
                }}} primary="Dashboard" />
                </ListItemButton>
              </ListItem>


              <ListItem disablePadding  sx={{position:"relative",
            ":hover .show2-when":{display:"block"}
            }} >
                <ListItemButton>
                  <ListItemText 
                  sx={{".MuiTypography-root":{fontSize:"15px",  fontWeight:300
                }}} primary="Products" />
                <Box flexGrow={1} />
                <KeyboardArrowRightOutlined fontSize="small" />
                </ListItemButton>

<Box className="show2-when " sx={{display:"none",position:"absolute",top:0,left:"100%"  }} >
  <Paper sx={{ml:1, minWidth:150,}}>
                    <nav aria-label="secondary mailbox folders">
            <List>
              <ListItem disablePadding>
                <ListItemButton sx={{display:"flex",p:0,px:1.5}} >
                  <ListItemText sx={{"& .MuiTypography-root":{
                    fontSize:"15px",fontWeight:300,
                  }}} primary="Add Product" />
                </ListItemButton>
              </ListItem>
          
              <ListItem disablePadding>
                <ListItemButton sx={{display:"flex",p:0,px:1.5}} >
                  <ListItemText sx={{"& .MuiTypography-root":{
                    fontSize:"15px",fontWeight:300,
                  }}} primary="Edit Product" />
                </ListItemButton>
              </ListItem>



            </List>
          </nav>
  </Paper>
</Box>



              </ListItem>


              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText sx={{".MuiTypography-root":{fontSize:"15px",
                fontWeight:300,
                }}} primary="Orders" />
                </ListItemButton>
              </ListItem>


              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText sx={{".MuiTypography-root":{fontSize:"15px",
                fontWeight:300,
                }}} primary="Profile" />
                </ListItemButton>
              </ListItem>




            </List>
          </nav>
        </Paper>
      </Box>
    </Box>






  );
};

export default Links;
