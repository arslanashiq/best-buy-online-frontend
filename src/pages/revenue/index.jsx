import { Box, Toolbar } from "@mui/material";
//components
import TopbarWithWhiteBackground from "../../components/TopbarWithWhiteBackground";
//styles

function RevenuePage() {
  return (
    <Box sx={{ backgroundColor: "#E1E2E2" }}>
      <TopbarWithWhiteBackground title="Revenue Simulation" />
      <Toolbar
        sx={{
          minHeight: { xs: "48px", sm: "48px" }, // Override the min-height set by MUI
        }}
      />

      <div className="info-con">
        <div className="content">
          <p>
            <span style={{ fontFamily: "Calibri" }}>
              <span style={{ fontFamily: "Calibri" }}>
                Each member earns 8%-16% of the principal commission. Each
                account will encounter lucky tasks. To obtain lucky tasks, you
                cannot cancel them. You need to complete them and get rewards of
                10%-20%.
              </span>
            </span>
          </p>
        </div>
      </div>
    </Box>
  );
}

export default RevenuePage;
