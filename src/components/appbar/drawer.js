import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import PetsIcon from '@material-ui/icons/Pets';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    // left: false,
    // bottom: false,
    // right: false,
  });

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, top: open });
  };

  const list = () => (
    <div
      className={clsx(classes.list)}
      role="presentation"
      onClick={toggleDrawer(false)}
    >
      <List>
        {['About', 'Discover', 'Search'].map((text, index) => (
          <ListItem button key={text}>
        {/* <ListItemIcon>{ */}
            <PetsIcon />
            {/* // }</ListItemIcon> */}
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>

    {/* //   Later: Add this divider to login, see saved pups?
    //   <Divider />
    //   <List>
    //     {['All mail', 'Trash', 'Spam'].map((text, index) => (
    //       <ListItem button key={text}>
    //         <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
    //         <ListItemText primary={text} />
    //       </ListItem>
    //     ))}
    //   </List> */}
    </div>
  );

  return (
    <div>
      {['left', 'right', 'top', 'bottom'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}