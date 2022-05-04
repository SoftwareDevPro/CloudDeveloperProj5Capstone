
import * as AWS from 'aws-sdk'
import { createLogger } from '../utils/logger'

const logger = createLogger('snsUtils')

const ARN = process.env.SNS_TOPIC_ARN

// https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/sns-examples-publishing-messages.html
export async function publishToSns(message: string) {
    
    const sns = new AWS.SNS()

    const messageData = {
        Message: message,
        TopicArn: ARN
    }

    try {
        await sns.publish(messageData).promise()
        logger.info("published message to SNS", messageData)
    }
    catch (err) {
        logger.error("error publishing to SNS", err)
    }    
}
// https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/sns-examples-subscribing-unubscribing-topics.html
export async function subscribeEmailToSns(email: string) {

    const sns = new AWS.SNS();

    try {

        await sns.subscribe({
            Protocol: 'EMAIL',
            TopicArn: ARN,
            Endpoint: email
        }).promise()

        logger.info("subscribed to email with SNS", { arn: ARN, address: email })

    } catch(err) {
        logger.error("error subscribing email to SNS", err)
    }

}