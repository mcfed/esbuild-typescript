import React, { ReactNode } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';





export interface PWorkBench{
    children:ReactNode
}

export default function WorkBench(props: PWorkBench) {
  return (
    <div>
      <HeaderBar></HeaderBar>
      <Container fixed>
          {props.children}
      </Container>
    </div>
  )
}

export function HeaderBar() {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
        >
        </IconButton>
        <Typography variant="h6" noWrap>
          Material-UI
        </Typography>
        <div>
          <IconButton aria-label="show 4 new mails" color="inherit">
            <Badge badgeContent={4} color="secondary">
            </Badge>
          </IconButton>
          <IconButton aria-label="show 17 new notifications" color="inherit">
            <Badge badgeContent={17} color="secondary">
            </Badge>
          </IconButton>
          <IconButton
            edge="end"
            aria-label="account of current user"
            aria-haspopup="true"
            onClick={() => { }}
            color="inherit"
          >
          </IconButton>
        </div>
      </Toolbar>
      <Drawer variant="permanent" >
            
      </Drawer>
    </AppBar>
  )
}