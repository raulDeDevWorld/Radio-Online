import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${"#1d242c"}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={
      <ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem", color: "#d9d9d9" }} />
    }
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: "#16191e",
  color: "#d9d9d9",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
    color: "#d9d9d9",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  backgroundColor: "#16191e",
  color: "#d9d9d9",
  padding: theme.spacing(2),
}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div className="max-w-2xl w-full mx-auto mt-14 rounded-2xl">
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>Quienes somos?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Iste nam corrupti repudiandae, laboriosam vel odio voluptas pariatur fugiat impedit labore,
            aliquid commodi at itaque quibusdam nulla. Inventore quod quo ea.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>Que hacemos con tus donaciones?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Iste nam corrupti repudiandae, laboriosam vel odio voluptas pariatur fugiat impedit labore,
            aliquid commodi at itaque quibusdam nulla. Inventore quod quo ea.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>Como puedes mandarnos tus predicas?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Iste nam corrupti repudiandae, laboriosam vel odio voluptas pariatur fugiat impedit labore,
            aliquid commodi at itaque quibusdam nulla. Inventore quod quo ea.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>
            Quien desarrollo Radio Online?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Iste nam corrupti repudiandae, laboriosam vel odio voluptas pariatur fugiat impedit labore,
            aliquid commodi at itaque quibusdam nulla. Inventore quod quo ea.
            {/* <a
              className="text-blue-700 text-xl hover:text-skyBlue"
              href="https://twitter.com/immdipu"
            >
              @immdipu
            </a>
            {"     "}
            or Instagram handle {"     "}
            <a
              className="text-blue-700 text-xl hover:text-skyBlue"
              href="https://instagram.com/immdipu"
            >
              @immdipu
            </a> */}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
