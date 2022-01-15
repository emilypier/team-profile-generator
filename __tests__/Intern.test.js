const Intern = require('../lib/Intern.js');

test('does this set a school', () => {
  const int = new Intern("emily", 2, "email", "school")
  expect(int.school).toBe("school");
  expect(int.getSchool()).toBe("school");
})