import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  Switch,
  Select,
  MenuItem,
  FormControl,
  Divider,
  Card,
  CardContent,
  Chip,
  Tabs,
  Tab,
  InputAdornment,
  Snackbar,
  Alert,
} from '@mui/material';
import {
  Search,
  Close,
  Save,
  DynamicFeed,
  Summarize,
  History,
  SyncAlt,
  Portrait,
} from '@mui/icons-material';
import PageTemplate from '../components/PageTemplate/PageTemplate';

export default function InvestorPortalSettings() {
  const [activeTab, setActiveTab] = useState(0);
  const [headerTab, setHeaderTab] = useState(1); // 0 = Funds, 1 = Portal Settings
  const [hasChanges, setHasChanges] = useState(false);
  const [toastOpen, setToastOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastSeverity, setToastSeverity] = useState<'success' | 'warning'>('success');

  // General Settings State
  const [generalSettings, setGeneralSettings] = useState({
    portalName: true,
    clientLogo: false,
    colorScheme: false,
  });

  // Decimal Settings State
  const [decimalSettings, setDecimalSettings] = useState({
    percentDecimals: 2,
    multipleDecimals: 0,
    ownPercentDecimals: 2,
    navDecimals: 2,
    sharesDecimals: 2,
    ratioDecimals: 2,
    showCents: false,
  });

  // Preferred Terminology State
  const [terminology, setTerminology] = useState({
    sidePocket: 'Side Pocket',
    investor: 'Investor',
    shares: 'Shares',
    capital: 'Capital',
    incentiveFee: 'Incentive Fee',
    contribution: 'Contribution',
    withdrawal: 'Withdrawal',
    inceptionToDate: 'Inception to Date',
    investment: 'Investment',
  });

  // Investor Settings State - TABS tab
  const [tabsSettings, setTabsSettings] = useState({
    showInvestorTab: false,
    investorProfile: false,
    transactions: false,
    investorSummary: false,
  });

  // Investor Settings State - SUMMARY tab
  const [summarySettings, setSummarySettings] = useState({
    commitment: false,
    pePerformance: false,
    overview: false,
    investorHistoryGraph: false,
    irr: false,
    multiple: false,
    externalIdHeader: 'Placeholder',
  });

  // Investor Settings State - HISTORY tab
  const [historySettings, setHistorySettings] = useState({
    investorHistoryTabs: false,
    fundHistoryTab: false,
    classes: false,
    classOwnership: false,
    futureTransactions: false,
    irrFundHistoryOnly: false,
    multiple: false,
    performancePercentage: false,
    sharesNav: false,
  });

  // Investor Settings State - TRANSACTIONS tab
  const [transactionsSettings, setTransactionsSettings] = useState({
    transactionTotals: false,
    transactionSummary: false,
    transactionSummaryTotal: false,
    sharesNav: false,
    investorTransactionsAcrossFunds: false,
  });

  // Investor Settings State - PROFILE tab
  const [profileSettings, setProfileSettings] = useState({
    investorProfile: false,
    contactInformation: false,
    address: false,
    bankInformation: false,
    ediPreference: false,
    taxId: false,
    authorizedUsers: false,
  });

  // Saved state snapshots for discard functionality
  const [savedState, setSavedState] = useState({
    general: generalSettings,
    decimal: decimalSettings,
    terminology: terminology,
    tabs: tabsSettings,
    summary: summarySettings,
    history: historySettings,
    transactions: transactionsSettings,
    profile: profileSettings,
  });

  // Helper function to mark changes
  const markAsChanged = () => {
    if (!hasChanges) {
      // Save current state as the restore point
      setSavedState({
        general: generalSettings,
        decimal: decimalSettings,
        terminology: terminology,
        tabs: tabsSettings,
        summary: summarySettings,
        history: historySettings,
        transactions: transactionsSettings,
        profile: profileSettings,
      });
      setHasChanges(true);
    }
  };

  // Save changes and close footer
  const handleSave = () => {
    setHasChanges(false);
    setToastMessage('Changes saved');
    setToastSeverity('success');
    setToastOpen(true);
    // Here you would typically save to backend/API
  };

  // Discard changes and restore previous state
  const handleDiscard = () => {
    setGeneralSettings(savedState.general);
    setDecimalSettings(savedState.decimal);
    setTerminology(savedState.terminology);
    setTabsSettings(savedState.tabs);
    setSummarySettings(savedState.summary);
    setHistorySettings(savedState.history);
    setTransactionsSettings(savedState.transactions);
    setProfileSettings(savedState.profile);
    setHasChanges(false);
    setToastMessage('Changes discarded');
    setToastSeverity('warning');
    setToastOpen(true);
  };

  // Reusable switch styles
  const switchStyles = {
    '& .MuiSwitch-switchBase.Mui-checked': {
      color: 'primary.main',
      '& .MuiSwitch-thumb': {
        backgroundColor: 'primary.main',
      },
    },
    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
      backgroundColor: 'primary.main',
      opacity: 0.5,
    },
    '& .MuiSwitch-thumb': {
      boxShadow: '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)',
    },
  };

  const headerContent = null;

  const pageTabsContent = (
    <Tabs
      value={headerTab}
      onChange={(_e, newValue) => setHeaderTab(newValue)}
      sx={{
        minHeight: 42,
        '& .MuiTab-root': {
          minHeight: 42,
          textTransform: 'uppercase',
          fontSize: '14px',
          fontWeight: 500,
          lineHeight: '24px',
          letterSpacing: '0.4px',
          color: 'rgba(0, 0, 0, 0.6)',
          borderRadius: '8px',
          px: 2,
        },
        '& .MuiTab-root.Mui-selected': {
          color: 'primary.main',
          backgroundColor: 'rgba(2, 136, 209, 0.08)',
        },
        '& .MuiTabs-indicator': {
          display: 'none',
        },
      }}
    >
      <Tab label="Funds" />
      <Tab label="Portal Settings" />
    </Tabs>
  );

  const subHeaderContent = null;

  return (
    <PageTemplate
      showHeader={false}
      showSubHeader={false}
      showBreadcrumbs={false}
      showPageTabs={true}
      showStickyTitle={false}
      headerContent={headerContent}
      subHeaderContent={subHeaderContent}
      pageTabsContent={pageTabsContent}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4, maxWidth: 900, width: '100%', mx: 'auto', pb: 6 }}>
        {/* Title and Description */}
        <Box>
          <Typography variant="h5" sx={{ fontWeight: 400, fontSize: '24px' }}>
            Investor Portal Settings
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
            Manage your investor portal settings here
          </Typography>
        </Box>

        {/* Search Field */}
        <TextField
          placeholder="Search"
          size="small"
          fullWidth
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Search />
              </InputAdornment>
            ),
          }}
          sx={{ bgcolor: 'white' }}
        />

        {/* General Settings Card */}
        <Card elevation={0} sx={{ boxShadow: '0px 0px 30px 0px rgba(0,87,155,0.12)' }}>
          <CardContent sx={{ p: 2 }}>
            <Box sx={{ p: 2 }}>
              <Typography variant="h6" sx={{ fontSize: '20px', fontWeight: 400 }}>
                General Settings
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                General investor portal configuration
              </Typography>
            </Box>

            <Box sx={{ p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <Box sx={{ flex: 1 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                  <Typography variant="h6" sx={{ fontSize: '20px', fontWeight: 400 }}>
                    Name of Portal Settings
                  </Typography>
                  <Chip
                    label="Recommended"
                    size="small"
                    sx={{
                      bgcolor: 'primary.main',
                      color: 'white',
                      fontSize: '13px',
                      height: 24,
                    }}
                  />
                </Box>
                <Typography variant="body2" color="text.secondary">
                  Description of the portal, used for internal purposes
                </Typography>
              </Box>
              <Switch
                checked={generalSettings.portalName}
                onChange={(e) => {
                  setGeneralSettings({ ...generalSettings, portalName: e.target.checked });
                  setHasChanges(true);
                }}
                sx={switchStyles}
              />
            </Box>

            <Divider />

            <Box sx={{ p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <Box sx={{ flex: 1 }}>
                <Typography variant="h6" sx={{ fontSize: '20px', fontWeight: 400, mb: 1 }}>
                  Client Logo
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Description of the logo, used for portal customization
                </Typography>
              </Box>
              <Switch
                checked={generalSettings.clientLogo}
                onChange={(e) => {
                  setGeneralSettings({ ...generalSettings, clientLogo: e.target.checked });
                  markAsChanged();
                }}
                sx={switchStyles}
              />
            </Box>

            <Divider />

            <Box sx={{ p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <Box sx={{ flex: 1 }}>
                <Typography variant="h6" sx={{ fontSize: '20px', fontWeight: 400, mb: 1 }}>
                  Set Color Scheme
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Description of the color scheme, used for portal customization
                </Typography>
              </Box>
              <Switch
                checked={generalSettings.colorScheme}
                onChange={(e) => {
                  setGeneralSettings({ ...generalSettings, colorScheme: e.target.checked });
                  markAsChanged();
                }}
                sx={switchStyles}
              />
            </Box>
          </CardContent>
        </Card>

        {/* Decimal Settings Card */}
        <Card elevation={0} sx={{ boxShadow: '0px 0px 30px 0px rgba(0,87,155,0.12)' }}>
          <CardContent sx={{ p: 2 }}>
            <Box sx={{ p: 2 }}>
              <Typography variant="h6" sx={{ fontSize: '20px', fontWeight: 400 }}>
                Decimal Settings
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                Description of the decimal settings
              </Typography>
            </Box>

            {[
              { label: 'Percent Decimals', key: 'percentDecimals' },
              { label: 'Multiple Decimals', key: 'multipleDecimals' },
              { label: 'Own % Decimals', key: 'ownPercentDecimals' },
              { label: 'NAV Decimals', key: 'navDecimals' },
              { label: 'Shares Decimals', key: 'sharesDecimals' },
              { label: 'Ratio Decimals', key: 'ratioDecimals' },
            ].map((item, index) => (
              <React.Fragment key={item.key}>
                <Box sx={{ p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography variant="h6" sx={{ fontSize: '20px', fontWeight: 400 }}>
                    {item.label}
                  </Typography>
                  <TextField
                    value={decimalSettings[item.key as keyof typeof decimalSettings]}
                    onChange={(e) => {
                      setDecimalSettings({ ...decimalSettings, [item.key]: e.target.value });
                      markAsChanged();
                    }}
                    onFocus={(e) => e.target.select()}
                    sx={{
                      width: 45,
                      '& input': { textAlign: 'right', p: 1 },
                      bgcolor: '#f5f5f5',
                    }}
                    size="small"
                  />
                </Box>
                {index < 5 && <Divider />}
              </React.Fragment>
            ))}

            <Divider />

            <Box sx={{ p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <Box sx={{ flex: 1 }}>
                <Typography variant="h6" sx={{ fontSize: '20px', fontWeight: 400, mb: 1 }}>
                  Show Cents
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Description of whether to show cents
                </Typography>
              </Box>
              <Switch
                checked={decimalSettings.showCents}
                onChange={(e) => {
                  setDecimalSettings({ ...decimalSettings, showCents: e.target.checked });
                  markAsChanged();
                }}
                sx={switchStyles}
              />
            </Box>
          </CardContent>
        </Card>

        {/* Preferred Terminology Card */}
        <Card elevation={0} sx={{ boxShadow: '0px 0px 30px 0px rgba(0,87,155,0.12)' }}>
          <CardContent sx={{ p: 2 }}>
            <Box sx={{ p: 2 }}>
              <Typography variant="h5" sx={{ fontSize: '24px', fontWeight: 700 }}>
                Preferred Terminology
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                Description of the terminology settings
              </Typography>
            </Box>

            {[
              { label: 'Side Pocket', key: 'sidePocket', value: 'Side Pocket' },
              { label: 'Investor', key: 'investor', value: 'Investor' },
              { label: 'Shares', key: 'shares', value: 'Shares' },
              { label: 'Capital', key: 'capital', value: 'Capital' },
              { label: 'Incentive Fee', key: 'incentiveFee', value: 'Incentive Fee' },
              { label: 'Contribution', key: 'contribution', value: 'Contribution' },
              { label: 'Withdrawal', key: 'withdrawal', value: 'Withdrawal' },
              { label: 'Inception to Date', key: 'inceptionToDate', value: 'Inception to Date' },
              { label: 'Investment', key: 'investment', value: 'Investment' },
            ].map((item, index) => (
              <React.Fragment key={item.key}>
                <Box sx={{ p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography variant="h6" sx={{ fontSize: '20px', fontWeight: 400 }}>
                    {item.label}
                  </Typography>
                  <FormControl sx={{ width: 220, bgcolor: '#f5f5f5' }} size="small">
                    <Select
                      value={terminology[item.key as keyof typeof terminology]}
                      onChange={(e) => {
                        setTerminology({ ...terminology, [item.key]: e.target.value });
                        markAsChanged();
                      }}
                    >
                      <MenuItem value={item.value}>{item.value}</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
                {index < 8 && <Divider />}
              </React.Fragment>
            ))}
          </CardContent>
        </Card>

        {/* Investor Settings Card */}
        <Card elevation={0} sx={{ boxShadow: '0px 0px 30px 0px rgba(0,87,155,0.12)' }}>
          <CardContent sx={{ p: 2 }}>
            <Box sx={{ p: 2 }}>
              <Typography variant="h5" sx={{ fontSize: '24px', fontWeight: 700 }}>
                Investor Settings
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                Description of investor settings
              </Typography>
            </Box>

            {/* Sub Tabs */}
            <Tabs
              value={activeTab}
              onChange={(_e, newValue) => setActiveTab(newValue)}
              sx={{
                minHeight: 40,
                '& .MuiTab-root': {
                  minHeight: 40,
                  textTransform: 'uppercase',
                  fontSize: '13px',
                  fontWeight: 500,
                  letterSpacing: '0.46px',
                  color: 'rgba(0, 0, 0, 0.6)',
                },
                '& .MuiTab-root.Mui-selected': {
                  color: 'primary.light',
                },
                '& .MuiTab-root.Mui-selected .MuiSvgIcon-root': {
                  color: 'primary.light',
                },
                '& .MuiTab-root.Mui-focusVisible': {
                  color: 'primary.light',
                  backgroundColor: 'rgba(0, 114, 173, 0.08)',
                },
                '& .MuiTab-root:active': {
                  color: 'primary.light',
                },
                '& .MuiTab-root:active .MuiSvgIcon-root': {
                  color: 'primary.light',
                },
                '& .MuiTabs-indicator': {
                  backgroundColor: 'primary.light',
                  height: 3,
                },
              }}
            >
              <Tab icon={<DynamicFeed sx={{ fontSize: 20 }} />} iconPosition="start" label="TABS" />
              <Tab icon={<Summarize sx={{ fontSize: 20 }} />} iconPosition="start" label="SUMMARY" />
              <Tab icon={<History sx={{ fontSize: 20 }} />} iconPosition="start" label="HISTORY" />
              <Tab icon={<SyncAlt sx={{ fontSize: 20 }} />} iconPosition="start" label="TRANSACTIONS" />
              <Tab icon={<Portrait sx={{ fontSize: 20 }} />} iconPosition="start" label="PROFILE" />
            </Tabs>

            <Divider />

            {/* Tab 0: TABS */}
            {activeTab === 0 && (
              <>
                <Box sx={{ p: 2 }}>
                  <Typography variant="h6" sx={{ fontSize: '20px', fontWeight: 700, mb: 1 }}>
                    Investor Tabs
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Description of whether to show cents
                  </Typography>
                </Box>

                <Box sx={{ p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="h6" sx={{ fontSize: '20px', fontWeight: 400, mb: 1 }}>
                      Show Investor Tab
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Description of whether to show investor tabs
                    </Typography>
                  </Box>
                  <Switch
                    checked={tabsSettings.showInvestorTab}
                    onChange={(e) => {
                      setTabsSettings({ ...tabsSettings, showInvestorTab: e.target.checked });
                      markAsChanged();
                    }}
                    sx={switchStyles}
                  />
                </Box>

                <Divider />

                <Box sx={{ p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="h6" sx={{ fontSize: '20px', fontWeight: 400, mb: 1 }}>
                      Investor Profile
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Description of whether to show cents
                    </Typography>
                  </Box>
                  <Switch
                    checked={tabsSettings.investorProfile}
                    onChange={(e) => {
                      setTabsSettings({ ...tabsSettings, investorProfile: e.target.checked });
                      markAsChanged();
                    }}
                    sx={switchStyles}
                  />
                </Box>

                <Divider />

                <Box sx={{ p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="h6" sx={{ fontSize: '20px', fontWeight: 400, mb: 1 }}>
                      Transactions
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Description of whether to show cents
                    </Typography>
                  </Box>
                  <Switch
                    checked={tabsSettings.transactions}
                    onChange={(e) => {
                      setTabsSettings({ ...tabsSettings, transactions: e.target.checked });
                      markAsChanged();
                    }}
                    sx={switchStyles}
                  />
                </Box>

                <Divider />

                <Box sx={{ p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="h6" sx={{ fontSize: '20px', fontWeight: 400, mb: 1 }}>
                      Investor Summary
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Description of whether to show cents
                    </Typography>
                  </Box>
                  <Switch
                    checked={tabsSettings.investorSummary}
                    onChange={(e) => {
                      setTabsSettings({ ...tabsSettings, investorSummary: e.target.checked });
                      markAsChanged();
                    }}
                    sx={switchStyles}
                  />
                </Box>
              </>
            )}

            {/* Tab 1: SUMMARY */}
            {activeTab === 1 && (
              <>
                <Box sx={{ p: 2 }}>
                  <Typography variant="h6" sx={{ fontSize: '20px', fontWeight: 700, mb: 1 }}>
                    Summary
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Description of summary
                  </Typography>
                </Box>

                <Box sx={{ p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="h6" sx={{ fontSize: '20px', fontWeight: 400, mb: 1 }}>
                      Commitment
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Description of whether to show cents
                    </Typography>
                  </Box>
                  <Switch
                    checked={summarySettings.commitment}
                    onChange={(e) => {
                      setSummarySettings({ ...summarySettings, commitment: e.target.checked });
                      markAsChanged();
                    }}
                    sx={switchStyles}
                  />
                </Box>

                <Divider />

                <Box sx={{ p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="h6" sx={{ fontSize: '20px', fontWeight: 400, mb: 1 }}>
                      PE Performance
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Description of whether to show cents
                    </Typography>
                  </Box>
                  <Switch
                    checked={summarySettings.pePerformance}
                    onChange={(e) => {
                      setSummarySettings({ ...summarySettings, pePerformance: e.target.checked });
                      markAsChanged();
                    }}
                    sx={switchStyles}
                  />
                </Box>

                <Divider />

                <Box sx={{ p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="h6" sx={{ fontSize: '20px', fontWeight: 400, mb: 1 }}>
                      Overview
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Description of whether to show cents
                    </Typography>
                  </Box>
                  <Switch
                    checked={summarySettings.overview}
                    onChange={(e) => {
                      setSummarySettings({ ...summarySettings, overview: e.target.checked });
                      markAsChanged();
                    }}
                    sx={switchStyles}
                  />
                </Box>

                <Divider />

                <Box sx={{ p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="h6" sx={{ fontSize: '20px', fontWeight: 400, mb: 1 }}>
                      Investor History Graph
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Description of whether to show cents
                    </Typography>
                  </Box>
                  <Switch
                    checked={summarySettings.investorHistoryGraph}
                    onChange={(e) => {
                      setSummarySettings({ ...summarySettings, investorHistoryGraph: e.target.checked });
                      markAsChanged();
                    }}
                    sx={switchStyles}
                  />
                </Box>

                <Divider />

                <Box sx={{ p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="h6" sx={{ fontSize: '20px', fontWeight: 400, mb: 1 }}>
                      IRR
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Description of whether to show cents
                    </Typography>
                  </Box>
                  <Switch
                    checked={summarySettings.irr}
                    onChange={(e) => {
                      setSummarySettings({ ...summarySettings, irr: e.target.checked });
                      markAsChanged();
                    }}
                    sx={switchStyles}
                  />
                </Box>

                <Divider />

                <Box sx={{ p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="h6" sx={{ fontSize: '20px', fontWeight: 400, mb: 1 }}>
                      Multiple
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Description of whether to show cents
                    </Typography>
                  </Box>
                  <Switch
                    checked={summarySettings.multiple}
                    onChange={(e) => {
                      setSummarySettings({ ...summarySettings, multiple: e.target.checked });
                      markAsChanged();
                    }}
                    sx={switchStyles}
                  />
                </Box>

                <Divider />

                <Box sx={{ p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="h6" sx={{ fontSize: '20px', fontWeight: 400 }}>
                      External ID Header
                    </Typography>
                  </Box>
                  <TextField
                    value={summarySettings.externalIdHeader}
                    onChange={(e) => {
                      setSummarySettings({ ...summarySettings, externalIdHeader: e.target.value });
                      markAsChanged();
                    }}
                    onFocus={(e) => e.target.select()}
                    placeholder="Placeholder"
                    sx={{ width: 200, bgcolor: '#f5f5f5', '& input': { textAlign: 'right' } }}
                    size="small"
                  />
                </Box>
              </>
            )}

            {/* Tab 2: HISTORY */}
            {activeTab === 2 && (
              <>
                <Box sx={{ p: 2 }}>
                  <Typography variant="h6" sx={{ fontSize: '20px', fontWeight: 700, mb: 1 }}>
                    History Tabs
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Description of history
                  </Typography>
                </Box>

                <Box sx={{ p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="h6" sx={{ fontSize: '20px', fontWeight: 400, mb: 1 }}>
                      Investor History Tabs
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Description of whether to show cents
                    </Typography>
                  </Box>
                  <Switch
                    checked={historySettings.investorHistoryTabs}
                    onChange={(e) => {
                      setHistorySettings({ ...historySettings, investorHistoryTabs: e.target.checked });
                      markAsChanged();
                    }}
                    sx={switchStyles}
                  />
                </Box>

                <Divider />

                <Box sx={{ p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="h6" sx={{ fontSize: '20px', fontWeight: 400, mb: 1 }}>
                      Fund History Tab
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Description of whether to show cents
                    </Typography>
                  </Box>
                  <Switch
                    checked={historySettings.fundHistoryTab}
                    onChange={(e) => {
                      setHistorySettings({ ...historySettings, fundHistoryTab: e.target.checked });
                      markAsChanged();
                    }}
                    sx={switchStyles}
                  />
                </Box>

                <Divider sx={{ height: 2 }} />

                <Box sx={{ p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="h6" sx={{ fontSize: '20px', fontWeight: 400, mb: 1 }}>
                      Classes
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Description of whether to show cents
                    </Typography>
                  </Box>
                  <Switch
                    checked={historySettings.classes}
                    onChange={(e) => {
                      setHistorySettings({ ...historySettings, classes: e.target.checked });
                      markAsChanged();
                    }}
                    sx={switchStyles}
                  />
                </Box>

                <Divider />

                <Box sx={{ p: 2 }}>
                  <Typography variant="h6" sx={{ fontSize: '20px', fontWeight: 700, mb: 1 }}>
                    History Tab Columns
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Description of history
                  </Typography>
                </Box>

                <Box sx={{ p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="h6" sx={{ fontSize: '20px', fontWeight: 400, mb: 1 }}>
                      Class Ownership
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Description of whether to show cents
                    </Typography>
                  </Box>
                  <Switch
                    checked={historySettings.classOwnership}
                    onChange={(e) => {
                      setHistorySettings({ ...historySettings, classOwnership: e.target.checked });
                      markAsChanged();
                    }}
                    sx={switchStyles}
                  />
                </Box>

                <Divider />

                <Box sx={{ p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="h6" sx={{ fontSize: '20px', fontWeight: 400, mb: 1 }}>
                      Future Transactions
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Description of whether to show cents
                    </Typography>
                  </Box>
                  <Switch
                    checked={historySettings.futureTransactions}
                    onChange={(e) => {
                      setHistorySettings({ ...historySettings, futureTransactions: e.target.checked });
                      markAsChanged();
                    }}
                    sx={switchStyles}
                  />
                </Box>

                <Divider />

                <Box sx={{ p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="h6" sx={{ fontSize: '20px', fontWeight: 400, mb: 1 }}>
                      IRR (Fund History Only)
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Description of whether to show cents
                    </Typography>
                  </Box>
                  <Switch
                    checked={historySettings.irrFundHistoryOnly}
                    onChange={(e) => {
                      setHistorySettings({ ...historySettings, irrFundHistoryOnly: e.target.checked });
                      markAsChanged();
                    }}
                    sx={switchStyles}
                  />
                </Box>

                <Divider />

                <Box sx={{ p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="h6" sx={{ fontSize: '20px', fontWeight: 400, mb: 1 }}>
                      Multiple
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Description of whether to show cents
                    </Typography>
                  </Box>
                  <Switch
                    checked={historySettings.multiple}
                    onChange={(e) => {
                      setHistorySettings({ ...historySettings, multiple: e.target.checked });
                      markAsChanged();
                    }}
                    sx={switchStyles}
                  />
                </Box>

                <Divider />

                <Box sx={{ p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="h6" sx={{ fontSize: '20px', fontWeight: 400, mb: 1 }}>
                      Performance Percentage
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Description of whether to show cents
                    </Typography>
                  </Box>
                  <Switch
                    checked={historySettings.performancePercentage}
                    onChange={(e) => {
                      setHistorySettings({ ...historySettings, performancePercentage: e.target.checked });
                      markAsChanged();
                    }}
                    sx={switchStyles}
                  />
                </Box>

                <Divider />

                <Box sx={{ p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="h6" sx={{ fontSize: '20px', fontWeight: 400, mb: 1 }}>
                      Shares & NAV
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Description of whether to show cents
                    </Typography>
                  </Box>
                  <Switch
                    checked={historySettings.sharesNav}
                    onChange={(e) => {
                      setHistorySettings({ ...historySettings, sharesNav: e.target.checked });
                      markAsChanged();
                    }}
                    sx={switchStyles}
                  />
                </Box>
              </>
            )}

            {/* Tab 3: TRANSACTIONS */}
            {activeTab === 3 && (
              <>
                <Box sx={{ p: 2 }}>
                  <Typography variant="h6" sx={{ fontSize: '20px', fontWeight: 700, mb: 1 }}>
                    Transactions
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Description of history
                  </Typography>
                </Box>

                <Box sx={{ p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="h6" sx={{ fontSize: '20px', fontWeight: 400, mb: 1 }}>
                      Transaction Totals
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Description of whether to show cents
                    </Typography>
                  </Box>
                  <Switch
                    checked={transactionsSettings.transactionTotals}
                    onChange={(e) => {
                      setTransactionsSettings({ ...transactionsSettings, transactionTotals: e.target.checked });
                      markAsChanged();
                    }}
                    sx={switchStyles}
                  />
                </Box>

                <Divider />

                <Box sx={{ p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="h6" sx={{ fontSize: '20px', fontWeight: 400, mb: 1 }}>
                      Transaction Summary
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Description of whether to show cents
                    </Typography>
                  </Box>
                  <Switch
                    checked={transactionsSettings.transactionSummary}
                    onChange={(e) => {
                      setTransactionsSettings({ ...transactionsSettings, transactionSummary: e.target.checked });
                      markAsChanged();
                    }}
                    sx={switchStyles}
                  />
                </Box>

                <Divider />

                <Box sx={{ p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="h6" sx={{ fontSize: '20px', fontWeight: 400, mb: 1 }}>
                      Transaction Summary Total
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Description of whether to show cents
                    </Typography>
                  </Box>
                  <Switch
                    checked={transactionsSettings.transactionSummaryTotal}
                    onChange={(e) => {
                      setTransactionsSettings({ ...transactionsSettings, transactionSummaryTotal: e.target.checked });
                      markAsChanged();
                    }}
                    sx={switchStyles}
                  />
                </Box>

                <Divider />

                <Box sx={{ p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="h6" sx={{ fontSize: '20px', fontWeight: 400, mb: 1 }}>
                      Shares & NAV
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Description of whether to show cents
                    </Typography>
                  </Box>
                  <Switch
                    checked={transactionsSettings.sharesNav}
                    onChange={(e) => {
                      setTransactionsSettings({ ...transactionsSettings, sharesNav: e.target.checked });
                      markAsChanged();
                    }}
                    sx={switchStyles}
                  />
                </Box>

                <Divider />

                <Box sx={{ p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="h6" sx={{ fontSize: '20px', fontWeight: 400, mb: 1 }}>
                      Investor Transactions Across Funds
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Description of whether to show cents
                    </Typography>
                  </Box>
                  <Switch
                    checked={transactionsSettings.investorTransactionsAcrossFunds}
                    onChange={(e) => {
                      setTransactionsSettings({ ...transactionsSettings, investorTransactionsAcrossFunds: e.target.checked });
                      markAsChanged();
                    }}
                    sx={switchStyles}
                  />
                </Box>
              </>
            )}

            {/* Tab 4: PROFILE */}
            {activeTab === 4 && (
              <>
                <Box sx={{ p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="h6" sx={{ fontSize: '20px', fontWeight: 700, mb: 1 }}>
                      Investor Profile
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Description of whether to show investor profile
                    </Typography>
                  </Box>
                  <Switch
                    checked={profileSettings.investorProfile}
                    onChange={(e) => {
                      setProfileSettings({ ...profileSettings, investorProfile: e.target.checked });
                      markAsChanged();
                    }}
                    sx={switchStyles}
                  />
                </Box>

                <Box sx={{ p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="h6" sx={{ fontSize: '20px', fontWeight: 400, mb: 1 }}>
                      Contact Information
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Description of whether to show cents
                    </Typography>
                  </Box>
                  <Switch
                    checked={profileSettings.contactInformation}
                    onChange={(e) => {
                      setProfileSettings({ ...profileSettings, contactInformation: e.target.checked });
                      markAsChanged();
                    }}
                    sx={switchStyles}
                  />
                </Box>

                <Divider />

                <Box sx={{ p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="h6" sx={{ fontSize: '20px', fontWeight: 400, mb: 1 }}>
                      Address
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Description of whether to show cents
                    </Typography>
                  </Box>
                  <Switch
                    checked={profileSettings.address}
                    onChange={(e) => {
                      setProfileSettings({ ...profileSettings, address: e.target.checked });
                      markAsChanged();
                    }}
                    sx={switchStyles}
                  />
                </Box>

                <Divider />

                <Box sx={{ p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="h6" sx={{ fontSize: '20px', fontWeight: 400, mb: 1 }}>
                      Bank Information
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Description of whether to show cents
                    </Typography>
                  </Box>
                  <Switch
                    checked={profileSettings.bankInformation}
                    onChange={(e) => {
                      setProfileSettings({ ...profileSettings, bankInformation: e.target.checked });
                      markAsChanged();
                    }}
                    sx={switchStyles}
                  />
                </Box>

                <Divider />

                {/* Indented EDI Preference */}
                <Box sx={{ pl: 6, py: 0 }}>
                  <Box sx={{ p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <Box sx={{ flex: 1 }}>
                      <Typography variant="h6" sx={{ fontSize: '20px', fontWeight: 400, mb: 1 }}>
                        EDI Preference
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Description of whether to show cents
                      </Typography>
                    </Box>
                    <Switch
                      checked={profileSettings.ediPreference}
                      onChange={(e) => {
                        setProfileSettings({ ...profileSettings, ediPreference: e.target.checked });
                        markAsChanged();
                      }}
                      sx={switchStyles}
                    />
                  </Box>

                  <Divider />
                </Box>

                <Box sx={{ p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="h6" sx={{ fontSize: '20px', fontWeight: 400, mb: 1 }}>
                      Tax ID
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Description of whether to show cents
                    </Typography>
                  </Box>
                  <Switch
                    checked={profileSettings.taxId}
                    onChange={(e) => {
                      setProfileSettings({ ...profileSettings, taxId: e.target.checked });
                      markAsChanged();
                    }}
                    sx={switchStyles}
                  />
                </Box>

                <Divider />

                <Box sx={{ p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="h6" sx={{ fontSize: '20px', fontWeight: 400, mb: 1 }}>
                      Authorized Users for Investor
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Description of whether to show cents
                    </Typography>
                  </Box>
                  <Switch
                    checked={profileSettings.authorizedUsers}
                    onChange={(e) => {
                      setProfileSettings({ ...profileSettings, authorizedUsers: e.target.checked });
                      markAsChanged();
                    }}
                    sx={switchStyles}
                  />
                </Box>
              </>
            )}
          </CardContent>
        </Card>
      </Box>

      {/* Sticky Footer - Shows when there are changes */}
      {hasChanges && (
        <Box
          sx={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
            bgcolor: 'white',
            borderTop: 1,
            borderColor: 'divider',
            py: 2,
            px: 3,
            zIndex: (theme) => theme.zIndex.appBar,
            display: 'flex',
            justifyContent: 'flex-end',
            gap: 2,
            boxShadow: '0px -2px 4px -1px rgba(0,0,0,0.06), 0px -4px 5px 0px rgba(0,0,0,0.04), 0px -1px 10px 0px rgba(0,0,0,0.03)',
          }}
        >
          <Button
            variant="outlined"
            startIcon={<Close />}
            onClick={handleDiscard}
            sx={{
              textTransform: 'uppercase',
              borderColor: 'rgba(0, 60, 110, 0.5)',
              color: 'primary.main',
            }}
          >
            Discard
          </Button>
          <Button
            variant="contained"
            startIcon={<Save />}
            onClick={handleSave}
            sx={{
              textTransform: 'uppercase',
              boxShadow: 2,
            }}
          >
            Save
          </Button>
        </Box>
      )}

      {/* Toast Notification */}
      <Snackbar
        open={toastOpen}
        autoHideDuration={3000}
        onClose={() => setToastOpen(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={() => setToastOpen(false)}
          severity={toastSeverity}
          sx={{ width: '100%' }}
        >
          {toastMessage}
        </Alert>
      </Snackbar>
    </PageTemplate>
  );
}
