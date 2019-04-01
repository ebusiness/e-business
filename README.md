## e-business homepage

- docker

```sh
docker run -it --rm -v $(pwd):/work -w /work -p 3001:3001 node:alpine sh -c '
    npm i
    npm start
'
```

- deploy

push all dist to s3
