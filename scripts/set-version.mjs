/**
 * Syncs the semantic-release version into both package.json files
 * before the library is built and published.
 */
import { readFileSync, writeFileSync } from 'fs';

const version = process.argv[2];
if (!version) {
  console.error('Usage: set-version.mjs <version>');
  process.exit(1);
}

const paths = ['package.json', 'projects/ng-anim8/package.json'];

for (const p of paths) {
  const pkg = JSON.parse(readFileSync(p, 'utf8'));
  pkg.version = version;
  writeFileSync(p, JSON.stringify(pkg, null, 2) + '\n');
  console.log(`Updated ${p} → ${version}`);
}
