const { faker } = require('@faker-js/faker');
const { factory } = require('factory-girl');
const { User } = require('../src/app/models');

factory.define("User", User, {
    name: faker.person.fullName(),
    email: faker.internet.email(),
    password: faker.internet.password()
});

module.exports = factory;