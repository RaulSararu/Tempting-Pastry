import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { collapseClasses } from "@mui/material";
import Raul1 from "../../assets/images/members/Raul1.jpg";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function MediaCard({ image, title, description, github, linkedin }) {
  const classes = useStyles();
  return (
    <Card className={classes.root} sx={{ height: "100%", width: "100%" }}>
      <CardActionArea>
        <CardMedia
          className={collapseClasses.media}
          image={image}
          title={title}
          src={image}
          sx={{ height: 200 }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Connect with us
        </Button>
          <div className="socials">
            <a href={github} target="_blank">
              <GitHubIcon />
            </a>
            <br />
            <a href={linkedin} target='_blank'>
            <LinkedInIcon />

            </a>
          </div>  
      </CardActions>
    </Card>
  );
}

