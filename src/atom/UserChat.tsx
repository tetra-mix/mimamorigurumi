import { Box, Text, Card, CardBody, Flex, Avatar } from "@yamada-ui/react";

export type ChatProps = {
    name: string;
    content: string;
}

export const UserChat = (props: ChatProps) => {
    return (
        <Box w="100%">
            <Flex gap="2" justifyContent="center">
                <Card w="70%">
                    <CardBody>
                        <Flex justifyContent="center">
                            <Text>{props.content}</Text>
                        </Flex>
                    </CardBody>
                </Card>
                <Box>
                    <Avatar
                        bg="success.200"
                        name={props.name}
                        format={(name) => {
                            const names = name.split(" ")
                            const firstName = names[0] || ""
                            const lastName = names.length > 1 ? names[names.length - 1] : ""

                            return firstName && lastName
                                ? `${lastName.charAt(0)}${firstName.charAt(0)}`
                                : firstName.charAt(0)
                        }}
                    />
                    <Text text={10}>{props.name}</Text>
                </Box>
            </Flex>

        </Box>
    )
}