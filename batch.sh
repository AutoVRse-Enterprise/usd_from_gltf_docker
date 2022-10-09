#!/bin/sh
docker run -i --rm -v c:/users/vivek/desktop/autovrse/docker-glt-to-udsz/:/usr/app --entrypoint="/bin/sh" leon/usd-from-gltf:latest -c 'for f in *.glb; do echo "Processing $f"; usd_from_gltf "$f" "${f%.*}.usdz"; done'
echo "Done"
