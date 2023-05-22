import { CalendarIcon } from '@chakra-ui/icons';
import {
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Checkbox,
  Icon,
  Tbody,
  Td,
  IconButton,
  Text,
  Box,
} from '@chakra-ui/react';
import {
  BsFolder2,
  BsClipboard,
  BsFiletypePdf,
  BsDownload,
} from 'react-icons/bs';
import { CiFileOn } from 'react-icons/ci';

const tableHeaderList = [
  { name: 'Financial Year', icon: <CalendarIcon mr={3} /> },
  { name: 'File Name', icon: <Icon as={BsFolder2} mr={3} /> },
  { name: 'Description', icon: <Icon as={CiFileOn} mr={3} /> },
  { name: 'Remark', icon: <Icon as={BsClipboard} mr={3} /> },
];

const tableItemList = [
  {
    financialsYear: 'December, 2021',
    fileName: 'Annual Report 2021',
    desc: 'Prepared by James Woon & Elly Yao',
    remark: 'Remark tag 1',
  },
  {
    financialsYear: 'December, 2019',
    fileName: 'Annual Report 2019',
    desc: 'Prepared by Cheung Sue Hui',
    remark: 'Remark tag 2',
  },
  {
    financialsYear: 'December, 2021',
    fileName: 'Annual Report 2021',
    desc: 'Checked by Alan Yong @ Executive',
    remark: 'Remark tag 3',
  },
  {
    financialsYear: 'December, 2017',
    fileName: 'Annual Report 2017',
    desc: 'Prepared by Elly Yao',
    remark: 'Remark tag 3',
  },
  {
    financialsYear: 'December, 2016',
    fileName: 'Annual Report 2016',
    desc: 'Prepared by James Woon',
    remark: 'Remark tag 3',
  },
  {
    financialsYear: 'December, 2015',
    fileName: 'Annual Report 2015',
    desc: 'Prepared by James Woon & Elly Yao',
    remark: 'Remark tag 3',
  },
];

const RemarkTag = ({ remark }: { remark: string }) => (
  <Box
    bgColor={
      remark === 'Remark tag 1'
        ? 'green.100'
        : remark === 'Remark tag 3'
        ? 'yellow.100'
        : 'gray.300'
    }
    borderRadius={'md'}
    textAlign={'center'}
    px={2}
  >
    {remark}
  </Box>
);

export default function TaxTable() {
  return (
    <TableContainer mt={10}>
      <Table variant='simple'>
        <Thead>
          <Tr>
            <Th>
              <Checkbox />
            </Th>
            {tableHeaderList.map((e, index) => (
              <Th key={`table-header-${index}`}>
                <Text display={'flex'} alignItems={'baseline'}>
                  {e.icon}
                  {e.name}
                </Text>
              </Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {tableItemList.map((e, index) => (
            <Tr key={`table-item-${index}`}>
              <Td>
                <Checkbox />
              </Td>
              <Td>{e.financialsYear}</Td>
              <Td>{e.fileName}</Td>
              <Td>{e.desc}</Td>
              <Td>
                <RemarkTag remark={e.remark} />
              </Td>
              <Td display={'flex'} justifyContent={'flex-end'}>
                <IconButton
                  variant={'link'}
                  icon={<Icon as={BsFiletypePdf} />}
                  aria-label={'icon-button-pdf'}
                />
                <IconButton
                  variant={'link'}
                  icon={<Icon as={BsDownload} />}
                  aria-label={'icon-button-download'}
                />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
