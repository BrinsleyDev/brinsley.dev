/* tslint:disable */
/* eslint-disable */
import "sst"
declare module "sst" {
  export interface Resource {
    Email: {
      sender: string
      type: "sst.aws.Email"
    }
  }
}
export {}