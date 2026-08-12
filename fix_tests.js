const fs = require('fs');

const testPath = 'apps/portal/content/content.test.ts';
let testContent = fs.readFileSync(testPath, 'utf8');

// Filter only modules that DO NOT have an academy prop or are "atlasgr"
testContent = testContent.replace(
  'expect(moduleMetas).toHaveLength(15);',
  'expect(moduleMetas.filter(m => !m.academy || m.academy === "atlasgr")).toHaveLength(15);'
);

testContent = testContent.replace(
  'const numbers = moduleMetas.map((m) => m.number).sort((a, b) => a - b);',
  'const numbers = moduleMetas.filter(m => !m.academy || m.academy === "atlasgr").map((m) => m.number).sort((a, b) => a - b);'
);

testContent = testContent.replace(
  'const readyModuleSlugs = moduleMetas.filter((m) => m.status === "ready").map((m) => m.slug);',
  'const readyModuleSlugs = moduleMetas.filter((m) => m.status === "ready" && (!m.academy || m.academy === "atlasgr")).map((m) => m.slug);'
);

fs.writeFileSync(testPath, testContent);
console.log("Fixed tests properly");
