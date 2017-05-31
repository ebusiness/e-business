## e-business homepage

- docker

  ```sh
  docker run -d --restart=always --name=homepage -p 80:80 -p 443:443 -v /var/gogs/gogs/conf/rapid-cer.pem:/ssl/cert.pem -v /var/gogs/gogs/conf/server-key.pem:/ssl/key.pem ebusinessdocker/home
  ```

- webhook

  ```json
  {
      "Hooks":[
          {
              "Repo":"https://github.com/ebusiness/e-business",
              "Branch":"master",
              "Shell":"docker restart homepage"
          }
      ]
  }
  ```

  ```sh
  docker run -d -v /home/ec2-user/webhook/config.json:/config.json -p 9000:9000 -v /var/run/docker.sock:/var/run/docker.sock  --name webhook --restart=always starboychina/webhook
  ```
