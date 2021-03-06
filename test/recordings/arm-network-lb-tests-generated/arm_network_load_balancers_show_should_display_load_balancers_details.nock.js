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
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-lb/providers/Microsoft.Network/loadBalancers/loadBalancerName?api-version=2017-08-01')
  .reply(200, "{\r\n  \"name\": \"loadBalancerName\",\r\n  \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-lb/providers/Microsoft.Network/loadBalancers/loadBalancerName\",\r\n  \"etag\": \"W/\\\"43756282-b529-4181-a39c-5d32c4344a58\\\"\",\r\n  \"type\": \"Microsoft.Network/loadBalancers\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"e6ce7d51-1d85-41a1-afba-8c6d903d9e8c\",\r\n    \"frontendIPConfigurations\": [],\r\n    \"backendAddressPools\": [],\r\n    \"loadBalancingRules\": [],\r\n    \"probes\": [],\r\n    \"inboundNatRules\": [],\r\n    \"outboundNatRules\": [],\r\n    \"inboundNatPools\": []\r\n  },\r\n  \"sku\": {\r\n    \"name\": \"Basic\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '681',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"43756282-b529-4181-a39c-5d32c4344a58"',
  'x-ms-request-id': '2ed81f27-11c7-44cf-a3bc-536f53514655',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': 'a4e82a11-da0f-49de-a56a-fc052f5133c3',
  'x-ms-routing-request-id': 'WESTEUROPE:20170901T075811Z:a4e82a11-da0f-49de-a56a-fc052f5133c3',
  date: 'Fri, 01 Sep 2017 07:58:10 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-lb/providers/Microsoft.Network/loadBalancers/loadBalancerName?api-version=2017-08-01')
  .reply(200, "{\r\n  \"name\": \"loadBalancerName\",\r\n  \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-lb/providers/Microsoft.Network/loadBalancers/loadBalancerName\",\r\n  \"etag\": \"W/\\\"43756282-b529-4181-a39c-5d32c4344a58\\\"\",\r\n  \"type\": \"Microsoft.Network/loadBalancers\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"e6ce7d51-1d85-41a1-afba-8c6d903d9e8c\",\r\n    \"frontendIPConfigurations\": [],\r\n    \"backendAddressPools\": [],\r\n    \"loadBalancingRules\": [],\r\n    \"probes\": [],\r\n    \"inboundNatRules\": [],\r\n    \"outboundNatRules\": [],\r\n    \"inboundNatPools\": []\r\n  },\r\n  \"sku\": {\r\n    \"name\": \"Basic\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '681',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"43756282-b529-4181-a39c-5d32c4344a58"',
  'x-ms-request-id': '2ed81f27-11c7-44cf-a3bc-536f53514655',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': 'a4e82a11-da0f-49de-a56a-fc052f5133c3',
  'x-ms-routing-request-id': 'WESTEUROPE:20170901T075811Z:a4e82a11-da0f-49de-a56a-fc052f5133c3',
  date: 'Fri, 01 Sep 2017 07:58:10 GMT',
  connection: 'close' });
 return result; }]];