// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'ce4a7590-4722-4bcf-a2c6-e473e9f11778',
    name: 'Azure Storage DM Test',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: [],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'southeastasia';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/xplatTstVmssGCreate5906/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss5/virtualmachines/0?api-version=2016-04-30-preview')
  .reply(200, "{\r\n  \"instanceId\": \"0\",\r\n  \"sku\": {\r\n    \"name\": \"Standard_DS1\",\r\n    \"tier\": \"Standard\"\r\n  },\r\n  \"properties\": {\r\n    \"latestModelApplied\": true,\r\n    \"vmId\": \"9155a380-894c-44b6-8ec6-15b37acf7f30\",\r\n    \"storageProfile\": {\r\n      \"imageReference\": {\r\n        \"publisher\": \"MicrosoftWindowsServer\",\r\n        \"offer\": \"WindowsServer\",\r\n        \"sku\": \"2012-R2-Datacenter\",\r\n        \"version\": \"4.0.20170111\"\r\n      },\r\n      \"osDisk\": {\r\n        \"osType\": \"Windows\",\r\n        \"name\": \"test-os-0-9b4eba16572846779861bd3e86b05555\",\r\n        \"createOption\": \"FromImage\",\r\n        \"vhd\": {\r\n          \"uri\": \"https://xplatteststorage18649.blob.core.windows.net/xplatteststoragecnt14275/test-os-0-9b4eba16572846779861bd3e86b05555.vhd\"\r\n        },\r\n        \"caching\": \"None\"\r\n      }\r\n    },\r\n    \"osProfile\": {\r\n      \"computerName\": \"test000000\",\r\n      \"adminUsername\": \"azureuser\",\r\n      \"windowsConfiguration\": {\r\n        \"provisionVMAgent\": true,\r\n        \"enableAutomaticUpdates\": true\r\n      },\r\n      \"secrets\": []\r\n    },\r\n    \"networkProfile\": {\"networkInterfaces\":[{\"id\":\"/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/xplatTstVmssGCreate5906/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss5/virtualMachines/0/networkInterfaces/test\"}]},\r\n    \"provisioningState\": \"Succeeded\"\r\n  },\r\n  \"resources\": [\r\n    {\r\n      \"properties\": {\r\n        \"publisher\": \"Microsoft.Compute\",\r\n        \"type\": \"VMAccessAgent\",\r\n        \"typeHandlerVersion\": \"2.0\",\r\n        \"autoUpgradeMinorVersion\": true,\r\n        \"settings\": {},\r\n        \"provisioningState\": \"Succeeded\"\r\n      },\r\n      \"type\": \"Microsoft.Compute/virtualMachines/extensions\",\r\n      \"location\": \"southeastasia\",\r\n      \"id\": \"/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/xplatTstVmssGCreate5906/providers/Microsoft.Compute/virtualMachines/xplattestvmss5_0/extensions/test\",\r\n      \"name\": \"test\"\r\n    },\r\n    {\r\n      \"properties\": {\r\n        \"publisher\": \"Microsoft.Compute\",\r\n        \"type\": \"BGInfo\",\r\n        \"typeHandlerVersion\": \"2.1\",\r\n        \"autoUpgradeMinorVersion\": true,\r\n        \"provisioningState\": \"Succeeded\"\r\n      },\r\n      \"type\": \"Microsoft.Compute/virtualMachines/extensions\",\r\n      \"location\": \"southeastasia\",\r\n      \"id\": \"/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/xplatTstVmssGCreate5906/providers/Microsoft.Compute/virtualMachines/xplattestvmss5_0/extensions/test1\",\r\n      \"name\": \"test1\"\r\n    }\r\n  ],\r\n  \"type\": \"Microsoft.Compute/virtualMachineScaleSets/virtualMachines\",\r\n  \"location\": \"southeastasia\",\r\n  \"id\": \"/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/xplatTstVmssGCreate5906/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss5/virtualMachines/0\",\r\n  \"name\": \"xplattestvmss5_0\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2798',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '7d05390c-5dc5-4a14-8588-dcae1a33dd6b_131292456099219588',
  'x-ms-request-id': '850b59b3-c6aa-45e5-b871-6b1ac334746c',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14975',
  'x-ms-correlation-request-id': '34f1d55c-8eee-4f55-aaa5-d2855dd72cf7',
  'x-ms-routing-request-id': 'EASTASIA:20170216T100235Z:34f1d55c-8eee-4f55-aaa5-d2855dd72cf7',
  date: 'Thu, 16 Feb 2017 10:02:34 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/xplatTstVmssGCreate5906/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss5/virtualmachines/0?api-version=2016-04-30-preview')
  .reply(200, "{\r\n  \"instanceId\": \"0\",\r\n  \"sku\": {\r\n    \"name\": \"Standard_DS1\",\r\n    \"tier\": \"Standard\"\r\n  },\r\n  \"properties\": {\r\n    \"latestModelApplied\": true,\r\n    \"vmId\": \"9155a380-894c-44b6-8ec6-15b37acf7f30\",\r\n    \"storageProfile\": {\r\n      \"imageReference\": {\r\n        \"publisher\": \"MicrosoftWindowsServer\",\r\n        \"offer\": \"WindowsServer\",\r\n        \"sku\": \"2012-R2-Datacenter\",\r\n        \"version\": \"4.0.20170111\"\r\n      },\r\n      \"osDisk\": {\r\n        \"osType\": \"Windows\",\r\n        \"name\": \"test-os-0-9b4eba16572846779861bd3e86b05555\",\r\n        \"createOption\": \"FromImage\",\r\n        \"vhd\": {\r\n          \"uri\": \"https://xplatteststorage18649.blob.core.windows.net/xplatteststoragecnt14275/test-os-0-9b4eba16572846779861bd3e86b05555.vhd\"\r\n        },\r\n        \"caching\": \"None\"\r\n      }\r\n    },\r\n    \"osProfile\": {\r\n      \"computerName\": \"test000000\",\r\n      \"adminUsername\": \"azureuser\",\r\n      \"windowsConfiguration\": {\r\n        \"provisionVMAgent\": true,\r\n        \"enableAutomaticUpdates\": true\r\n      },\r\n      \"secrets\": []\r\n    },\r\n    \"networkProfile\": {\"networkInterfaces\":[{\"id\":\"/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/xplatTstVmssGCreate5906/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss5/virtualMachines/0/networkInterfaces/test\"}]},\r\n    \"provisioningState\": \"Succeeded\"\r\n  },\r\n  \"resources\": [\r\n    {\r\n      \"properties\": {\r\n        \"publisher\": \"Microsoft.Compute\",\r\n        \"type\": \"VMAccessAgent\",\r\n        \"typeHandlerVersion\": \"2.0\",\r\n        \"autoUpgradeMinorVersion\": true,\r\n        \"settings\": {},\r\n        \"provisioningState\": \"Succeeded\"\r\n      },\r\n      \"type\": \"Microsoft.Compute/virtualMachines/extensions\",\r\n      \"location\": \"southeastasia\",\r\n      \"id\": \"/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/xplatTstVmssGCreate5906/providers/Microsoft.Compute/virtualMachines/xplattestvmss5_0/extensions/test\",\r\n      \"name\": \"test\"\r\n    },\r\n    {\r\n      \"properties\": {\r\n        \"publisher\": \"Microsoft.Compute\",\r\n        \"type\": \"BGInfo\",\r\n        \"typeHandlerVersion\": \"2.1\",\r\n        \"autoUpgradeMinorVersion\": true,\r\n        \"provisioningState\": \"Succeeded\"\r\n      },\r\n      \"type\": \"Microsoft.Compute/virtualMachines/extensions\",\r\n      \"location\": \"southeastasia\",\r\n      \"id\": \"/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/xplatTstVmssGCreate5906/providers/Microsoft.Compute/virtualMachines/xplattestvmss5_0/extensions/test1\",\r\n      \"name\": \"test1\"\r\n    }\r\n  ],\r\n  \"type\": \"Microsoft.Compute/virtualMachineScaleSets/virtualMachines\",\r\n  \"location\": \"southeastasia\",\r\n  \"id\": \"/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/xplatTstVmssGCreate5906/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss5/virtualMachines/0\",\r\n  \"name\": \"xplattestvmss5_0\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2798',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '7d05390c-5dc5-4a14-8588-dcae1a33dd6b_131292456099219588',
  'x-ms-request-id': '850b59b3-c6aa-45e5-b871-6b1ac334746c',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14975',
  'x-ms-correlation-request-id': '34f1d55c-8eee-4f55-aaa5-d2855dd72cf7',
  'x-ms-routing-request-id': 'EASTASIA:20170216T100235Z:34f1d55c-8eee-4f55-aaa5-d2855dd72cf7',
  date: 'Thu, 16 Feb 2017 10:02:34 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/xplatTstVmssGCreate5906/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss5/virtualmachines/1?api-version=2016-04-30-preview')
  .reply(200, "{\r\n  \"instanceId\": \"1\",\r\n  \"sku\": {\r\n    \"name\": \"Standard_DS1\",\r\n    \"tier\": \"Standard\"\r\n  },\r\n  \"properties\": {\r\n    \"latestModelApplied\": true,\r\n    \"vmId\": \"418986ba-be73-4163-95d2-52aa33784460\",\r\n    \"storageProfile\": {\r\n      \"imageReference\": {\r\n        \"publisher\": \"MicrosoftWindowsServer\",\r\n        \"offer\": \"WindowsServer\",\r\n        \"sku\": \"2012-R2-Datacenter\",\r\n        \"version\": \"4.0.20170111\"\r\n      },\r\n      \"osDisk\": {\r\n        \"osType\": \"Windows\",\r\n        \"name\": \"test-os-1-85c2ff4033724995b7cc39466b53b369\",\r\n        \"createOption\": \"FromImage\",\r\n        \"vhd\": {\r\n          \"uri\": \"https://xplatteststorage24310.blob.core.windows.net/xplatteststoragecnt2447/test-os-1-85c2ff4033724995b7cc39466b53b369.vhd\"\r\n        },\r\n        \"caching\": \"None\"\r\n      }\r\n    },\r\n    \"osProfile\": {\r\n      \"computerName\": \"test000001\",\r\n      \"adminUsername\": \"azureuser\",\r\n      \"windowsConfiguration\": {\r\n        \"provisionVMAgent\": true,\r\n        \"enableAutomaticUpdates\": true\r\n      },\r\n      \"secrets\": []\r\n    },\r\n    \"networkProfile\": {\"networkInterfaces\":[{\"id\":\"/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/xplatTstVmssGCreate5906/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss5/virtualMachines/1/networkInterfaces/test\"}]},\r\n    \"provisioningState\": \"Succeeded\"\r\n  },\r\n  \"resources\": [\r\n    {\r\n      \"properties\": {\r\n        \"publisher\": \"Microsoft.Compute\",\r\n        \"type\": \"VMAccessAgent\",\r\n        \"typeHandlerVersion\": \"2.0\",\r\n        \"autoUpgradeMinorVersion\": true,\r\n        \"settings\": {},\r\n        \"provisioningState\": \"Succeeded\"\r\n      },\r\n      \"type\": \"Microsoft.Compute/virtualMachines/extensions\",\r\n      \"location\": \"southeastasia\",\r\n      \"id\": \"/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/xplatTstVmssGCreate5906/providers/Microsoft.Compute/virtualMachines/xplattestvmss5_1/extensions/test\",\r\n      \"name\": \"test\"\r\n    },\r\n    {\r\n      \"properties\": {\r\n        \"publisher\": \"Microsoft.Compute\",\r\n        \"type\": \"BGInfo\",\r\n        \"typeHandlerVersion\": \"2.1\",\r\n        \"autoUpgradeMinorVersion\": true,\r\n        \"provisioningState\": \"Succeeded\"\r\n      },\r\n      \"type\": \"Microsoft.Compute/virtualMachines/extensions\",\r\n      \"location\": \"southeastasia\",\r\n      \"id\": \"/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/xplatTstVmssGCreate5906/providers/Microsoft.Compute/virtualMachines/xplattestvmss5_1/extensions/test1\",\r\n      \"name\": \"test1\"\r\n    }\r\n  ],\r\n  \"type\": \"Microsoft.Compute/virtualMachineScaleSets/virtualMachines\",\r\n  \"location\": \"southeastasia\",\r\n  \"id\": \"/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/xplatTstVmssGCreate5906/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss5/virtualMachines/1\",\r\n  \"name\": \"xplattestvmss5_1\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2797',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '7d05390c-5dc5-4a14-8588-dcae1a33dd6b_131292456099219588',
  'x-ms-request-id': '2035b8d0-e45a-498b-b95b-fe500ffa1eae',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14976',
  'x-ms-correlation-request-id': 'b4df2d58-8b88-4965-9520-d6b2651cdcd5',
  'x-ms-routing-request-id': 'EASTASIA:20170216T100235Z:b4df2d58-8b88-4965-9520-d6b2651cdcd5',
  date: 'Thu, 16 Feb 2017 10:02:35 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/xplatTstVmssGCreate5906/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss5/virtualmachines/1?api-version=2016-04-30-preview')
  .reply(200, "{\r\n  \"instanceId\": \"1\",\r\n  \"sku\": {\r\n    \"name\": \"Standard_DS1\",\r\n    \"tier\": \"Standard\"\r\n  },\r\n  \"properties\": {\r\n    \"latestModelApplied\": true,\r\n    \"vmId\": \"418986ba-be73-4163-95d2-52aa33784460\",\r\n    \"storageProfile\": {\r\n      \"imageReference\": {\r\n        \"publisher\": \"MicrosoftWindowsServer\",\r\n        \"offer\": \"WindowsServer\",\r\n        \"sku\": \"2012-R2-Datacenter\",\r\n        \"version\": \"4.0.20170111\"\r\n      },\r\n      \"osDisk\": {\r\n        \"osType\": \"Windows\",\r\n        \"name\": \"test-os-1-85c2ff4033724995b7cc39466b53b369\",\r\n        \"createOption\": \"FromImage\",\r\n        \"vhd\": {\r\n          \"uri\": \"https://xplatteststorage24310.blob.core.windows.net/xplatteststoragecnt2447/test-os-1-85c2ff4033724995b7cc39466b53b369.vhd\"\r\n        },\r\n        \"caching\": \"None\"\r\n      }\r\n    },\r\n    \"osProfile\": {\r\n      \"computerName\": \"test000001\",\r\n      \"adminUsername\": \"azureuser\",\r\n      \"windowsConfiguration\": {\r\n        \"provisionVMAgent\": true,\r\n        \"enableAutomaticUpdates\": true\r\n      },\r\n      \"secrets\": []\r\n    },\r\n    \"networkProfile\": {\"networkInterfaces\":[{\"id\":\"/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/xplatTstVmssGCreate5906/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss5/virtualMachines/1/networkInterfaces/test\"}]},\r\n    \"provisioningState\": \"Succeeded\"\r\n  },\r\n  \"resources\": [\r\n    {\r\n      \"properties\": {\r\n        \"publisher\": \"Microsoft.Compute\",\r\n        \"type\": \"VMAccessAgent\",\r\n        \"typeHandlerVersion\": \"2.0\",\r\n        \"autoUpgradeMinorVersion\": true,\r\n        \"settings\": {},\r\n        \"provisioningState\": \"Succeeded\"\r\n      },\r\n      \"type\": \"Microsoft.Compute/virtualMachines/extensions\",\r\n      \"location\": \"southeastasia\",\r\n      \"id\": \"/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/xplatTstVmssGCreate5906/providers/Microsoft.Compute/virtualMachines/xplattestvmss5_1/extensions/test\",\r\n      \"name\": \"test\"\r\n    },\r\n    {\r\n      \"properties\": {\r\n        \"publisher\": \"Microsoft.Compute\",\r\n        \"type\": \"BGInfo\",\r\n        \"typeHandlerVersion\": \"2.1\",\r\n        \"autoUpgradeMinorVersion\": true,\r\n        \"provisioningState\": \"Succeeded\"\r\n      },\r\n      \"type\": \"Microsoft.Compute/virtualMachines/extensions\",\r\n      \"location\": \"southeastasia\",\r\n      \"id\": \"/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/xplatTstVmssGCreate5906/providers/Microsoft.Compute/virtualMachines/xplattestvmss5_1/extensions/test1\",\r\n      \"name\": \"test1\"\r\n    }\r\n  ],\r\n  \"type\": \"Microsoft.Compute/virtualMachineScaleSets/virtualMachines\",\r\n  \"location\": \"southeastasia\",\r\n  \"id\": \"/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/xplatTstVmssGCreate5906/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss5/virtualMachines/1\",\r\n  \"name\": \"xplattestvmss5_1\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2797',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '7d05390c-5dc5-4a14-8588-dcae1a33dd6b_131292456099219588',
  'x-ms-request-id': '2035b8d0-e45a-498b-b95b-fe500ffa1eae',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14976',
  'x-ms-correlation-request-id': 'b4df2d58-8b88-4965-9520-d6b2651cdcd5',
  'x-ms-routing-request-id': 'EASTASIA:20170216T100235Z:b4df2d58-8b88-4965-9520-d6b2651cdcd5',
  date: 'Thu, 16 Feb 2017 10:02:35 GMT',
  connection: 'close' });
 return result; }]];