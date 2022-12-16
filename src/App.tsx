import {Container, Typography} from '@mui/material';
import React from 'react';
import {SxProps} from "@mui/system";
import {Theme} from "@mui/material/styles";


const textStyle: SxProps<Theme> = {
    color: '#0F8',
    fontFamily: "'Gugi', cursive",
}

const noSelect = 'noselect';

function App() {
    return (
        <div className="App">
            <Container>
                <Typography className={noSelect} sx={textStyle}  align="center" mt={2}>
                    Alekseichik
                </Typography>
            </Container>

        </div>
    );
}

export default App;
