import { ArrowForward } from "@mui/icons-material";
import { Container, Box, Link, Stack, Typography, Button, useTheme } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import IconSection from "./IconSection";

import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import "./slide.css";

const slider =[
{sI:"src/images_1/banner-15.jpg" ,cate :"Men",coloro:"red",colorr:"#222" },
{sI:"src/images_1/banner-25.jpg" ,cate :"WOMEN",coloro:"#d0753c",colorr:"#d0753c" },

]

const Hero = () => {
  const theme =useTheme()
  return (
    <Container>
<Box sx={{pt:2, mt: 2.5, gap: 2, display: "flex", alignItems: "center" }}>
        <Swiper loop={true}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
  {slider.map((sliderI)=>{
  return(
    
  <SwiperSlide  className="SP" key={sliderI.cate}  >
            <img src={sliderI.sI} alt="" />
            <Box 
             sx={{ 
                [theme.breakpoints.up('sm')]: {
               position: "absolute",textAlign:"left", left:"10%"
      },  [theme.breakpoints.down('sm')]: { pt:4,pb:6
  },
         }}>
              <Typography variant="h5" sx={{ color: "#222" }}>
                LIFESTYLE COLLECTION
              </Typography>
              <Typography
                variant="h3"
                sx={{ color: "#222", fontWeight: 400, }}
              >
                {sliderI.cate}
              </Typography>
  <Stack sx={{justifyContent:{xs:"center",sm:"left"}}} direction={"row"} alignItems={"center"} >
  <Typography variant="h5" color={"#333"} mr={1} >SALE UP TO</Typography>
  <Typography variant="h5" color={sliderI.coloro} >30% OFF</Typography>
  
  </Stack>
  
  <Typography variant="body1" sx={{color:"#000",fontWeight:300,my:1}} >
    Get Free Shipping on Orders Over $99.00
  </Typography>
  
  <Button variant="contained" sx={{px:5,py:1,mt:2,bgcolor:sliderI.colorr
  ,boxShadow:"8px 4px 16px rgba(43,52,69,0.1)" ,color:"#fff",borderRadius:"1px",
  "&:hover":{bgcolor:"#222",boxShadow:"8px 4px 16px rgba(43,52,69,0.1)"}
  
  }} >
    shop now
  </Button>
  
  
            </Box>
          </SwiperSlide>
  
  )})}
  
  
  
  
        </Swiper>
  
  
  
  
  
  
  
  
  
        <Box sx={{ display: { xs: "none", md: "block" }, minWidth: "26.6%" }}>
          <Box sx={{ position: "relative" }}>
            <img width={"100%"} src="src/images_1/banner-17.jpg" alt="" />
  
            <Stack
              sx={{
                position: "absolute",
                top: "50%",
                left: 31,
                transform: "translateY(-50%)",
              }}
            >
              <Typography
                variant="caption"
                sx={{
                  color: "#2b3445",
                  fontSize: "16px",
                }}
              >
                NEW ARRIVALS
              </Typography>
              <Typography
                variant="h6"
                sx={{ color: "#2b3445", Height: "16px", mt: 1 }}
              >
                SUMMER
              </Typography>
              <Typography variant="h6" sx={{ color: "#2b3445" }}>
                SALE 20% OFF
              </Typography>
              <Link
                sx={{
                  color: "#2b3445",
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  transition: ".3s",
                  "&:hover": { color: "#d23f57" },
                }}
                href="#"
                underline="none"
              >
                shop now
                <ArrowForward sx={{ fontSize: "13px" }} />
              </Link>
            </Stack>
          </Box>
  
          <Box sx={{ position: "relative" }}>
            <img width={"100%"} src="src/images_1/banner-16.jpg" alt="" />
            <Stack
              sx={{
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
                left: 31,
              }}
            >
              <Typography
                variant="caption"
                sx={{
                  color: "#2B3445",
                  fontSize: "18px",
                  fontWeight: 300,
                }}
              >
                GAMING 4K
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: "#2B3445",
                  lineHeight: "16px",
                  mt: 1,
                }}
              >
                DESKTOPS &
              </Typography>
  
              <Typography
                variant="h6"
                sx={{
                  color: "#2B3445",
                }}
              >
                LAPTOPS
              </Typography>
  
              <Link
                sx={{
                  color: "#2B3445",
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  transition: "0.2s",
  
                  "&:hover": {
                    color: "#D23F57",
                  },
                }}
                href="#"
                underline="none"
              >
                shop now
                <ArrowForward sx={{ fontSize: "13px" }} />
              </Link>
            </Stack>
          </Box>
        </Box>
</Box>
<IconSection/>

    </Container>
  );
};

export default Hero;
