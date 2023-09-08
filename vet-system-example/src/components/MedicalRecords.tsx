import { Box, Grid, Paper, Table, TableContainer, Typography } from "@mui/material";
import { Records } from "../models/Records"

interface MedicalRecordsProps {
  records: Records;
}

const MedicalRecords: React.FC<MedicalRecordsProps> = (props) => {
  const { records } = props;
  
  const { appt_record, tests, vaccinations, medical_care } = records;

  return (
    <Grid container direction={"column"}>
      {/* Appointment record */}
      <Grid item xs={12}>
        <Paper sx={{p: 2}}>
          <Typography
            sx={{ flex: '1 1 100%' }}
            variant="h6"
            id="tableTitle"
            component="div"
          >
            Appointment Records
          </Typography>
          <TableContainer>
            <Table>

            </Table>
          </TableContainer>
        </Paper>
      </Grid>
      
    </Grid>
  )
};

export default MedicalRecords;