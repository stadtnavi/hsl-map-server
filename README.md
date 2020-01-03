# hsl-map-server customised for Herrenberg
[![Build Status](https://travis-ci.org/mfdz/hsl-map-server.svg?branch=master)](https://travis-ci.org/mfdz/hsl-map-server)

Start development server:

```
docker build -t hsl-map-server .
docker run --rm -p 8080:8080 -h hsl-map-server --name hsl-map-server -e FONTSTACK_PASSWORD=[salasana] hsl-map-server
```

# Map layers

- public transport stops: https://github.com/HSLdevcom/tilelive-otp-stops
- roadworks in Baden-Württemberg: https://github.com/mfdz/tilelive-roadworks-bw
- car parking: https://github.com/mfdz/tilelive-park-api

Each one has a few configuration options which can be set as environment variables.

# Updating the `yarn.lock`

It seems hard to install the dependencies in `package.json` with more recent
nodejs versions, so if you want to update the `yarn.lock` you need to output
the file inside the docker container.

To do this you need to build the container and run a bash shell.

```
docker build . -t mfdz/hsl-map-server:latest && docker run -it mfdz/hsl-map-server /bin/bash
```

Now that you are inside the docker container you can run the yarn commands.

