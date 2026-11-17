// Builds the static export for GitHub Pages and pushes ./out to the gh-pages branch.
import { execSync } from 'node:child_process';
import fs from 'node:fs';

const run = (cmd, opts = {}) => execSync(cmd, { stdio: 'inherit', ...opts });
const remote = execSync('git remote get-url origin').toString().trim();

run('npm run build', { env: { ...process.env, NEXT_PUBLIC_BASE_PATH: '/lumora-solar' } });
fs.writeFileSync('out/.nojekyll', '');

const git = (cmd) => run(`git ${cmd}`, { cwd: 'out' });
git('init -q -b gh-pages');
git('add -A');
git('commit -q -m "Deploy site"');
git(`push -f -q ${remote} gh-pages`);
fs.rmSync('out/.git', { recursive: true, force: true });
console.log('Deployed -> https://vsharkindia.github.io/lumora-solar/');
