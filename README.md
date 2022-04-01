## Test Process and Output 
 The first step is to build the image from the Dockerfile.

- command to build the image: ``` docker build -t jennykibiri/sca-cloud-school-application .```

Output:

![image build process ](https://i.imgur.com/DgfDH81.png)

### The second step is to run the container from the image.
 -  --name is used to give the container a name.
 -  -it is used to run the container in the interactive mode.
 -   -p is usedd to bind the port 3000 to the host.
 
  - command to run the container: ```docker run --name sca-cloud-container -it -p 3000:3000  sca-cloud-application```

Output:
![running container  ](https://i.imgur.com/HQh10Cl.png)

Output:
 Running container with name sca-cloud-container and port 3000 on the browser.
 
![running container  ](https://i.imgur.com/rfKuhwA.png)