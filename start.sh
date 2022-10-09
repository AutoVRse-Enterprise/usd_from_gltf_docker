# #!/bin/sh
docker build -t nodeusd .
docker run -d -i -v c:/users/vivek/desktop/autovrse/docker-gltf-to-udsz:/usr/app nodeusd sh -c "cd backend && npm install && npm start"