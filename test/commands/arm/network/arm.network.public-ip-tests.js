﻿/**
 * Copyright (c) Microsoft.  All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// Warning: This code was generated by a tool.
// 
// Changes to this file may cause incorrect behavior and will be lost if the
// code is regenerated.

'use strict';

var should = require('should');
var util = require('util');
var _ = require('underscore');

var CLITest = require('../../../framework/arm-cli-test');
var utils = require('../../../../lib/util/utils');
var tagUtils = require('../../../../lib/commands/arm/tag/tagUtils');
var testUtils = require('../../../util/util');

var networkTestUtil = new (require('../../../util/networkTestUtil'))();

var generatorUtils = require('../../../../lib/util/generatorUtils');
var profile = require('../../../../lib/util/profile');
var $ = utils.getLocaleString;

var testPrefix = 'arm-network-public-ip-tests',
  groupName = 'xplat-test-public-ip',
  location;
var index = 0;

var publicIPAddresses = {
  publicIPAllocationMethod: 'Static',
  publicIPAllocationMethodNew: 'Dynamic',
  publicIPAddressVersion: 'IPv4',
  domainNameLabel: 'labelcreate',
  domainNameLabelNew: 'labelset',
  idleTimeoutInMinutes: '15',
  idleTimeoutInMinutesNew: '14',
  location: 'southeastasia',
  name: 'publicIPAddressName'
};
var publicIPAddressesDefault = {
  location: 'southeastasia',
  publicIPAllocationMethod: 'Dynamic',
  publicIPAddressVersion: 'IPv4',
  idleTimeoutInMinutes: '4',
  name: 'publicIPAddressesDefaultName',
  group: groupName
};
var ipAllocationMethodOutOfRange = {
  publicIPAllocationMethod: 'Any',
  location: 'southeastasia',
  name: 'IPAllocationMethodOutOfRangeName',
  group: groupName
};
var ipVersionOutOfRange = {
  publicIPAddressVersion: 'IPv8',
  location: 'southeastasia',
  name: 'IPVersionOutOfRangeName',
  group: groupName
};
var invalidSymbolsInLable = {
  domainNameLabel: 'l-a_b-1-e',
  location: 'southeastasia',
  name: 'invalidSymbolsInLableName',
  group: groupName
};
var idleTimeoutUnderRange = {
  idleTimeoutInMinutes: '3',
  location: 'southeastasia',
  name: 'idleTimeoutUnderRangeName',
  group: groupName
};
var idleTimeoutOverRange = {
  idleTimeoutInMinutes: '31',
  location: 'southeastasia',
  name: 'idleTimeoutOverRangeName',
  group: groupName
};
var deleteOfDomainNameLabel = {
  domainNameLabel: 'xplattestlbl',
  domainNameLabelNew: '',
  location: 'southeastasia',
  name: 'deleteOfDomainNameLabelName',
  group: groupName
};

var requiredEnvironment = [{
  name: 'AZURE_VM_TEST_LOCATION',
  defaultValue: 'southeastasia'
}];

describe('arm', function () {
  describe('network', function () {
    var suite, retry = 5;
    var hour = 60 * 60000;

    before(function (done) {
      this.timeout(hour);
      suite = new CLITest(this, testPrefix, requiredEnvironment);
      suite.setupSuite(function () {
        location = publicIPAddresses.location || process.env.AZURE_VM_TEST_LOCATION;
        groupName = suite.isMocked ? groupName : suite.generateId(groupName, null);
        publicIPAddresses.location = location;
        publicIPAddresses.group = groupName;
        publicIPAddresses.name = suite.isMocked ? publicIPAddresses.name : suite.generateId(publicIPAddresses.name, null);
        if (!suite.isPlayback()) {
          networkTestUtil.createGroup(groupName, location, suite, function () {
            done();
          });
        } else {
          var subscriptionId = profile.current.getSubscription().id;
          done();
        }
      });
    });
    after(function (done) {
      this.timeout(hour);
      networkTestUtil.deleteGroup(groupName, suite, function () {
        suite.teardownSuite(done);
      });
    });
    beforeEach(function (done) {
      suite.setupTest(done);
    });
    afterEach(function (done) {
      suite.teardownTest(done);
    });

    describe('public ip addresses', function () {
      this.timeout(hour);
      it('create should create public ip addresses', function (done) {
        var cmd = 'network public-ip create -g {group} -n {name} --allocation-method {publicIPAllocationMethod} --ip-version {publicIPAddressVersion} --domain-name-label {domainNameLabel} --idle-timeout {idleTimeoutInMinutes} --location {location} --json'.formatArgs(publicIPAddresses);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);
          var output = JSON.parse(result.text);
          output.name.should.equal(publicIPAddresses.name);
          output.publicIPAllocationMethod.toLowerCase().should.equal(publicIPAddresses.publicIPAllocationMethod.toLowerCase());
          output.publicIPAddressVersion.toLowerCase().should.equal(publicIPAddresses.publicIPAddressVersion.toLowerCase());
          output.dnsSettings.domainNameLabel.toLowerCase().should.equal(publicIPAddresses.domainNameLabel.toLowerCase());
          output.idleTimeoutInMinutes.should.equal(parseInt(publicIPAddresses.idleTimeoutInMinutes, 10));
          done();
        });
      });
      it('show should display public ip addresses details', function (done) {
        var cmd = 'network public-ip show -g {group} -n {name} --json'.formatArgs(publicIPAddresses);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);
          var output = JSON.parse(result.text);
          output.name.should.equal(publicIPAddresses.name);
          output.publicIPAllocationMethod.toLowerCase().should.equal(publicIPAddresses.publicIPAllocationMethod.toLowerCase());
          output.publicIPAddressVersion.toLowerCase().should.equal(publicIPAddresses.publicIPAddressVersion.toLowerCase());
          output.dnsSettings.domainNameLabel.toLowerCase().should.equal(publicIPAddresses.domainNameLabel.toLowerCase());
          output.idleTimeoutInMinutes.should.equal(parseInt(publicIPAddresses.idleTimeoutInMinutes, 10));
          done();
        });
      });
      it('set should update public ip addresses', function (done) {
        var cmd = 'network public-ip set -g {group} -n {name} --allocation-method {publicIPAllocationMethodNew} --domain-name-label {domainNameLabelNew} --idle-timeout {idleTimeoutInMinutesNew} --json'.formatArgs(publicIPAddresses);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);
          var output = JSON.parse(result.text);
          output.name.should.equal(publicIPAddresses.name);
          output.publicIPAllocationMethod.toLowerCase().should.equal(publicIPAddresses.publicIPAllocationMethodNew.toLowerCase());
          output.dnsSettings.domainNameLabel.toLowerCase().should.equal(publicIPAddresses.domainNameLabelNew.toLowerCase());
          output.idleTimeoutInMinutes.should.equal(parseInt(publicIPAddresses.idleTimeoutInMinutesNew, 10));
          done();
        });
      });
      it('list should display all public ip addresses in resource group', function (done) {
        var cmd = 'network public-ip list -g {group} --json'.formatArgs(publicIPAddresses);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);
          var outputs = JSON.parse(result.text);
          _.some(outputs, function (output) {
            return output.name === publicIPAddresses.name;
          }).should.be.true;
          done();
        });
      });
      it('delete should delete public ip addresses', function (done) {
        var cmd = 'network public-ip delete -g {group} -n {name} --quiet --json'.formatArgs(publicIPAddresses);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);

          cmd = 'network public-ip show -g {group} -n {name} --json'.formatArgs(publicIPAddresses);
          testUtils.executeCommand(suite, retry, cmd, function (result) {
            result.exitStatus.should.equal(0);
            var output = JSON.parse(result.text || '{}');
            output.should.be.empty;
            done();
          });
        });
      });
      it('create with defaults should create public ip addresses with default values', function (done) {
        var cmd = 'network public-ip create -g {group} -n {name} --location {location} --json'.formatArgs(publicIPAddressesDefault);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);
          var output = JSON.parse(result.text);
          output.name.should.equal(publicIPAddressesDefault.name);
          output.publicIPAllocationMethod.toLowerCase().should.equal(publicIPAddressesDefault.publicIPAllocationMethod.toLowerCase());;
          output.publicIPAddressVersion.toLowerCase().should.equal(publicIPAddressesDefault.publicIPAddressVersion.toLowerCase());;
          output.idleTimeoutInMinutes.should.equal(parseInt(publicIPAddressesDefault.idleTimeoutInMinutes, 10));

          cmd = 'network public-ip delete -g {group} -n {name} --quiet --json'.formatArgs(publicIPAddressesDefault);
          testUtils.executeCommand(suite, retry, cmd, function (result) {
            result.exitStatus.should.equal(0);
            done();
          });
        });
      });
      it('create should fail for ip allocation method out of range', function (done) {
        var cmd = 'network public-ip create -g {group} -n {name} --allocation-method {publicIPAllocationMethod} --location {location} --json'.formatArgs(ipAllocationMethodOutOfRange);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.not.equal(0);
          done();
        });
      });
      it('create should fail for ip version out of range', function (done) {
        var cmd = 'network public-ip create -g {group} -n {name} --ip-version {publicIPAddressVersion} --location {location} --json'.formatArgs(ipVersionOutOfRange);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.not.equal(0);
          done();
        });
      });
      it('create should fail for invalid symbols in lable', function (done) {
        var cmd = 'network public-ip create -g {group} -n {name} --domain-name-label {domainNameLabel} --location {location} --json'.formatArgs(invalidSymbolsInLable);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.not.equal(0);
          done();
        });
      });
      it('create should fail for idle timeout under range', function (done) {
        var cmd = 'network public-ip create -g {group} -n {name} --idle-timeout {idleTimeoutInMinutes} --location {location} --json'.formatArgs(idleTimeoutUnderRange);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.not.equal(0);
          done();
        });
      });
      it('create should fail for idle timeout over range', function (done) {
        var cmd = 'network public-ip create -g {group} -n {name} --idle-timeout {idleTimeoutInMinutes} --location {location} --json'.formatArgs(idleTimeoutOverRange);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.not.equal(0);
          done();
        });
      });
      it('create should pass for delete of domain name label', function (done) {
        var cmd = 'network public-ip create -g {group} -n {name} --domain-name-label {domainNameLabel} --location {location} --json'.formatArgs(deleteOfDomainNameLabel);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);
          var output = JSON.parse(result.text);
          output.name.should.equal(deleteOfDomainNameLabel.name);
          output.dnsSettings.domainNameLabel.toLowerCase().should.equal(deleteOfDomainNameLabel.domainNameLabel.toLowerCase());

          cmd = 'network public-ip set -g {group} -n {name} --domain-name-label {domainNameLabelNew} --json'.formatArgs(deleteOfDomainNameLabel);
          testUtils.executeCommand(suite, retry, cmd, function (result) {
            result.exitStatus.should.equal(0);
            var output = JSON.parse(result.text);
            output.name.should.equal(deleteOfDomainNameLabel.name);
            should.not.exist(output.dnsSettings);

            cmd = 'network public-ip delete -g {group} -n {name} --quiet --json'.formatArgs(deleteOfDomainNameLabel);
            testUtils.executeCommand(suite, retry, cmd, function (result) {
              result.exitStatus.should.equal(0);
              done();
            });
          });
        });
      });
    });
  });
});
