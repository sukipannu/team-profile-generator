const Employee = require('../lib/Employee.js');

test('creates employee object', () => {
    const employee = new Employee('Bob', '1', 'bob@email.com');

    expect(employee.name).toBe('Bob');
    expect(employee.id).toBe('1');
    expect(employee.email).toBe('bob@email.com');
});