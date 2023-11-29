import "./AreasOfPractice.css"
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

let practiceCard = (image,text) => {
  return(<>
  <div className="practice-card">
     <img src ={image} alt={text}></img>
     
     <h1 className="card-text">{text}</h1>
     
     
  </div>
  </>)
}

let AreasOfPractice = () => {
    return(
        <div className="section-4">
            <h1 className= "section-4-heading">Area Of Practices</h1>
            <div className="grid-section">
            <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          {practiceCard("BusinessLaw.png", "BUSINESS LAW")}
        </Grid>
        <Grid item xs={4}>
        {practiceCard("PartnershipLaw.png", "PARTNERSHIP LAW")}
        </Grid>
        <Grid item xs={4}>
        {practiceCard("RealestateLaw.png", "REAL ESTATE LAW")}
        </Grid>
        <Grid item xs={8}>
        {practiceCard("BusinessLaw1.png", "BUSINESS LAW")}
        </Grid>
        <Grid item xs={8}>
        {practiceCard("LanlordDisputes.png", "LANDLORD DISPUTES")}
        </Grid>
        <Grid item xs={4}>
        {practiceCard("ElderAbuse.png", "ELDER ABUSE")}
        </Grid>
      </Grid>
    </Box>
            </div>

        </div>
    )

}

export default AreasOfPractice;