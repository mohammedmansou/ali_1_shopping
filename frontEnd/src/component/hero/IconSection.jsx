import { Divider, useMediaQuery, useTheme } from "@mui/material";
import {
  AccessAlarmOutlined,
  CreditScoreOutlined,
  ElectricBolt,
  WorkspacePremiumOutlined,
} from "@mui/icons-material";
import { Box, Container, Stack, Typography } from "@mui/material";

const IconSection = () => {

const cards =[
{title:"Fast Delivery" ,subtitle:"7 Days Back" ,icon:<ElectricBolt /> },
{title: 'Memory Guarantee',subtitle: 'Start from $10',icon:<WorkspacePremiumOutlined /> },
{title:"365 Days" ,subtitle:"For Free Return" ,icon:<AccessAlarmOutlined /> },
{title:"Payment" ,subtitle:"Secure System" ,icon: <CreditScoreOutlined />},

]
const theme =useTheme()
  return (
    <Container sx={{mt:3,  bgcolor:theme.palette.mode ==="dark" ? "#000":"#fff" }}>
      <Stack
        divider={useMediaQuery("(min-width:600px)")?<Divider orientation="vertical" flexItem />:null}
        sx={{ flexWrap: "wrap" }}
        direction={"row"}
      >

{cards.map((card)=>{
  return(
<MyBox key={card.title}
         icon={card.icon}
          title={card.title}
           subtitle={card.subtitle} />
    

  )
})}

      </Stack>

    </Container>
  );
};

export default IconSection;

const MyBox = ({ icon, title, subtitle }) => {
  const theme = useTheme();
  return (

    
    <Box    sx={{      justifyContent:useMediaQuery("(min-width:600px)") ? "center" :"left"
      ,
        display: "flex",
        width: 260,
        flexGrow: 1,
        alignItems: "center",
        gap: 3,
        py: 1.6,
      }}
    >
      {icon}
      <Box>
        <Typography variant="body1">{title}</Typography>

        <Typography
          variant="body1"
          sx={{
            fontWeight: 300,
            color: theme.palette.text.secondary,
          }}
        >
          {subtitle}
        </Typography>
      </Box>
    </Box>
  );
};
