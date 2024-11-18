# arm-terraform-testing

Tests the candidate package for `@azure/arm-terraform`.

To run the test:

1. Download `@azure/arm-terraform` candidate package from [this link](https://github.com/Azure/sdk-release-request/issues/5663#issuecomment-2481858036). Place it on the same level such as the relative path on package.json resolves
1. `npm install`
1. `source env-vars.sh` to setup necessary environment variables, see env-vars-example.sh
1. Run `npm start`

Upon successful completion of the test you will get console log similar to the following:

```bash
$ npm start

> arm-terraform-testing@1.0.0 start
> node index.js

Environment variable AZURE_CLIENT_ID is set to **********
Environment variable AZURE_CLIENT_SECRET is set to **********
Environment variable AZURE_TENANT_ID is set to **********
Environment variable SUBSCRIPTION_ID is set to **********
Environment variable RESOURCE_GROUP_NAME is set to **********
- Testing ExportResource
- ExportResource succeeded
- Testing ExportResourceGroup
- ExportResourceGroup succeeded
- Testing ExportQuery
- ExportQuery succeeded
```
