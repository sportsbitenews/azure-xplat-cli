// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948',
    managementCertificate: {
      key: 'mockedKey',
      cert: 'mockedCert'
    },
    name: 'CollaberaInteropTest',
    registeredProviders: [],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'West US';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.core.windows.net:443')
  .get('/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/services/WATM/profiles')
  .reply(200, "<Profiles xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Profile><DomainName>CliTestdom.trafficmanager.net</DomainName><Name>CliTesttmp</Name><Status>Enabled</Status><StatusDetails><EnabledVersion>1</EnabledVersion></StatusDetails><Definitions><Definition><Status>Enabled</Status><Version>1</Version></Definition></Definitions></Profile><Profile><DomainName>CliTestdom7950.trafficmanager.net</DomainName><Name>CliTesttmp3906</Name><Status>Enabled</Status><StatusDetails><EnabledVersion>1</EnabledVersion></StatusDetails><Definitions><Definition><Status>Enabled</Status><Version>1</Version></Definition></Definitions></Profile><Profile><DomainName>foobar.cloudapp.net.trafficmanager.net</DomainName><Name>cliTestTmP3j</Name><Status>Enabled</Status><StatusDetails><EnabledVersion>1</EnabledVersion></StatusDetails><Definitions><Definition><Status>Enabled</Status><Version>1</Version></Definition></Definitions></Profile><Profile><DomainName>CliTestdom4701.trafficmanager.net</DomainName><Name>CliTesttmp6252</Name><Status>Enabled</Status><StatusDetails><EnabledVersion>1</EnabledVersion></StatusDetails><Definitions><Definition><Status>Enabled</Status><Version>1</Version></Definition></Definitions></Profile><Profile><DomainName>newdnstest.trafficmanager.net</DomainName><Name>newdnstest</Name><Status>Enabled</Status><StatusDetails><EnabledVersion>1</EnabledVersion></StatusDetails><Definitions><Definition><Status>Enabled</Status><Version>1</Version></Definition></Definitions></Profile><Profile><DomainName>regsdfh.trafficmanager.net</DomainName><Name>regsdfh</Name><Status>Enabled</Status><StatusDetails><EnabledVersion>1</EnabledVersion></StatusDetails><Definitions><Definition><Status>Enabled</Status><Version>1</Version></Definition></Definitions></Profile><Profile><DomainName>testdom.trafficmanager.net</DomainName><Name>Testtm</Name><Status>Enabled</Status><StatusDetails><EnabledVersion>1</EnabledVersion></StatusDetails><Definitions><Definition><Status>Enabled</Status><Version>1</Version></Definition></Definitions></Profile><Profile><DomainName>testdom1.trafficmanager.net</DomainName><Name>Testtm1</Name><Status>Enabled</Status><StatusDetails><EnabledVersion>1</EnabledVersion></StatusDetails><Definitions><Definition><Status>Enabled</Status><Version>1</Version></Definition></Definitions></Profile><Profile><DomainName>testdom2.trafficmanager.net</DomainName><Name>Testtm2</Name><Status>Enabled</Status><StatusDetails><EnabledVersion>1</EnabledVersion></StatusDetails><Definitions><Definition><Status>Enabled</Status><Version>1</Version></Definition></Definitions></Profile><Profile><DomainName>testdom3.trafficmanager.net</DomainName><Name>Testtm3</Name><Status>Enabled</Status><StatusDetails><EnabledVersion>1</EnabledVersion></StatusDetails><Definitions><Definition><Status>Enabled</Status><Version>1</Version></Definition></Definitions></Profile><Profile><DomainName>testdom4.trafficmanager.net</DomainName><Name>Testtm4</Name><Status>Enabled</Status><StatusDetails><EnabledVersion>1</EnabledVersion></StatusDetails><Definitions><Definition><Status>Enabled</Status><Version>1</Version></Definition></Definitions></Profile><Profile><DomainName>testdom5.trafficmanager.net</DomainName><Name>Testtm5</Name><Status>Enabled</Status><StatusDetails><EnabledVersion>1</EnabledVersion></StatusDetails><Definitions><Definition><Status>Enabled</Status><Version>1</Version></Definition></Definitions></Profile><Profile><DomainName>testdom6.trafficmanager.net</DomainName><Name>Testtm6</Name><Status>Enabled</Status><StatusDetails><EnabledVersion>1</EnabledVersion></StatusDetails><Definitions><Definition><Status>Enabled</Status><Version>1</Version></Definition></Definitions></Profile><Profile><DomainName>foobar1.trafficmanager.net</DomainName><Name>TestTmP26</Name><Status>Enabled</Status><StatusDetails><EnabledVersion>1</EnabledVersion></StatusDetails><Definitions><Definition><Status>Enabled</Status><Version>1</Version></Definition></Definitions></Profile><Profile><DomainName>foobar2.trafficmanager.net</DomainName><Name>TestTmp3j</Name><Status>Enabled</Status><StatusDetails><EnabledVersion>1</EnabledVersion></StatusDetails><Definitions><Definition><Status>Enabled</Status><Version>1</Version></Definition></Definitions></Profile><Profile><DomainName>WinazureTM.trafficmanager.net</DomainName><Name>WinazureTM</Name><Status>Disabled</Status><Definitions><Definition><Status>Disabled</Status><Version>1</Version></Definition></Definitions></Profile></Profiles>", { 'cache-control': 'no-cache',
  'content-length': '4532',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.243 (rd_rdfe_stable.150618-1025) Microsoft-HTTPAPI/2.0 Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'usnorth2',
  'x-content-type-options': 'nosniff',
  'x-ms-request-id': '2ae70e0f4606b42cb1dd26c5f2852377',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  date: 'Wed, 08 Jul 2015 13:24:51 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/services/WATM/profiles')
  .reply(200, "<Profiles xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Profile><DomainName>CliTestdom.trafficmanager.net</DomainName><Name>CliTesttmp</Name><Status>Enabled</Status><StatusDetails><EnabledVersion>1</EnabledVersion></StatusDetails><Definitions><Definition><Status>Enabled</Status><Version>1</Version></Definition></Definitions></Profile><Profile><DomainName>CliTestdom7950.trafficmanager.net</DomainName><Name>CliTesttmp3906</Name><Status>Enabled</Status><StatusDetails><EnabledVersion>1</EnabledVersion></StatusDetails><Definitions><Definition><Status>Enabled</Status><Version>1</Version></Definition></Definitions></Profile><Profile><DomainName>foobar.cloudapp.net.trafficmanager.net</DomainName><Name>cliTestTmP3j</Name><Status>Enabled</Status><StatusDetails><EnabledVersion>1</EnabledVersion></StatusDetails><Definitions><Definition><Status>Enabled</Status><Version>1</Version></Definition></Definitions></Profile><Profile><DomainName>CliTestdom4701.trafficmanager.net</DomainName><Name>CliTesttmp6252</Name><Status>Enabled</Status><StatusDetails><EnabledVersion>1</EnabledVersion></StatusDetails><Definitions><Definition><Status>Enabled</Status><Version>1</Version></Definition></Definitions></Profile><Profile><DomainName>newdnstest.trafficmanager.net</DomainName><Name>newdnstest</Name><Status>Enabled</Status><StatusDetails><EnabledVersion>1</EnabledVersion></StatusDetails><Definitions><Definition><Status>Enabled</Status><Version>1</Version></Definition></Definitions></Profile><Profile><DomainName>regsdfh.trafficmanager.net</DomainName><Name>regsdfh</Name><Status>Enabled</Status><StatusDetails><EnabledVersion>1</EnabledVersion></StatusDetails><Definitions><Definition><Status>Enabled</Status><Version>1</Version></Definition></Definitions></Profile><Profile><DomainName>testdom.trafficmanager.net</DomainName><Name>Testtm</Name><Status>Enabled</Status><StatusDetails><EnabledVersion>1</EnabledVersion></StatusDetails><Definitions><Definition><Status>Enabled</Status><Version>1</Version></Definition></Definitions></Profile><Profile><DomainName>testdom1.trafficmanager.net</DomainName><Name>Testtm1</Name><Status>Enabled</Status><StatusDetails><EnabledVersion>1</EnabledVersion></StatusDetails><Definitions><Definition><Status>Enabled</Status><Version>1</Version></Definition></Definitions></Profile><Profile><DomainName>testdom2.trafficmanager.net</DomainName><Name>Testtm2</Name><Status>Enabled</Status><StatusDetails><EnabledVersion>1</EnabledVersion></StatusDetails><Definitions><Definition><Status>Enabled</Status><Version>1</Version></Definition></Definitions></Profile><Profile><DomainName>testdom3.trafficmanager.net</DomainName><Name>Testtm3</Name><Status>Enabled</Status><StatusDetails><EnabledVersion>1</EnabledVersion></StatusDetails><Definitions><Definition><Status>Enabled</Status><Version>1</Version></Definition></Definitions></Profile><Profile><DomainName>testdom4.trafficmanager.net</DomainName><Name>Testtm4</Name><Status>Enabled</Status><StatusDetails><EnabledVersion>1</EnabledVersion></StatusDetails><Definitions><Definition><Status>Enabled</Status><Version>1</Version></Definition></Definitions></Profile><Profile><DomainName>testdom5.trafficmanager.net</DomainName><Name>Testtm5</Name><Status>Enabled</Status><StatusDetails><EnabledVersion>1</EnabledVersion></StatusDetails><Definitions><Definition><Status>Enabled</Status><Version>1</Version></Definition></Definitions></Profile><Profile><DomainName>testdom6.trafficmanager.net</DomainName><Name>Testtm6</Name><Status>Enabled</Status><StatusDetails><EnabledVersion>1</EnabledVersion></StatusDetails><Definitions><Definition><Status>Enabled</Status><Version>1</Version></Definition></Definitions></Profile><Profile><DomainName>foobar1.trafficmanager.net</DomainName><Name>TestTmP26</Name><Status>Enabled</Status><StatusDetails><EnabledVersion>1</EnabledVersion></StatusDetails><Definitions><Definition><Status>Enabled</Status><Version>1</Version></Definition></Definitions></Profile><Profile><DomainName>foobar2.trafficmanager.net</DomainName><Name>TestTmp3j</Name><Status>Enabled</Status><StatusDetails><EnabledVersion>1</EnabledVersion></StatusDetails><Definitions><Definition><Status>Enabled</Status><Version>1</Version></Definition></Definitions></Profile><Profile><DomainName>WinazureTM.trafficmanager.net</DomainName><Name>WinazureTM</Name><Status>Disabled</Status><Definitions><Definition><Status>Disabled</Status><Version>1</Version></Definition></Definitions></Profile></Profiles>", { 'cache-control': 'no-cache',
  'content-length': '4532',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.243 (rd_rdfe_stable.150618-1025) Microsoft-HTTPAPI/2.0 Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'usnorth2',
  'x-content-type-options': 'nosniff',
  'x-ms-request-id': '2ae70e0f4606b42cb1dd26c5f2852377',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  date: 'Wed, 08 Jul 2015 13:24:51 GMT',
  connection: 'close' });
 return result; }]];