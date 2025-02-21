const { execSync } = require("child_process");
const readline = require("readline");
const fs = require("fs");

console.log("Checking for updates to uhdweb-resources...");

try {
  // Get the current branch in uhdweb-components
  const currentBranch = execSync("git rev-parse --abbrev-ref HEAD")
    .toString()
    .trim();

  console.log(`Current branch in uhdweb-components: ${currentBranch}`);

  // Check if the branch exists in uhdweb-resources
  let branchToCheck = "main";
  try {
    const branchExists = execSync(`git ls-remote --heads git@bitbucket.org:uhdweb/uhdweb-resources.git ${currentBranch}`)
      .toString()
      .trim();
    if (branchExists) {
      branchToCheck = currentBranch;
    } else {
      console.log(`⚠️ Branch '${currentBranch}' does not exist in uhdweb-resources. Falling back to 'main'.`);
    }
  } catch {
    console.log(`⚠️ Unable to verify if branch '${currentBranch}' exists. Falling back to 'main'.`);
  }

  // Get the latest remote commit from Bitbucket
  const latestCommit = execSync(`git ls-remote git@bitbucket.org:uhdweb/uhdweb-resources.git refs/heads/${branchToCheck}`)
    .toString()
    .split("\t")[0];

  // Read package-lock.json to extract installed commit
  let installedCommitHash = null;
  try {
    const packageLock = JSON.parse(fs.readFileSync("package-lock.json", "utf8"));

    // Ensure package-lock.json contains the "packages" section
    if (packageLock["packages"] && packageLock["packages"]["node_modules/uhdweb-resources"]) {
      const resolvedUrl = packageLock["packages"]["node_modules/uhdweb-resources"].resolved;

      if (resolvedUrl) {
        // Extract commit hash after the `#`
        installedCommitHash = resolvedUrl.split("#")[1] || null;
      }
    }
  } catch (err) {
    console.log("⚠️ Could not read package-lock.json to determine installed commit.");
  }

  console.log(`🔍 Installed commit from package-lock.json: ${installedCommitHash}`);
  console.log(`🔍 Latest commit in Bitbucket (${branchToCheck}): ${latestCommit}`);

  // If already up to date, exit early
  if (latestCommit === installedCommitHash) {
    console.log("\x1b[32m✅ uhdweb-resources is up to date.\x1b[0m");
    process.exit(0);
  }

  // If there's an update, prompt the developer
  console.log("\x1b[33m🚀 A new version of uhdweb-resources is available!\x1b[0m");

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question("Would you like to update now? (y/N): ", (answer) => {
    if (answer.toLowerCase() === "y") {
      console.log("\x1b[33mUpdating uhdweb-resources...\x1b[0m");
      execSync(`npm update uhdweb-resources`, { stdio: "inherit" });

      // Force refresh the package-lock.json
      execSync("npm install --package-lock-only", { stdio: "ignore" });

      console.log("\x1b[32m✅ uhdweb-resources has been updated!\x1b[0m");
    } else {
      console.log("\x1b[33m⚠️ Update skipped. Run 'npm run setup:update' later to update manually.\x1b[0m");
    }
    rl.close();
  });

} catch (error) {
  console.log("\x1b[31m⚠️ Unable to check uhdweb-resources version. Make sure you have it installed.\x1b[0m");
}
