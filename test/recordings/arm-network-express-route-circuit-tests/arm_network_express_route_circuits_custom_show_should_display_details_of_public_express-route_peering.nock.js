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
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-circuit-custom/providers/Microsoft.Network/expressRouteCircuits/xplatExpressRouteCircuit/peerings/AzurePublicPeering?api-version=2017-08-01')
  .reply(200, "{\r\n  \"name\": \"AzurePublicPeering\",\r\n  \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-circuit-custom/providers/Microsoft.Network/expressRouteCircuits/xplatExpressRouteCircuit/peerings/AzurePublicPeering\",\r\n  \"etag\": \"W/\\\"bd7b1403-72e9-48fc-bcac-e41e7d2eae2d\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"peeringType\": \"AzurePublicPeering\",\r\n    \"azureASN\": 12076,\r\n    \"peerASN\": 111,\r\n    \"primaryPeerAddressPrefix\": \"192.168.1.0/30\",\r\n    \"secondaryPeerAddressPrefix\": \"192.168.2.0/30\",\r\n    \"primaryAzurePort\": \"INX-LON04-06GMR-CIS-3-PRI-A\",\r\n    \"secondaryAzurePort\": \"INX-LON04-06GMR-CIS-4-SEC-A\",\r\n    \"state\": \"Enabled\",\r\n    \"vlanId\": 209,\r\n    \"gatewayManagerEtag\": \"\",\r\n    \"lastModifiedBy\": \"Customer\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '779',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '05c10ae6-c14c-4b16-aecd-1021fc433395',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14990',
  'x-ms-correlation-request-id': 'd1016c03-cee7-41c0-99a3-83710cb20a85',
  'x-ms-routing-request-id': 'WESTEUROPE:20170901T111736Z:d1016c03-cee7-41c0-99a3-83710cb20a85',
  date: 'Fri, 01 Sep 2017 11:17:35 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-circuit-custom/providers/Microsoft.Network/expressRouteCircuits/xplatExpressRouteCircuit/peerings/AzurePublicPeering?api-version=2017-08-01')
  .reply(200, "{\r\n  \"name\": \"AzurePublicPeering\",\r\n  \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-circuit-custom/providers/Microsoft.Network/expressRouteCircuits/xplatExpressRouteCircuit/peerings/AzurePublicPeering\",\r\n  \"etag\": \"W/\\\"bd7b1403-72e9-48fc-bcac-e41e7d2eae2d\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"peeringType\": \"AzurePublicPeering\",\r\n    \"azureASN\": 12076,\r\n    \"peerASN\": 111,\r\n    \"primaryPeerAddressPrefix\": \"192.168.1.0/30\",\r\n    \"secondaryPeerAddressPrefix\": \"192.168.2.0/30\",\r\n    \"primaryAzurePort\": \"INX-LON04-06GMR-CIS-3-PRI-A\",\r\n    \"secondaryAzurePort\": \"INX-LON04-06GMR-CIS-4-SEC-A\",\r\n    \"state\": \"Enabled\",\r\n    \"vlanId\": 209,\r\n    \"gatewayManagerEtag\": \"\",\r\n    \"lastModifiedBy\": \"Customer\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '779',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '05c10ae6-c14c-4b16-aecd-1021fc433395',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14990',
  'x-ms-correlation-request-id': 'd1016c03-cee7-41c0-99a3-83710cb20a85',
  'x-ms-routing-request-id': 'WESTEUROPE:20170901T111736Z:d1016c03-cee7-41c0-99a3-83710cb20a85',
  date: 'Fri, 01 Sep 2017 11:17:35 GMT',
  connection: 'close' });
 return result; }]];