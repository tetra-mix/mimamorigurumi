import { Box, Text, Card, CardBody, Flex, Avatar } from "@yamada-ui/react";
import Icon from '../assets/system_icon.png';

export type ChatProps = {
    name: string;
    content: string;
}

export const SystemChat = (props: ChatProps) => {
    return (
        <Box w="100%">
            <Flex gap="2" justifyContent="center">
                <Box>
                    <Avatar
                        bg="success.200"
                        name={props.name}
                        src={Icon}
                    />
                    <Text text={10}>{props.name}</Text>
                </Box>
                <Card w="70%">
                    <CardBody>
                        <Flex justifyContent="center">
                            <Text>{props.content}</Text>
                        </Flex>
                    </CardBody>
                </Card>
            </Flex>

        </Box>
    )
}