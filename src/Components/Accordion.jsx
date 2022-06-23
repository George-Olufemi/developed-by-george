import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function SimpleAccordion() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>HTML</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <ul className="list-decimal px-5 text-left">
                <li>Elements + Attributes</li>
                <li>Forms + Input Types</li>
                <li>Imports + META Tags</li>
                <li>Lists & Anchor Tags</li>
                <li>Tables</li>
                <li>Image and Multimedia Tags</li>
                <li>Semantic HTML Tags</li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>CSS</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <ul className="list-decimal px-5 text-left">
                <li>Selectors ( Basic, Complex)</li>
                <li>Pseudo Selectors</li>
                <li>Specificity & Inheritance</li>
                <li>Box Model</li>
                <li>Positioning, Units, Display</li>
                <li>Layouts: Flex, Grid</li>
                <li>Colors & Gradients: Name, Hex, rgba()</li>
                <li>Animations</li>
                <li>Transforms & Transitions</li>
                <li>Media Queries</li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
      {/*  */}
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Bootstrap</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <h3 className='text-left'>
            Bootstrap is a Powerful, extensible, and feature-packed frontend toolkit. Build and customize with Sass, utilize prebuilt grid system and components, and bring projects to life with powerful JavaScript plugins. Also know as a CSS Framework, that make writing of CSS easier, using the knowledge of CSS, Writing Bootstrap code will be easy.
            </h3>
          </Typography>
        </AccordionDetails>
      </Accordion>
      {/*  */}
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>JavaScript</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <ul className="list-decimal px-5 text-left">
                <li>Variables & Primitives</li>
                <li>Data Types & Operators</li>
                <li>Objects + Methods</li>
                <li>Arrays + Methods</li>
                <li>Functions + Arrow Functions</li>
                <li>ES6 + Syntaxes</li>
                <li>Destructuring & Spread</li>
                <li>"this" keyword</li>
                <li>Callbacks + Promise</li>
                <li>Async await</li>
                <li>Iterating & Mapping through Data</li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
      {/*  */}
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>GIT and GitHub</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <ul className='pl-5 list-decimal text-left'>
                <li>Installing GIT and Configuring</li>
                <li>Staging Files</li>
                <li>Making Commits</li>
                <li>Undoing Things</li>
                <li>Branches, Merging Branches & Conflicts</li>
                <li>GitHub & Collaboration</li>
                <li>Forking & Contributing</li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
      {/*  */}
      <Accordion disabled>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}><h1 className='text-white'>Command Line Interface</h1></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            
          </Typography>
        </AccordionDetails>
      </Accordion>
      {/*  */}
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>React</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <ul className="list-decimal px-5 text-left">
                <li>JSX & Babel</li>
                <li>React Components & Expressions</li>
                <li>Styling In React</li>
                <li>JavaScript ES6 - Import, Export & Modules</li>
                <li>React Props & Mapping Data to Components</li>
                <li>Conditional Rendering with Tenary Operator</li>
                <li>React Hooks - useState, useEffect, useRef</li>
                <li>Event handling in React</li>
                <li>Fetching Data in React - FetchAPI, Axios, useSWR, React Query</li>
                <li>React Router</li>
                <li>React CSS Libraries - Material UI, React Bootstrap</li>
                <li>Context API</li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
      {/*  */}
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>TailwindCSS</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <h1 className='text-left'>Just learn TailwindCSS. PS after learning React not before.</h1>
          </Typography>
        </AccordionDetails>
      </Accordion>
      {/*  */}
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Next.js</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <ul className="list-decimal px-5 text-left">
                <li>Pages & Routes</li>
                <li>Components & Linking</li>
                <li>Images & Metadata</li>
                <li>Fetching Data - getStaticProps</li>
                <li>Dynamic Routes</li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
      {/*  */}
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Keep Learning</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <h1 className='text-left'>Just Keep Learning. Practice they say, makes Perfect.</h1>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}