import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import { Box, Typography } from "@mui/material";
import PropTypes from "parse-json";
//icons
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useNavigate } from "react-router-dom";

function TopbarWithWhiteBackground({
  title = "",
  backgroundColor = "rgb(255, 255, 255)",
}) {
  const navigate = useNavigate();
  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{ padding: 0, backgroundColor }}
      >
        <Toolbar
          sx={{
            minHeight: { xs: "44px", sm: "44px" }, // Override the min-height set by MUI
          }}
        >
          <Box className="w-100 d-flex justify-content-between align-items-center">
            <Box>
              <IconButton
                edge="start"
                onClick={() => {
                  navigate(-1);
                }}
              >
                <ArrowBackIosIcon color="inherit" sx={{ fontSize: 20 }} />
              </IconButton>
            </Box>

            <Box>
              <Typography
                variant="body1"
                color="black"
                className="fw-bold"
                sx={{ fontSize: 15, lineHeight: "42px" }}
              >
                {title}
              </Typography>
            </Box>
            <Box />
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}
TopbarWithWhiteBackground.propTypes = {
  title: PropTypes.string,
  backgroundColor: PropTypes.string,
};

export default TopbarWithWhiteBackground;
