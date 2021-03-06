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
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-local-gateway/providers/Microsoft.Network/localNetworkGateways/invalidIPAddressName?api-version=2017-08-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/localNetworkGateways/invalidIPAddressName' under resource group 'xplat-test-local-gateway' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '987bb6ff-3bfa-4c00-bdeb-d01ac9b4176a',
  'x-ms-correlation-request-id': '987bb6ff-3bfa-4c00-bdeb-d01ac9b4176a',
  'x-ms-routing-request-id': 'WESTEUROPE:20170901T094448Z:987bb6ff-3bfa-4c00-bdeb-d01ac9b4176a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 01 Sep 2017 09:44:47 GMT',
  connection: 'close',
  'content-length': '187' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-local-gateway/providers/Microsoft.Network/localNetworkGateways/invalidIPAddressName?api-version=2017-08-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/localNetworkGateways/invalidIPAddressName' under resource group 'xplat-test-local-gateway' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '987bb6ff-3bfa-4c00-bdeb-d01ac9b4176a',
  'x-ms-correlation-request-id': '987bb6ff-3bfa-4c00-bdeb-d01ac9b4176a',
  'x-ms-routing-request-id': 'WESTEUROPE:20170901T094448Z:987bb6ff-3bfa-4c00-bdeb-d01ac9b4176a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 01 Sep 2017 09:44:47 GMT',
  connection: 'close',
  'content-length': '187' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-local-gateway/providers/Microsoft.Network/localNetworkGateways/invalidIPAddressName?api-version=2017-08-01', '*')
  .reply(400, "{\r\n  \"error\": {\r\n    \"code\": \"InvalidIpAddress\",\r\n    \"message\": \"The IP Address 10.0.0.257 is invalid.\",\r\n    \"details\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '132',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'e200b1e6-3647-4bd4-9faf-8468f0cf391c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '09e91a98-f267-4506-b8bf-f269a7c65171',
  'x-ms-routing-request-id': 'WESTEUROPE:20170901T094452Z:09e91a98-f267-4506-b8bf-f269a7c65171',
  date: 'Fri, 01 Sep 2017 09:44:52 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-local-gateway/providers/Microsoft.Network/localNetworkGateways/invalidIPAddressName?api-version=2017-08-01', '*')
  .reply(400, "{\r\n  \"error\": {\r\n    \"code\": \"InvalidIpAddress\",\r\n    \"message\": \"The IP Address 10.0.0.257 is invalid.\",\r\n    \"details\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '132',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'e200b1e6-3647-4bd4-9faf-8468f0cf391c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '09e91a98-f267-4506-b8bf-f269a7c65171',
  'x-ms-routing-request-id': 'WESTEUROPE:20170901T094452Z:09e91a98-f267-4506-b8bf-f269a7c65171',
  date: 'Fri, 01 Sep 2017 09:44:52 GMT',
  connection: 'close' });
 return result; }]];