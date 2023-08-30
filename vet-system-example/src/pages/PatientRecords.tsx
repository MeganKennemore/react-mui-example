import { Box, Card, Container, List, ListItem, ListItemText } from "@mui/material";
import patientData from "../static/Patients.json"
import { useEffect, useState } from "react";
import { Patient } from "../models/Patient";
import "./pages-css/PatientRecords.css";

const PatientRecords: React.FC = () => {
  const [dataInUse, setDataInUse] = useState<Patient[]>([]);

  useEffect(() => {
    setDataInUse(patientData as Patient[]);
  }, [patientData]);
  
  return (
    <Container disableGutters>
      <Container maxWidth="lg" disableGutters /* className="filter-card-holder" */>
        <Card>Search filters area</Card>
      </Container>
      <Box>
        {dataInUse.length === 0 && (
          <ListItem>
            <ListItemText content="No records available"/>
          </ListItem>
        )}
        {dataInUse.length > 0 && (
          dataInUse.map((patient: Patient, index) => {
            return (
              <Card>
                {patient.patient_name}
              </Card>
            );
          })
        )}
      </Box>
    </Container>
  );
};

export default PatientRecords;