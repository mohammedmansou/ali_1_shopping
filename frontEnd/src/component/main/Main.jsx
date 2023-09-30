import {
  AddShoppingCartOutlined,
  Close,
  FormatAlignLeft,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Dialog,
  IconButton,
  Rating,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import ProductDetails from "./ProductDetails";
import { useGetproByNameQuery } from "../pro/pro";

const Main = () => {
  const handleAlignment = (event, AAA) => {
setMyData(AAA)

  };

  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };


const AllPro ="products?populate=*"
const MenCate ="products?populate=*&filters[proCat][$eq]=men"
const WomenCate ="products?populate=*&filters[proCat][$eq]=women"

const [MyData, setMyData] = useState(AllPro)

  const { data, error, isLoading } = useGetproByNameQuery(
    MyData
  );

if(isLoading){
  <Typography sx={{color:"red",bgcolor:"blue"}} variant="h6" >LOADING.....</Typography>
}


if(error){
  // @ts-ignore
  {error.message}
}



  if (data) {
    return (
      <Container sx={{ py: 9 }}>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
          flexWrap={"wrap"}
          gap={3}
        >
          <Box>
            <Typography variant="h6">Selected Products</Typography>

            <Typography variant="body1" fontWeight={300}>
              All our new arrivals in a exclusive brand selection
            </Typography>
          </Box>
          <ToggleButtonGroup
            className="koko"
            color="error"
            value={MyData}
            exclusive
            onChange={handleAlignment}
            aria-label="text alignment"
            sx={{
              ".Mui-selected": {
                bgcolor: "initial",
                color: " #e94560",
                border: " 1px solid rgba(233, 69, 96, 0.5) !important",
              },
            }}
          >
            <ToggleButton
              sx={{ color: theme.palette.text.primary }}
              className="MyButton"
              value={AllPro}
              aria-label="left aligned"
            >
              All Products
            </ToggleButton>
            <ToggleButton
              sx={{ color: theme.palette.text.primary }}
              className="MyButton"
              value={MenCate}
              aria-label="centered"
            >
              MEN Category
            </ToggleButton>
            <ToggleButton
              sx={{ color: theme.palette.text.primary }}
              className="MyButton"
              value={WomenCate}
              aria-label="right aligned"
            >
              WOMEN Category
            </ToggleButton>
          </ToggleButtonGroup>
        </Stack>

        <Stack
          justifyContent={"space-between"}
          direction={"row"}
          sx={{ flexWrap: "wrap" }}
        >
          {data.data.map((item) => {
            return (
              <Card
                sx={{
                  maxWidth: 335,
                  mt: 6,
                  ":hover .MuiCardMedia-root": {
                    scale: "1.1",
                    transition: ".32s",
                    rotate: "1deg",
                  },
                }}
              >
                <CardMedia
                  sx={{ height: 277 }}
                  // @ts-ignore
                  image={`${item.attributes.proImg.data[0].attributes.url
                  }`}
                  title="green iguana"
                />

                <CardContent>
                  <Stack
                    direction={"row"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                  >
                    <Typography component="div" variant="h6" gutterBottom>
                      {item.attributes.proTitle}
                    </Typography>
                    <Typography variant="subtitle1" component="p">
                      {item.attributes.proNum}
                    </Typography>
                  </Stack>
                  <Typography variant="body2" color="text.secondary">
                    {item.attributes.proDes}
                  </Typography>
                </CardContent>

                <CardActions sx={{ justifyContent: "space-between" }}>
                  <Button
                    onClick={handleClickOpen}
                    size="large"
                    sx={{ textTransform: "capitalize" }}
                  >
                    <AddShoppingCartOutlined sx={{ mr: 1 }} fontSize="small" />
                    add to cart
                  </Button>
                  <Rating
                    precision={0.5}
                    name="read-only"
                    value={item.attributes.proRating}
                    readOnly
                  />
                </CardActions>
              </Card>
            );
          })}
        </Stack>

        <Dialog
          sx={{ ".MuiPaper-root": { minWidth: { xs: "100%", md: 800 } } }}
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
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
            onClick={handleClose}
          >
            <Close />
          </IconButton>

          <ProductDetails />
        </Dialog>
      </Container>
    );
  }
};

export default Main;
