import './header.style.css';
import { Typography } from "@mui/material";
import { Fragment } from 'react';
import { Box } from '@mui/system';

const Header = () => {
    return(
        <Box component={'div'} >
            <Typography variant='h1' align='center'> ta<span className="title-bold">X</span>ulator </Typography>
            <Typography component='h2' variant='h4' align='center' sx={{ color: 'rgba(70, 70, 180, 0.8)' }}> A tax calculator for Canadians </Typography>
        </Box>
    )
}

export default Header;