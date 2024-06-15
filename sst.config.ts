/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
    app(input) {
        return {
            name: "brinsley-dev",

            home: "aws",
            providers: {
                aws: {
                    region: "eu-west-2",
                },
            },

            removal: input?.stage === "prod" ? "retain" : "remove",
        }
    },

    async run() {
        const emailAddress = new sst.Secret("EmailAddress")

        const email = new sst.aws.Email("Email", {
            sender: emailAddress.value,
        })

        new sst.aws.Astro("Site", {
            link: [email],
            domain:
                $app.stage === "prod"
                    ? {
                          name: "brinsley.dev",
                          redirects: ["www.brinsley.dev"],
                          dns: sst.aws.dns({
                              zone: "Z1044131C7IY08S3EVJ8",
                          }),
                      }
                    : undefined,
        })
    },
})
