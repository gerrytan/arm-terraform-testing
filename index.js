import { AzureTerraformClient } from "@azure/arm-terraform";
import { DefaultAzureCredential } from "@azure/identity";
import { getEnvVar } from "./utils.js";

getEnvVar("AZURE_CLIENT_ID");
getEnvVar("AZURE_CLIENT_SECRET", true);
getEnvVar("AZURE_TENANT_ID");

const subscriptionId = getEnvVar("SUBSCRIPTION_ID");
const resourceGroupName = getEnvVar("RESOURCE_GROUP_NAME");

const client = new AzureTerraformClient(
  new DefaultAzureCredential(),
  subscriptionId
);
let result;

// ExportResource =======================================================

console.log("- Testing ExportResource");
const exportResource = {
  resourceIds: [
    `/subscriptions/${subscriptionId}/resourceGroups/${resourceGroupName}`,
  ],
  type: "ExportResource",
};

result = await client.terraform.exportTerraform(exportResource);
if (!result.status == "Succeeded") {
  console.error("- ExportResource failed");
  console.error(result);
} else {
  console.log("- ExportResource succeeded");
}

// ExportResourceGroup ==================================================

console.log("- Testing ExportResourceGroup");
const exportResourceGroup = {
  resourceGroupName: resourceGroupName,
  type: "ExportResourceGroup",
};

result = await client.terraform.exportTerraform(exportResourceGroup);
if (!result.status == "Succeeded") {
  console.error("- ExportResourceGroup failed");
  console.error(result);
} else {
  console.log("- ExportResourceGroup succeeded");
}

// ExportQuery =========================================================

console.log("- Testing ExportQuery");
const exportQuery = {
  query: `resourceGroup =~ "${resourceGroupName}"`,
  type: "ExportQuery",
};

result = await client.terraform.exportTerraform(exportQuery);
if (!result.status == "Succeeded") {
  console.error("- ExportQuery failed");
  console.error(result);
} else {
  console.log("- ExportQuery succeeded");
}
