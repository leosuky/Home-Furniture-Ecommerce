import React from 'react'
import { 
    Box, Stack, Typography, Button,
    TableContainer, Table, Paper,
    TableHead, TableRow, TableBody,
} from '@mui/material'
import styled from '@emotion/styled';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { Link } from 'react-router-dom';
import { StyledTextField } from './ContactUsPage'
import { useSelector, useDispatch } from 'react-redux'
import { updateUserAsync } from '../appStore/slices/UserSlice'
import { toggleFeedback } from '../appStore/slices/FeedbackSlice'
import { getMyOrdersAsync } from '../appStore/slices/MyOrderSlice'
import { Loading, ErrorPopUp, SuccessPopUp, InfoMessage, ErrorMessage } from '../components/Feedback'

// ICONS
import ErrorIcon from '@mui/icons-material/Error';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';


const StyledTableCell = styled(TableCell)(({ theme }) => ({

    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
      fontWeight:'700',
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
}));

function ProfilePage() {
    const [edit, setEdit] = React.useState(0)
    const dispatch = useDispatch()
    const {userInfo, loading, error} = useSelector(state => state.user)
    const myOrders = useSelector(state => state.myOrders)
    const [name, setName] = React.useState(userInfo.name)
    const [email, setEmail] = React.useState(userInfo.email)

   
    // Input Handlers
    const handleName = (event) => {
        setName(event.target.value)
    }
    const handleEmail = (event) => {
        setEmail(event.target.value)
    }

    const handleReset = () => {
        window.location.reload()
    }

    React.useEffect(() => {
        dispatch(getMyOrdersAsync())
    }, [dispatch])


    const updateUserData = () => {
        dispatch(updateUserAsync(name, email))
        
        dispatch(toggleFeedback())
        setTimeout(() => {
            handleReset()
        }, 3000);
    }
    // constants
    const tableHeaders = [
        {id:0, align:'left', name:'ID'},
        {id:1, align:'right', name:'DATE'},
        {id:2, align:'right', name:'TOTAL'},
        {id:3, align:'right', name:'PAID'},
        {id:4, align:'right', name:'DELIVERED'},
        {id:5, align:'right', name:' '},
    ]

  return (
    <Box display='flex' flexDirection='center' alignItems='center' justifyContent='center'>
        <Stack direction='row' width='85vw' justifyContent='space-between' m='1.5rem auto'>
            <Box 
                flex={.3} display='flex' flexDirection='column' 
                alignItems='center'
            >
                {error && <><ErrorPopUp message={error}/></>}
                {loading && <><Loading/></>}
                {!error && <><SuccessPopUp message='Update Successful!'/></>}
                <Box width='100%' m='1rem auto'>
                    <Typography variant='h4'>User Profile</Typography>
                </Box>
                <Box width='80%' sx={{'&>*':{mb:'1rem'}}}>
                    <Box>
                        <StyledTextField 
                            variant='outlined' fullWidth
                            label='Your Name' color='secondary'
                            defaultValue={name} onChange={handleName}
                            InputProps={{readOnly: edit === 0,}}
                        />
                    </Box>
                    <Box>
                        <StyledTextField 
                            variant='outlined' fullWidth
                            label='Your Email' color='secondary'
                            defaultValue={email} onChange={handleEmail}
                            InputProps={{readOnly: edit === 0,}}
                        />
                    </Box>
                </Box>
                <Box width='80%' alignItems='center' justifyContent='space-between' display='flex'>
                <Button 
                    variant='contained' onClick={()=>setEdit(1)}
                    sx={{
                        bgcolor:'blue',color:'white', mt:'1rem',
                        borderRadius:'25px', width:'100px', 
                        display: edit === 0 ? 'block' : 'none',
                        '&:hover':{color:'black', bgcolor:'white'}
                    }}
                >
                    EDIT
                </Button>
                <Button 
                    variant='contained' onClick={updateUserData}
                    sx={{
                        bgcolor:'green',color:'white', mt:'1rem',
                        borderRadius:'25px', width:'100px', 
                        display: edit === 1 ? 'block' : 'none',
                        '&:hover':{color:'black', bgcolor:'white'}
                    }}
                >
                    UPDATE
                </Button>
                <Button 
                    variant='contained' onClick={handleReset}
                    sx={{
                        bgcolor:'red',color:'white', mt:'1rem',
                        borderRadius:'25px', width:'100px', 
                        display: edit === 1 ? 'block' : 'none',
                        '&:hover':{color:'black', bgcolor:'white'}
                    }}
                >
                    CANCEL
                </Button>
                </Box>
            </Box>

            {/* ------------------------------------------------------------------------ */}

            <Box flex={.65}>
                <Box m='1rem auto'>
                    <Typography variant='h4'>My Orders</Typography>
                </Box>
                <Box>
                    {
                        myOrders.loading ?
                        <Loading/> 
                        :
                        myOrders.error ?
                        <ErrorMessage error={myOrders.error}/> 
                        :
                        !myOrders.orders ?
                        <InfoMessage message="You haven't made any orders" />
                        :
                        <TableContainer component={Paper}>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        {
                                            tableHeaders.map(item => (
                                                <StyledTableCell key={item.id} align={item.align}>
                                                    {item.name}
                                                </StyledTableCell>
                                            ))
                                        }
                                    </TableRow>
                                </TableHead>
                                {/* ----------------------------- */}
                                <TableBody>
                                    {
                                        myOrders.orders.map( order => (
                                            <TableRow
                                                key={order._id}
                                            >
                                                <TableCell>{order._id}</TableCell>
                                                <TableCell align='right'>{`${new Date(order.createdAt.split('.')[0])}`}</TableCell>
                                                <TableCell align='right'>${order.totalPrice}</TableCell>
                                                <TableCell align='right'>
                                                    {
                                                        order.isPaid ?
                                                        <CheckCircleIcon color='success'/> : <ErrorIcon color='warning'/>
                                                    } 
                                                </TableCell>
                                                <TableCell align='right'>
                                                    {
                                                        order.isDelivered ?
                                                        <CheckCircleIcon color='success'/> : <ErrorIcon color='warning'/>
                                                    }
                                                </TableCell>
                                                <TableCell align='right'>
                                                    <Button
                                                        variant='contained'
                                                        color='info'
                                                        LinkComponent={Link}
                                                        to={`/order-detail/${order._id}`}
                                                    >
                                                        Details
                                                    </Button>
                                                </TableCell>
                                            </TableRow>
                                        ))
                                    }
                                </TableBody>
                            </Table>
                        </TableContainer>
                    }
                </Box>
            </Box>
        </Stack>
    </Box>
  )
}

export default ProfilePage