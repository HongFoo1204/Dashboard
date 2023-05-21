import {
  Box,
  Grid,
  GridItem,
  HStack,
  Image,
  Progress,
  Text,
  VStack,
} from '@chakra-ui/react';
import moment from 'moment';
import { ReactNode } from 'react';

interface QuotationItem {
  imgSrc: string;
  title: string;
  value: number;
  currency?: string;
}

const quotationList: QuotationItem[] = [
  { imgSrc: '/icons/icon-4.png', title: 'Issued', value: 18 },
  { imgSrc: '/icons/icon-6.png', title: 'Value', value: 27300, currency: 'RM' },
  { imgSrc: '/icons/icon-2.png', title: 'Converted', value: 18 },
  { imgSrc: '/icons/icon-1.png', title: 'Pending', value: 6 },
  {
    imgSrc: '/icons/icon-3.png',
    title: 'Closed',
    value: 27300,
    currency: 'RM',
  },
];

const PaymentStatusItem = ({ children }: { children: ReactNode }) => (
  <VStack
    spacing={2}
    border={'2px'}
    borderColor={'primary.100'}
    borderRadius={'2xl'}
    p={5}
  >
    {children}
  </VStack>
);

export default function PaymentStatus() {
  const month = moment(new Date()).format('MMMM');
  const income = { margin: 3420, markups: 3000 };

  return (
    <Grid
      w={'full'}
      templateColumns='repeat(5, 1fr)'
      gap={6}
      bgColor={'white'}
      borderRadius={'xl'}
      boxShadow={'md'}
      p={6}
    >
      {quotationList.map((e) => (
        <GridItem key={e.title}>
          <PaymentStatusItem>
            <Image
              boxSize={12}
              objectFit='cover'
              src={e.imgSrc}
              alt={e.title}
              p={2}
            />
            <Text fontSize={'sm'} color={'primary.400'} textAlign={'center'}>
              Total Quotation {e.title}
            </Text>
            <Text as={'b'} fontSize={'md'} textAlign={'center'}>
              {e.currency
                ? `${e.currency} ${e.value.toLocaleString()}`
                : e.value}
            </Text>
          </PaymentStatusItem>
        </GridItem>
      ))}
      {/* Income */}
      <GridItem colSpan={2}>
        <PaymentStatusItem>
          <Image
            boxSize={8}
            objectFit='cover'
            src={'/icons/icon-5.png'}
            alt={''}
          />
          <Text fontSize={'sm'} color={'primary.400'} textAlign={'center'}>
            Income {month}
          </Text>
          <Text as={'b'} fontSize={'md'} textAlign={'center'}>
            RM {income.margin + income.markups}
          </Text>
          <VStack spacing={0}>
            <Text fontSize={'sm'} color={'steelblue'} textAlign={'center'}>
              RM{income.margin} from margin +
            </Text>
            <Text fontSize={'sm'} color={'steelblue'} textAlign={'center'}>
              RM{income.markups} from markups
            </Text>
          </VStack>
        </PaymentStatusItem>
      </GridItem>
      {/* My Annual Revenue Target */}
      {/* TODO: replace with data */}
      <GridItem colSpan={3}>
        <Grid
          templateColumns='repeat(5, 1fr)'
          h={'187px'}
          gap={6}
          border={'2px'}
          borderColor={'primary.100'}
          borderRadius={'2xl'}
          px={20}
          py={6}
          alignItems={'center'}
        >
          <GridItem colSpan={2}>
            <Image
              w={'full'}
              h={'120px'}
              objectFit='cover'
              src={''}
              alt={''}
              p={2}
              bgColor={'primary.400'} //TODO: replace with rating img
            />
          </GridItem>
          <GridItem colSpan={3}>
            <VStack
              w={'full'}
              alignItems={'flex-start'}
              justifyContent={'space-between'}
            >
              <VStack w={'full'}>
                <Text
                  fontSize={'sm'}
                  color={'primary.400'}
                  textAlign={'center'}
                >
                  My Annual Revenue Target
                </Text>
                <Text as={'b'} fontSize={'lg'} textAlign={'center'}>
                  RM 89,300 - RM 500,000
                </Text>
              </VStack>
              <VStack w={'full'}>
                <HStack w={'full'} justifyContent={'space-between'} pt={4}>
                  <Text
                    fontSize={'xs'}
                    color={'primary.500'}
                    textAlign={'center'}
                  >
                    RM 400,000
                  </Text>
                  <Text
                    fontSize={'xs'}
                    color={'primary.500'}
                    textAlign={'center'}
                  >
                    76%
                  </Text>
                </HStack>
                <Progress
                  w={'full'}
                  colorScheme='primary'
                  borderRadius={'lg'}
                  value={76}
                />
              </VStack>
            </VStack>
          </GridItem>
        </Grid>
      </GridItem>
    </Grid>
  );
}
