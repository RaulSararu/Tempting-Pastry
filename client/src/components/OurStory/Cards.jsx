import * as React from "react";
import MediaCard from "./MediaCard";
import Raul1 from "../../assets/images/members/Raul1.jpg";
import Igor1 from "../../assets/images/members/Igor1.jpg";
import Tanya1 from "../../assets/images/members/Tanya1.jpg";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  gridContainer: {
    paddingLeft: "40px",
    paddingRight: "40px",
  },
});

const mediaCards = [
  {
    image: Raul1,
    title: "Raul(Mr Bread)",
    description: `It is impossible to imagine life without bread. 
    Raul has qualities without which this project would be impossible.`,
    linkedin: 'https://de.linkedin.com/in/raul-sararu-a993061a1/en?trk=people-guest_people_search-card&original_referer=https%3A%2F%2Fwww.google.com%2F',
    github: 'https://github.com/RaulSararu'
  },
  {
    image: Igor1,
    title: "Igor(Mr Sweet)",
    description: `Smiling, radiant, always ready to help. 
    Just like the sweets you'd like to have around.`,
    linkedin: 'https://de.linkedin.com/in/igor-machold-77b514233?trk=public_profile_browsemap',
    github: 'https://github.com/IMahold'
  },
  {
    image: Tanya1,
    title: "Tanya (Mrs Cake)",
    description: `The cake is not for every day. It is for special occasions. 
    Like for a project, we need someone with special skills.`,
    linkedin: 'https://de.linkedin.com/in/tanyatodorova',
    github: 'https://github.com/TanyaDT'

  },
]; 
export default function Cards() {
  const classes = useStyles();
  return (
    <Box p={4}>
      <Grid
        container
        spacing={4}
        className={classes.gridContainer}
        justifyContent="center"
        sx={{
          boxShadow:"rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px"
          ,
          height: '100%'
        }}
      >
        {mediaCards.map((mediaCard, i) => {
          return (
            <Grid key={i} item xs={4} sm={6} md={4} sx={{height: '100'}}>
              <MediaCard key={i} {...mediaCard} />{" "}
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}
