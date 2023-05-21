import { VStack, Heading } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface SectionContainerProps {
  title: string;
  children: ReactNode;
}

export default function SectionContainer(props: SectionContainerProps) {
  const { title, children } = props;
  return (
    <VStack alignItems={'flex-start'} gap={6}>
      <Heading as='h4' size='md' color={'primary.600'}>
        {title}
      </Heading>
      {children}
    </VStack>
  );
}
