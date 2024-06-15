import { SESv2Client, SendEmailCommand } from "@aws-sdk/client-sesv2"
import { validate } from "email-validator"
import { Resource } from "sst"

const client = new SESv2Client()

export const minChars = 16
export const maxChars = 200

function validateLength(value: string) {
    if (!value) {
        return false
    }

    return minChars <= value.length && value.length <= maxChars
}

const formValidators = {
    email: validate,
    subject: validateLength,
    message: validateLength,
}

export function validateContactForm(input: FormData) {
    const errors = []
    const data: Record<string, string> = {}

    let hasEntry = false

    for (const [key, value] of input.entries()) {
        hasEntry = true

        const validator = formValidators[key as keyof typeof formValidators]

        if (!validator?.(value as string)) {
            errors.push(key)
            continue
        }

        data[key] = value as string
    }

    if (!hasEntry) {
        return {
            data,
            errors: Object.keys(formValidators),
        }
    }

    return { data, errors }
}

export async function processRequest(
    data: ReturnType<typeof validateContactForm>["data"],
) {
    const { email, subject, message } = data

    await client.send(
        new SendEmailCommand({
            FromEmailAddress: Resource.Email.sender,
            Destination: {
                ToAddresses: [Resource.Email.sender],
            },
            Content: {
                Simple: {
                    Subject: {
                        Data: subject,
                    },
                    Body: {
                        Text: {
                            Data: `Request from: ${email}\n\n"${message}"`,
                        },
                    },
                },
            },
        }),
    )
}
