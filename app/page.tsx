'use client';

import WelcomeBanner from '@/components/WelcomeBanner';
import { Box, Container, Grid, GridItem } from '@chakra-ui/react';
import SectionContainer from '@/components/SectionContainer';
import MyGoals from '@/components/Sections/MyGoals';
import MyBusinessSummary from '@/components/Sections/MyBusinessSummary';
import PaymentStatus from '@/components/Sections/PaymentStatus';
import ReportOverview from '@/components/Sections/ReportOverview';

export default function Home() {
  return (
    <Container maxW={'container.xl'} py={6}>
      <WelcomeBanner />
      <Grid templateColumns='repeat(3, 1fr)' gap={6} my={6}>
        <GridItem colSpan={1}>
          <SectionContainer title='My Goals'>
            <MyGoals />
          </SectionContainer>
        </GridItem>
        <GridItem colSpan={{ base: 3, lg: 2 }}>
          <SectionContainer title='My Business Summary'>
            <MyBusinessSummary />
          </SectionContainer>
        </GridItem>
      </Grid>
      <Box mt={16}>
        <SectionContainer title='Payment Status'>
          <PaymentStatus />
        </SectionContainer>
      </Box>
      <Box mt={16}>
        <SectionContainer title='Payment Status'>
          <ReportOverview />
        </SectionContainer>
      </Box>
    </Container>
  );
}
