module.exports = () => {
    var faker = require("@faker-js/faker").faker;
    const data = { employees: [] }
    // Create 1000 employees
    for (let i = 0; i < 100; i++) {
        data.employees.push({
            id: i,
            name: faker.name.findName(),
            avatar: faker.internet.avatar(),
            email: faker.internet.email(),
            phoneNumber: faker.phone.phoneNumber('91-###-###-####')
        })
    }
    return data;
}