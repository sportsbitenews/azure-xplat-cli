// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '623d50f1-4fa8-4e46-a967-a9214aed43ab',
    name: 'CSM Test Environment Services',
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
  process.env['AZURE_ARM_TEST_LOCATION'] = 'West US';
  process.env['AZURE_ARM_TEST_SQL_RESOURCE_LOCATION'] = 'West US';
  process.env['AZURE_ARM_TEST_WEBSITES_RESOURCE_LOCATION'] = 'West US';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/623d50f1-4fa8-4e46-a967-a9214aed43ab/resourcegroups/xTestResource2485?api-version=2016-09-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceGroupNotFound\",\"message\":\"Resource group 'xTestResource2485' could not be found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-ratelimit-remaining-subscription-reads': '14946',
  'x-ms-request-id': 'd0023c4f-3970-4c48-864f-62740603516b',
  'x-ms-correlation-request-id': 'd0023c4f-3970-4c48-864f-62740603516b',
  'x-ms-routing-request-id': 'WESTUS:20161207T035010Z:d0023c4f-3970-4c48-864f-62740603516b',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 07 Dec 2016 03:50:09 GMT',
  connection: 'close',
  'content-length': '109' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/623d50f1-4fa8-4e46-a967-a9214aed43ab/resourcegroups/xTestResource2485?api-version=2016-09-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceGroupNotFound\",\"message\":\"Resource group 'xTestResource2485' could not be found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-ratelimit-remaining-subscription-reads': '14946',
  'x-ms-request-id': 'd0023c4f-3970-4c48-864f-62740603516b',
  'x-ms-correlation-request-id': 'd0023c4f-3970-4c48-864f-62740603516b',
  'x-ms-routing-request-id': 'WESTUS:20161207T035010Z:d0023c4f-3970-4c48-864f-62740603516b',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 07 Dec 2016 03:50:09 GMT',
  connection: 'close',
  'content-length': '109' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/623d50f1-4fa8-4e46-a967-a9214aed43ab/resourcegroups/xTestResource2485?api-version=2016-09-01', '*')
  .reply(201, "{\"id\":\"/subscriptions/623d50f1-4fa8-4e46-a967-a9214aed43ab/resourceGroups/xTestResource2485\",\"name\":\"xTestResource2485\",\"location\":\"westus\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '197',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1192',
  'x-ms-request-id': '5a6d5ab2-69c5-4d66-b4ca-e1ab5c02b3a7',
  'x-ms-correlation-request-id': '5a6d5ab2-69c5-4d66-b4ca-e1ab5c02b3a7',
  'x-ms-routing-request-id': 'WESTUS:20161207T035010Z:5a6d5ab2-69c5-4d66-b4ca-e1ab5c02b3a7',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 07 Dec 2016 03:50:10 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/623d50f1-4fa8-4e46-a967-a9214aed43ab/resourcegroups/xTestResource2485?api-version=2016-09-01', '*')
  .reply(201, "{\"id\":\"/subscriptions/623d50f1-4fa8-4e46-a967-a9214aed43ab/resourceGroups/xTestResource2485\",\"name\":\"xTestResource2485\",\"location\":\"westus\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '197',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1192',
  'x-ms-request-id': '5a6d5ab2-69c5-4d66-b4ca-e1ab5c02b3a7',
  'x-ms-correlation-request-id': '5a6d5ab2-69c5-4d66-b4ca-e1ab5c02b3a7',
  'x-ms-routing-request-id': 'WESTUS:20161207T035010Z:5a6d5ab2-69c5-4d66-b4ca-e1ab5c02b3a7',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 07 Dec 2016 03:50:10 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/623d50f1-4fa8-4e46-a967-a9214aed43ab/resourcegroups/xTestResource2485?api-version=2016-09-01')
  .reply(200, "{\"id\":\"/subscriptions/623d50f1-4fa8-4e46-a967-a9214aed43ab/resourceGroups/xTestResource2485\",\"name\":\"xTestResource2485\",\"location\":\"westus\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-reads': '14962',
  'x-ms-request-id': 'df4cef10-88d6-413e-8e35-504ae7b23c92',
  'x-ms-correlation-request-id': 'df4cef10-88d6-413e-8e35-504ae7b23c92',
  'x-ms-routing-request-id': 'WESTUS:20161207T035011Z:df4cef10-88d6-413e-8e35-504ae7b23c92',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 07 Dec 2016 03:50:10 GMT',
  connection: 'close',
  'content-length': '197' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/623d50f1-4fa8-4e46-a967-a9214aed43ab/resourcegroups/xTestResource2485?api-version=2016-09-01')
  .reply(200, "{\"id\":\"/subscriptions/623d50f1-4fa8-4e46-a967-a9214aed43ab/resourceGroups/xTestResource2485\",\"name\":\"xTestResource2485\",\"location\":\"westus\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-reads': '14962',
  'x-ms-request-id': 'df4cef10-88d6-413e-8e35-504ae7b23c92',
  'x-ms-correlation-request-id': 'df4cef10-88d6-413e-8e35-504ae7b23c92',
  'x-ms-routing-request-id': 'WESTUS:20161207T035011Z:df4cef10-88d6-413e-8e35-504ae7b23c92',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 07 Dec 2016 03:50:10 GMT',
  connection: 'close',
  'content-length': '197' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/623d50f1-4fa8-4e46-a967-a9214aed43ab/resourcegroups/xTestResource2485/providers/Microsoft.Web//sites/xTestGrpRes8668?api-version=2014-04-01', '*')
  .reply(200, "{\"id\":\"/subscriptions/623d50f1-4fa8-4e46-a967-a9214aed43ab/resourceGroups/xTestResource2485/providers/Microsoft.Web/sites/xTestGrpRes8668\",\"name\":\"xTestGrpRes8668\",\"type\":\"Microsoft.Web/sites\",\"kind\":\"app\",\"location\":\"westus\",\"tags\":{},\"properties\":{\"name\":\"xTestGrpRes8668\",\"state\":\"Running\",\"hostNames\":[\"xtestgrpres8668.azurewebsites.net\"],\"webSpace\":\"xTestResource2485-WestUSwebspace\",\"selfLink\":\"https://waws-prod-bay-071.api.azurewebsites.windows.net:454/subscriptions/623d50f1-4fa8-4e46-a967-a9214aed43ab/webspaces/xTestResource2485-WestUSwebspace/sites/xTestGrpRes8668\",\"repositorySiteName\":\"xTestGrpRes8668\",\"owner\":null,\"usageState\":0,\"enabled\":true,\"adminEnabled\":true,\"enabledHostNames\":[\"xtestgrpres8668.azurewebsites.net\",\"xtestgrpres8668.scm.azurewebsites.net\"],\"siteProperties\":{\"metadata\":null,\"properties\":[],\"appSettings\":null},\"availabilityState\":0,\"sslCertificates\":null,\"csrs\":[],\"cers\":null,\"siteMode\":null,\"hostNameSslStates\":[{\"name\":\"xtestgrpres8668.azurewebsites.net\",\"sslState\":0,\"ipBasedSslResult\":null,\"virtualIP\":null,\"thumbprint\":null,\"toUpdate\":null,\"toUpdateIpBasedSsl\":null,\"ipBasedSslState\":0,\"hostType\":0},{\"name\":\"xtestgrpres8668.scm.azurewebsites.net\",\"sslState\":0,\"ipBasedSslResult\":null,\"virtualIP\":null,\"thumbprint\":null,\"toUpdate\":null,\"toUpdateIpBasedSsl\":null,\"ipBasedSslState\":0,\"hostType\":1}],\"computeMode\":null,\"serverFarm\":\"Default1\",\"serverFarmId\":null,\"reserved\":false,\"lastModifiedTimeUtc\":\"2016-12-07T03:50:13.3566667\",\"storageRecoveryDefaultState\":\"Running\",\"contentAvailabilityState\":0,\"runtimeAvailabilityState\":0,\"siteConfig\":null,\"deploymentId\":\"xTestGrpRes8668\",\"trafficManagerHostNames\":null,\"sku\":\"Free\",\"premiumAppDeployed\":null,\"scmSiteAlsoStopped\":false,\"targetSwapSlot\":null,\"hostingEnvironment\":null,\"hostingEnvironmentProfile\":null,\"microService\":\"WebSites\",\"gatewaySiteName\":null,\"clientAffinityEnabled\":true,\"clientCertEnabled\":false,\"hostNamesDisabled\":false,\"domainVerificationIdentifiers\":null,\"kind\":\"app\",\"outboundIpAddresses\":\"23.101.199.30,23.101.196.70,23.101.201.119,23.101.197.194\",\"containerSize\":0,\"dailyMemoryTimeQuota\":0,\"suspendedTill\":null,\"siteDisabledReason\":0,\"functionExecutionUnitsCache\":null,\"maxNumberOfWorkers\":null,\"homeStamp\":\"waws-prod-bay-071\",\"cloningInfo\":null,\"hostingEnvironmentId\":null,\"tags\":{},\"resourceGroup\":\"xTestResource2485\",\"defaultHostName\":\"xtestgrpres8668.azurewebsites.net\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2389',
  'content-type': 'application/json',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '1c59afa6-9998-42eb-b866-a7a111c73734',
  server: 'Microsoft-IIS/8.0',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1194',
  'x-ms-correlation-request-id': '8473a2c1-9733-4f69-ad5a-f56846358b6b',
  'x-ms-routing-request-id': 'WESTUS:20161207T035016Z:8473a2c1-9733-4f69-ad5a-f56846358b6b',
  date: 'Wed, 07 Dec 2016 03:50:16 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/623d50f1-4fa8-4e46-a967-a9214aed43ab/resourcegroups/xTestResource2485/providers/Microsoft.Web//sites/xTestGrpRes8668?api-version=2014-04-01', '*')
  .reply(200, "{\"id\":\"/subscriptions/623d50f1-4fa8-4e46-a967-a9214aed43ab/resourceGroups/xTestResource2485/providers/Microsoft.Web/sites/xTestGrpRes8668\",\"name\":\"xTestGrpRes8668\",\"type\":\"Microsoft.Web/sites\",\"kind\":\"app\",\"location\":\"westus\",\"tags\":{},\"properties\":{\"name\":\"xTestGrpRes8668\",\"state\":\"Running\",\"hostNames\":[\"xtestgrpres8668.azurewebsites.net\"],\"webSpace\":\"xTestResource2485-WestUSwebspace\",\"selfLink\":\"https://waws-prod-bay-071.api.azurewebsites.windows.net:454/subscriptions/623d50f1-4fa8-4e46-a967-a9214aed43ab/webspaces/xTestResource2485-WestUSwebspace/sites/xTestGrpRes8668\",\"repositorySiteName\":\"xTestGrpRes8668\",\"owner\":null,\"usageState\":0,\"enabled\":true,\"adminEnabled\":true,\"enabledHostNames\":[\"xtestgrpres8668.azurewebsites.net\",\"xtestgrpres8668.scm.azurewebsites.net\"],\"siteProperties\":{\"metadata\":null,\"properties\":[],\"appSettings\":null},\"availabilityState\":0,\"sslCertificates\":null,\"csrs\":[],\"cers\":null,\"siteMode\":null,\"hostNameSslStates\":[{\"name\":\"xtestgrpres8668.azurewebsites.net\",\"sslState\":0,\"ipBasedSslResult\":null,\"virtualIP\":null,\"thumbprint\":null,\"toUpdate\":null,\"toUpdateIpBasedSsl\":null,\"ipBasedSslState\":0,\"hostType\":0},{\"name\":\"xtestgrpres8668.scm.azurewebsites.net\",\"sslState\":0,\"ipBasedSslResult\":null,\"virtualIP\":null,\"thumbprint\":null,\"toUpdate\":null,\"toUpdateIpBasedSsl\":null,\"ipBasedSslState\":0,\"hostType\":1}],\"computeMode\":null,\"serverFarm\":\"Default1\",\"serverFarmId\":null,\"reserved\":false,\"lastModifiedTimeUtc\":\"2016-12-07T03:50:13.3566667\",\"storageRecoveryDefaultState\":\"Running\",\"contentAvailabilityState\":0,\"runtimeAvailabilityState\":0,\"siteConfig\":null,\"deploymentId\":\"xTestGrpRes8668\",\"trafficManagerHostNames\":null,\"sku\":\"Free\",\"premiumAppDeployed\":null,\"scmSiteAlsoStopped\":false,\"targetSwapSlot\":null,\"hostingEnvironment\":null,\"hostingEnvironmentProfile\":null,\"microService\":\"WebSites\",\"gatewaySiteName\":null,\"clientAffinityEnabled\":true,\"clientCertEnabled\":false,\"hostNamesDisabled\":false,\"domainVerificationIdentifiers\":null,\"kind\":\"app\",\"outboundIpAddresses\":\"23.101.199.30,23.101.196.70,23.101.201.119,23.101.197.194\",\"containerSize\":0,\"dailyMemoryTimeQuota\":0,\"suspendedTill\":null,\"siteDisabledReason\":0,\"functionExecutionUnitsCache\":null,\"maxNumberOfWorkers\":null,\"homeStamp\":\"waws-prod-bay-071\",\"cloningInfo\":null,\"hostingEnvironmentId\":null,\"tags\":{},\"resourceGroup\":\"xTestResource2485\",\"defaultHostName\":\"xtestgrpres8668.azurewebsites.net\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2389',
  'content-type': 'application/json',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '1c59afa6-9998-42eb-b866-a7a111c73734',
  server: 'Microsoft-IIS/8.0',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1194',
  'x-ms-correlation-request-id': '8473a2c1-9733-4f69-ad5a-f56846358b6b',
  'x-ms-routing-request-id': 'WESTUS:20161207T035016Z:8473a2c1-9733-4f69-ad5a-f56846358b6b',
  date: 'Wed, 07 Dec 2016 03:50:16 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/623d50f1-4fa8-4e46-a967-a9214aed43ab/resourcegroups/xTestResource2485/providers/Microsoft.Web//sites/xTestGrpRes8668?api-version=2014-04-01')
  .reply(200, "{\"id\":\"/subscriptions/623d50f1-4fa8-4e46-a967-a9214aed43ab/resourceGroups/xTestResource2485/providers/Microsoft.Web/sites/xTestGrpRes8668\",\"name\":\"xTestGrpRes8668\",\"type\":\"Microsoft.Web/sites\",\"kind\":\"app\",\"location\":\"West US\",\"tags\":{},\"properties\":{\"name\":\"xTestGrpRes8668\",\"state\":\"Running\",\"hostNames\":[\"xtestgrpres8668.azurewebsites.net\"],\"webSpace\":\"xTestResource2485-WestUSwebspace\",\"selfLink\":\"https://waws-prod-bay-071.api.azurewebsites.windows.net:454/subscriptions/623d50f1-4fa8-4e46-a967-a9214aed43ab/webspaces/xTestResource2485-WestUSwebspace/sites/xTestGrpRes8668\",\"repositorySiteName\":\"xTestGrpRes8668\",\"owner\":null,\"usageState\":0,\"enabled\":true,\"adminEnabled\":true,\"enabledHostNames\":[\"xtestgrpres8668.azurewebsites.net\",\"xtestgrpres8668.scm.azurewebsites.net\"],\"siteProperties\":{\"metadata\":null,\"properties\":[],\"appSettings\":null},\"availabilityState\":0,\"sslCertificates\":null,\"csrs\":[],\"cers\":null,\"siteMode\":null,\"hostNameSslStates\":[{\"name\":\"xtestgrpres8668.azurewebsites.net\",\"sslState\":0,\"ipBasedSslResult\":null,\"virtualIP\":null,\"thumbprint\":null,\"toUpdate\":null,\"toUpdateIpBasedSsl\":null,\"ipBasedSslState\":0,\"hostType\":0},{\"name\":\"xtestgrpres8668.scm.azurewebsites.net\",\"sslState\":0,\"ipBasedSslResult\":null,\"virtualIP\":null,\"thumbprint\":null,\"toUpdate\":null,\"toUpdateIpBasedSsl\":null,\"ipBasedSslState\":0,\"hostType\":1}],\"computeMode\":null,\"serverFarm\":\"Default1\",\"serverFarmId\":null,\"reserved\":false,\"lastModifiedTimeUtc\":\"2016-12-07T03:50:13.4833333\",\"storageRecoveryDefaultState\":\"Running\",\"contentAvailabilityState\":0,\"runtimeAvailabilityState\":0,\"siteConfig\":null,\"deploymentId\":\"xTestGrpRes8668\",\"trafficManagerHostNames\":null,\"sku\":\"Free\",\"premiumAppDeployed\":null,\"scmSiteAlsoStopped\":false,\"targetSwapSlot\":null,\"hostingEnvironment\":null,\"hostingEnvironmentProfile\":null,\"microService\":\"WebSites\",\"gatewaySiteName\":null,\"clientAffinityEnabled\":true,\"clientCertEnabled\":false,\"hostNamesDisabled\":false,\"domainVerificationIdentifiers\":null,\"kind\":\"app\",\"outboundIpAddresses\":\"23.101.199.30,23.101.196.70,23.101.201.119,23.101.197.194\",\"containerSize\":0,\"dailyMemoryTimeQuota\":0,\"suspendedTill\":null,\"siteDisabledReason\":0,\"functionExecutionUnitsCache\":null,\"maxNumberOfWorkers\":null,\"homeStamp\":\"waws-prod-bay-071\",\"cloningInfo\":null,\"hostingEnvironmentId\":null,\"tags\":{},\"resourceGroup\":\"xTestResource2485\",\"defaultHostName\":\"xtestgrpres8668.azurewebsites.net\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2390',
  'content-type': 'application/json',
  expires: '-1',
  etag: '"1D2503D03D748B5"',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'a4c3567e-d8ea-452d-9d3d-8a55b9d04208',
  server: 'Microsoft-IIS/8.0',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14942',
  'x-ms-correlation-request-id': '8c6e7494-4311-46f5-96c5-903c7b98fb35',
  'x-ms-routing-request-id': 'WESTUS:20161207T035017Z:8c6e7494-4311-46f5-96c5-903c7b98fb35',
  date: 'Wed, 07 Dec 2016 03:50:17 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/623d50f1-4fa8-4e46-a967-a9214aed43ab/resourcegroups/xTestResource2485/providers/Microsoft.Web//sites/xTestGrpRes8668?api-version=2014-04-01')
  .reply(200, "{\"id\":\"/subscriptions/623d50f1-4fa8-4e46-a967-a9214aed43ab/resourceGroups/xTestResource2485/providers/Microsoft.Web/sites/xTestGrpRes8668\",\"name\":\"xTestGrpRes8668\",\"type\":\"Microsoft.Web/sites\",\"kind\":\"app\",\"location\":\"West US\",\"tags\":{},\"properties\":{\"name\":\"xTestGrpRes8668\",\"state\":\"Running\",\"hostNames\":[\"xtestgrpres8668.azurewebsites.net\"],\"webSpace\":\"xTestResource2485-WestUSwebspace\",\"selfLink\":\"https://waws-prod-bay-071.api.azurewebsites.windows.net:454/subscriptions/623d50f1-4fa8-4e46-a967-a9214aed43ab/webspaces/xTestResource2485-WestUSwebspace/sites/xTestGrpRes8668\",\"repositorySiteName\":\"xTestGrpRes8668\",\"owner\":null,\"usageState\":0,\"enabled\":true,\"adminEnabled\":true,\"enabledHostNames\":[\"xtestgrpres8668.azurewebsites.net\",\"xtestgrpres8668.scm.azurewebsites.net\"],\"siteProperties\":{\"metadata\":null,\"properties\":[],\"appSettings\":null},\"availabilityState\":0,\"sslCertificates\":null,\"csrs\":[],\"cers\":null,\"siteMode\":null,\"hostNameSslStates\":[{\"name\":\"xtestgrpres8668.azurewebsites.net\",\"sslState\":0,\"ipBasedSslResult\":null,\"virtualIP\":null,\"thumbprint\":null,\"toUpdate\":null,\"toUpdateIpBasedSsl\":null,\"ipBasedSslState\":0,\"hostType\":0},{\"name\":\"xtestgrpres8668.scm.azurewebsites.net\",\"sslState\":0,\"ipBasedSslResult\":null,\"virtualIP\":null,\"thumbprint\":null,\"toUpdate\":null,\"toUpdateIpBasedSsl\":null,\"ipBasedSslState\":0,\"hostType\":1}],\"computeMode\":null,\"serverFarm\":\"Default1\",\"serverFarmId\":null,\"reserved\":false,\"lastModifiedTimeUtc\":\"2016-12-07T03:50:13.4833333\",\"storageRecoveryDefaultState\":\"Running\",\"contentAvailabilityState\":0,\"runtimeAvailabilityState\":0,\"siteConfig\":null,\"deploymentId\":\"xTestGrpRes8668\",\"trafficManagerHostNames\":null,\"sku\":\"Free\",\"premiumAppDeployed\":null,\"scmSiteAlsoStopped\":false,\"targetSwapSlot\":null,\"hostingEnvironment\":null,\"hostingEnvironmentProfile\":null,\"microService\":\"WebSites\",\"gatewaySiteName\":null,\"clientAffinityEnabled\":true,\"clientCertEnabled\":false,\"hostNamesDisabled\":false,\"domainVerificationIdentifiers\":null,\"kind\":\"app\",\"outboundIpAddresses\":\"23.101.199.30,23.101.196.70,23.101.201.119,23.101.197.194\",\"containerSize\":0,\"dailyMemoryTimeQuota\":0,\"suspendedTill\":null,\"siteDisabledReason\":0,\"functionExecutionUnitsCache\":null,\"maxNumberOfWorkers\":null,\"homeStamp\":\"waws-prod-bay-071\",\"cloningInfo\":null,\"hostingEnvironmentId\":null,\"tags\":{},\"resourceGroup\":\"xTestResource2485\",\"defaultHostName\":\"xtestgrpres8668.azurewebsites.net\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2390',
  'content-type': 'application/json',
  expires: '-1',
  etag: '"1D2503D03D748B5"',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'a4c3567e-d8ea-452d-9d3d-8a55b9d04208',
  server: 'Microsoft-IIS/8.0',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14942',
  'x-ms-correlation-request-id': '8c6e7494-4311-46f5-96c5-903c7b98fb35',
  'x-ms-routing-request-id': 'WESTUS:20161207T035017Z:8c6e7494-4311-46f5-96c5-903c7b98fb35',
  date: 'Wed, 07 Dec 2016 03:50:17 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/623d50f1-4fa8-4e46-a967-a9214aed43ab/resourcegroups/xTestResource2485/providers/Microsoft.Web//sites/xTestGrpRes8668/providers/Microsoft.Authorization/permissions?api-version=2015-07-01')
  .reply(200, "{\"value\":[{\"actions\":[\"*\"],\"notActions\":[]}],\"nextLink\":null}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '61',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '6f821de0-1bfc-410e-81b8-08ccbbf14f33',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'set-cookie': [ 'x-ms-gateway-slice=productionb; path=/' ],
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14954',
  'x-ms-correlation-request-id': '64840f91-7a53-416d-97be-9ce667c120cd',
  'x-ms-routing-request-id': 'WESTUS:20161207T035018Z:64840f91-7a53-416d-97be-9ce667c120cd',
  date: 'Wed, 07 Dec 2016 03:50:17 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/623d50f1-4fa8-4e46-a967-a9214aed43ab/resourcegroups/xTestResource2485/providers/Microsoft.Web//sites/xTestGrpRes8668/providers/Microsoft.Authorization/permissions?api-version=2015-07-01')
  .reply(200, "{\"value\":[{\"actions\":[\"*\"],\"notActions\":[]}],\"nextLink\":null}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '61',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '6f821de0-1bfc-410e-81b8-08ccbbf14f33',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'set-cookie': [ 'x-ms-gateway-slice=productionb; path=/' ],
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14954',
  'x-ms-correlation-request-id': '64840f91-7a53-416d-97be-9ce667c120cd',
  'x-ms-routing-request-id': 'WESTUS:20161207T035018Z:64840f91-7a53-416d-97be-9ce667c120cd',
  date: 'Wed, 07 Dec 2016 03:50:17 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('/subscriptions/623d50f1-4fa8-4e46-a967-a9214aed43ab/resourcegroups/xTestResource2485?api-version=2016-09-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/623d50f1-4fa8-4e46-a967-a9214aed43ab/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YVEVTVFJFU09VUkNFMjQ4NS1XRVNUVVMiLCJqb2JMb2NhdGlvbiI6Indlc3R1cyJ9?api-version=2016-09-01',
  'retry-after': '15',
  'x-ms-ratelimit-remaining-subscription-writes': '1196',
  'x-ms-request-id': 'c314f751-1c5a-4e8e-8624-58547a57c440',
  'x-ms-correlation-request-id': 'c314f751-1c5a-4e8e-8624-58547a57c440',
  'x-ms-routing-request-id': 'WESTUS:20161207T035018Z:c314f751-1c5a-4e8e-8624-58547a57c440',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 07 Dec 2016 03:50:17 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/623d50f1-4fa8-4e46-a967-a9214aed43ab/resourcegroups/xTestResource2485?api-version=2016-09-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/623d50f1-4fa8-4e46-a967-a9214aed43ab/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YVEVTVFJFU09VUkNFMjQ4NS1XRVNUVVMiLCJqb2JMb2NhdGlvbiI6Indlc3R1cyJ9?api-version=2016-09-01',
  'retry-after': '15',
  'x-ms-ratelimit-remaining-subscription-writes': '1196',
  'x-ms-request-id': 'c314f751-1c5a-4e8e-8624-58547a57c440',
  'x-ms-correlation-request-id': 'c314f751-1c5a-4e8e-8624-58547a57c440',
  'x-ms-routing-request-id': 'WESTUS:20161207T035018Z:c314f751-1c5a-4e8e-8624-58547a57c440',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 07 Dec 2016 03:50:17 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/623d50f1-4fa8-4e46-a967-a9214aed43ab/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YVEVTVFJFU09VUkNFMjQ4NS1XRVNUVVMiLCJqb2JMb2NhdGlvbiI6Indlc3R1cyJ9?api-version=2016-09-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/623d50f1-4fa8-4e46-a967-a9214aed43ab/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YVEVTVFJFU09VUkNFMjQ4NS1XRVNUVVMiLCJqb2JMb2NhdGlvbiI6Indlc3R1cyJ9?api-version=2016-09-01',
  'retry-after': '15',
  'x-ms-ratelimit-remaining-subscription-reads': '14952',
  'x-ms-request-id': '6ccf9774-f429-4a5d-9563-9656356c0a97',
  'x-ms-correlation-request-id': '6ccf9774-f429-4a5d-9563-9656356c0a97',
  'x-ms-routing-request-id': 'WESTUS:20161207T035048Z:6ccf9774-f429-4a5d-9563-9656356c0a97',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 07 Dec 2016 03:50:47 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/623d50f1-4fa8-4e46-a967-a9214aed43ab/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YVEVTVFJFU09VUkNFMjQ4NS1XRVNUVVMiLCJqb2JMb2NhdGlvbiI6Indlc3R1cyJ9?api-version=2016-09-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/623d50f1-4fa8-4e46-a967-a9214aed43ab/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YVEVTVFJFU09VUkNFMjQ4NS1XRVNUVVMiLCJqb2JMb2NhdGlvbiI6Indlc3R1cyJ9?api-version=2016-09-01',
  'retry-after': '15',
  'x-ms-ratelimit-remaining-subscription-reads': '14952',
  'x-ms-request-id': '6ccf9774-f429-4a5d-9563-9656356c0a97',
  'x-ms-correlation-request-id': '6ccf9774-f429-4a5d-9563-9656356c0a97',
  'x-ms-routing-request-id': 'WESTUS:20161207T035048Z:6ccf9774-f429-4a5d-9563-9656356c0a97',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 07 Dec 2016 03:50:47 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/623d50f1-4fa8-4e46-a967-a9214aed43ab/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YVEVTVFJFU09VUkNFMjQ4NS1XRVNUVVMiLCJqb2JMb2NhdGlvbiI6Indlc3R1cyJ9?api-version=2016-09-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/623d50f1-4fa8-4e46-a967-a9214aed43ab/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YVEVTVFJFU09VUkNFMjQ4NS1XRVNUVVMiLCJqb2JMb2NhdGlvbiI6Indlc3R1cyJ9?api-version=2016-09-01',
  'retry-after': '15',
  'x-ms-ratelimit-remaining-subscription-reads': '14953',
  'x-ms-request-id': '99943a19-6526-4de8-a11f-eb4594d63829',
  'x-ms-correlation-request-id': '99943a19-6526-4de8-a11f-eb4594d63829',
  'x-ms-routing-request-id': 'WESTUS:20161207T035118Z:99943a19-6526-4de8-a11f-eb4594d63829',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 07 Dec 2016 03:51:18 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/623d50f1-4fa8-4e46-a967-a9214aed43ab/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YVEVTVFJFU09VUkNFMjQ4NS1XRVNUVVMiLCJqb2JMb2NhdGlvbiI6Indlc3R1cyJ9?api-version=2016-09-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/623d50f1-4fa8-4e46-a967-a9214aed43ab/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YVEVTVFJFU09VUkNFMjQ4NS1XRVNUVVMiLCJqb2JMb2NhdGlvbiI6Indlc3R1cyJ9?api-version=2016-09-01',
  'retry-after': '15',
  'x-ms-ratelimit-remaining-subscription-reads': '14953',
  'x-ms-request-id': '99943a19-6526-4de8-a11f-eb4594d63829',
  'x-ms-correlation-request-id': '99943a19-6526-4de8-a11f-eb4594d63829',
  'x-ms-routing-request-id': 'WESTUS:20161207T035118Z:99943a19-6526-4de8-a11f-eb4594d63829',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 07 Dec 2016 03:51:18 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/623d50f1-4fa8-4e46-a967-a9214aed43ab/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YVEVTVFJFU09VUkNFMjQ4NS1XRVNUVVMiLCJqb2JMb2NhdGlvbiI6Indlc3R1cyJ9?api-version=2016-09-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/623d50f1-4fa8-4e46-a967-a9214aed43ab/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YVEVTVFJFU09VUkNFMjQ4NS1XRVNUVVMiLCJqb2JMb2NhdGlvbiI6Indlc3R1cyJ9?api-version=2016-09-01',
  'retry-after': '15',
  'x-ms-ratelimit-remaining-subscription-reads': '14951',
  'x-ms-request-id': '7d92f792-b560-4000-9c4d-46d7ed00db00',
  'x-ms-correlation-request-id': '7d92f792-b560-4000-9c4d-46d7ed00db00',
  'x-ms-routing-request-id': 'WESTUS:20161207T035149Z:7d92f792-b560-4000-9c4d-46d7ed00db00',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 07 Dec 2016 03:51:48 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/623d50f1-4fa8-4e46-a967-a9214aed43ab/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YVEVTVFJFU09VUkNFMjQ4NS1XRVNUVVMiLCJqb2JMb2NhdGlvbiI6Indlc3R1cyJ9?api-version=2016-09-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/623d50f1-4fa8-4e46-a967-a9214aed43ab/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YVEVTVFJFU09VUkNFMjQ4NS1XRVNUVVMiLCJqb2JMb2NhdGlvbiI6Indlc3R1cyJ9?api-version=2016-09-01',
  'retry-after': '15',
  'x-ms-ratelimit-remaining-subscription-reads': '14951',
  'x-ms-request-id': '7d92f792-b560-4000-9c4d-46d7ed00db00',
  'x-ms-correlation-request-id': '7d92f792-b560-4000-9c4d-46d7ed00db00',
  'x-ms-routing-request-id': 'WESTUS:20161207T035149Z:7d92f792-b560-4000-9c4d-46d7ed00db00',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 07 Dec 2016 03:51:48 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/623d50f1-4fa8-4e46-a967-a9214aed43ab/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YVEVTVFJFU09VUkNFMjQ4NS1XRVNUVVMiLCJqb2JMb2NhdGlvbiI6Indlc3R1cyJ9?api-version=2016-09-01')
  .reply(200, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-reads': '14968',
  'x-ms-request-id': '265c53d6-dbd0-442f-982e-15db65f91d47',
  'x-ms-correlation-request-id': '265c53d6-dbd0-442f-982e-15db65f91d47',
  'x-ms-routing-request-id': 'WESTUS:20161207T035219Z:265c53d6-dbd0-442f-982e-15db65f91d47',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 07 Dec 2016 03:52:19 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/623d50f1-4fa8-4e46-a967-a9214aed43ab/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YVEVTVFJFU09VUkNFMjQ4NS1XRVNUVVMiLCJqb2JMb2NhdGlvbiI6Indlc3R1cyJ9?api-version=2016-09-01')
  .reply(200, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-reads': '14968',
  'x-ms-request-id': '265c53d6-dbd0-442f-982e-15db65f91d47',
  'x-ms-correlation-request-id': '265c53d6-dbd0-442f-982e-15db65f91d47',
  'x-ms-routing-request-id': 'WESTUS:20161207T035219Z:265c53d6-dbd0-442f-982e-15db65f91d47',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 07 Dec 2016 03:52:19 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; }]];
 exports.randomTestIdsGenerated = function() { return ['xTestResource2485','xTestGrpRes8668'];};