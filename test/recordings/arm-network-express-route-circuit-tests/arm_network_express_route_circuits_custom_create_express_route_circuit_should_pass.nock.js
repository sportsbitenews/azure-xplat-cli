// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '947d47b4-7883-4bb9-9d85-c5e8e2f572ce',
    name: 'nrptest58.westus.validation.partner',
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
  process.env['AZURE_VM_TEST_LOCATION'] = 'brazilsouth';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-circuit-custom/providers/Microsoft.Network/expressRouteCircuits/xplatExpressRouteCircuit?api-version=2017-08-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/expressRouteCircuits/xplatExpressRouteCircuit' under resource group 'xplat-test-circuit-custom' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': 'f503481c-a3aa-4271-8f79-eac36d5f060c',
  'x-ms-correlation-request-id': 'f503481c-a3aa-4271-8f79-eac36d5f060c',
  'x-ms-routing-request-id': 'WESTEUROPE:20170901T111035Z:f503481c-a3aa-4271-8f79-eac36d5f060c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 01 Sep 2017 11:10:35 GMT',
  connection: 'close',
  'content-length': '192' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-circuit-custom/providers/Microsoft.Network/expressRouteCircuits/xplatExpressRouteCircuit?api-version=2017-08-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/expressRouteCircuits/xplatExpressRouteCircuit' under resource group 'xplat-test-circuit-custom' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': 'f503481c-a3aa-4271-8f79-eac36d5f060c',
  'x-ms-correlation-request-id': 'f503481c-a3aa-4271-8f79-eac36d5f060c',
  'x-ms-routing-request-id': 'WESTEUROPE:20170901T111035Z:f503481c-a3aa-4271-8f79-eac36d5f060c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 01 Sep 2017 11:10:35 GMT',
  connection: 'close',
  'content-length': '192' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-circuit-custom/providers/Microsoft.Network/expressRouteCircuits/xplatExpressRouteCircuit?api-version=2017-08-01', '*')
  .reply(201, "{\r\n  \"name\": \"xplatExpressRouteCircuit\",\r\n  \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-circuit-custom/providers/Microsoft.Network/expressRouteCircuits/xplatExpressRouteCircuit\",\r\n  \"etag\": \"W/\\\"fad084da-d555-4aef-b73a-7b0a1911f739\\\"\",\r\n  \"type\": \"Microsoft.Network/expressRouteCircuits\",\r\n  \"location\": \"brazilsouth\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"resourceGuid\": \"3e6fcb8f-e236-4d9e-ba99-bd845d91c7d4\",\r\n    \"peerings\": [],\r\n    \"authorizations\": [],\r\n    \"serviceProviderProperties\": {\r\n      \"serviceProviderName\": \"Interxion\",\r\n      \"peeringLocation\": \"London\",\r\n      \"bandwidthInMbps\": 50\r\n    },\r\n    \"circuitProvisioningState\": \"Disabled\",\r\n    \"allowClassicOperations\": false,\r\n    \"serviceKey\": \"00000000-0000-0000-0000-000000000000\",\r\n    \"serviceProviderProvisioningState\": \"NotProvisioned\"\r\n  },\r\n  \"sku\": {\r\n    \"name\": \"Standard_MeteredData\",\r\n    \"tier\": \"Standard\",\r\n    \"family\": \"MeteredData\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '994',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': '6f30b067-83ba-4461-b3fd-c778d3a99710',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/providers/Microsoft.Network/locations/brazilsouth/operations/6f30b067-83ba-4461-b3fd-c778d3a99710?api-version=2017-08-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1196',
  'x-ms-correlation-request-id': 'c95af82f-976e-4e54-9823-f0ddb12f367f',
  'x-ms-routing-request-id': 'WESTEUROPE:20170901T111043Z:c95af82f-976e-4e54-9823-f0ddb12f367f',
  date: 'Fri, 01 Sep 2017 11:10:43 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-circuit-custom/providers/Microsoft.Network/expressRouteCircuits/xplatExpressRouteCircuit?api-version=2017-08-01', '*')
  .reply(201, "{\r\n  \"name\": \"xplatExpressRouteCircuit\",\r\n  \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-circuit-custom/providers/Microsoft.Network/expressRouteCircuits/xplatExpressRouteCircuit\",\r\n  \"etag\": \"W/\\\"fad084da-d555-4aef-b73a-7b0a1911f739\\\"\",\r\n  \"type\": \"Microsoft.Network/expressRouteCircuits\",\r\n  \"location\": \"brazilsouth\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"resourceGuid\": \"3e6fcb8f-e236-4d9e-ba99-bd845d91c7d4\",\r\n    \"peerings\": [],\r\n    \"authorizations\": [],\r\n    \"serviceProviderProperties\": {\r\n      \"serviceProviderName\": \"Interxion\",\r\n      \"peeringLocation\": \"London\",\r\n      \"bandwidthInMbps\": 50\r\n    },\r\n    \"circuitProvisioningState\": \"Disabled\",\r\n    \"allowClassicOperations\": false,\r\n    \"serviceKey\": \"00000000-0000-0000-0000-000000000000\",\r\n    \"serviceProviderProvisioningState\": \"NotProvisioned\"\r\n  },\r\n  \"sku\": {\r\n    \"name\": \"Standard_MeteredData\",\r\n    \"tier\": \"Standard\",\r\n    \"family\": \"MeteredData\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '994',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': '6f30b067-83ba-4461-b3fd-c778d3a99710',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/providers/Microsoft.Network/locations/brazilsouth/operations/6f30b067-83ba-4461-b3fd-c778d3a99710?api-version=2017-08-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1196',
  'x-ms-correlation-request-id': 'c95af82f-976e-4e54-9823-f0ddb12f367f',
  'x-ms-routing-request-id': 'WESTEUROPE:20170901T111043Z:c95af82f-976e-4e54-9823-f0ddb12f367f',
  date: 'Fri, 01 Sep 2017 11:10:43 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/providers/Microsoft.Network/locations/brazilsouth/operations/6f30b067-83ba-4461-b3fd-c778d3a99710?api-version=2017-08-01')
  .reply(200, "{\r\n  \"status\": \"InProgress\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '30',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': '76678fb3-a483-452d-b770-65b2e5cade4e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14993',
  'x-ms-correlation-request-id': '6e6755cf-12be-4486-8b52-8ffe17183c6b',
  'x-ms-routing-request-id': 'WESTEUROPE:20170901T111114Z:6e6755cf-12be-4486-8b52-8ffe17183c6b',
  date: 'Fri, 01 Sep 2017 11:11:14 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/providers/Microsoft.Network/locations/brazilsouth/operations/6f30b067-83ba-4461-b3fd-c778d3a99710?api-version=2017-08-01')
  .reply(200, "{\r\n  \"status\": \"InProgress\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '30',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': '76678fb3-a483-452d-b770-65b2e5cade4e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14993',
  'x-ms-correlation-request-id': '6e6755cf-12be-4486-8b52-8ffe17183c6b',
  'x-ms-routing-request-id': 'WESTEUROPE:20170901T111114Z:6e6755cf-12be-4486-8b52-8ffe17183c6b',
  date: 'Fri, 01 Sep 2017 11:11:14 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/providers/Microsoft.Network/locations/brazilsouth/operations/6f30b067-83ba-4461-b3fd-c778d3a99710?api-version=2017-08-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '5e52f7a2-aa58-4899-b9c8-adc3bb3ab0b0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-correlation-request-id': '7c906700-ec26-4e42-b91a-af83032cdfc5',
  'x-ms-routing-request-id': 'WESTEUROPE:20170901T111146Z:7c906700-ec26-4e42-b91a-af83032cdfc5',
  date: 'Fri, 01 Sep 2017 11:11:45 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/providers/Microsoft.Network/locations/brazilsouth/operations/6f30b067-83ba-4461-b3fd-c778d3a99710?api-version=2017-08-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '5e52f7a2-aa58-4899-b9c8-adc3bb3ab0b0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-correlation-request-id': '7c906700-ec26-4e42-b91a-af83032cdfc5',
  'x-ms-routing-request-id': 'WESTEUROPE:20170901T111146Z:7c906700-ec26-4e42-b91a-af83032cdfc5',
  date: 'Fri, 01 Sep 2017 11:11:45 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-circuit-custom/providers/Microsoft.Network/expressRouteCircuits/xplatExpressRouteCircuit?api-version=2017-08-01')
  .reply(200, "{\r\n  \"name\": \"xplatExpressRouteCircuit\",\r\n  \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-circuit-custom/providers/Microsoft.Network/expressRouteCircuits/xplatExpressRouteCircuit\",\r\n  \"etag\": \"W/\\\"74dc405c-1c55-44bf-b687-c98c6f005969\\\"\",\r\n  \"type\": \"Microsoft.Network/expressRouteCircuits\",\r\n  \"location\": \"brazilsouth\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"3e6fcb8f-e236-4d9e-ba99-bd845d91c7d4\",\r\n    \"peerings\": [],\r\n    \"authorizations\": [],\r\n    \"serviceProviderProperties\": {\r\n      \"serviceProviderName\": \"Interxion\",\r\n      \"peeringLocation\": \"London\",\r\n      \"bandwidthInMbps\": 50\r\n    },\r\n    \"circuitProvisioningState\": \"Enabled\",\r\n    \"allowClassicOperations\": false,\r\n    \"gatewayManagerEtag\": \"\",\r\n    \"serviceKey\": \"e6216260-ce16-4be3-aca0-5b2c6cd5fc6d\",\r\n    \"serviceProviderProvisioningState\": \"NotProvisioned\"\r\n  },\r\n  \"sku\": {\r\n    \"name\": \"Standard_MeteredData\",\r\n    \"tier\": \"Standard\",\r\n    \"family\": \"MeteredData\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1025',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '6dde9a19-cf0d-4eda-b608-5b32db310154',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14992',
  'x-ms-correlation-request-id': '4c86728c-c8ca-4c0c-9fe9-3a1eae9dfed9',
  'x-ms-routing-request-id': 'WESTEUROPE:20170901T111148Z:4c86728c-c8ca-4c0c-9fe9-3a1eae9dfed9',
  date: 'Fri, 01 Sep 2017 11:11:47 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-circuit-custom/providers/Microsoft.Network/expressRouteCircuits/xplatExpressRouteCircuit?api-version=2017-08-01')
  .reply(200, "{\r\n  \"name\": \"xplatExpressRouteCircuit\",\r\n  \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-circuit-custom/providers/Microsoft.Network/expressRouteCircuits/xplatExpressRouteCircuit\",\r\n  \"etag\": \"W/\\\"74dc405c-1c55-44bf-b687-c98c6f005969\\\"\",\r\n  \"type\": \"Microsoft.Network/expressRouteCircuits\",\r\n  \"location\": \"brazilsouth\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"3e6fcb8f-e236-4d9e-ba99-bd845d91c7d4\",\r\n    \"peerings\": [],\r\n    \"authorizations\": [],\r\n    \"serviceProviderProperties\": {\r\n      \"serviceProviderName\": \"Interxion\",\r\n      \"peeringLocation\": \"London\",\r\n      \"bandwidthInMbps\": 50\r\n    },\r\n    \"circuitProvisioningState\": \"Enabled\",\r\n    \"allowClassicOperations\": false,\r\n    \"gatewayManagerEtag\": \"\",\r\n    \"serviceKey\": \"e6216260-ce16-4be3-aca0-5b2c6cd5fc6d\",\r\n    \"serviceProviderProvisioningState\": \"NotProvisioned\"\r\n  },\r\n  \"sku\": {\r\n    \"name\": \"Standard_MeteredData\",\r\n    \"tier\": \"Standard\",\r\n    \"family\": \"MeteredData\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1025',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '6dde9a19-cf0d-4eda-b608-5b32db310154',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14992',
  'x-ms-correlation-request-id': '4c86728c-c8ca-4c0c-9fe9-3a1eae9dfed9',
  'x-ms-routing-request-id': 'WESTEUROPE:20170901T111148Z:4c86728c-c8ca-4c0c-9fe9-3a1eae9dfed9',
  date: 'Fri, 01 Sep 2017 11:11:47 GMT',
  connection: 'close' });
 return result; }]];