// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948',
    name: 'CollaberaInteropTest',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: [],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'eastus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestRtTblRoutes/providers/Microsoft.Network/routeTables/ArmRtTblRoute?api-version=2015-06-15')
  .reply(200, "{\r\n  \"name\": \"ArmRtTblRoute\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestRtTblRoutes/providers/Microsoft.Network/routeTables/ArmRtTblRoute\",\r\n  \"etag\": \"W/\\\"8cafe22f-7e1c-45b0-bd8b-3fbc32d01507\\\"\",\r\n  \"type\": \"Microsoft.Network/routeTables\",\r\n  \"location\": \"eastus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"b27d9eef-e15d-495c-b0a1-38feb52cf388\",\r\n    \"routes\": [\r\n      {\r\n        \"name\": \"ArmRoute\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestRtTblRoutes/providers/Microsoft.Network/routeTables/ArmRtTblRoute/routes/ArmRoute\",\r\n        \"etag\": \"W/\\\"8cafe22f-7e1c-45b0-bd8b-3fbc32d01507\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"addressPrefix\": \"10.0.1.0/23\",\r\n          \"nextHopType\": \"VnetLocal\"\r\n        }\r\n      }\r\n    ]\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '908',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"8cafe22f-7e1c-45b0-bd8b-3fbc32d01507"',
  'x-ms-request-id': '6484a447-7446-49c4-9360-0f83b449d7b2',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14911',
  'x-ms-correlation-request-id': 'd3afb037-c9d6-4ef0-84ff-b68f4b3932b4',
  'x-ms-routing-request-id': 'WESTINDIA:20151229T113220Z:d3afb037-c9d6-4ef0-84ff-b68f4b3932b4',
  date: 'Tue, 29 Dec 2015 11:32:20 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestRtTblRoutes/providers/Microsoft.Network/routeTables/ArmRtTblRoute?api-version=2015-06-15')
  .reply(200, "{\r\n  \"name\": \"ArmRtTblRoute\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestRtTblRoutes/providers/Microsoft.Network/routeTables/ArmRtTblRoute\",\r\n  \"etag\": \"W/\\\"8cafe22f-7e1c-45b0-bd8b-3fbc32d01507\\\"\",\r\n  \"type\": \"Microsoft.Network/routeTables\",\r\n  \"location\": \"eastus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"b27d9eef-e15d-495c-b0a1-38feb52cf388\",\r\n    \"routes\": [\r\n      {\r\n        \"name\": \"ArmRoute\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestRtTblRoutes/providers/Microsoft.Network/routeTables/ArmRtTblRoute/routes/ArmRoute\",\r\n        \"etag\": \"W/\\\"8cafe22f-7e1c-45b0-bd8b-3fbc32d01507\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"addressPrefix\": \"10.0.1.0/23\",\r\n          \"nextHopType\": \"VnetLocal\"\r\n        }\r\n      }\r\n    ]\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '908',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"8cafe22f-7e1c-45b0-bd8b-3fbc32d01507"',
  'x-ms-request-id': '6484a447-7446-49c4-9360-0f83b449d7b2',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14911',
  'x-ms-correlation-request-id': 'd3afb037-c9d6-4ef0-84ff-b68f4b3932b4',
  'x-ms-routing-request-id': 'WESTINDIA:20151229T113220Z:d3afb037-c9d6-4ef0-84ff-b68f4b3932b4',
  date: 'Tue, 29 Dec 2015 11:32:20 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestRtTblRoutes/providers/Microsoft.Network/routeTables/ArmRtTblRoute/routes/ArmRoute?api-version=2015-06-15')
  .reply(200, "{\r\n  \"name\": \"ArmRoute\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestRtTblRoutes/providers/Microsoft.Network/routeTables/ArmRtTblRoute/routes/ArmRoute\",\r\n  \"etag\": \"W/\\\"8cafe22f-7e1c-45b0-bd8b-3fbc32d01507\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"addressPrefix\": \"10.0.1.0/23\",\r\n    \"nextHopType\": \"VnetLocal\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '386',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"8cafe22f-7e1c-45b0-bd8b-3fbc32d01507"',
  'x-ms-request-id': 'bbc2869b-ef87-4548-a22e-2c2fa46cede3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14903',
  'x-ms-correlation-request-id': '89d9c037-ac73-47c2-b357-f99f27eafb82',
  'x-ms-routing-request-id': 'WESTINDIA:20151229T113221Z:89d9c037-ac73-47c2-b357-f99f27eafb82',
  date: 'Tue, 29 Dec 2015 11:32:21 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestRtTblRoutes/providers/Microsoft.Network/routeTables/ArmRtTblRoute/routes/ArmRoute?api-version=2015-06-15')
  .reply(200, "{\r\n  \"name\": \"ArmRoute\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestRtTblRoutes/providers/Microsoft.Network/routeTables/ArmRtTblRoute/routes/ArmRoute\",\r\n  \"etag\": \"W/\\\"8cafe22f-7e1c-45b0-bd8b-3fbc32d01507\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"addressPrefix\": \"10.0.1.0/23\",\r\n    \"nextHopType\": \"VnetLocal\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '386',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"8cafe22f-7e1c-45b0-bd8b-3fbc32d01507"',
  'x-ms-request-id': 'bbc2869b-ef87-4548-a22e-2c2fa46cede3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14903',
  'x-ms-correlation-request-id': '89d9c037-ac73-47c2-b357-f99f27eafb82',
  'x-ms-routing-request-id': 'WESTINDIA:20151229T113221Z:89d9c037-ac73-47c2-b357-f99f27eafb82',
  date: 'Tue, 29 Dec 2015 11:32:21 GMT',
  connection: 'close' });
 return result; }]];