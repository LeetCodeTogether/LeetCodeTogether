import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Button, Popper, Grow, Paper, ClickAwayListener, MenuList, MenuItem } from '@material-ui/core';

export default function LoginComponent(props) {
    const classes = props.useStyles();
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);
    const user = props.user;

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setOpen(false);
    };

    function handleListKeyDown(event) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        }
    }
    // return focus to the button when we transitioned from !open -> open
    const prevOpen = React.useRef(open);
    React.useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current.focus();
        }

        prevOpen.current = open;
    }, [open]);

    // "null" is required as server.js passes string null to username
    if (user.username == null || user.username == "null") {
        return (
            <Typography variant="button" noWrap>
                <Button className={classes.secondaryLogo} onClick={() => { window.open("http://localhost:5000/auth/github", "_self"); }}>Login</Button>
            </Typography>
        )
    } else {
        return (
            <Typography variant="button" noWrap>
                <Button className={classes.secondaryLogo}
                    ref={anchorRef}
                    aria-controls={open ? 'menu-list-grow' : undefined}
                    aria-haspopup="true"
                    onClick={handleToggle}
                >
                    Welcome {props.user.username}
                </Button>
                <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                    {({ TransitionProps, placement }) => (
                        <Grow
                            {...TransitionProps}
                            style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                        >
                            <Paper>
                                <ClickAwayListener onClickAway={handleClose}>
                                    <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                                        <MenuItem onClick={() => { window.open("http://localhost:5000/logout", "_self"); }}>Logout</MenuItem>
                                    </MenuList>
                                </ClickAwayListener>
                            </Paper>
                        </Grow>
                    )}
                </Popper>
            </Typography>
        )
    }
}