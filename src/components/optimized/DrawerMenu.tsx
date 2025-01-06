'use client';

import React, { useState } from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { LiaShoppingBagSolid } from 'react-icons/lia';
import { IoMenu } from 'react-icons/io5';
import { menu } from '@/lib/contacts';
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import { MdOutlineExpandMore } from "react-icons/md";

export default function DrawerMenu() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
            event.type === 'keydown' &&
            ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')
        ) {
            return;
        }
        setIsOpen(open);
    };

    const menuItems = [
        'Inbox',
        'Starred',
        'Send email',
        'Drafts',
        'All mail',
        'Trash',
        'Spam',
    ];

    const list = () => (
        <Box
            sx={{ width: 300 }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <List>
                {menu.map((item, index) => (
                    <Box key={index}>
                        {/* <ListItem key={index} disablePadding>
                        <ListItemButton>
                            <ListItemText primary={item.title} />
                        </ListItemButton>
                    </ListItem>
                        <Divider /> */}

                        <Accordion>
                            <AccordionSummary
                                expandIcon={<MdOutlineExpandMore />}
                                aria-controls="panel1-content"
                                id="panel1-header"
                            >
                                <Typography component="span">{item.title}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Lorem ipsum dolor sit amet,
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </Box>
                ))}
            </List>
        </Box>
    );

    return (
        <div>
            <IoMenu
                onClick={toggleDrawer(true)}
                color="#36414b"
                size={30}
                className="cursor-pointer"
            />
            <SwipeableDrawer
                anchor="left"
                open={isOpen}
                onClose={toggleDrawer(false)}
                onOpen={toggleDrawer(true)}
            >
                {list()}
            </SwipeableDrawer>
        </div>
    );
}
