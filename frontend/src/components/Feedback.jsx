import { Alert, AlertTitle, CircularProgress, Stack } from "@mui/material";


export const Loading = () => (
    <>
    <CircularProgress color="secondary"/>
    </>
)

export const ErrorMessage = ({error}) => (
    <>
    <Stack width='100%'>
        <Alert severity="error" onClose={() => {}} variant='filled'>
            <AlertTitle>Error</AlertTitle>
            {error}
        </Alert>
    </Stack>
    
    </>
)