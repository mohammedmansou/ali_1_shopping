import {
  Close,
  ElectricBikeOutlined,
  ExpandMore,
  KeyboardArrowRightOutlined,
  LaptopChromebookOutlined,
  MenuBookOutlined,
  MenuOutlined,
  SportsEsportsOutlined,
  Window,
} from "@mui/icons-material";
import {
  Accordion,
  AccordionSummary,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import Links from "./Links";

import gogo from "./dataLinks"



const Header3 = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const theme = useTheme();

  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <Container
      sx={{
        mt: 5,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Box>
        <Button
          // className="border"
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          sx={{
            width: "222px",
            // @ts-ignore
            bgcolor: theme.palette.mycolor.main,
            color: theme.palette.text.secondary,
          }}
        >
          <Window />
          <Typography sx={{ mx: 1, padding: "0", textTransform: "capitalize" }}>
            categories
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <KeyboardArrowRightOutlined />
        </Button>
        <Menu
          sx={{
            ".MuiPaper-root": {
              width: "220px",
              // @ts-ignore
              bgcolor: theme.palette.mycolor.main,
            },
          }}
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <ElectricBikeOutlined fontSize="small" />
            </ListItemIcon>
            <ListItemText>Bikes</ListItemText>
          </MenuItem>

          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <LaptopChromebookOutlined fontSize="small" />
            </ListItemIcon>
            <ListItemText>Electronics</ListItemText>
          </MenuItem>

          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <MenuBookOutlined fontSize="small" />
            </ListItemIcon>
            <ListItemText>Books</ListItemText>
          </MenuItem>

          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <SportsEsportsOutlined fontSize="small" />
            </ListItemIcon>
            <ListItemText>Games</ListItemText>
          </MenuItem>
        </Menu>
      </Box>

      {/* 
// "Home",'Mega menu',"Full screen menu",
// "Pages",'User account','Vendor account' */}

{useMediaQuery("(min-width:1200px)") && (
    
    <Stack direction={"row"} alignItems={"center"} sx={{flexGrow:.61, justifyContent:"space-between"}} >
        <Links  title="Home"/>
        <Links  title="Mega menu"/>
        <Links  title="Full screen menu"/>
        <Links  title="Pages"/>
        <Links  title="User account"/>
    <Links  title="Vendor account"/>
    </Stack>
          )}





      {useMediaQuery("(max-width:1200px)") && (
        <IconButton onClick={toggleDrawer("top", true)}>
          <MenuOutlined />
        </IconButton>
      )}

      <Drawer
        sx={{
          ".MuiPaper-root.css-1sozasi-MuiPaper-root-MuiDrawer-paper": {
            height: "100%",
          },
        }}
        anchor={"top"}
        open={state["top"]}
        onClose={toggleDrawer("top", false)}
      >
        <Box
          sx={{ mx: "auto", position: "relative", width: 444, mt: 6, pt: 10 }}
        >
          <IconButton
            sx={{
              position: "absolute",
              top: 0,
              right: 10,
              ":hover": {
                rotate: "380deg",
                transition: ".51s",
                color: "red",
              },
            }}
            onClick={toggleDrawer("top", false)}
          >
            <Close />
          </IconButton>

          {gogo.map((item) => {
            return (
              <Accordion
                key={item.mLink}
                elevation={0}
                sx={{ bgcolor: "initial" }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMore />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>{item.mLink}</Typography>
                </AccordionSummary>

                <List sx={{ py: 0, my: 0 }}>
                  {item.sLink.map((item2) => {
                    return (
                      <ListItem key={item2} sx={{ py: 0, my: 0 }}>
                        <ListItemButton>
                          <ListItemText primary={item2} />
                        </ListItemButton>
                      </ListItem>
                    );
                  })}
                </List>
              </Accordion>
            );
          })}

          {/* 

 */}
        </Box>
      </Drawer>
    </Container>
  );
};

export default Header3;
