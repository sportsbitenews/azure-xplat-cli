// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '9532a63e-f2eb-4649-bb23-5ed01077ce80',
    name: 'franks-official-test-sub',
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
  .get('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-vpn-gateway/providers/Microsoft.Network/virtualNetworkGateways/gatewayTypeOutOfRangeName?api-version=2017-08-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/virtualNetworkGateways/gatewayTypeOutOfRangeName' under resource group 'xplat-test-vpn-gateway' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '1971a98c-a66b-4aca-a8b5-18026b4511a5',
  'x-ms-correlation-request-id': '1971a98c-a66b-4aca-a8b5-18026b4511a5',
  'x-ms-routing-request-id': 'WESTEUROPE:20170727T122647Z:1971a98c-a66b-4aca-a8b5-18026b4511a5',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 27 Jul 2017 12:26:46 GMT',
  connection: 'close',
  'content-length': '192' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-vpn-gateway/providers/Microsoft.Network/virtualNetworkGateways/gatewayTypeOutOfRangeName?api-version=2017-08-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/virtualNetworkGateways/gatewayTypeOutOfRangeName' under resource group 'xplat-test-vpn-gateway' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '1971a98c-a66b-4aca-a8b5-18026b4511a5',
  'x-ms-correlation-request-id': '1971a98c-a66b-4aca-a8b5-18026b4511a5',
  'x-ms-routing-request-id': 'WESTEUROPE:20170727T122647Z:1971a98c-a66b-4aca-a8b5-18026b4511a5',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 27 Jul 2017 12:26:46 GMT',
  connection: 'close',
  'content-length': '192' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-vpn-gateway/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/subnets/GatewaySubnet?api-version=2017-08-01')
  .reply(200, "{\r\n  \"name\": \"GatewaySubnet\",\r\n  \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-vpn-gateway/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/subnets/GatewaySubnet\",\r\n  \"etag\": \"W/\\\"f9ff8b9f-5683-4aa7-8ab8-7c97ce61de2c\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"addressPrefix\": \"10.0.0.0/16\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '375',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"f9ff8b9f-5683-4aa7-8ab8-7c97ce61de2c"',
  'x-ms-request-id': 'e20e5ead-3ad9-4c31-ae9f-2345942dcd05',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': 'c4191ea0-7a1d-469f-a04e-74420a125fa8',
  'x-ms-routing-request-id': 'WESTEUROPE:20170727T122649Z:c4191ea0-7a1d-469f-a04e-74420a125fa8',
  date: 'Thu, 27 Jul 2017 12:26:48 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-vpn-gateway/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/subnets/GatewaySubnet?api-version=2017-08-01')
  .reply(200, "{\r\n  \"name\": \"GatewaySubnet\",\r\n  \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-vpn-gateway/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/subnets/GatewaySubnet\",\r\n  \"etag\": \"W/\\\"f9ff8b9f-5683-4aa7-8ab8-7c97ce61de2c\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"addressPrefix\": \"10.0.0.0/16\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '375',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"f9ff8b9f-5683-4aa7-8ab8-7c97ce61de2c"',
  'x-ms-request-id': 'e20e5ead-3ad9-4c31-ae9f-2345942dcd05',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': 'c4191ea0-7a1d-469f-a04e-74420a125fa8',
  'x-ms-routing-request-id': 'WESTEUROPE:20170727T122649Z:c4191ea0-7a1d-469f-a04e-74420a125fa8',
  date: 'Thu, 27 Jul 2017 12:26:48 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-vpn-gateway/providers/Microsoft.Network/publicIPAddresses/publicIPAddressName?api-version=2017-08-01')
  .reply(200, "{\r\n  \"name\": \"publicIPAddressName\",\r\n  \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-vpn-gateway/providers/Microsoft.Network/publicIPAddresses/publicIPAddressName\",\r\n  \"etag\": \"W/\\\"2d4c499c-c017-4424-8cf2-87c420859a49\\\"\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"7172c3b4-2fed-4290-8df1-7a707132f825\",\r\n    \"publicIPAddressVersion\": \"IPv4\",\r\n    \"publicIPAllocationMethod\": \"Dynamic\",\r\n    \"idleTimeoutInMinutes\": 4\r\n  },\r\n  \"type\": \"Microsoft.Network/publicIPAddresses\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '576',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"2d4c499c-c017-4424-8cf2-87c420859a49"',
  'x-ms-request-id': 'b436dbbf-ccb0-4191-ae77-3c35fe99a561',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14989',
  'x-ms-correlation-request-id': '37debaf7-bea5-486c-bbf8-71fa1410d384',
  'x-ms-routing-request-id': 'WESTEUROPE:20170727T122650Z:37debaf7-bea5-486c-bbf8-71fa1410d384',
  date: 'Thu, 27 Jul 2017 12:26:49 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-vpn-gateway/providers/Microsoft.Network/publicIPAddresses/publicIPAddressName?api-version=2017-08-01')
  .reply(200, "{\r\n  \"name\": \"publicIPAddressName\",\r\n  \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-vpn-gateway/providers/Microsoft.Network/publicIPAddresses/publicIPAddressName\",\r\n  \"etag\": \"W/\\\"2d4c499c-c017-4424-8cf2-87c420859a49\\\"\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"7172c3b4-2fed-4290-8df1-7a707132f825\",\r\n    \"publicIPAddressVersion\": \"IPv4\",\r\n    \"publicIPAllocationMethod\": \"Dynamic\",\r\n    \"idleTimeoutInMinutes\": 4\r\n  },\r\n  \"type\": \"Microsoft.Network/publicIPAddresses\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '576',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"2d4c499c-c017-4424-8cf2-87c420859a49"',
  'x-ms-request-id': 'b436dbbf-ccb0-4191-ae77-3c35fe99a561',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14989',
  'x-ms-correlation-request-id': '37debaf7-bea5-486c-bbf8-71fa1410d384',
  'x-ms-routing-request-id': 'WESTEUROPE:20170727T122650Z:37debaf7-bea5-486c-bbf8-71fa1410d384',
  date: 'Thu, 27 Jul 2017 12:26:49 GMT',
  connection: 'close' });
 return result; }]];