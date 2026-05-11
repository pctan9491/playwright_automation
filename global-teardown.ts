import { promises as fs } from 'node:fs';
import path from 'node:path';

// Runs once after all tests in the whole run (even if some tests failed).
// Use this to clean up anything created in globalSetup.
async function globalTeardown() {
  // Same folder created in globalSetup.
  const stateDir = path.resolve(__dirname, '.playwright-state');

  // Remove the folder recursively. `force: true` means "don't throw" if it doesn't exist.
  await fs.rm(stateDir, { recursive: true, force: true });
}

export default globalTeardown;
