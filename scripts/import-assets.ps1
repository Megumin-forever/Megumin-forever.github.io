param(
  # Existing Jekyll clone (or the same Git clone after overlaying Aurora files).
  [string]$OldRepo = (Resolve-Path (Join-Path $PSScriptRoot '..')).Path
)

$ErrorActionPreference = 'Stop'
$root = (Resolve-Path (Join-Path $PSScriptRoot '..')).Path
$imagesTarget = Join-Path $root 'public\images'
$filesTarget = Join-Path $root 'public\files'
New-Item -ItemType Directory -Path $imagesTarget -Force | Out-Null

$assetFiles = @('R.jpg', 'jluai.png', 'tsinghua-logo.png')
foreach ($name in $assetFiles) {
  $target = Join-Path $imagesTarget $name
  if (Test-Path $target) {
    Write-Host "Exists: $target"
    continue
  }
  $source = Join-Path (Join-Path $OldRepo 'images') $name
  if (Test-Path $source) {
    Copy-Item -LiteralPath $source -Destination $target -Force
    Write-Host "Copied: $name"
  } else {
    # Allows a standalone ZIP preview when original clone is not available locally.
    $url = "https://megumin-forever.github.io/images/$name"
    Write-Host "Fetching: $url"
    try {
      Invoke-WebRequest -Uri $url -OutFile $target -TimeoutSec 45
    } catch {
      Write-Warning "Could not retrieve $name. The current source-site URLs will still work in preview, but import images before publishing."
      if (Test-Path $target) { Remove-Item -LiteralPath $target -Force }
    }
  }
}

$oldFiles = Join-Path $OldRepo 'files'
if (Test-Path $oldFiles) {
  New-Item -ItemType Directory -Path $filesTarget -Force | Out-Null
  Copy-Item -Path (Join-Path $oldFiles '*') -Destination $filesTarget -Recurse -Force -ErrorAction SilentlyContinue
  Write-Host 'Copied tracked public files/ into Astro public/files/.'
}
Write-Host 'Asset import finished.'
