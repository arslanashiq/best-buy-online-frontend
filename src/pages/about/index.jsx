import { Box, Toolbar } from "@mui/material";
//components
import TopbarWithWhiteBackground from "../../components/TopbarWithWhiteBackground";
//styles
function AboutPage() {
  return (
    <Box sx={{ backgroundColor: "#E1E2E2" }}>
      <TopbarWithWhiteBackground title="About" />
      <Toolbar
        sx={{
          minHeight: { xs: "48px", sm: "48px" }, // Override the min-height set by MUI
        }}
      />

      <div className="info-con">
        <div className="content">
          <p>
            At Best Buy, our purpose is to enrich lives through technology. We
            do that by leveraging our unique combination of tech expertise and
            human touch to meet our customers’ everyday needs, whether they come
            to us online, visit our stores or invite us into their homes. We
            have more than 1,000 stores and more than 90,000 employees in the
            United States and Canada.
          </p>
        </div>
      </div>
    </Box>
  );
}

export default AboutPage;
