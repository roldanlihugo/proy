import React, { useState } from 'react'
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel'; 
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

import { useStyles,ColorlibConnector,ColorlibStepIcon } from './styles/Confirmation'

import CUserData from '../components/delivery/CUserData';
import CDeliveryData from '../components/delivery/CDeliveryData';
import CPayData from '../components/delivery/CPayData';

 

function getSteps() {
return ['Identificación', 'Entrega', 'Pago'];
}

function getStepContent(step) {
    switch (step) {
      case 0:
        return <CUserData/>;
      case 1:
        return <CDeliveryData/>;
      case 2:
        return <CPayData/>;
      default:
        return <CUserData/>;
    }
  } 

export default function ConfirmationView() {

    const [usuario, setUsuario] = useState([]);
    const [ubicacion, setUbicacion] = useState([]);
    const [pago, setPago] = useState([]);

    //* Botones *//
    const classes = useStyles();
    const [activeStep, setActiveStep] = useState(0);
    const steps = getSteps();
  
    const handleNext = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
  
    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
  
    const handleReset = () => {
      setActiveStep(0);
    };

    const terminarVenta = () => {
      alert("Venta Terminada");
    };

    return (
        <div className={classes.root} style={{ marginTop: '5rem', marginBottom: '1rem'}}>
        <Stepper alternativeLabel activeStep={activeStep} connector={<ColorlibConnector />}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <div>
          {activeStep === steps.length ? (
            <div>
              <Typography className={classes.instructions}>
                All steps completed - you&apos;re finished
              </Typography>
              <Button onClick={handleReset} className={classes.button}>
                Reset
              </Button>
            </div>
          ) : (
            <div>
                <CssBaseline />
                <Container maxWidth="sm" className="mr-auto">
                    <Typography className={classes.instructions}>
                    {
                        getStepContent(activeStep)
                    }
                    </Typography>
                </Container>
                <div className="d-flex justify-content-center">
                    <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                        Atras
                    </Button>
                    <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                    >
                        {activeStep === steps.length - 1 ? 'Finalizar' : 'Siguiente'}
                    </Button>
                </div>
            </div>
          )}
        </div>
      </div>
    )
}
