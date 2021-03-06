// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '2c224e7e-3ef5-431d-a57b-e71f4662e3a6',
    name: 'Node CLI Test',
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
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-profile/providers/Microsoft.Network/trafficmanagerprofiles/profilesDefaultName?api-version=2017-05-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/trafficmanagerprofiles/profilesDefaultName' under resource group 'xplat-test-profile' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': 'c5738256-9c27-4d79-a267-c4d595d821b4',
  'x-ms-correlation-request-id': 'c5738256-9c27-4d79-a267-c4d595d821b4',
  'x-ms-routing-request-id': 'WESTEUROPE:20170717T133741Z:c5738256-9c27-4d79-a267-c4d595d821b4',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 17 Jul 2017 13:37:41 GMT',
  connection: 'close',
  'content-length': '182' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-profile/providers/Microsoft.Network/trafficmanagerprofiles/profilesDefaultName?api-version=2017-05-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/trafficmanagerprofiles/profilesDefaultName' under resource group 'xplat-test-profile' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': 'c5738256-9c27-4d79-a267-c4d595d821b4',
  'x-ms-correlation-request-id': 'c5738256-9c27-4d79-a267-c4d595d821b4',
  'x-ms-routing-request-id': 'WESTEUROPE:20170717T133741Z:c5738256-9c27-4d79-a267-c4d595d821b4',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 17 Jul 2017 13:37:41 GMT',
  connection: 'close',
  'content-length': '182' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-profile/providers/Microsoft.Network/trafficmanagerprofiles/profilesDefaultName?api-version=2017-05-01', '*')
  .reply(201, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-profile\\/providers\\/Microsoft.Network\\/trafficManagerProfiles\\/profilesDefaultName\",\"name\":\"profilesDefaultName\",\"type\":\"Microsoft.Network\\/trafficManagerProfiles\",\"location\":\"global\",\"properties\":{\"profileStatus\":\"Enabled\",\"trafficRoutingMethod\":\"Performance\",\"dnsConfig\":{\"relativeName\":\"test-profile-dns\",\"fqdn\":\"test-profile-dns.trafficmanager.net\",\"ttl\":300},\"monitorConfig\":{\"profileMonitorStatus\":\"Inactive\",\"protocol\":\"HTTP\",\"port\":80,\"path\":\"\\/healthcheck.html\",\"intervalInSeconds\":30,\"toleratedNumberOfFailures\":3,\"timeoutInSeconds\":10},\"endpoints\":[]}}", { 'cache-control': 'private',
  'content-length': '652',
  'content-type': 'application/json; charset=utf-8',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '2d584f8f-5da7-4f93-a756-ffa1bff93f69',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '10799',
  'x-ms-correlation-request-id': '3b0e1e4a-124d-49ea-811d-f632529584f1',
  'x-ms-routing-request-id': 'WESTEUROPE:20170717T133745Z:3b0e1e4a-124d-49ea-811d-f632529584f1',
  date: 'Mon, 17 Jul 2017 13:37:45 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-profile/providers/Microsoft.Network/trafficmanagerprofiles/profilesDefaultName?api-version=2017-05-01', '*')
  .reply(201, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-profile\\/providers\\/Microsoft.Network\\/trafficManagerProfiles\\/profilesDefaultName\",\"name\":\"profilesDefaultName\",\"type\":\"Microsoft.Network\\/trafficManagerProfiles\",\"location\":\"global\",\"properties\":{\"profileStatus\":\"Enabled\",\"trafficRoutingMethod\":\"Performance\",\"dnsConfig\":{\"relativeName\":\"test-profile-dns\",\"fqdn\":\"test-profile-dns.trafficmanager.net\",\"ttl\":300},\"monitorConfig\":{\"profileMonitorStatus\":\"Inactive\",\"protocol\":\"HTTP\",\"port\":80,\"path\":\"\\/healthcheck.html\",\"intervalInSeconds\":30,\"toleratedNumberOfFailures\":3,\"timeoutInSeconds\":10},\"endpoints\":[]}}", { 'cache-control': 'private',
  'content-length': '652',
  'content-type': 'application/json; charset=utf-8',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '2d584f8f-5da7-4f93-a756-ffa1bff93f69',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '10799',
  'x-ms-correlation-request-id': '3b0e1e4a-124d-49ea-811d-f632529584f1',
  'x-ms-routing-request-id': 'WESTEUROPE:20170717T133745Z:3b0e1e4a-124d-49ea-811d-f632529584f1',
  date: 'Mon, 17 Jul 2017 13:37:45 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-profile/providers/Microsoft.Network/trafficmanagerprofiles/profilesDefaultName?api-version=2017-05-01')
  .reply(200, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-profile\\/providers\\/Microsoft.Network\\/trafficManagerProfiles\\/profilesDefaultName\",\"name\":\"profilesDefaultName\",\"type\":\"Microsoft.Network\\/trafficManagerProfiles\",\"location\":\"global\",\"tags\":{},\"properties\":{\"profileStatus\":\"Enabled\",\"trafficRoutingMethod\":\"Performance\",\"dnsConfig\":{\"relativeName\":\"test-profile-dns\",\"fqdn\":\"test-profile-dns.trafficmanager.net\",\"ttl\":300},\"monitorConfig\":{\"profileMonitorStatus\":\"Inactive\",\"protocol\":\"HTTP\",\"port\":80,\"path\":\"\\/healthcheck.html\",\"intervalInSeconds\":30,\"toleratedNumberOfFailures\":3,\"timeoutInSeconds\":10},\"endpoints\":[]}}", { 'cache-control': 'private',
  'content-length': '662',
  'content-type': 'application/json; charset=utf-8',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'e35b6e2a-1aac-4988-b42b-baf0a56c82d0',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '10799',
  'x-ms-correlation-request-id': '7d069323-030f-4cee-868d-a47163f1058b',
  'x-ms-routing-request-id': 'WESTEUROPE:20170717T133746Z:7d069323-030f-4cee-868d-a47163f1058b',
  date: 'Mon, 17 Jul 2017 13:37:46 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-profile/providers/Microsoft.Network/trafficmanagerprofiles/profilesDefaultName?api-version=2017-05-01')
  .reply(200, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-profile\\/providers\\/Microsoft.Network\\/trafficManagerProfiles\\/profilesDefaultName\",\"name\":\"profilesDefaultName\",\"type\":\"Microsoft.Network\\/trafficManagerProfiles\",\"location\":\"global\",\"tags\":{},\"properties\":{\"profileStatus\":\"Enabled\",\"trafficRoutingMethod\":\"Performance\",\"dnsConfig\":{\"relativeName\":\"test-profile-dns\",\"fqdn\":\"test-profile-dns.trafficmanager.net\",\"ttl\":300},\"monitorConfig\":{\"profileMonitorStatus\":\"Inactive\",\"protocol\":\"HTTP\",\"port\":80,\"path\":\"\\/healthcheck.html\",\"intervalInSeconds\":30,\"toleratedNumberOfFailures\":3,\"timeoutInSeconds\":10},\"endpoints\":[]}}", { 'cache-control': 'private',
  'content-length': '662',
  'content-type': 'application/json; charset=utf-8',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'e35b6e2a-1aac-4988-b42b-baf0a56c82d0',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '10799',
  'x-ms-correlation-request-id': '7d069323-030f-4cee-868d-a47163f1058b',
  'x-ms-routing-request-id': 'WESTEUROPE:20170717T133746Z:7d069323-030f-4cee-868d-a47163f1058b',
  date: 'Mon, 17 Jul 2017 13:37:46 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-profile/providers/Microsoft.Network/trafficmanagerprofiles/profilesDefaultName?api-version=2017-05-01')
  .reply(200, "", { 'cache-control': 'private',
  'content-length': '0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '50de3c14-19ed-4468-b077-103252e8d945',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '10799',
  'x-ms-correlation-request-id': '5b336bf8-92b5-4268-a427-dc74cd406785',
  'x-ms-routing-request-id': 'WESTEUROPE:20170717T133803Z:5b336bf8-92b5-4268-a427-dc74cd406785',
  date: 'Mon, 17 Jul 2017 13:38:02 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-profile/providers/Microsoft.Network/trafficmanagerprofiles/profilesDefaultName?api-version=2017-05-01')
  .reply(200, "", { 'cache-control': 'private',
  'content-length': '0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '50de3c14-19ed-4468-b077-103252e8d945',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '10799',
  'x-ms-correlation-request-id': '5b336bf8-92b5-4268-a427-dc74cd406785',
  'x-ms-routing-request-id': 'WESTEUROPE:20170717T133803Z:5b336bf8-92b5-4268-a427-dc74cd406785',
  date: 'Mon, 17 Jul 2017 13:38:02 GMT',
  connection: 'close' });
 return result; }]];