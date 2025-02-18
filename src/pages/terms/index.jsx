/* eslint-disable react/no-unescaped-entities */
import { Box, Toolbar } from "@mui/material";
//components
import TopbarWithWhiteBackground from "../../components/TopbarWithWhiteBackground";
//styles

function TermsOfUserPage() {
  return (
    <Box sx={{ backgroundColor: "#E1E2E2" }}>
      <TopbarWithWhiteBackground title="Terms of Use" />
      <Toolbar
        sx={{
          minHeight: { xs: "48px", sm: "48px" }, // Override the min-height set by MUI
        }}
      />

      <div className="info-con">
        <div className="content">
          <p data-v-284ec2d9="">
            These Terms of Use govern the interactions between Best Buy
            assessments and individuals accessing the Website.
          </p>
          <p data-v-284ec2d9="">
            <strong data-v-284ec2d9="">1. Table of Contents</strong>
          </p>
          <p data-v-284ec2d9="">
            This website contains information, articles, newsletters and
            bulletins from Best Buy Evaluation and its attorneys, news, links to
            external electronic websites and various images (content).
          </p>
          <p data-v-284ec2d9="">
            Information from Best Buy Evaluation and its lawyers can be viewed
            on electronic sites and should not be the subject of therapeutic
            activities by users without written permission or legitimate
            interest in connection with the work of legal services or
            professional communication.
          </p>
          <p data-v-284ec2d9="">
            Articles and newsletters represent the professional opinion of the
            author on a particular subject at the time of publication, should be
            interpreted in light of the date of publication, do not represent
            legal advice or recommendations, and should not be applied to
            phallic situations without official guidance from Best Buy
            Evaluation.
          </p>
          <p data-v-284ec2d9="">
            News is a factual narrative that may or may not contain opinion as
            judged by Best Buy or communication about an event to be held.
            Events may be changed or canceled by Best Buy Evaluation without
            prior e-site updates. Interpretation of news should be consistent
            with articles and newsletters.
          </p>
          <p data-v-284ec2d9="">
            Links to external e-sites may be provided as a convenience to users.
            Their content is not the responsibility of Best Buy Assessments.
          </p>
          <p data-v-284ec2d9="">
            Image variations are intended to illustrate the information
            transmitted through the e-Site and make it more enjoyable and
            user-friendly. Reproduction in whole or in part is prohibited unless
            expressly authorized by Best Buy Assessments or the author. Public
            images will be properly identified.
          </p>
          <p data-v-284ec2d9="">
            <strong data-v-284ec2d9="">2. Intellectual Property Rights</strong>
          </p>
          <p data-v-284ec2d9="">
            All content is the intellectual property of Best Buy Evaluation,
            unless it is owned by third parties who have given their consent for
            the specific reproduction of the content on the electronic site or
            in the public domain.
          </p>
          <p data-v-284ec2d9="">
            The function of the Content is to inform Users that the Content may
            not be used in any other way, unless expressly authorized by Best
            Buy Evaluation. The authorized use of the Content by Users strictly
            consists of reading and viewing it on the Electronic Website. In
            particular, for articles and newsletters and newsletters, authorized
            use also includes (i) loading and storage; (ii) printing (iii)
            physical or digital sharing, provided that reference and/or link to
            the electronic site is made and not for commercial purposes; and
            (iv) quotation with attribution to the author and place of access,
            in accordance with ABN AMRO rules.
          </p>
          <p data-v-284ec2d9="">
            <strong data-v-284ec2d9="">3. Privacy Policy</strong>
          </p>
          <p data-v-284ec2d9="">
            Best Buy Evaluation has a privacy policy that governs the activities
            regarding the processing of Users' personal data.
          </p>
          <p data-v-284ec2d9="">
            <strong data-v-284ec2d9="">
              4. Best Buy Evaluation Responsibility
            </strong>
          </p>
          <p data-v-284ec2d9="">
            Best Buy Evaluation is not responsible for any damages that the User
            may suffer during their interaction with the electronic website.
          </p>
          <p data-v-284ec2d9="">
            <strong data-v-284ec2d9="">5. User's Responsibility</strong>
          </p>
          <p data-v-284ec2d9="">
            The User undertakes to comply strictly with these Terms of Use and
            is responsible for any causal relationship between the damages
            caused to Best Buy Evaluation as a result of failure to comply with
            these Terms of Use.
          </p>
        </div>
      </div>
    </Box>
  );
}

export default TermsOfUserPage;
