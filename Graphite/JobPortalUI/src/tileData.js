import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import StarIcon from "@material-ui/icons/Star";
import SendIcon from "@material-ui/icons/Send";
import { Link } from "react-router-dom";

export const mailFolderListItems = (
  <div>
    <Link to="./JobSummary" style={{ textDecoration: "none" }}>
      {" "}
      <ListItem button>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Jobs" />
      </ListItem>
    </Link>
    <Link to="./JobApplication?id=C0001" style={{ textDecoration: "none" }}>
      {" "}
      <ListItem button>
        <ListItemIcon>
          <SendIcon />
        </ListItemIcon>
        <ListItemText primary="Applications" />
      </ListItem>
    </Link>
  </div>
);

export const otherMailFolderListItems = <div />;
