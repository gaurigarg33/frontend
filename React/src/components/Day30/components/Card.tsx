import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { useDispatch } from "react-redux";
import { addToCart } from "../actions";

interface Props {
  price: number;
  id: number;
  image: string;
  title: string;
}

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 240,
    objectFit: "contain",
  },
});

const CardComponent = ({ title, id, price, image }: Props) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <Card
      className={classes.root}
      style={{ marginTop: "2rem", border:"3px solid black" }}
    >
      <Link to={`/day-30/${id}`}>
        <CardActionArea style={{ color: "#fff" }}>
          <CardMedia
            className={classes.media}
            component="img"
            alt="Contemplative Reptile"
            height="140"
            image={image}
            title={title}
          />
          <CardContent>
            <h5>{title.slice(0, 20) + "..."}</h5>
            <p className="mb-0">Price: ₹ {price * 1000}</p>
          </CardContent>
        </CardActionArea>
      </Link>
      <CardActions>
        <button className="btn btn-outline-primary btn-sm mx-2 mb-2">
          Buy Now
        </button>
        <button
          className="btn btn-outline-primary btn-sm mx-2 mb-2"
          onClick={() => {
            dispatch(
              addToCart({
                id: id,
                title: title,
                price: price,
                image: image,
              })
            );
          }}
        >
          Add to cart
        </button>
      </CardActions>
    </Card>
  );
};

export default CardComponent;