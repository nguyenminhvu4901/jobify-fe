import React from 'react';
import { Button, Typography } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';

const GoogleLoginButton = ({ title, onClick }) => {
    return (
        <Button
            variant="contained"
            color="primary"
            startIcon={<GoogleIcon />}
            onClick={onClick}
            sx={{
                width: '100%',
                marginTop: '20px',
                backgroundColor: '#4285F4',
                padding: '10px',
                color: '#fff',
                borderRadius: '8px',
                '&:hover': {
                    backgroundColor: '#357AE8',
                },
            }}
        >
            <Typography variant="button">
                { title }
            </Typography>
        </Button>
    );
};

export default GoogleLoginButton;
