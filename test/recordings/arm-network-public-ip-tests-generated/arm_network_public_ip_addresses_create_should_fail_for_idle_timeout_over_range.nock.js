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
  process.env['AZURE_VM_TEST_LOCATION'] = 'southeastasia';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-public-ip/providers/Microsoft.Network/publicIPAddresses/idleTimeoutOverRangeName?api-version=2017-08-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/publicIPAddresses/idleTimeoutOverRangeName' under resource group 'xplat-test-public-ip' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '6c0d716f-7bdd-4366-91bc-16b85a985f8a',
  'x-ms-correlation-request-id': '6c0d716f-7bdd-4366-91bc-16b85a985f8a',
  'x-ms-routing-request-id': 'WESTEUROPE:20170901T083853Z:6c0d716f-7bdd-4366-91bc-16b85a985f8a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 01 Sep 2017 08:38:52 GMT',
  connection: 'close',
  'content-length': '184' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-public-ip/providers/Microsoft.Network/publicIPAddresses/idleTimeoutOverRangeName?api-version=2017-08-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/publicIPAddresses/idleTimeoutOverRangeName' under resource group 'xplat-test-public-ip' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '6c0d716f-7bdd-4366-91bc-16b85a985f8a',
  'x-ms-correlation-request-id': '6c0d716f-7bdd-4366-91bc-16b85a985f8a',
  'x-ms-routing-request-id': 'WESTEUROPE:20170901T083853Z:6c0d716f-7bdd-4366-91bc-16b85a985f8a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 01 Sep 2017 08:38:52 GMT',
  connection: 'close',
  'content-length': '184' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-public-ip/providers/Microsoft.Network/publicIPAddresses/idleTimeoutOverRangeName?api-version=2017-08-01', '*')
  .reply(400, "{\r\n  \"error\": {\r\n    \"code\": \"PublicIPIdleTimeoutIsOutOfRange\",\r\n    \"message\": \"Public IP address idleTimeoutOverRangeName has invalid Idle Timeout. The value must be between 4 and 30.\",\r\n    \"details\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '214',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '43355903-2f21-42c4-946c-c19233e63b87',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': 'eff86d5c-7db2-4a3d-b9e6-4ab3381f3e8d',
  'x-ms-routing-request-id': 'WESTEUROPE:20170901T083857Z:eff86d5c-7db2-4a3d-b9e6-4ab3381f3e8d',
  date: 'Fri, 01 Sep 2017 08:38:56 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-public-ip/providers/Microsoft.Network/publicIPAddresses/idleTimeoutOverRangeName?api-version=2017-08-01', '*')
  .reply(400, "{\r\n  \"error\": {\r\n    \"code\": \"PublicIPIdleTimeoutIsOutOfRange\",\r\n    \"message\": \"Public IP address idleTimeoutOverRangeName has invalid Idle Timeout. The value must be between 4 and 30.\",\r\n    \"details\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '214',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '43355903-2f21-42c4-946c-c19233e63b87',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': 'eff86d5c-7db2-4a3d-b9e6-4ab3381f3e8d',
  'x-ms-routing-request-id': 'WESTEUROPE:20170901T083857Z:eff86d5c-7db2-4a3d-b9e6-4ab3381f3e8d',
  date: 'Fri, 01 Sep 2017 08:38:56 GMT',
  connection: 'close' });
 return result; }]];