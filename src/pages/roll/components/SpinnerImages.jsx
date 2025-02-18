import PropTypes from "prop-types";
import { Box } from "@mui/material";

function SpinnerImages({ name = "slot_1", imagesList = [] }) {
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 1; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      if (i !== 0 && j !== 0) {
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements
      }
    }
    return array;
  }
  return (
    <Box
      className="slot-container"
      sx={{
        width: { xs: "14vw", sm: "13vw", md: "13vw", lg: "10vw", xl: "8vw" },
        height: { xs: "14vw", sm: "13vw", md: "13vw", lg: "10vw", xl: "8vw" },
        // height: "10rem",
      }}
    >
      <div className={`slot ${name}`}>
        {shuffleArray(imagesList).map((image, index) => (
          <img
            key={image}
            src={image}
            alt="Image 1"
            className={`${name}_image_${index}`}
            style={{
              border: "1px solid silver",
              borderRadius: "10px",

              backgroundColor: "white",
            }}
          />
        ))}
      </div>
    </Box>
  );
}

SpinnerImages.propTypes = {
  name: PropTypes.string,
  imagesList: PropTypes.array,
};
export default SpinnerImages;
