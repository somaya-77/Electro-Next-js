'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Slide from './Slider';

export default function LabTabs() {
    const [value, setValue] = React.useState('1');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ typography: 'body1' }}>
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider', display: 'flex', justifyContent: { xs: 'flex-start', lg: 'center' } }}>
                    <TabList
                        onChange={handleChange}
                        aria-label="lab API tabs example"
                        sx={{
                            '.MuiTab-root': {
                                textTransform: 'capitalize',
                                fontSize: '20px',
                                minWidth: 'auto',
                                color: '#333e48', // Default tab color
                                '&.Mui-selected': {
                                    fontWeight: 'bold',
                                    color: '#333e48', 
                                },
                            },
                            '.MuiTabs-indicator': {
                                backgroundColor: '#fed700', 
                                height: '2px', 
                            },
                            justifyContent: 'center',
                        }}
                    >
                        <Tab label="featured" value="1" />
                        <Tab label="on sale" value="2" />
                        <Tab label="top Rated" value="3" />
                    </TabList>
                </Box>
                <TabPanel value="1"> <Slide /></TabPanel>
                <TabPanel value="2"> <Slide /></TabPanel>
                <TabPanel value="3"> <Slide /></TabPanel>
            </TabContext>
        </Box>
    );
}

