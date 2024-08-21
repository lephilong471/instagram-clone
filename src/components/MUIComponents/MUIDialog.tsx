import Dialog, { DialogProps } from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import React from 'react';

import CloseIcon from '@mui/icons-material/Close';
import MUIIconButton from './MUIIconButton';

type MUIDialogProps = DialogProps & {
  open: boolean;
  setOpen: any;
  title?: string;
  actions?: any;
  noTitleDivider?: boolean;
  isButton?: boolean;
};

const MUIDialog = (props: MUIDialogProps) => {
  const handleClick = (e: { stopPropagation: () => void }) => {
    e.stopPropagation();
  };

  const handleClose = (e: { stopPropagation: () => void }) => {
    e.stopPropagation();
    props.setOpen(false);
  };

  return (
    <>
      <Dialog
        fullWidth
        keepMounted
        PaperProps={props.PaperProps}
        maxWidth={props.maxWidth || 'md'}
        onClose={handleClose}
        onClick={handleClick}
        aria-labelledby="customized-dialog-title"
        open={props.open}>
        {props.title && (
          <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
            {props.title}
          </DialogTitle>
        )}

        {props.isButton && (
          <MUIIconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8
            }}>
            <CloseIcon />
          </MUIIconButton>
        )}

        <DialogContent dividers={!props.noTitleDivider} sx={{ p: 0 }}>
          {props.children}
        </DialogContent>

        {props.actions && (
          <DialogActions sx={{ p: 0 }}>{props.actions}</DialogActions>
        )}
      </Dialog>
    </>
  );
};

export default MUIDialog;
