/**
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

var generatorUtils = require('../../../util/generatorUtils');
var util = require('util');
var validation = require('../../../util/validation');

var profile = require('../../../util/profile');
var utils = require('../../../util/utils');

var $ = utils.getLocaleString;

exports.init = function (cli) {
  var network = cli.category('network')
    .description($('Commands to manage network resources'));
  var networkInterfaces = network.category('nic')
    .description($('Commands to manage network interfaces'));
  var ipConfigurations = networkInterfaces.category('ip-config')
    .description($('Commands to manage ip configurations'));

  var defaultPrivateIPAddressVersion = 'IPv4';

  ipConfigurations.command('create [resource-group] [nic-name] [name]')
    .description($('Create an ip configuration'))
    .usage('[options] <resource-group> <nic-name> <name>')
    .option('-g, --resource-group <resource-group>', $('the name of the resource group'))
    .option('-c, --nic-name <nic-name>', $('the nic name'))
    .option('-n, --name <name>', $('the name of the ip configuration'))
    .option('-d, --lb-address-pool-ids [lb-address-pool-ids]', $('the reference of' +
      '\n     LoadBalancerBackendAddressPool resource'))
    .option('-e, --lb-inbound-nat-rule-ids [lb-inbound-nat-rule-ids]', $('a list of references of' +
      '\n     LoadBalancerInboundNatRules'))
    .option('-a, --private-ip-address [private-ip-address]', $('private IP address of the IP' +
      '\n     configuration'))
    .option('-b, --private-ip-version [private-ip-version]', $('available from Api-Version 2016-03-30' +
      '\n     onwards, it represents whether the specific ipconfiguration is IPv4 or IPv6.' +
      '\n     Default is taken as IPv4.  Possible values are: \'IPv4\' and \'IPv6\''))
    .option('-k, --subnet-name [subnet-name]', $('sets subnet name. This option is' +
      '\n     mutually exclusive with --subnet-id'))
    .option('-m, --subnet-vnet-name [subnet-vnet-name]', $('name of the virtual network that contains subnet'))
    .option('-u, --subnet-id [subnet-id]', $('sets subnet id. This option is mutually' +
      '\n     exclusive with --subnet-name'))
    .option('-y, --is-primary [is-primary]', $('gets whether this is a primary customer' +
      '\n     address on the network interface'))
    .option('-i, --public-ip-id [public-ip-id]', $('sets public ip address id. This option' +
      '\n     is mutually exclusive with --public-ip-name'))
    .option('-p, --public-ip-name [public-ip-name]', $('sets public ip address name. This' +
      '\n     option is mutually exclusive with --public-ip-id'))
    .option('-q, --quiet', $('quiet mode, do not ask for change primary IP config confirmation'))
    .option('-s, --subscription <subscription>', $('the subscription identifier'))
    .execute(function(resourceGroup, nicName, name, options, _) {
      var useDefaults = true;
      resourceGroup = cli.interaction.promptIfNotGiven($('resource group : '), resourceGroup, _);
      nicName = cli.interaction.promptIfNotGiven($('nic name : '), nicName, _);
      name = cli.interaction.promptIfNotGiven($('name : '), name, _);

      var subscription = profile.current.getSubscription(options.subscription);
      var networkManagementClient = utils.createNetworkManagementClient(subscription);

      var index = 0;
      var networkInterface;
      var progress = cli.interaction.progress(util.format($('Looking up the network interface "%s"'), nicName));
      try {
        networkInterface = networkManagementClient.networkInterfaces.get(resourceGroup, nicName, null, _);
      } catch (e) {
        if (e.statusCode === 404) {
          networkInterface = null;
        } else {
          throw e;
        }
      } finally {
        progress.end();
      }

      if (!networkInterface) {
        throw new Error(util.format($('network interface with name "%s" not found in the resource group "%s"'), nicName, resourceGroup));
      }

      if(utils.findFirstCaseIgnore(networkInterface.ipConfigurations, { name: name })) {
        throw new Error(util.format($('ip configuration with name "%s" already exists in the "%s"'), name, nicName));
      }

      var parameters = {};
      if(!parameters.ipConfigurations) {
        parameters.ipConfigurations = [];
      }
      if(!parameters.ipConfigurations[index]) {
        parameters.ipConfigurations[index] = {};
        parameters.ipConfigurations[index].name = 'default-ip-config';
      }
      if(options.lbAddressPoolIds) {
        parameters.ipConfigurations[index].loadBalancerBackendAddressPools = options.lbAddressPoolIds.split(',').map(function (item) { return { id: item }; });
      }

      if(options.lbInboundNatRuleIds) {
        parameters.ipConfigurations[index].loadBalancerInboundNatRules = options.lbInboundNatRuleIds.split(',').map(function (item) { return { id: item }; });
      }

      if(options.privateIpAddress) {
        parameters.ipConfigurations[index].privateIPAddress = options.privateIpAddress;
        if (!options.privateIpVersion || (options.privateIpVersion && options.privateIpVersion.toLowerCase() != 'ipv6')) {
          parameters.ipConfigurations[index].privateIPAllocationMethod = 'Static';
        }
      }

      if(options.privateIpVersion) {
        parameters.ipConfigurations[index].privateIPAddressVersion = validation.isIn(options.privateIpVersion, ['IPv4', 'IPv6'], '--private-ip-version');
      } else if(useDefaults) {
        parameters.ipConfigurations[index].privateIPAddressVersion = defaultPrivateIPAddressVersion;
      }

      if(!parameters.ipConfigurations[index].subnet) {
        parameters.ipConfigurations[index].subnet = {};
      }
      if(options.subnetId) {
        if(options.subnetName) {
          cli.output.warn($('--subnet-name parameter will be ignored because --subnet-id and --subnet-name are mutually exclusive'));
        }
        parameters.ipConfigurations[index].subnet.id = options.subnetId;
      } else if(options.subnetName) {
        var idContainerSubnet = networkManagementClient.subnets.get(resourceGroup, options.subnetVnetName, options.subnetName, _);
        parameters.ipConfigurations[index].subnet.id = idContainerSubnet.id;
      } else if (parameters.ipConfigurations[index].privateIPAddressVersion &&
         parameters.ipConfigurations[index].privateIPAddressVersion.toLowerCase() === 'IPv4'.toLowerCase() && !options.subnetId && !options.subnetName) {
        var primaryIpConfig = utils.findFirstCaseIgnore(networkInterface.ipConfigurations, {primary: true});
        parameters.ipConfigurations[index].subnet = {};
        parameters.ipConfigurations[index].subnet.id = primaryIpConfig.subnet.id;
      }

      if(options.isPrimary) {
        if(!options.quiet && !cli.interaction.confirm(util.format($('There is a primary IP configuration already. ' +
          'Do you want to make new config primary? [y/n] ')), _)) {
          return;
        }
        networkInterface.ipConfigurations.map(function(item) { item.primary = false; });
        parameters.ipConfigurations[index].primary = utils.parseBool(options.isPrimary);
      }

      if(!parameters.ipConfigurations[index].publicIPAddress) {
        parameters.ipConfigurations[index].publicIPAddress = {};
      }
      if(options.publicIpId) {
        if(options.publicIpName) {
          cli.output.warn($('--public-ip-name parameter will be ignored because --public-ip-id and --public-ip-name are mutually exclusive'));
        }
        parameters.ipConfigurations[index].publicIPAddress.id = options.publicIpId;
      } else if(options.publicIpName) {
        var idContainerPublicIPAddress = networkManagementClient.publicIPAddresses.get(resourceGroup, options.publicIpName, _);
        parameters.ipConfigurations[index].publicIPAddress.id = idContainerPublicIPAddress.id;
      }

      parameters.ipConfigurations[index].name = name;
      networkInterface.ipConfigurations.push(parameters.ipConfigurations[index]);

      generatorUtils.removeEmptyObjects(parameters);
      progress = cli.interaction.progress(util.format($('Creating ip configuration in "%s"'), nicName));
      try {
        networkInterface = networkManagementClient.networkInterfaces.createOrUpdate(resourceGroup, nicName, networkInterface, _);
      } finally {
        progress.end();
      }

      cli.interaction.formatOutput(networkInterface, generatorUtils.traverse);
    });

  ipConfigurations.command('set [resource-group] [nic-name] [name]')
    .description($('Update an ip configuration'))
    .usage('[options] <resource-group> <nic-name> <name>')
    .option('-g, --resource-group <resource-group>', $('the name of the resource group'))
    .option('-c, --nic-name <nic-name>', $('the nic name'))
    .option('-n, --name <name>', $('the name of the ip configuration'))
    .option('-d, --lb-address-pool-ids [lb-address-pool-ids]', $('the reference of' +
      '\n     LoadBalancerBackendAddressPool resource'))
    .option('-e, --lb-inbound-nat-rule-ids [lb-inbound-nat-rule-ids]', $('a list of references of' +
      '\n     LoadBalancerInboundNatRules'))
    .option('-a, --private-ip-address [private-ip-address]', $('private IP address of the IP' +
      '\n     configuration'))
    .option('-b, --private-ip-version [private-ip-version]', $('available from Api-Version 2016-03-30' +
      '\n     onwards, it represents whether the specific ipconfiguration is IPv4 or IPv6.' +
      '\n     Default is taken as IPv4.  Possible values are: \'IPv4\' and \'IPv6\''))
    .option('-k, --subnet-name [subnet-name]', $('sets subnet name. This option is' +
      '\n     mutually exclusive with --subnet-id'))
    .option('-m, --subnet-vnet-name [subnet-vnet-name]', $('name of the virtual network that contains subnet'))
    .option('-u, --subnet-id [subnet-id]', $('sets subnet id. This option is mutually' +
      '\n     exclusive with --subnet-name'))
    .option('-y, --is-primary [is-primary]', $('gets whether this is a primary customer' +
      '\n     address on the network interface'))
    .option('-i, --public-ip-id [public-ip-id]', $('sets public ip address id. This option' +
      '\n     is mutually exclusive with --public-ip-name'))
    .option('-p, --public-ip-name [public-ip-name]', $('sets public ip address name. This' +
      '\n     option is mutually exclusive with --public-ip-id'))
    .option('-s, --subscription <subscription>', $('the subscription identifier'))
    .execute(function(resourceGroup, nicName, name, options, _) {
      var useDefaults = false;
      resourceGroup = cli.interaction.promptIfNotGiven($('resource group : '), resourceGroup, _);
      nicName = cli.interaction.promptIfNotGiven($('nic name : '), nicName, _);
      name = cli.interaction.promptIfNotGiven($('name : '), name, _);

      var subscription = profile.current.getSubscription(options.subscription);
      var networkManagementClient = utils.createNetworkManagementClient(subscription);

      var networkInterface;
      var progress = cli.interaction.progress(util.format($('Looking up the network interface "%s"'), nicName));
      try {
        networkInterface = networkManagementClient.networkInterfaces.get(resourceGroup, nicName, null, _);
      } catch (e) {
        if (e.statusCode === 404) {
          networkInterface = null;
        } else {
          throw e;
        }
      } finally {
        progress.end();
      }

      if (!networkInterface) {
        throw new Error(util.format($('network interface with name "%s" not found in the resource group "%s"'), nicName, resourceGroup));
      }

      var ipConfiguration = utils.findFirstCaseIgnore(networkInterface.ipConfigurations, { name: name });
      var index = utils.indexOfCaseIgnore(networkInterface.ipConfigurations, { name: name });
      if(!ipConfiguration) {
        throw new Error(util.format($('ip configuration with name "%s" not found in the "%s"'), name, nicName));
      }

      var parameters = networkInterface;
      if(!parameters.ipConfigurations) {
        parameters.ipConfigurations = [];
      }
      if(!parameters.ipConfigurations[index]) {
        parameters.ipConfigurations[index] = {};
        parameters.ipConfigurations[index].name = 'default-ip-config';
      }
      if(options.lbAddressPoolIds) {
        if(!utils.argHasValue(options.lbAddressPoolIds)) {
          delete parameters.ipConfigurations[index].loadBalancerBackendAddressPools;
        } else {
          parameters.ipConfigurations[index].loadBalancerBackendAddressPools = options.lbAddressPoolIds.split(',').map(function (item) { return { id: item }; });
        }
      }

      if(options.lbInboundNatRuleIds) {
        if(!utils.argHasValue(options.lbInboundNatRuleIds)) {
          delete parameters.ipConfigurations[index].loadBalancerInboundNatRules;
        } else {
          parameters.ipConfigurations[index].loadBalancerInboundNatRules = options.lbInboundNatRuleIds.split(',').map(function (item) { return { id: item }; });
        }
      }

      if(options.privateIpAddress) {
        parameters.ipConfigurations[index].privateIPAddress = options.privateIpAddress;
        if (!options.privateIpVersion || (options.privateIpVersion && options.privateIpVersion.toLowerCase() != 'ipv6')) {
          parameters.ipConfigurations[index].privateIPAllocationMethod = 'Static';
        }
      }

      if(options.privateIpVersion) {
        parameters.ipConfigurations[index].privateIPAddressVersion = validation.isIn(options.privateIpVersion, ['IPv4', 'IPv6'], '--private-ip-version');
      } else if(useDefaults) {
        parameters.ipConfigurations[index].privateIPAddressVersion = defaultPrivateIPAddressVersion;
      }

      if(!parameters.ipConfigurations[index].subnet) {
        parameters.ipConfigurations[index].subnet = {};
      }
      if(options.subnetId) {
        if(options.subnetName) {
          cli.output.warn($('--subnet-name parameter will be ignored because --subnet-id and --subnet-name are mutually exclusive'));
        }
        parameters.ipConfigurations[index].subnet.id = options.subnetId;
      } else if(options.subnetName) {
        var idContainerSubnet = networkManagementClient.subnets.get(resourceGroup, options.subnetVnetName, options.subnetName, _);
        parameters.ipConfigurations[index].subnet.id = idContainerSubnet.id;
      }

      if(options.isPrimary) {
        networkInterface.ipConfigurations.map(function(item) { item.primary = false; });
        parameters.ipConfigurations[index].primary = utils.parseBool(options.isPrimary);
      }

      if(!parameters.ipConfigurations[index].publicIPAddress) {
        parameters.ipConfigurations[index].publicIPAddress = {};
      }
      if(options.publicIpId) {
        if(options.publicIpName) {
          cli.output.warn($('--public-ip-name parameter will be ignored because --public-ip-id and --public-ip-name are mutually exclusive'));
        }
        if(!utils.argHasValue(options.publicIpId)) {
          delete parameters.ipConfigurations[index].publicIPAddress;
        } else {
          parameters.ipConfigurations[index].publicIPAddress.id = options.publicIpId;
        }
      } else if(options.publicIpName) {
        if(!utils.argHasValue(options.publicIpName)) {
          delete parameters.ipConfigurations[index].publicIPAddress;
        } else {
          var idContainerPublicIPAddress = networkManagementClient.publicIPAddresses.get(resourceGroup, options.publicIpName, _);
          parameters.ipConfigurations[index].publicIPAddress.id = idContainerPublicIPAddress.id;
        }
      }

      generatorUtils.removeEmptyObjects(parameters);
      progress = cli.interaction.progress(util.format($('Updating ip configuration in "%s"'), nicName));
      try {
        networkInterface = networkManagementClient.networkInterfaces.createOrUpdate(resourceGroup, nicName, networkInterface, _);
      } finally {
        progress.end();
      }
      cli.interaction.formatOutput(networkInterface, generatorUtils.traverse);
    });

  ipConfigurations.command('delete [resource-group] [nic-name] [name]')
    .description($('Delete an ip configuration'))
    .usage('[options] <resource-group> <nic-name> <name>')
    .option('-g, --resource-group <resource-group>', $('the name of the resource group'))
    .option('-c, --nic-name <nic-name>', $('the nic name'))
    .option('-n, --name <name>', $('the name of the ip configuration'))
    .option('-q, --quiet', $('quiet mode, do not ask for delete confirmation'))
    .option('-s, --subscription <subscription>', $('the subscription identifier'))
    .execute(function(resourceGroup, nicName, name, options, _) {
      resourceGroup = cli.interaction.promptIfNotGiven($('resource group : '), resourceGroup, _);
      nicName = cli.interaction.promptIfNotGiven($('nic name : '), nicName, _);
      name = cli.interaction.promptIfNotGiven($('name : '), name, _);

      var subscription = profile.current.getSubscription(options.subscription);
      var networkManagementClient = utils.createNetworkManagementClient(subscription);

      var networkInterface;
      var progress = cli.interaction.progress(util.format($('Looking up the network interface "%s"'), nicName));
      try {
        networkInterface = networkManagementClient.networkInterfaces.get(resourceGroup, nicName, null, _);
      } catch (e) {
        if (e.statusCode === 404) {
          networkInterface = null;
        } else {
          throw e;
        }
      } finally {
        progress.end();
      }

      if (!networkInterface) {
        throw new Error(util.format($('network interface "%s" not found in the resource group "%s"'), nicName, resourceGroup));
      }

      var index = utils.indexOfCaseIgnore(networkInterface.ipConfigurations, {name: name});
      if (index === -1) {
        throw new Error(util.format($('ip configuration "%s" not found in the nicName "%s"'), name, networkInterface.name));
      }

      if (!options.quiet && !cli.interaction.confirm(util.format($('Delete ip configuration with name "%s" from "%s"? [y/n] '), name, nicName), _)) {
        return;
      }

      networkInterface.ipConfigurations.splice(index, 1);
      progress = cli.interaction.progress('Deleting ip configuration');
      try {
        networkInterface = networkManagementClient.networkInterfaces.createOrUpdate(resourceGroup, nicName, networkInterface, _);
      } finally {
        progress.end();
      }

      cli.interaction.formatOutput(networkInterface, generatorUtils.traverse);
    });

  ipConfigurations.command('show [resource-group] [nic-name] [name]')
    .description($('Show an ip configuration'))
    .usage('[options] <resource-group> <nic-name> <name>')
    .option('-g, --resource-group <resource-group>', $('the name of the resource group'))
    .option('-c, --nic-name <nic-name>', $('the nic name'))
    .option('-n, --name <name>', $('the name of the ip configuration'))
    .option('-s, --subscription <subscription>', $('the subscription identifier'))
    .execute(function(resourceGroup, nicName, name, options, _) {
      resourceGroup = cli.interaction.promptIfNotGiven($('resource group : '), resourceGroup, _);
      nicName = cli.interaction.promptIfNotGiven($('nic name : '), nicName, _);
      name = cli.interaction.promptIfNotGiven($('name : '), name, _);

      var subscription = profile.current.getSubscription(options.subscription);
      var networkManagementClient = utils.createNetworkManagementClient(subscription);

      var networkInterface;
      var progress = cli.interaction.progress(util.format($('Looking up the network interface "%s"'), nicName));
      try {
        networkInterface = networkManagementClient.networkInterfaces.get(resourceGroup, nicName, null, _);
      } catch (e) {
        if (e.statusCode === 404) {
          networkInterface = null;
        } else {
          throw e;
        }
      } finally {
        progress.end();
      }

      if (!networkInterface) {
        throw new Error(util.format($('network interface with name "%s" not found in the resource group "%s"'), nicName, resourceGroup));
      }

      var ipConfiguration = utils.findFirstCaseIgnore(networkInterface.ipConfigurations, { name: name });
      if(!ipConfiguration) {
        cli.output.warn(util.format($('ip configuration with name "%s" not found in the nicName "%s"'), name, networkInterface.name));
      }

      cli.interaction.formatOutput(ipConfiguration, generatorUtils.traverse);
    });

  ipConfigurations.command('list [resource-group] [nic-name]')
    .description($('List ip configurations'))
    .usage('[options] <resource-group> <nic-name>')
    .option('-g, --resource-group <resource-group>', $('the name of the resource group'))
    .option('-c, --nic-name <nic-name>', $('the nic name'))
    .option('-s, --subscription <subscription>', $('the subscription identifier'))
    .execute(function(resourceGroup, nicName, options, _) {
      var subscription = profile.current.getSubscription(options.subscription);
      var networkManagementClient = utils.createNetworkManagementClient(subscription);

      var networkInterface = null;
      var progress = cli.interaction.progress(util.format($('Looking up the network interface "%s"'), nicName));
      try {
        networkInterface = networkManagementClient.networkInterfaces.get(resourceGroup, nicName, null, _);
      } catch (e) {
        if (e.statusCode === 404) {
          networkInterface = null;
        } else {
          throw e;
        }
      } finally {
        progress.end();
      }

      if(!networkInterface) {
        throw new Error(util.format($('network interfaces with name "%s" not found in the resource group "%s"'), nicName, resourceGroup));
      }

      var items = networkInterface.ipConfigurations;
      cli.interaction.formatOutput(items, function(items) {
        if (!items || items.length === 0) {
          cli.output.warn($('No ip configurations found'));
        } else {
          cli.output.table(items, function (row, item) {
            generatorUtils.showTableRow(row, item);
          });
        }
      });
    });
};