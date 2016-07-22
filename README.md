e-business homepage

# webhook

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
