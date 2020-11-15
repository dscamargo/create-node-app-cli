export default (pathName: string): string[] => {
  return [
    `cd ${pathName}`,
    "rm -rf .git",
    "git init",
    "git add .",
    "git commit -m 'First commit'",
    "yarn"
  ]
}