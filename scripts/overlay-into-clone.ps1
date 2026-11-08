param(
  [Parameter(Mandatory=$true)]
  [string]$TargetRepo
)
$ErrorActionPreference = 'Stop'
$source = (Resolve-Path (Join-Path $PSScriptRoot '..')).Path
$target = (Resolve-Path $TargetRepo).Path
if (-not (Test-Path (Join-Path $target '.git'))) {
  throw 'TargetRepo must be an existing git clone with .git. No files changed.'
}
if ($source -eq $target) { throw 'Source and TargetRepo are the same folder.' }

Write-Host 'Overlaying Astro files into git clone. Preserving .git and old Jekyll files for now.'
$folders = @('src', 'public', 'scripts', '.github')
foreach ($name in $folders) {
  $src = Join-Path $source $name
  $dst = Join-Path $target $name
  if (Test-Path $src) {
    New-Item -ItemType Directory -Path $dst -Force | Out-Null
    Copy-Item -Path (Join-Path $src '*') -Destination $dst -Recurse -Force
  }
}
$rootFiles = @('package.json', 'astro.config.mjs', 'tsconfig.json', 'README.md', 'MIGRATION.md', '.gitignore')
foreach ($name in $rootFiles) {
  $src = Join-Path $source $name
  if (Test-Path $src) { Copy-Item -LiteralPath $src -Destination (Join-Path $target $name) -Force }
}
Write-Host 'Overlay complete. Next: cd TargetRepo; .\scripts\import-assets.ps1 -OldRepo .'
Write-Host 'Review git status. Do not merge to master or change GitHub Pages until npm run build succeeds.'
Write-Host 'Before final deployment, remove/disable any conflicting old Jekyll Pages workflow.'
