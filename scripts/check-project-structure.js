// 📁 PROJECT STRUCTURE CHECKER
// Run this to verify your project has all required files

const fs = require("fs")
const path = require("path")

console.log(`
📁 PROJECT STRUCTURE CHECKER
===========================

Checking if your project has all required files for Vercel deployment...
`)

const requiredFiles = [
  "package.json",
  "next.config.mjs",
  "app/page.tsx",
  "app/layout.tsx",
  "app/globals.css",
  "tailwind.config.ts",
  "tsconfig.json",
]

const requiredFolders = ["app", "components", "lib", "public"]

console.log("📋 CHECKING REQUIRED FILES:")
console.log("===========================")

requiredFiles.forEach((file) => {
  if (fs.existsSync(file)) {
    console.log(`✅ ${file} - Found`)
  } else {
    console.log(`❌ ${file} - MISSING!`)
  }
})

console.log("\n📋 CHECKING REQUIRED FOLDERS:")
console.log("=============================")

requiredFolders.forEach((folder) => {
  if (fs.existsSync(folder) && fs.statSync(folder).isDirectory()) {
    console.log(`✅ ${folder}/ - Found`)
  } else {
    console.log(`❌ ${folder}/ - MISSING!`)
  }
})

// Check package.json scripts
console.log("\n📋 CHECKING PACKAGE.JSON SCRIPTS:")
console.log("=================================")

try {
  const packageJson = JSON.parse(fs.readFileSync("package.json", "utf8"))
  const requiredScripts = ["dev", "build", "start"]

  requiredScripts.forEach((script) => {
    if (packageJson.scripts && packageJson.scripts[script]) {
      console.log(`✅ "${script}" script - Found`)
    } else {
      console.log(`❌ "${script}" script - MISSING!`)
    }
  })
} catch (error) {
  console.log("❌ Could not read package.json")
}

console.log("\n🎯 NEXT STEPS:")
console.log("==============")
console.log("1. Fix any missing files/folders shown above")
console.log("2. Push changes to Git")
console.log("3. Check Vercel build logs")
console.log("4. Redeploy if necessary")
