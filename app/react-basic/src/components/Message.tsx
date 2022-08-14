import { Text } from "./Text"

export const Message = (): JSX.Element => {
    const content1 = 'message 1'
    const content2 = 'message 2'

    return (
        <div>
            <Text content={content1} />
            <br />
            <Text content={content2} />
        </div>
    )
}