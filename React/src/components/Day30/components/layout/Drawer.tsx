import React, { useState } from "react";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import { RiShoppingCartFill } from "react-icons/ri";
import CloseIcon from "@material-ui/icons/Close";
import { useSelector, useDispatch } from "react-redux";
import { deleteCartItem } from "../../actions";

type Anchor = "right";

export default function TemporaryDrawer() {
  const cartArr = useSelector((state: any) => state.cart);
  const [state, setState] = useState({ right: false });
  const dispatch = useDispatch();

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <div role="presentation" style={{ margin: "50px", width: "auto" }}>
      <List>
        {cartArr.map((cartItem: any) => (
          <ListItem
            button
            key={cartItem.id}
            style={{
              display: "flex",
            }}
          >
            <div className="d-flex ">
              <img
                style={{
                  margin: "20px",
                }}
                src={cartItem.image}
                alt={cartItem.title}
                width="140px"
                height="150px"
              />
              <div style={{ width: "150px" }}>
                <h5 className="mt-4">{cartItem.title}</h5>
                <p>${cartItem.price * 1000}</p>
                <div
                  className="btn btn-danger"
                  onClick={() => {
                    console.log("works");
                    dispatch(deleteCartItem(cartItem.id));
                  }}
                >
                  Remove
                </div>
              </div>
            </div>
            <Divider />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div>
      {(["right"] as Anchor[]).map((anchor) => (
        <React.Fragment key={anchor}>
          <Button
            style={{ fontSize: "1.5em", color: "#fff" }}
            onClick={toggleDrawer(anchor, true)}
          >
            <RiShoppingCartFill />
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            <CloseIcon
              onClick={toggleDrawer(anchor, false)}
              onKeyDown={toggleDrawer(anchor, false)}
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                cursor: "pointer",
              }}
            />
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}