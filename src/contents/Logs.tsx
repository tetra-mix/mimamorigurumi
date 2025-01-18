import { Container, Box, Button, Heading, Text, Flex } from '@yamada-ui/react';

import { SystemChat } from '../atom/SystemChat.tsx';
import { UserChat } from '../atom/UserChat.tsx';

export const Logs = () => {
  return (
    <>
      <Container>
        <SystemChat name="みまもりぐるみ" content="こんにちは！" />
        <UserChat name="Yamada Taro" content="こんにちは！" />
        <Flex justifyContent="center" alignItems="center">
        </Flex>
      </Container>
      
    </>
  )
}