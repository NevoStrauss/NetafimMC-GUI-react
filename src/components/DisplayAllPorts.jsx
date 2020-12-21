import React from "react";
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';

function DisplayAllPorts(props){
    const { onClose, open } = props;
    const handleClose = () => {
        onClose();
    };
    return (
        <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
            <DialogTitle id="simple-dialog-title">Set backup account</DialogTitle>
        </Dialog>

    )
}

export default DisplayAllPorts;