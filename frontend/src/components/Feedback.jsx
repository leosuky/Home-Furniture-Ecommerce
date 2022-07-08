import { Alert, AlertTitle, CircularProgress } from "@mui/material";


export const Loading = () => (
    <>
    <CircularProgress color="secondary"/>
    </>
)

export const ErrorMessage = ({error}) => (
    <>
    <Alert severity="error">
        <AlertTitle>Error</AlertTitle>
        {error}
    </Alert>
    </>
)