const Engineer = require('../lib/Engineer.js');

test('does this set a github', () => {
  const eng = new Engineer("a", 1, "b", "github")
  expect(eng.github).toBe('github');
  expect(eng.getGithub()).toBe('github');
  expect(eng.getRole()).toBe("Engineer")
})

