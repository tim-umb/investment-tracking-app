import React, { useState } from 'react';
import { IconButton, Menu, MenuItem } from '@mui/material';
import { GridViewOutlined } from '@mui/icons-material';

export interface AppSwitcherProps {
  className?: string;
  state?: "Default" | "Active";
}

export default function AppSwitcher({ className, state = "Default" }: AppSwitcherProps) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton 
        className={className}
        onClick={handleClick}
        color="inherit"
        sx={{ 
          borderRadius: 1, // 4px
          padding: '12px',
          '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.08)',
          }
        }}
      >
        <GridViewOutlined sx={{ fontSize: 24 }} />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>App 1</MenuItem>
        <MenuItem onClick={handleClose}>App 2</MenuItem>
        <MenuItem onClick={handleClose}>App 3</MenuItem>
      </Menu>
    </>
  );
}
