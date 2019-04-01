#!/bin/sh

 docker run -it --rm -v $(pwd):/work -w /work -p 3001:3001 node:alpine sh