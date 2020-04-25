import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import {
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  Grid,
} from "@material-ui/core/";

class MovieItem extends Component {
  handleImgClick = (id) => (event) => {
    this.props.history.push(`/details/${id}`);
  };

  render() {
    return (
      <Grid item xs={6} sm={4}>
        <Card
          variant="outlined"
          style={{
            margin: "5%",
          }}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              onClick={this.handleImgClick(this.props.movie.id)}
              image={this.props.movie.poster}
              alt="poster"
            />

            <CardContent>
              <h1>{this.props.movie.title}</h1>
              <div>{this.props.movie.description}</div>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    );
  }
}

export default withRouter(MovieItem);
