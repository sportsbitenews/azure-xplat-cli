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
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-public-ip/providers/Microsoft.Network/publicIPAddresses?api-version=2017-08-01')
  .reply(200, "{\r\n  \"value\": [\r\n    {\r\n      \"name\": \"publicIPAddressName\",\r\n      \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-public-ip/providers/Microsoft.Network/publicIPAddresses/publicIPAddressName\",\r\n      \"etag\": \"W/\\\"ecba7e4e-eac5-4aaa-9eca-ee127d612698\\\"\",\r\n      \"location\": \"southeastasia\",\r\n      \"properties\": {\r\n        \"provisioningState\": \"Succeeded\",\r\n        \"resourceGuid\": \"9ed00576-2e69-4215-9717-1e7229f5b0a4\",\r\n        \"publicIPAddressVersion\": \"IPv4\",\r\n        \"publicIPAllocationMethod\": \"Dynamic\",\r\n        \"idleTimeoutInMinutes\": 14,\r\n        \"dnsSettings\": {\r\n          \"domainNameLabel\": \"labelset\",\r\n          \"fqdn\": \"labelset.southeastasia.cloudapp.azure.com\"\r\n        }\r\n      },\r\n      \"type\": \"Microsoft.Network/publicIPAddresses\",\r\n      \"sku\": {\r\n        \"name\": \"Basic\"\r\n      }\r\n    }\r\n  ]\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '857',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '2ece22bd-ede0-4c00-87f7-a91c7287658f',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-correlation-request-id': '33f95ae5-1ea7-4104-9ac7-b5a0f586ae3b',
  'x-ms-routing-request-id': 'WESTEUROPE:20170901T083647Z:33f95ae5-1ea7-4104-9ac7-b5a0f586ae3b',
  date: 'Fri, 01 Sep 2017 08:36:47 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-public-ip/providers/Microsoft.Network/publicIPAddresses?api-version=2017-08-01')
  .reply(200, "{\r\n  \"value\": [\r\n    {\r\n      \"name\": \"publicIPAddressName\",\r\n      \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-public-ip/providers/Microsoft.Network/publicIPAddresses/publicIPAddressName\",\r\n      \"etag\": \"W/\\\"ecba7e4e-eac5-4aaa-9eca-ee127d612698\\\"\",\r\n      \"location\": \"southeastasia\",\r\n      \"properties\": {\r\n        \"provisioningState\": \"Succeeded\",\r\n        \"resourceGuid\": \"9ed00576-2e69-4215-9717-1e7229f5b0a4\",\r\n        \"publicIPAddressVersion\": \"IPv4\",\r\n        \"publicIPAllocationMethod\": \"Dynamic\",\r\n        \"idleTimeoutInMinutes\": 14,\r\n        \"dnsSettings\": {\r\n          \"domainNameLabel\": \"labelset\",\r\n          \"fqdn\": \"labelset.southeastasia.cloudapp.azure.com\"\r\n        }\r\n      },\r\n      \"type\": \"Microsoft.Network/publicIPAddresses\",\r\n      \"sku\": {\r\n        \"name\": \"Basic\"\r\n      }\r\n    }\r\n  ]\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '857',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '2ece22bd-ede0-4c00-87f7-a91c7287658f',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-correlation-request-id': '33f95ae5-1ea7-4104-9ac7-b5a0f586ae3b',
  'x-ms-routing-request-id': 'WESTEUROPE:20170901T083647Z:33f95ae5-1ea7-4104-9ac7-b5a0f586ae3b',
  date: 'Fri, 01 Sep 2017 08:36:47 GMT',
  connection: 'close' });
 return result; }]];