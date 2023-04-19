'use strict';
//Module for Users Organization
const PropertyRegistrationUserContract = require('./user-contract.js');

const PropertyRegistrationRegistrarContract = require('./registrar-contract.js');

//Export the contracts
module.exports.contracts = [PropertyRegistrationUserContract, PropertyRegistrationRegistrarContract];