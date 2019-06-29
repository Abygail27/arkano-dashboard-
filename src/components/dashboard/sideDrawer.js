import React from 'react';
import { scroller } from 'react-scroll';


import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const SideDrawer = (props) => {

     const scrollToElements = (element) => {
         scroller.scrollTo(element, {
             duration: 1500, 
             delay: 100,
             smooth: true,
             offset: -92
         });
         props.onClose(false)
     }
   

    return (
        <Drawer
            anchor="left"
            open={props.open}
            onClose={()=> props.onClose(false)}
        >
            <List>
                <ListItem button onClick={()=> scrollToElements('featured')}>
                   user
                </ListItem>

                <ListItem button onClick={()=> scrollToElements('vunuenfo')}>
                   main navigation

                </ListItem>
                <ListItem button onClick={()=> scrollToElements('vunuenfo')}>
                Dashboard
                </ListItem>

            </List> 
        </Drawer>
    );
};

export default SideDrawer;