### Deployment instructions.
1. Create a nodejs app.
 create a server.js file that defines a web app using the Express.js framework

2. Create a dockerfile.


3. Build your image.

      move to the folder that has the dockerfile and run the build command.

       docker build -t <your username>/<name you wanna call your image> 
![Build command](https://i.imgur.com/3P2oItc.png).

4. Run your image.

        docker run -p 5000 -d <your username>/name of image

![docker Run command](https://i.imgur.com/i3vAzx7.png)

5. Test your image

     To test the web-app, get the port of the app that Docker mapped:

       ``` docker ps```

![Test command](https://i.imgur.com/gfK8e1D.png).
   * Then call your app using curl

![Test Output](https://i.imgur.com/PgaGIAV.png)

6. Push the image to the hub
    you can use docker dashboard locally.

    or use the command line [see Link](https://ropenscilabs.github.io/r-docker-tutorial/04-Dockerhub.html)
```
          docker push yourhubusername/image
```




## Link to docker hub repository. 
[Docker Hub Repo](https://hub.docker.com/repository/docker/jennykibiri/stable-branch)