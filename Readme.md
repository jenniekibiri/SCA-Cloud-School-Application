# Instruction/Documentation
The following is the instruction/documentation for the project. 
The webapp is a react application

### Build Image
```shell
docker build -t jennykibiri/sca-cloud-application .
```
### Run the container
```shell
docker run --name sca-cloud-container -it -p 3000:3000  jennykibiri/sca-cloud-application
```
## Push image to docker hub
```shell
docker push jennykibiri/sca-cloud-school-application
```

## pull the image from docker hub and run the container
```shell
docker pull jennykibiri/sca-cloud-school-application:latest
docker run --name sca-cloud-container -it -p 3000:3000  jennykibiri/sca-cloud-school-application:latest
```


dockerhub repository link:``` https://hub.docker.com/repository/docker/jennykibiri/sca-cloud-school-application```