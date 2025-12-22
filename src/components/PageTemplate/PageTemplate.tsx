import React from 'react';
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  BottomNavigation,
  BottomNavigationAction,
  Breadcrumbs,
  Link,
  Paper,
  useMediaQuery,
  useTheme
} from '@mui/material';
import {
  AccountCircleOutlined,
  MediationOutlined,
  AttachMoneyOutlined,
  SettingsOutlined,
  Logout
} from '@mui/icons-material';
import AppSwitcher from '../AppSwitcher/AppSwitcher';

// --- Types ---
interface PageTemplateProps {
  showHeader?: boolean;
  showSubHeader?: boolean;
  showBreadcrumbs?: boolean;
  showPageTabs?: boolean;
  showStickyTitle?: boolean;
  headerContent?: React.ReactNode;
  subHeaderContent?: React.ReactNode;
  pageTabsContent?: React.ReactNode;
  stickyTitleContent?: React.ReactNode;
  children?: React.ReactNode;
}

// --- Components ---

function HeaderBreadcrumbs() {
  return (
    <Box sx={{ bgcolor: 'background.paper', px: 2, py: 1 }}>
      <Breadcrumbs separator={<Typography color="text.secondary">/</Typography>} aria-label="breadcrumb">
        <Link underline="hover" color="text.secondary" href="/">
          Link
        </Link>
        <Link underline="hover" color="text.secondary" href="/">
          Link
        </Link>
        <Typography color="text.primary">Link</Typography>
      </Breadcrumbs>
    </Box>
  );
}

export default function PageTemplate({
  showHeader = true,
  showSubHeader = true,
  showBreadcrumbs = true,
  showPageTabs = false,
  showStickyTitle = false,
  headerContent,
  subHeaderContent,
  pageTabsContent,
  stickyTitleContent,
  children
}: PageTemplateProps) {
  const muiTheme = useTheme();
  const isMobile = useMediaQuery(muiTheme.breakpoints.down('sm')); // Adjust breakpoint as needed (sm is 600px)
  const [bottomNavValue, setBottomNavValue] = React.useState(0);

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', flexDirection: isMobile ? 'column' : 'row' }}>
        
        {/* Main Content Area */}
        <Box component="main" sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', minWidth: 0 }}>
          {/* Sticky Header Group */}
          <Box sx={{ position: 'sticky', top: 0, zIndex: (theme) => theme.zIndex.appBar }}>
            <AppBar 
              position="static" 
              elevation={0} 
              sx={{ 
                zIndex: (theme) => theme.zIndex.drawer + 1,
                bgcolor: 'primary.main',
                boxShadow: '0px 0px 30px 0px rgba(0,87,155,0.04)'
              }}
            >
            <Toolbar disableGutters sx={{ minHeight: 64 }}>
              {/* App Switcher / Menu Area */}
              <Box sx={{ 
                width: 64, 
                height: 64, 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                bgcolor: 'primary.main', // Ensure consistent background
              }}>
                <AppSwitcher />
              </Box>

              {/* Title Area */}
              <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', px: 2 }}>
                <Typography variant="h6" component="div" sx={{ fontWeight: 600, fontSize: '18.7px', color: 'white' }}>
                  AltPro
                </Typography>
              </Box>

              {/* Right Icons Area */}
              <Box sx={{ display: 'flex', alignItems: 'center', pr: 2, gap: 2 }}>
                <IconButton 
                  color="inherit"
                  sx={{
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.08)',
                    }
                  }}
                >
                  <SettingsOutlined />
                </IconButton>
                <IconButton 
                  color="inherit"
                  sx={{
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.08)',
                    }
                  }}
                >
                  <Logout />
                </IconButton>
              </Box>
            </Toolbar>
          </AppBar>

          {showBreadcrumbs && <HeaderBreadcrumbs />}

          {showPageTabs && pageTabsContent && (
            <Paper square elevation={0} sx={{ p: 2, bgcolor: 'rgba(255, 255, 255, 0.9)', boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.06), 0px 4px 5px 0px rgba(0,0,0,0.04), 0px 1px 10px 0px rgba(0,0,0,0.03)' }}>
               {pageTabsContent}
            </Paper>
          )}

          {showStickyTitle && stickyTitleContent && (
            <Paper square elevation={0} sx={{ p: 2, bgcolor: 'rgba(255, 255, 255, 0.9)', boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.06), 0px 4px 5px 0px rgba(0,0,0,0.04), 0px 1px 10px 0px rgba(0,0,0,0.03)' }}>
               {stickyTitleContent}
            </Paper>
          )}
          </Box>
          {/* End Sticky Header Group */}

          {showHeader && headerContent && (
            <Paper square elevation={0} sx={{ p: 2, borderBottom: 1, borderColor: 'divider' }}>
               {headerContent}
            </Paper>
          )}

          {showSubHeader && subHeaderContent && (
            <Paper square elevation={0} sx={{ p: 2, borderBottom: 1, borderColor: 'divider' }}>
               {subHeaderContent}
            </Paper>
          )}

          <Box sx={{ p: 3, flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', bgcolor: 'background.default' }}>
            <Box sx={{ width: '100%', maxWidth: 1536 }}>
               {children}
            </Box>
          </Box>
        </Box>

        {/* Bottom Navigation (Mobile) */}
        {isMobile && (
          <Paper sx={{ position: 'sticky', bottom: 0, left: 0, right: 0, zIndex: 1000, borderTop: '1px solid rgba(0, 0, 0, 0.12)' }} elevation={0}>
            <BottomNavigation
              showLabels
              value={bottomNavValue}
              onChange={(_event, newValue) => {
                setBottomNavValue(newValue);
              }}
            >
              <BottomNavigationAction label="Label" icon={<AttachMoneyOutlined />} />
              <BottomNavigationAction label="Label" icon={<MediationOutlined />} />
              <BottomNavigationAction label="Label" icon={<AccountCircleOutlined />} />
            </BottomNavigation>
          </Paper>
        )}
      </Box>
  );
}
