import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Alert from '@mui/material/Alert';

export default function Uicomponents()
{
    return(
        <div>
            <h1>Material Ui</h1>
            <Button>Click me!</Button>
            <Button variant="contained">Contained</Button>
            <Button variant="outlined">Outlined</Button>
            <Button disabled>Disabled</Button>
            <Button variant="outlined" size="small">click </Button>
            <Button variant="outlined" startIcon={<DeleteIcon />}>
        Delete
      </Button>
      <Alert severity="success">This is a success Alert.</Alert>
      <Button variant="contained" color="success">
  Success
</Button>
                
     
        </div>
    )
}