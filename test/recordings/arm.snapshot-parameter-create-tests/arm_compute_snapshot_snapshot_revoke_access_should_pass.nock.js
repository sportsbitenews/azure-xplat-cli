// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'e33f361b-53c2-4cc7-b829-78906708387b',
    name: 'Microsoft Azure Internal Consumption',
    user: {
      name: 'user@domain.example',
      type: 'servicePrincipal'
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
  .post('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xTestDiskCreate9810/providers/Microsoft.Compute/snapshots/xplatSnapshot2193/endGetAccess?api-version=2017-03-30')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/DiskOperations/55aa465e-6ce7-42b7-9bdd-02d5bc56058d?monitor=true&api-version=2017-03-30',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/DiskOperations/55aa465e-6ce7-42b7-9bdd-02d5bc56058d?api-version=2017-03-30',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '168ab153-5556-4254-a622-b88667a8f6d7_131298516114175576',
  'x-ms-request-id': '55aa465e-6ce7-42b7-9bdd-02d5bc56058d',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1196',
  'x-ms-correlation-request-id': '26c69dc6-89dc-4567-b142-abb61d0d99b2',
  'x-ms-routing-request-id': 'WESTUS:20170602T172013Z:26c69dc6-89dc-4567-b142-abb61d0d99b2',
  date: 'Fri, 02 Jun 2017 17:20:13 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .post('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xTestDiskCreate9810/providers/Microsoft.Compute/snapshots/xplatSnapshot2193/endGetAccess?api-version=2017-03-30')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/DiskOperations/55aa465e-6ce7-42b7-9bdd-02d5bc56058d?monitor=true&api-version=2017-03-30',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/DiskOperations/55aa465e-6ce7-42b7-9bdd-02d5bc56058d?api-version=2017-03-30',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '168ab153-5556-4254-a622-b88667a8f6d7_131298516114175576',
  'x-ms-request-id': '55aa465e-6ce7-42b7-9bdd-02d5bc56058d',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1196',
  'x-ms-correlation-request-id': '26c69dc6-89dc-4567-b142-abb61d0d99b2',
  'x-ms-routing-request-id': 'WESTUS:20170602T172013Z:26c69dc6-89dc-4567-b142-abb61d0d99b2',
  date: 'Fri, 02 Jun 2017 17:20:13 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/DiskOperations/55aa465e-6ce7-42b7-9bdd-02d5bc56058d?api-version=2017-03-30')
  .reply(200, "{\r\n  \"startTime\": \"2017-06-02T17:20:11.9960155+00:00\",\r\n  \"endTime\": \"2017-06-02T17:20:12.1522237+00:00\",\r\n  \"status\": \"Succeeded\",\r\n  \"name\": \"55aa465e-6ce7-42b7-9bdd-02d5bc56058d\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '184',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '168ab153-5556-4254-a622-b88667a8f6d7_131298516114175576',
  'x-ms-request-id': '6f42c408-0f27-430b-b118-6057e4e6796c',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-correlation-request-id': 'e1970df2-970f-49a9-aff2-6290109d1e0c',
  'x-ms-routing-request-id': 'WESTUS:20170602T172043Z:e1970df2-970f-49a9-aff2-6290109d1e0c',
  date: 'Fri, 02 Jun 2017 17:20:43 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/DiskOperations/55aa465e-6ce7-42b7-9bdd-02d5bc56058d?api-version=2017-03-30')
  .reply(200, "{\r\n  \"startTime\": \"2017-06-02T17:20:11.9960155+00:00\",\r\n  \"endTime\": \"2017-06-02T17:20:12.1522237+00:00\",\r\n  \"status\": \"Succeeded\",\r\n  \"name\": \"55aa465e-6ce7-42b7-9bdd-02d5bc56058d\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '184',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '168ab153-5556-4254-a622-b88667a8f6d7_131298516114175576',
  'x-ms-request-id': '6f42c408-0f27-430b-b118-6057e4e6796c',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-correlation-request-id': 'e1970df2-970f-49a9-aff2-6290109d1e0c',
  'x-ms-routing-request-id': 'WESTUS:20170602T172043Z:e1970df2-970f-49a9-aff2-6290109d1e0c',
  date: 'Fri, 02 Jun 2017 17:20:43 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xTestDiskCreate9810/providers/Microsoft.Compute/snapshots/xplatSnapshot2193?api-version=2017-03-30')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/DiskOperations/6d578331-6c0b-44da-8a32-b704d7e8e7bb?monitor=true&api-version=2017-03-30',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/DiskOperations/6d578331-6c0b-44da-8a32-b704d7e8e7bb?api-version=2017-03-30',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '168ab153-5556-4254-a622-b88667a8f6d7_131298516114175576',
  'x-ms-request-id': '6d578331-6c0b-44da-8a32-b704d7e8e7bb',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1196',
  'x-ms-correlation-request-id': '9ec7759f-6d95-465f-bb87-10a43ba3f8aa',
  'x-ms-routing-request-id': 'WESTUS:20170602T172045Z:9ec7759f-6d95-465f-bb87-10a43ba3f8aa',
  date: 'Fri, 02 Jun 2017 17:20:44 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xTestDiskCreate9810/providers/Microsoft.Compute/snapshots/xplatSnapshot2193?api-version=2017-03-30')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/DiskOperations/6d578331-6c0b-44da-8a32-b704d7e8e7bb?monitor=true&api-version=2017-03-30',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/DiskOperations/6d578331-6c0b-44da-8a32-b704d7e8e7bb?api-version=2017-03-30',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '168ab153-5556-4254-a622-b88667a8f6d7_131298516114175576',
  'x-ms-request-id': '6d578331-6c0b-44da-8a32-b704d7e8e7bb',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1196',
  'x-ms-correlation-request-id': '9ec7759f-6d95-465f-bb87-10a43ba3f8aa',
  'x-ms-routing-request-id': 'WESTUS:20170602T172045Z:9ec7759f-6d95-465f-bb87-10a43ba3f8aa',
  date: 'Fri, 02 Jun 2017 17:20:44 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/DiskOperations/6d578331-6c0b-44da-8a32-b704d7e8e7bb?api-version=2017-03-30')
  .reply(200, "{\r\n  \"startTime\": \"2017-06-02T17:20:44.6302553+00:00\",\r\n  \"endTime\": \"2017-06-02T17:20:44.8177262+00:00\",\r\n  \"status\": \"Succeeded\",\r\n  \"name\": \"6d578331-6c0b-44da-8a32-b704d7e8e7bb\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '184',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '168ab153-5556-4254-a622-b88667a8f6d7_131298516114175576',
  'x-ms-request-id': 'd11b2798-5d4d-4b21-b584-b7522f45d49e',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14984',
  'x-ms-correlation-request-id': '5c5e0d8f-382f-4058-80b1-3a082271746f',
  'x-ms-routing-request-id': 'WESTUS2:20170602T172116Z:5c5e0d8f-382f-4058-80b1-3a082271746f',
  date: 'Fri, 02 Jun 2017 17:21:16 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/DiskOperations/6d578331-6c0b-44da-8a32-b704d7e8e7bb?api-version=2017-03-30')
  .reply(200, "{\r\n  \"startTime\": \"2017-06-02T17:20:44.6302553+00:00\",\r\n  \"endTime\": \"2017-06-02T17:20:44.8177262+00:00\",\r\n  \"status\": \"Succeeded\",\r\n  \"name\": \"6d578331-6c0b-44da-8a32-b704d7e8e7bb\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '184',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '168ab153-5556-4254-a622-b88667a8f6d7_131298516114175576',
  'x-ms-request-id': 'd11b2798-5d4d-4b21-b584-b7522f45d49e',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14984',
  'x-ms-correlation-request-id': '5c5e0d8f-382f-4058-80b1-3a082271746f',
  'x-ms-routing-request-id': 'WESTUS2:20170602T172116Z:5c5e0d8f-382f-4058-80b1-3a082271746f',
  date: 'Fri, 02 Jun 2017 17:21:16 GMT',
  connection: 'close' });
 return result; }]];