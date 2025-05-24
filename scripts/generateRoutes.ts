import fs from "fs";
import path from "path";

// Absolute path to your app directory
const appDir = path.resolve(__dirname, "../src/app");

// Helper to check if `page.tsx` exists inside a subdirectory
const isPageRoute = (dir: string) =>
  fs.existsSync(path.join(appDir, dir, "page.tsx"));

// Filter subdirectories (skip files like layout.tsx)
const routes = fs
  .readdirSync(appDir)
  .filter((file) => {
    const fullPath = path.join(appDir, file);
    return fs.statSync(fullPath).isDirectory() && isPageRoute(file);
  })
  .map((dir) => ({
    path: `/${dir}`,
    label: dir.charAt(0).toUpperCase() + dir.slice(1),
  }));

const output = `export const routes = ${JSON.stringify(routes, null, 2)};\n`;

fs.writeFileSync(path.resolve(__dirname, "../src/lib/routes.ts"), output);

console.log("✅ Generated route list.");
