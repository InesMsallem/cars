/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import RotatingCard from "examples/Cards/RotatingCard";
import RotatingCardFront from "examples/Cards/RotatingCard/RotatingCardFront";
import RotatingCardBack from "examples/Cards/RotatingCard/RotatingCardBack";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";

// Images
import bgFront from "assets/images/karahba.jpg";
import bgBack from "assets/images/karahba1.jpg";

function Information() {
  return (
    <MKBox component="section" py={6} my={6}>
      <Container>
        <Grid container item xs={11} spacing={3} alignItems="center" sx={{ mx: "auto" }}>
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <RotatingCard>
              <RotatingCardFront
                image={bgFront}
                icon="touch_app"
                title={
                  <>
                    Feel the
                    <br />
                    Experience
                  </>
                }
                description="Save time and effort with our ready-to-use booking pages. Just a few clicks, and your car is reserved, so you can hit the road sooner."
              />
              <RotatingCardBack
                image={bgBack}
                title="Discover More"
                description="You will save you a lot of time"
                action={{
                  type: "internal",
                  route: "/sections/page-sections/page-headers",
                  label: "start with us",
                }}
              />
            </RotatingCard>
          </Grid>
          <Grid item xs={12} lg={7} sx={{ ml: "auto" }}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="content_copy"
                  title="Ready for the Road"
                  description="Our platform is seamlessly integrated with MUI, the leading React components library, ensuring a smooth and interactive user interface."
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="flip_to_front"
                  title="Budget-Friendly Solutions"
                  description="Why invest heavily in designing your car rental platform from the ground up? Get a head start with our Design System and save both time and money."
                />
              </Grid>
            </Grid>
            <Grid container spacing={3} sx={{ mt: { xs: 0, md: 6 } }}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="price_change"
                  title="Adapts to Any Journey"
                  description="Whether you're booking from your laptop or smartphone, our platform's responsive design ensures a perfect fit, enhancing your car rental experience across devices."
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="cars"
                  title="Fully Responsive"
                  description="From compact cars to spacious SUVs, our platform offers a diverse range of vehicles to cater to your every need."
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
