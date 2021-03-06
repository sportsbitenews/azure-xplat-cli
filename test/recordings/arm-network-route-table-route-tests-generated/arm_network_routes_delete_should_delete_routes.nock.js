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
  process.env['AZURE_VM_TEST_LOCATION'] = 'westus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-route/providers/Microsoft.Network/routeTables/routeTableName/routes/routeName?api-version=2017-08-01')
  .reply(200, "{\r\n  \"name\": \"routeName\",\r\n  \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-route/providers/Microsoft.Network/routeTables/routeTableName/routes/routeName\",\r\n  \"etag\": \"W/\\\"82c361d3-c415-45de-92d0-dd216eff9246\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"addressPrefix\": \"11.0.0.0/8\",\r\n    \"nextHopType\": \"VnetLocal\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '384',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"82c361d3-c415-45de-92d0-dd216eff9246"',
  'x-ms-request-id': '9667c763-7249-4f2a-ac51-2d2b1f993939',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': '343277ea-5f51-4797-94a3-1b206d3262b4',
  'x-ms-routing-request-id': 'WESTEUROPE:20170901T100541Z:343277ea-5f51-4797-94a3-1b206d3262b4',
  date: 'Fri, 01 Sep 2017 10:05:41 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-route/providers/Microsoft.Network/routeTables/routeTableName/routes/routeName?api-version=2017-08-01')
  .reply(200, "{\r\n  \"name\": \"routeName\",\r\n  \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-route/providers/Microsoft.Network/routeTables/routeTableName/routes/routeName\",\r\n  \"etag\": \"W/\\\"82c361d3-c415-45de-92d0-dd216eff9246\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"addressPrefix\": \"11.0.0.0/8\",\r\n    \"nextHopType\": \"VnetLocal\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '384',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"82c361d3-c415-45de-92d0-dd216eff9246"',
  'x-ms-request-id': '9667c763-7249-4f2a-ac51-2d2b1f993939',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': '343277ea-5f51-4797-94a3-1b206d3262b4',
  'x-ms-routing-request-id': 'WESTEUROPE:20170901T100541Z:343277ea-5f51-4797-94a3-1b206d3262b4',
  date: 'Fri, 01 Sep 2017 10:05:41 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-route/providers/Microsoft.Network/routeTables/routeTableName/routes/routeName?api-version=2017-08-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/providers/Microsoft.Network/locations/westus.validation/operationResults/013c4d6a-0464-4763-aaf3-eac21ae9313e?api-version=2017-08-01',
  'retry-after': '10',
  'x-ms-request-id': '013c4d6a-0464-4763-aaf3-eac21ae9313e',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/providers/Microsoft.Network/locations/westus.validation/operations/013c4d6a-0464-4763-aaf3-eac21ae9313e?api-version=2017-08-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': 'f175053f-edb2-4f3e-be4d-5bc2b2da2c56',
  'x-ms-routing-request-id': 'WESTEUROPE:20170901T100543Z:f175053f-edb2-4f3e-be4d-5bc2b2da2c56',
  date: 'Fri, 01 Sep 2017 10:05:43 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-route/providers/Microsoft.Network/routeTables/routeTableName/routes/routeName?api-version=2017-08-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/providers/Microsoft.Network/locations/westus.validation/operationResults/013c4d6a-0464-4763-aaf3-eac21ae9313e?api-version=2017-08-01',
  'retry-after': '10',
  'x-ms-request-id': '013c4d6a-0464-4763-aaf3-eac21ae9313e',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/providers/Microsoft.Network/locations/westus.validation/operations/013c4d6a-0464-4763-aaf3-eac21ae9313e?api-version=2017-08-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': 'f175053f-edb2-4f3e-be4d-5bc2b2da2c56',
  'x-ms-routing-request-id': 'WESTEUROPE:20170901T100543Z:f175053f-edb2-4f3e-be4d-5bc2b2da2c56',
  date: 'Fri, 01 Sep 2017 10:05:43 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/providers/Microsoft.Network/locations/westus.validation/operations/013c4d6a-0464-4763-aaf3-eac21ae9313e?api-version=2017-08-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'e147e4ee-5d26-4889-a6af-3a460c6b6b27',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': 'e41375c4-bbfb-4381-a30e-3232a7a4a9f9',
  'x-ms-routing-request-id': 'WESTEUROPE:20170901T100614Z:e41375c4-bbfb-4381-a30e-3232a7a4a9f9',
  date: 'Fri, 01 Sep 2017 10:06:13 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/providers/Microsoft.Network/locations/westus.validation/operations/013c4d6a-0464-4763-aaf3-eac21ae9313e?api-version=2017-08-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'e147e4ee-5d26-4889-a6af-3a460c6b6b27',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': 'e41375c4-bbfb-4381-a30e-3232a7a4a9f9',
  'x-ms-routing-request-id': 'WESTEUROPE:20170901T100614Z:e41375c4-bbfb-4381-a30e-3232a7a4a9f9',
  date: 'Fri, 01 Sep 2017 10:06:13 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-route/providers/Microsoft.Network/routeTables/routeTableName/routes/routeName?api-version=2017-08-01')
  .reply(404, "{\r\n  \"error\": {\r\n    \"code\": \"NotFound\",\r\n    \"message\": \"Resource /subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-route/providers/Microsoft.Network/routeTables/routeTableName/routes/routeName not found.\",\r\n    \"details\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '262',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '00b68e88-23d9-4476-94b7-e34c22af0dc2',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': 'ae3701c6-d197-45b5-9ac5-137de39f0e51',
  'x-ms-routing-request-id': 'WESTEUROPE:20170901T100616Z:ae3701c6-d197-45b5-9ac5-137de39f0e51',
  date: 'Fri, 01 Sep 2017 10:06:16 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-route/providers/Microsoft.Network/routeTables/routeTableName/routes/routeName?api-version=2017-08-01')
  .reply(404, "{\r\n  \"error\": {\r\n    \"code\": \"NotFound\",\r\n    \"message\": \"Resource /subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-route/providers/Microsoft.Network/routeTables/routeTableName/routes/routeName not found.\",\r\n    \"details\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '262',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '00b68e88-23d9-4476-94b7-e34c22af0dc2',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': 'ae3701c6-d197-45b5-9ac5-137de39f0e51',
  'x-ms-routing-request-id': 'WESTEUROPE:20170901T100616Z:ae3701c6-d197-45b5-9ac5-137de39f0e51',
  date: 'Fri, 01 Sep 2017 10:06:16 GMT',
  connection: 'close' });
 return result; }]];