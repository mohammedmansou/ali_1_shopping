import {
  Box,
  Container,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Menu,
  MenuItem,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { ColorModeContext } from "../../theme";
import { useContext, useState } from "react";
import {
  DarkModeOutlined,
  Expand,
  ExpandMore,
  Facebook,
  Instagram,
  LightModeOutlined,
  Twitter,
} from "@mui/icons-material";

const Header = () => {
  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();

  const options = ["AR", "EN"];

  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(1);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ bgcolor: "#2b3445", py: 0.5 ,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius:4 ,

    }}>
      <Container>
        <Stack direction={"row"} alignItems={"center"}>
          <Typography
            sx={{
              mr: 2,
              p: "3px 10px",
              bgcolor: "#d23f57",
              borderRadius: "12px",
              fontSize: "10px",
              fontWeight: "bold",
              color: "#fff",
            }}
            variant="body2"
          >
            Hot
          </Typography>

          <Typography
            sx={{
              fontSize: "12px",
              fontWeight: "300",
              color: "#fff",
            }}
          >
            Free Express Shipping
          </Typography>

          <Box flexGrow={1} />

          <div>
            {" "}
            {theme.palette.mode === "light" ? (
              <IconButton
                onClick={() => {
                  localStorage.setItem(
                    "mode",
                    theme.palette.mode === "dark" ? "light" : "dark"
                  );
                  colorMode.toggleColorMode();
                }}
                color="inherit"
              >
                <LightModeOutlined  className="FoNt"  />
              </IconButton>
            ) : (
              <IconButton
                onClick={() => {
                  localStorage.setItem(
                    "mode",
                    theme.palette.mode === "dark" ? "light" : "dark"
                  );
                  colorMode.toggleColorMode();
                }}
                color="inherit"
              >
                <DarkModeOutlined  className="FoNt"  />
              </IconButton>
            )}
          </div>

          <List
            sx={{ p: 0, m: 0 }}
            component="nav"
            aria-label="Device settings"
          >
            <ListItem
              sx={{ "&:hover": { cursor: "pointer" }, px: 1 }}
              id="lock-button"
              aria-haspopup="listbox"
              aria-controls="lock-menu"
              aria-label="when device is locked"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClickListItem}
            >
              <ListItemText
                sx={{
                  ".MuiTypography-root": { fontSize: "10px", color: "#fff" },
                }}
                secondary={options[selectedIndex]}
              />
              <ExpandMore sx={{ color: "#fff" }} />
            </ListItem>
          </List>

          <Menu
            id="lock-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "lock-button",
              role: "listbox",
            }}
          >
            {options.map((option, index) => (
              <MenuItem
                sx={{ fontSize: "11px", p: "3px 10px", minHeight: "10px" }}
                key={option}
                selected={index === selectedIndex}
                onClick={(event) => handleMenuItemClick(event, index)}
              >
                {option}
              </MenuItem>
            ))}
          </Menu>

          <Twitter   className="FoNt" />
          <Facebook    sx={{  mx: 1  }} className="FoNt" />
          <Instagram  className="FoNt" />
        </Stack>
      </Container>
    </Box>
  );
};

export default Header;
