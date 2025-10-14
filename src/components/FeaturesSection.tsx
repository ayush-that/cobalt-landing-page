import { Box, Container, Typography, Stack } from '@mui/material';
import FeatureCard from './FeatureCard';

const features = [
  {
    title: 'Insights at your fingertips',
    description: 'All your data and finances in one place to provide quick answers and make decisions instantly.',
    image: '/insights-feature.svg',
    span: 1,
  },
  {
    title: 'Manage in real time',
    description: 'Have full control of your business finances on the go using our iOS/Android mobile apps. Because, you know, it\'s 2023.',
    image: '/mobile-feature.svg',
    span: 1,
  },
  {
    title: 'Important business alerts',
    description: 'Choose the alerts you need and receive them via email, mobile or Slack. Review and take action in one click.',
    image: '/public/vite.svg',
    span: 1,
    showNotifications: true,
  },
  {
    title: 'Connect all your apps',
    description: 'Bring your data with our built-in integrations for accounting, revenue tools and banking.',
    image: '/integrations-feature.svg',
    span: 2,
  },
  {
    title: 'You\'re in control',
    description: 'Lightning fast. Shortcuts for everything. Command+K on Mac, Ctrl+K on Windows. Dark mode.',
    image: '/shortcuts-feature.svg',
    span: 1,
  },
];

export default function FeaturesSection() {
  return (
    <Box className="py-24">
      <Container maxWidth="lg">
        <Stack spacing={8}>
          <Box className="max-w-2xl">
            <Typography 
              variant="h2" 
              className="gradient-text"
              sx={{
                fontSize: { xs: '32px', md: '48.2px' },
                lineHeight: { xs: '1.2', md: '51.36px' },
                textAlign: 'left',
              }}
            >
              Everything you need.{' '}
              <Box component="span" sx={{ display: 'block' }}>
                Nothing you don't
              </Box>
            </Typography>
            <Typography 
              variant="body1" 
              sx={{ 
                color: 'rgba(161, 161, 170, 0.8)',
                fontSize: '17.9px',
                textAlign: 'left',
                mt: 3,
              }}
            >
              Financial management and visibility in one place. Experience{' '}
              <Box component="span" sx={{ color: 'text.primary', fontWeight: 500 }}>
                a flexible toolkit
              </Box>
              {' '}that makes every task feel like a breeze.
            </Typography>
          </Box>

          <Stack spacing={4}>
            {/* First row: 3 cards side by side */}
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
                gap: 4,
              }}
            >
              {features.slice(0, 3).map((feature, index) => (
                <FeatureCard key={index} {...feature} />
              ))}
            </Box>

            {/* Second row: 2 cards side by side */}
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
                gap: 4,
              }}
            >
              {features.slice(3, 5).map((feature, index) => (
                <FeatureCard key={index + 3} {...feature} />
              ))}
            </Box>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}