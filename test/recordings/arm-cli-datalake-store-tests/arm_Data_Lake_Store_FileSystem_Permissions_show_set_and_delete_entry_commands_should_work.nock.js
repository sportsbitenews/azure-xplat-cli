// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '53d9063d-87ae-4ea8-be90-3686c3b8669f',
    name: 'Visual Studio Ultimate with MSDN',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '6e606ece-3a5a-4674-a654-d6b02bc5a51b',
    state: 'Enabled',
    registeredProviders: [],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_ARM_TEST_LOCATION'] = 'East US 2';
  process.env['AZURE_ARM_TEST_RESOURCE_GROUP'] = 'xplattestadlarg05';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://xplattestadls3248.azuredatalakestore.net:443')
  .get('/webhdfs/v1/%2F?op=GETACLSTATUS&api-version=2015-10-01-preview')
  .reply(200, "{\"AclStatus\":{\"entries\":[\"user::rwx\",\"group::rwx\",\"other::---\",\"mask::rwx\",\"default:user::rwx\",\"default:group::rwx\",\"default:other::---\",\"default:mask::rwx\"],\"owner\":\"2e6c02d2-a364-4530-9137-d17403996cbf\",\"group\":\"2e6c02d2-a364-4530-9137-d17403996cbf\",\"stickyBit\":false}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '47204058-27cd-48ae-84a8-405a652b7ee4',
  'set-cookie': [ 'UserPrincipalSession=ea371456-5e97-4b6d-acd0-7d041ba99cb3; path=/; secure; HttpOnly' ],
  'server-perf': '[47204058-27cd-48ae-84a8-405a652b7ee4][ AuthTime::1439.19476945725::PostAuthTime::603.478103923976 ][S-HdfsGetAclStatus :: 00:00:016 ms]%0a[GETACLSTATUS :: 00:00:018 ms]%0a',
  'x-ms-webhdfs-version': '16.05.18.00',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Thu, 16 Jun 2016 21:49:47 GMT',
  connection: 'close',
  'content-length': '271' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadls3248.azuredatalakestore.net:443')
  .get('/webhdfs/v1/%2F?op=GETACLSTATUS&api-version=2015-10-01-preview')
  .reply(200, "{\"AclStatus\":{\"entries\":[\"user::rwx\",\"group::rwx\",\"other::---\",\"mask::rwx\",\"default:user::rwx\",\"default:group::rwx\",\"default:other::---\",\"default:mask::rwx\"],\"owner\":\"2e6c02d2-a364-4530-9137-d17403996cbf\",\"group\":\"2e6c02d2-a364-4530-9137-d17403996cbf\",\"stickyBit\":false}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '47204058-27cd-48ae-84a8-405a652b7ee4',
  'set-cookie': [ 'UserPrincipalSession=ea371456-5e97-4b6d-acd0-7d041ba99cb3; path=/; secure; HttpOnly' ],
  'server-perf': '[47204058-27cd-48ae-84a8-405a652b7ee4][ AuthTime::1439.19476945725::PostAuthTime::603.478103923976 ][S-HdfsGetAclStatus :: 00:00:016 ms]%0a[GETACLSTATUS :: 00:00:018 ms]%0a',
  'x-ms-webhdfs-version': '16.05.18.00',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Thu, 16 Jun 2016 21:49:47 GMT',
  connection: 'close',
  'content-length': '271' });
 return result; },
