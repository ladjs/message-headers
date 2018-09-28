const { promisify } = require('util');
const test = require('ava');
const sgf = require('staged-git-files');

const sgfPromise = promisify(sgf, sgf);

test('checks for updated files', async t => {
  const results = await sgfPromise();
  t.true(results.length === 0);
});
