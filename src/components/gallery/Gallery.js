import {
  Typography as Font,
  Grid,
  Switch,
  Paper,
  Container,
} from "@material-ui/core";
import GalleryF from "./GalleryF";
import Img from "./Img";
import "./Gallery.css";
const Gallery = (props) => {
  const { pictures } = props;
  const { grid, handleGrid } = GalleryF();
  return (
    <Container component="section" maxWidth="md" className="Gallery">
      <Paper>
        <Grid container alignItems="center" justify="space-around" spacing={2}>
          <Grid item xs={9}>
            <Font variant="h3">Gallery Example</Font>
          </Grid>
          <Grid item>
            <Grid container direction="column" alignItems="center">
              <Grid item>{grid ? "Grid Layout" : "FlexBox Layout"}</Grid>
              <Grid item>
                <Switch color="primary" value={grid} onClick={handleGrid} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <div className={grid ? "Grid" : "Flex"}>
          {pictures.map((p) => (
            <Img k={p.src} picture={p} />
          ))}
        </div>
      </Paper>
    </Container>
  );
};

export default Gallery;