function (nock) { 
var result = 
nock('http://xplattestadls3248.azuredatalakestore.net:443')
  .put('/webhdfs/v1/%2F?aclspec=user%3A027c28d5-c91d-49f0-98c5-d10134b169b3%3Arwx&op=MODIFYACLENTRIES&api-version=2015-10-01-preview')
  .reply(200, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  'x-ms-request-id': 'a0a79bf9-d32d-4510-bb2d-73409fb54714',
  contentlength: '0',
  'server-perf': '[a0a79bf9-d32d-4510-bb2d-73409fb54714][ AuthTime::0::PostAuthTime::0 ][S-HdfsModifyAclEntries :: 00:00:094 ms]%0a[MODIFYACLENTRIES :: 00:00:095 ms]%0a',
  'x-ms-webhdfs-version': '16.05.18.00',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Thu, 16 Jun 2016 21:49:47 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadls3248.azuredatalakestore.net:443')
  .put('/webhdfs/v1/%2F?aclspec=user%3A027c28d5-c91d-49f0-98c5-d10134b169b3%3Arwx&op=MODIFYACLENTRIES&api-version=2015-10-01-preview')
  .reply(200, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  'x-ms-request-id': 'a0a79bf9-d32d-4510-bb2d-73409fb54714',
  contentlength: '0',
  'server-perf': '[a0a79bf9-d32d-4510-bb2d-73409fb54714][ AuthTime::0::PostAuthTime::0 ][S-HdfsModifyAclEntries :: 00:00:094 ms]%0a[MODIFYACLENTRIES :: 00:00:095 ms]%0a',
  'x-ms-webhdfs-version': '16.05.18.00',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Thu, 16 Jun 2016 21:49:47 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('http://xplattestadls3248.azuredatalakestore.net:443')
  .get('/webhdfs/v1/%2F?op=GETACLSTATUS&api-version=2015-10-01-preview')
  .reply(200, "{\"AclStatus\":{\"entries\":[\"user::rwx\",\"group::rwx\",\"other::---\",\"mask::rwx\",\"default:user::rwx\",\"default:group::rwx\",\"default:other::---\",\"default:mask::rwx\",\"user:027c28d5-c91d-49f0-98c5-d10134b169b3:rwx\"],\"owner\":\"2e6c02d2-a364-4530-9137-d17403996cbf\",\"group\":\"2e6c02d2-a364-4530-9137-d17403996cbf\",\"stickyBit\":false}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '1cfe347e-263c-48cc-b767-d32c8768aec2',
  'set-cookie': [ 'UserPrincipalSession=b0c58208-6081-43bd-ba13-e87f6cff43cc; path=/; secure; HttpOnly' ],
  'server-perf': '[1cfe347e-263c-48cc-b767-d32c8768aec2][ AuthTime::1446.03542081085::PostAuthTime::508.528871737385 ][S-HdfsGetAclStatus :: 00:00:080 ms]%0a[GETACLSTATUS :: 00:00:082 ms]%0a',
  'x-ms-webhdfs-version': '16.05.18.00',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Thu, 16 Jun 2016 21:49:48 GMT',
  connection: 'close',
  'content-length': '319' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadls3248.azuredatalakestore.net:443')
  .get('/webhdfs/v1/%2F?op=GETACLSTATUS&api-version=2015-10-01-preview')
  .reply(200, "{\"AclStatus\":{\"entries\":[\"user::rwx\",\"group::rwx\",\"other::---\",\"mask::rwx\",\"default:user::rwx\",\"default:group::rwx\",\"default:other::---\",\"default:mask::rwx\",\"user:027c28d5-c91d-49f0-98c5-d10134b169b3:rwx\"],\"owner\":\"2e6c02d2-a364-4530-9137-d17403996cbf\",\"group\":\"2e6c02d2-a364-4530-9137-d17403996cbf\",\"stickyBit\":false}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '1cfe347e-263c-48cc-b767-d32c8768aec2',
  'set-cookie': [ 'UserPrincipalSession=b0c58208-6081-43bd-ba13-e87f6cff43cc; path=/; secure; HttpOnly' ],
  'server-perf': '[1cfe347e-263c-48cc-b767-d32c8768aec2][ AuthTime::1446.03542081085::PostAuthTime::508.528871737385 ][S-HdfsGetAclStatus :: 00:00:080 ms]%0a[GETACLSTATUS :: 00:00:082 ms]%0a',
  'x-ms-webhdfs-version': '16.05.18.00',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Thu, 16 Jun 2016 21:49:48 GMT',
  connection: 'close',
  'content-length': '319' });
 return result; },
function (nock) { 
var result = 
nock('http://xplattestadls3248.azuredatalakestore.net:443')
  .put('/webhdfs/v1/%2F?aclspec=user%3A027c28d5-c91d-49f0-98c5-d10134b169b3%3A-w-&op=MODIFYACLENTRIES&api-version=2015-10-01-preview')
  .reply(200, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  'x-ms-request-id': '806743d0-7c37-4a1a-b3b0-4f686fb27c98',
  contentlength: '0',
  'server-perf': '[806743d0-7c37-4a1a-b3b0-4f686fb27c98][ AuthTime::0::PostAuthTime::0 ][S-HdfsModifyAclEntries :: 00:00:099 ms]%0a[MODIFYACLENTRIES :: 00:00:101 ms]%0a',
  'x-ms-webhdfs-version': '16.05.18.00',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Thu, 16 Jun 2016 21:49:49 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadls3248.azuredatalakestore.net:443')
  .put('/webhdfs/v1/%2F?aclspec=user%3A027c28d5-c91d-49f0-98c5-d10134b169b3%3A-w-&op=MODIFYACLENTRIES&api-version=2015-10-01-preview')
  .reply(200, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  'x-ms-request-id': '806743d0-7c37-4a1a-b3b0-4f686fb27c98',
  contentlength: '0',
  'server-perf': '[806743d0-7c37-4a1a-b3b0-4f686fb27c98][ AuthTime::0::PostAuthTime::0 ][S-HdfsModifyAclEntries :: 00:00:099 ms]%0a[MODIFYACLENTRIES :: 00:00:101 ms]%0a',
  'x-ms-webhdfs-version': '16.05.18.00',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Thu, 16 Jun 2016 21:49:49 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('http://xplattestadls3248.azuredatalakestore.net:443')
  .get('/webhdfs/v1/%2F?op=GETACLSTATUS&api-version=2015-10-01-preview')
  .reply(200, "{\"AclStatus\":{\"entries\":[\"user::rwx\",\"group::rwx\",\"other::---\",\"mask::rwx\",\"default:user::rwx\",\"default:group::rwx\",\"default:other::---\",\"default:mask::rwx\",\"user:027c28d5-c91d-49f0-98c5-d10134b169b3:-w-\"],\"owner\":\"2e6c02d2-a364-4530-9137-d17403996cbf\",\"group\":\"2e6c02d2-a364-4530-9137-d17403996cbf\",\"stickyBit\":false}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'b5589bac-2433-4594-a704-f44058489280',
  'set-cookie': [ 'UserPrincipalSession=b5af1038-979b-431b-8a3e-16ff148b100b; path=/; secure; HttpOnly' ],
  'server-perf': '[b5589bac-2433-4594-a704-f44058489280][ AuthTime::1763.81401256995::PostAuthTime::549.160327870956 ][S-HdfsGetAclStatus :: 00:00:046 ms]%0a[GETACLSTATUS :: 00:00:048 ms]%0a',
  'x-ms-webhdfs-version': '16.05.18.00',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Thu, 16 Jun 2016 21:49:49 GMT',
  connection: 'close',
  'content-length': '319' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadls3248.azuredatalakestore.net:443')
  .get('/webhdfs/v1/%2F?op=GETACLSTATUS&api-version=2015-10-01-preview')
  .reply(200, "{\"AclStatus\":{\"entries\":[\"user::rwx\",\"group::rwx\",\"other::---\",\"mask::rwx\",\"default:user::rwx\",\"default:group::rwx\",\"default:other::---\",\"default:mask::rwx\",\"user:027c28d5-c91d-49f0-98c5-d10134b169b3:-w-\"],\"owner\":\"2e6c02d2-a364-4530-9137-d17403996cbf\",\"group\":\"2e6c02d2-a364-4530-9137-d17403996cbf\",\"stickyBit\":false}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'b5589bac-2433-4594-a704-f44058489280',
  'set-cookie': [ 'UserPrincipalSession=b5af1038-979b-431b-8a3e-16ff148b100b; path=/; secure; HttpOnly' ],
  'server-perf': '[b5589bac-2433-4594-a704-f44058489280][ AuthTime::1763.81401256995::PostAuthTime::549.160327870956 ][S-HdfsGetAclStatus :: 00:00:046 ms]%0a[GETACLSTATUS :: 00:00:048 ms]%0a',
  'x-ms-webhdfs-version': '16.05.18.00',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Thu, 16 Jun 2016 21:49:49 GMT',
  connection: 'close',
  'content-length': '319' });
 return result; },
function (nock) { 
var result = 
nock('http://xplattestadls3248.azuredatalakestore.net:443')
  .put('/webhdfs/v1/%2F?aclspec=user%3A027c28d5-c91d-49f0-98c5-d10134b169b3&op=REMOVEACLENTRIES&api-version=2015-10-01-preview')
  .reply(200, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  'x-ms-request-id': '03010364-78c3-44fc-b098-c78b3994f89d',
  'set-cookie': [ 'UserPrincipalSession=8e11baf1-edd3-4ee0-b043-2cd2db1c772b; path=/; secure; HttpOnly' ],
  contentlength: '0',
  'server-perf': '[03010364-78c3-44fc-b098-c78b3994f89d][ AuthTime::1417.38048924861::PostAuthTime::459.344189937539 ][S-HdfsRemoveAclEntries :: 00:00:189 ms]%0a[REMOVEACLENTRIES :: 00:00:191 ms]%0a',
  'x-ms-webhdfs-version': '16.05.18.00',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Thu, 16 Jun 2016 21:49:50 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadls3248.azuredatalakestore.net:443')
  .put('/webhdfs/v1/%2F?aclspec=user%3A027c28d5-c91d-49f0-98c5-d10134b169b3&op=REMOVEACLENTRIES&api-version=2015-10-01-preview')
  .reply(200, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  'x-ms-request-id': '03010364-78c3-44fc-b098-c78b3994f89d',
  'set-cookie': [ 'UserPrincipalSession=8e11baf1-edd3-4ee0-b043-2cd2db1c772b; path=/; secure; HttpOnly' ],
  contentlength: '0',
  'server-perf': '[03010364-78c3-44fc-b098-c78b3994f89d][ AuthTime::1417.38048924861::PostAuthTime::459.344189937539 ][S-HdfsRemoveAclEntries :: 00:00:189 ms]%0a[REMOVEACLENTRIES :: 00:00:191 ms]%0a',
  'x-ms-webhdfs-version': '16.05.18.00',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Thu, 16 Jun 2016 21:49:50 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('http://xplattestadls3248.azuredatalakestore.net:443')
  .get('/webhdfs/v1/%2F?op=GETACLSTATUS&api-version=2015-10-01-preview')
  .reply(200, "{\"AclStatus\":{\"entries\":[\"user::rwx\",\"group::rwx\",\"other::---\",\"mask::rwx\",\"default:user::rwx\",\"default:group::rwx\",\"default:other::---\",\"default:mask::rwx\"],\"owner\":\"2e6c02d2-a364-4530-9137-d17403996cbf\",\"group\":\"2e6c02d2-a364-4530-9137-d17403996cbf\",\"stickyBit\":false}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '58df054d-cb51-4f51-b4eb-42cb72eb7372',
  'set-cookie': [ 'UserPrincipalSession=aa74a492-66eb-4ccc-b000-6a44ee9fcaa4; path=/; secure; HttpOnly' ],
  'server-perf': '[58df054d-cb51-4f51-b4eb-42cb72eb7372][ AuthTime::1461.43180113236::PostAuthTime::535.045707701664 ][S-HdfsGetAclStatus :: 00:00:072 ms]%0a[GETACLSTATUS :: 00:00:074 ms]%0a',
  'x-ms-webhdfs-version': '16.05.18.00',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Thu, 16 Jun 2016 21:49:52 GMT',
  connection: 'close',
  'content-length': '271' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadls3248.azuredatalakestore.net:443')
  .get('/webhdfs/v1/%2F?op=GETACLSTATUS&api-version=2015-10-01-preview')
  .reply(200, "{\"AclStatus\":{\"entries\":[\"user::rwx\",\"group::rwx\",\"other::---\",\"mask::rwx\",\"default:user::rwx\",\"default:group::rwx\",\"default:other::---\",\"default:mask::rwx\"],\"owner\":\"2e6c02d2-a364-4530-9137-d17403996cbf\",\"group\":\"2e6c02d2-a364-4530-9137-d17403996cbf\",\"stickyBit\":false}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '58df054d-cb51-4f51-b4eb-42cb72eb7372',
  'set-cookie': [ 'UserPrincipalSession=aa74a492-66eb-4ccc-b000-6a44ee9fcaa4; path=/; secure; HttpOnly' ],
  'server-perf': '[58df054d-cb51-4f51-b4eb-42cb72eb7372][ AuthTime::1461.43180113236::PostAuthTime::535.045707701664 ][S-HdfsGetAclStatus :: 00:00:072 ms]%0a[GETACLSTATUS :: 00:00:074 ms]%0a',
  'x-ms-webhdfs-version': '16.05.18.00',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Thu, 16 Jun 2016 21:49:52 GMT',
  connection: 'close',
  'content-length': '271' });
 return result; }]];