#!/usr/bin/env node

import { execFileSync } from 'node:child_process';

const extensions = new Set(['.js', '.jsx', '.mjs', '.cjs', '.ts', '.tsx']);

const stagedFiles = execFileSync('git', ['diff', '--cached', '--name-only', '--diff-filter=ACMR'], {
  encoding: 'utf8',
})
  .trim()
  .split('\n')
  .filter(Boolean)
  .filter(file => [...extensions].some(ext => file.endsWith(ext)));
console.log(`Found ${stagedFiles.length} staged files`);
if (stagedFiles.length === 0) {
  process.exit(0);
}

try {
  console.log('Formatting staged files...');
  execFileSync('oxfmt', stagedFiles, {
    stdio: 'inherit',
  });

  console.log('Linting staged files...');
  execFileSync('oxlint', ['--deny-warnings', '--type-aware', ...stagedFiles], {
    stdio: 'inherit',
  });

  console.log('Updating index...');
  execFileSync('git', ['add', ...stagedFiles], {
    stdio: 'inherit',
  });

  console.log('✓ Pre-commit checks passed');
} catch {
  console.error('✗ Pre-commit checks failed');
  process.exit(1);
}
