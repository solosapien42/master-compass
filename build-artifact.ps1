# Builds master-compass/artifact.html from index.html for publishing as a claude.ai Artifact.
# The Artifact host adds its own <!doctype>, <html>, <head>, <body>, charset and viewport,
# so those are stripped here. index.html stays the single source of truth.
$src = Join-Path $PSScriptRoot "master-compass\index.html"
$dst = Join-Path $PSScriptRoot "master-compass\artifact.html"
$html = [System.IO.File]::ReadAllText($src, [System.Text.Encoding]::UTF8)
$patterns = @(
  '(?i)<!doctype html>\s*',
  '(?i)<html[^>]*>\s*', '(?i)</html>\s*',
  '(?i)<head>\s*', '(?i)</head>\s*',
  '(?i)<body>\s*', '(?i)</body>\s*',
  '(?i)\s*<meta charset="[^"]*"\s*/?>',
  '(?i)\s*<meta name="viewport"[^>]*>'
)
foreach ($p in $patterns) { $html = [regex]::Replace($html, $p, '') }
[System.IO.File]::WriteAllText($dst, $html.Trim() + "`n", (New-Object System.Text.UTF8Encoding($false)))
Write-Host "Wrote $dst"
