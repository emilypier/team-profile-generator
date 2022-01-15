const Employee = require('../lib/Employee.js');

test('Does this class return an object', ()=>{
  const emp = new Employee()
  expect(typeof(emp)).toBe('object');
})

test('Does this set a name in the class', ()=>{
  const emp = new Employee("emily")
  expect(emp.name).toBe('emily');
  expect(emp.getName()).toBe('emily');
})

test('Does this set an ID in the class', () => {
  const emp = new Employee("123", 2)
  expect(emp.id).toBe(2);
  expect(emp.getId()).toBe(2)
})

test('Does this set an email in the class', () => {
  const emp = new Employee("123", 2, "email")
  expect(emp.email).toBe("email");
  expect(emp.getEmail()).toBe("email");
})