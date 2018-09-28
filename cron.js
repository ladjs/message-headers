// <https://www.iana.org/assignments/message-headers/perm-headers.csv>
// <https://www.iana.org/assignments/message-headers/message-headers.xhtml>
// <https://www.iana.org/assignments/message-headers/prov-headers.csv>
const fs = require('fs');
const superagent = require('superagent');
const csv = require('csvtojson');

const keys = ['perm', 'prov'];

(async () => {
  const [perm, prov] = await Promise.all(keys.map(getParseAndWriteFile));
  const permanent = JSON.stringify(perm, null, 2);
  const provisional = JSON.stringify(prov, null, 2);
  const all = perm.concat(prov);
  fs.writeFileSync('./permanent.json', permanent);
  fs.writeFileSync('./provisional.json', provisional);
  fs.writeFileSync('./all.json', JSON.stringify(all, null, 2));
  fs.writeFileSync(
    './deprecated.json',
    JSON.stringify(all.filter(o => o.Status === 'deprecated'), null, 2)
  );
  fs.writeFileSync(
    './standard.json',
    JSON.stringify(all.filter(o => o.Status === 'standard'), null, 2)
  );
})();

async function getParseAndWriteFile(key) {
  const res = await superagent
    .get(`https://www.iana.org/assignments/message-headers/${key}-headers.csv`)
    .set('accept', 'text/plain');
  const json = await csv({
    noheader: true,
    headers: [
      'Header Field Name',
      'Template',
      'Protocol',
      'Status',
      'Reference'
    ]
  }).fromString(res.text);
  return json;
}
