import { existsSync } from "node:fs";
import path from "node:path";

// Server-only: true when a file under /public exists, so optional images never 404.
export function publicFileExists(publicPath?: string): boolean {
  if (!publicPath) return false;
  return existsSync(path.join(process.cwd(), "public", publicPath));
}
