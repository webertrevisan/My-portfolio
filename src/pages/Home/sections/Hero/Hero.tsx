import { styled, Typography } from "@mui/material"
import Avatar from "../../../../assets/images/avatar.jpg"
import { Container, Grid } from "@mui/system"
import DownloadIcon from '@mui/icons-material/Download';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const Hero = () => {

const StyledHero = styled("div")(()=> ({
backgroundColor:"black",
height: "100vh"

}))
const StyledImg = styled("img")(()=> ({
    
    width:"100%",
    borderRadius: "50%"
    }))

    return (
      <>
    <StyledHero>
        <Container>
        <Grid container spacing={2}>
  <Grid item xs={12} md={4}>
  <StyledImg src={Avatar}/>
  </Grid>
  <Grid item xs={12} md={8}>
    <Typography color="White" variant="h1" textAlign="center">Weber Trevisan</Typography>
    <Typography color="White" variant="h2" textAlign="center">I'm a Software Engineer</Typography>

    <Grid container>
      <Grid item xs={12}>
      <button> <DownloadIcon/>DOWNLOAD CV</button>
      </Grid>
      <Grid item xs={12}>
      <button><MailOutlineIcon/>CONTACT ME</button>
      </Grid>
    </Grid>
  </Grid>
</Grid>
        </Container>
    </StyledHero>
      </>
    )
  }
  
  export default Hero