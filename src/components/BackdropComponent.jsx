import { Backdrop, Button, Stack } from "@mui/material";
import PropTypes from "prop-types";

function BackdropComponent({ openBackdrop, setOpenBackdrop }) {
  return (
    <Backdrop
      open={openBackdrop}
      sx={{ zIndex: 2000 }}
      onClick={() => {
        setOpenBackdrop(false);
      }}
    >
      <div
        style={{
          position: "absolute",

          width: "100vw",

          zIndex: 2100,
          bottom: 0,
        }}
      >
        <Stack spacing={1} px={1} pb={1}>
          <Button
            variant="contained"
            className="w-100 fw-bold text-capitalize"
            sx={{ borderRadius: 2, color: "black", backgroundColor: "white" }}
          >
            Customer Service 1
          </Button>
          <Button
            variant="contained"
            className="w-100 fw-bold text-capitalize"
            sx={{ borderRadius: 2, color: "black", backgroundColor: "white" }}
          >
            Customer Service 1
          </Button>
          <Button
            onClick={() => {
              setOpenBackdrop(false);
            }}
            variant="contained"
            className="w-100 fw-bold text-capitalize"
            sx={{ borderRadius: 2, color: "black", backgroundColor: "white" }}
          >
            Cancel
          </Button>
        </Stack>
      </div>
    </Backdrop>
  );
}

BackdropComponent.propTypes = {
  openBackdrop: PropTypes.bool,
  setOpenBackdrop: PropTypes.func,
};

export default BackdropComponent;
