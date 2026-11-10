#!/bin/sh
# Maintainer helper: shows visitors a "being updated" screen with a mini game, then reloads them when done.
#   tools/update.sh begin    -> sets updating=true and pushes
#   (make and commit your edits)
#   tools/update.sh end      -> bumps the version, sets updating=false and pushes (visitors auto-reload)
set -e
cd "$(dirname "$0")/.."
V=$(sed -n 's/.*"v":\([0-9]*\).*/\1/p' version.json)
case "$1" in
 begin) echo "{\"v\":$V,\"updating\":true,\"msg\":\"\"}" > version.json; git add version.json; git commit -qm "Start update"; git push -q;;
 end) echo "{\"v\":$((V+1)),\"updating\":false,\"msg\":\"\"}" > version.json; git add -A; git commit -qm "Finish update v$((V+1))"; git push -q;;
 *) echo "usage: $0 begin|end"; exit 1;;
esac
