import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";
import customStyle from "../../../Theme";


const AddToLibraryButton = () => {
  const classes = customStyle();
  return (
      <Link to="/bookdetails" style={{ textDecoration: "none" }}>
        <Button
          variant="text"
          startIcon={<AddIcon />}
          className={classes.addToLibBtn}
          data-testid="AddToLibrary"
        >
          Add to Library
        </Button>
      </Link>
  );
};

export default AddToLibraryButton;
