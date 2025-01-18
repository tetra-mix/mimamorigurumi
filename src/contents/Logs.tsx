import { Container, Flex } from '@yamada-ui/react';
import { Chat } from '../atom/Chat.tsx';

export const Logs = () => {
  return (
    <>
      <Container>
        <Chat />
        <Flex justifyContent="center" alignItems="center">
        </Flex>
      </Container>
      
    </>
  )
}