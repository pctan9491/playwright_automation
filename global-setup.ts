import { promises as fs } from 'node:fs';
import path from 'node:path';

// Helper to create a folder if it doesn't exist yet.
async function ensureDir(dirPath: string) {
  await fs.mkdir(dirPath, { recursive: true });
}

// Runs once before all tests in the whole run.
// Use this to prepare shared state (e.g. auth, test data, temp files).
async function globalSetup() {
  // A unique ID for this test run (useful for debugging/logging).
  const runId = `${Date.now()}`;

  // Makes the run ID available to all tests via process.env.E2E_RUN_ID.
  process.env.E2E_RUN_ID = runId;

  // Create a local folder to store temporary state for this run.
  const stateDir = path.resolve(__dirname, '.playwright-state');
  await ensureDir(stateDir);

  // Persist the run ID to a file so you can inspect it outside the test process.
  await fs.writeFile(path.join(stateDir, 'run-id.txt'), runId, 'utf-8');
}

export default globalSetup;
