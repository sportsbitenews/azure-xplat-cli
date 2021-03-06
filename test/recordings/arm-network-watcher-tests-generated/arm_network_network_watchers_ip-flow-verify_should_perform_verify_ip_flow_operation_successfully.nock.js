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
  process.env['AZURE_VM_TEST_LOCATION'] = 'westcentralus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-watcher/providers/Microsoft.Network/networkWatchers/networkWatcherName?api-version=2017-08-01')
  .reply(200, "{\r\n  \"name\": \"networkWatcherName\",\r\n  \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-watcher/providers/Microsoft.Network/networkWatchers/networkWatcherName\",\r\n  \"etag\": \"W/\\\"e8870548-3302-489e-9d22-ff79a213141f\\\"\",\r\n  \"type\": \"Microsoft.Network/networkWatchers\",\r\n  \"location\": \"westcentralus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"runningOperationIds\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '429',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"e8870548-3302-489e-9d22-ff79a213141f"',
  'x-ms-request-id': '959131b5-1f00-43ab-868b-872c8d8262f1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14992',
  'x-ms-correlation-request-id': '1c472739-2a2f-42b1-afa7-f7063c546097',
  'x-ms-routing-request-id': 'WESTEUROPE:20170815T110928Z:1c472739-2a2f-42b1-afa7-f7063c546097',
  date: 'Tue, 15 Aug 2017 11:09:28 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-watcher/providers/Microsoft.Network/networkWatchers/networkWatcherName?api-version=2017-08-01')
  .reply(200, "{\r\n  \"name\": \"networkWatcherName\",\r\n  \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-watcher/providers/Microsoft.Network/networkWatchers/networkWatcherName\",\r\n  \"etag\": \"W/\\\"e8870548-3302-489e-9d22-ff79a213141f\\\"\",\r\n  \"type\": \"Microsoft.Network/networkWatchers\",\r\n  \"location\": \"westcentralus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"runningOperationIds\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '429',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"e8870548-3302-489e-9d22-ff79a213141f"',
  'x-ms-request-id': '959131b5-1f00-43ab-868b-872c8d8262f1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14992',
  'x-ms-correlation-request-id': '1c472739-2a2f-42b1-afa7-f7063c546097',
  'x-ms-routing-request-id': 'WESTEUROPE:20170815T110928Z:1c472739-2a2f-42b1-afa7-f7063c546097',
  date: 'Tue, 15 Aug 2017 11:09:28 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-watcher/providers/Microsoft.Network/networkWatchers/networkWatcherName/ipFlowVerify?api-version=2017-08-01', '*')
  .reply(200, "{\r\n  \"access\": \"Allow\",\r\n  \"ruleName\": \"DefaultRule_AllowVnetInBound\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '72',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/providers/Microsoft.Network/locations/westcentralus/operationResults/43bebc8c-19c6-42f1-9fbd-198e67febe4b?api-version=2017-08-01',
  'x-ms-request-id': '43bebc8c-19c6-42f1-9fbd-198e67febe4b',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': 'a8ce8df2-bef9-4741-a699-e5cf7f8df979',
  'x-ms-routing-request-id': 'WESTEUROPE:20170815T110936Z:a8ce8df2-bef9-4741-a699-e5cf7f8df979',
  date: 'Tue, 15 Aug 2017 11:09:36 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-watcher/providers/Microsoft.Network/networkWatchers/networkWatcherName/ipFlowVerify?api-version=2017-08-01', '*')
  .reply(200, "{\r\n  \"access\": \"Allow\",\r\n  \"ruleName\": \"DefaultRule_AllowVnetInBound\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '72',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/providers/Microsoft.Network/locations/westcentralus/operationResults/43bebc8c-19c6-42f1-9fbd-198e67febe4b?api-version=2017-08-01',
  'x-ms-request-id': '43bebc8c-19c6-42f1-9fbd-198e67febe4b',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': 'a8ce8df2-bef9-4741-a699-e5cf7f8df979',
  'x-ms-routing-request-id': 'WESTEUROPE:20170815T110936Z:a8ce8df2-bef9-4741-a699-e5cf7f8df979',
  date: 'Tue, 15 Aug 2017 11:09:36 GMT',
  connection: 'close' });
 return result; }]];
