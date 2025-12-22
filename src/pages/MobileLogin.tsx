import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
} from '@mui/material';
import PageTemplate from '../components/PageTemplate/PageTemplate';

export default function MobileLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login submitted:', { username, password });
    // Add login logic here
  };

  return (
    <PageTemplate
      showHeader={true}
      showSubHeader={false}
      showBreadcrumbs={false}
      showPageTabs={false}
      showStickyTitle={false}
    >
      {/* Main Content */}
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 3,
          px: 3,
          pt: 4,
          flex: 1,
          maxWidth: 500,
          mx: 'auto',
          width: '100%',
        }}
      >
        {/* Logo and Title Section */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            alignItems: 'center',
            justifyContent: 'center',
            mb: 2,
          }}
        >
          <Typography
            variant="h6"
            sx={{
              color: 'text.primary',
              fontWeight: 400,
            }}
          >
            Fund Manager A
          </Typography>

          {/* Logo Card */}
          <Box
            sx={{
              bgcolor: 'info.light',
              borderRadius: 2,
              p: 3,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              minWidth: 120,
              minHeight: 120,
            }}
          >
            <Typography
              variant="h4"
              sx={{
                color: 'white',
                fontWeight: 500,
              }}
            >
              Logo
            </Typography>
          </Box>
        </Box>

        {/* Username Input */}
        <TextField
          fullWidth
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          size="small"
        />

        {/* Password Input */}
        <TextField
          fullWidth
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          size="small"
        />

        {/* Submit Button */}
        <Button
          type="submit"
          variant="contained"
          fullWidth
          sx={{
            py: 1.5,
            textTransform: 'uppercase',
            fontWeight: 600,
            boxShadow: 2,
            '&:hover': {
              boxShadow: 4,
            },
          }}
        >
          Submit
        </Button>
      </Box>
    </PageTemplate>
  );
}
