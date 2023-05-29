import { CalendarIcon } from '@chakra-ui/icons';
import {
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Text,
  Box
} from '@chakra-ui/react';
import TaxTable from '../TaxTable';

export default function ReportOverview() {
  return (
    <Box w={'full'}>
      <Tabs size='sm' colorScheme='primary' defaultIndex={2}>
        <TabList>
          <Tab bgColor={'white'} borderTopRadius={'2xl'} p={4}>
            Company&apos;s Stautory Documents
          </Tab>
          <Tab bgColor={'white'} borderTopRadius={'2xl'}>
            Management Account
          </Tab>
          <Tab bgColor={'white'} borderTopRadius={'2xl'}>
            Tax Return Form and Receipt
          </Tab>
          <Tab bgColor={'white'} borderTopRadius={'2xl'}>
            Audited Financial Statement
          </Tab>
        </TabList>
        <TabPanels
          bgColor={'white'}
          borderBottomRadius={'xl'}
          borderTopRightRadius={'xl'}
          boxShadow={'md'}
        >
          <TabPanel>
            <p>one!</p>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
          <TabPanel>
            <Text fontSize={'md'} color={'gray.400'} mt={4} mb={8}>
              Taxpayers file infomation about his income earned and tax
              applicable to the income tax department.
            </Text>
            <TaxTable />
          </TabPanel>
          <TabPanel>
            <p>four!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}
