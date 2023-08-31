import { Avatar, Box, Card, CardActionArea, CardContent, CardHeader, Container, Grid, List, ListItem, ListItemText, Typography } from "@mui/material";
import patientData from "../static/Patients.json"
import { useEffect, useState } from "react";
import { Patient, getIntactLanguage } from "../models/Patient";
import "./pages-css/PatientRecords.css";
import DogIcon from "../static/icons/dog_1887531.png";
import CatIcon from "../static/icons/cat_2203926.png";
import AnimalIcon from "../static/icons/pawprint_1887455.png";
import { useNavigate } from "react-router-dom";

const PatientRecords: React.FC = () => {
  const [dataInUse, setDataInUse] = useState<Patient[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    setDataInUse(patientData as Patient[]);
  }, [patientData]);
  
  return (
    <Container disableGutters>
      <Container className="filter-card-holder">
        <Card>Search filters area</Card>
      </Container>
      <Box>
        <List>
          {dataInUse.length === 0 && (
            <ListItem>
              <ListItemText content="No records available"/>
            </ListItem>
          )}
          {dataInUse.length > 0 && (
            dataInUse.map((patient: Patient, index) => {
              const makeAvatar = () => {
                if (patient.image && patient.image !== "") {
                  return (
                    <Avatar sizes="large" variant="square" alt={`${patient.patient_name} image`} src={patient.image} />
                  );
                } else if (patient.species.toLowerCase() === "dog") {
                  // <a href="https://www.freepik.com/icon/dog_1887531">Icon by Freepik</a>
                  return (
                    <Avatar sizes="large" variant="square" alt={"Dog Generic Icon (by Freepik)"} src={DogIcon} />
                  );
                } else if (patient.species.toLowerCase() === "cat") { 
                  // <a href="https://www.freepik.com/icon/cat_2203926">Icon by Freepik</a>
                  return (
                    <Avatar sizes="large" variant="square" alt={"Cat Generic Icon (by Freepik)"} src={CatIcon} />
                  );
                } else {
                  // <a href="https://www.freepik.com/icon/pawprint_1887455#fromView=resource_detail&position=33">Icon by Freepik</a>
                  return (
                    <Avatar sizes="large" variant="square" alt={"Paw Generic Icon (by Freepik)"} src={AnimalIcon} />
                  );
                }
              };

              return (
                <ListItem style={{ width: "100%" }} key={`patient-${patient.patient_name}-${index}`}>
                  <Card style={{ width: "100%" }} onClick={() => {navigate(`/patient-records/patient-${patient.patient_id}`)}}>
                    <CardActionArea>
                      <CardHeader 
                        avatar={makeAvatar()} 
                        title={patient.patient_name} 
                        titleTypographyProps={{variant: "h6"}}
                        subheader={`${getIntactLanguage(patient)} ${patient.sex} ${patient.species}`}
                      />
                      <CardContent>
                        <Grid container direction="column">
                          <Grid item>
                            <Typography variant="body2"><b>Primary Owner:</b> {patient.owner_primary.first_name} {patient.owner_primary.last_name}</Typography>
                          </Grid>
                          {!!patient.owner_secondary && (
                            <Grid item>
                              <Typography variant="body2"><b>Secondary Owner:</b> {patient.owner_secondary.first_name} {patient.owner_secondary.last_name}</Typography>
                            </Grid>
                          )}
                        </Grid>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </ListItem>
              );
            })
          )}
        </List>
      </Box>
    </Container>
  );
};

export default PatientRecords;