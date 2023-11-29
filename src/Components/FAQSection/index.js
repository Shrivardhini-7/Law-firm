import "./FAQSection.css"
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Accordion from '@mui/material/Accordion';
import Icon from '@mui/material/Icon';
import { useState } from "react";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

let FAQSection = () => {

    const [expanded, setExpanded] = useState("panel1");

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
    return(<>
    <div className="section-7">
        <div className="faq-section">
            <div className="header-section">
            <h2 className="faq-heading">FAQ</h2>
            <div className="faq-subheading">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. </div>
            </div>
            <div className="questions-section">
            <Accordion elevation={0}  expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
             <AccordionSummary
             expandIcon={expanded === 'panel1'?<></>:<Icon sx={{color:"#E3B748"}}>add_circle</Icon>}
             aria-controls="panel1a-content"
             id="panel1a-header"
             >
             <div className="question">Do I need a personal injury report?</div>
             </AccordionSummary>
             <AccordionDetails>
             <div className="answer">
             Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis
             enim velit mollit Exer. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.
             </div>
             </AccordionDetails>
            </Accordion>
            <hr></hr>
            <Accordion elevation={0} expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
             <AccordionSummary
             expandIcon={expanded === 'panel2'?<></>:<Icon sx={{color:"#E3B748"}}>add_circle</Icon>}
             aria-controls="panel2a-content"
             id="panel2a-header"
             >
             <div className="question">How much is my case worth?</div>
             </AccordionSummary>
             <AccordionDetails>
             <div className="answer">
             Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis
             enim velit mollit Exer. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.
             </div>
             </AccordionDetails>
            </Accordion>
            <hr></hr>
            <Accordion elevation={0} expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
             <AccordionSummary
             expandIcon={expanded === 'panel3'?<></>:<Icon sx={{color:"#E3B748"}}>add_circle</Icon>}
             aria-controls="panel3a-content"
             id="panel3a-header"
             >
             <div className="question">What should I do right after car accidect</div>
             </AccordionSummary>
             <AccordionDetails>
             <div className="answer">
             Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis
             enim velit mollit Exer. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.
             </div>
             </AccordionDetails>
            </Accordion>
            <hr></hr>
            <Accordion elevation={0} expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
             <AccordionSummary
             expandIcon={expanded === 'panel4'?<></>:<Icon sx={{color:"#E3B748"}}>add_circle</Icon>}
             aria-controls="panel4a-content"
             id="panel4a-header"
             >
             <div className="question">How much is my case worth?</div>
             </AccordionSummary>
             <AccordionDetails>
             <div className="answer">
             Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis
             enim velit mollit Exer. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.
             </div>
             </AccordionDetails>
            </Accordion>
            </div>
        </div>
    </div>
    </>)
}

export default FAQSection;