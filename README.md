## A small project to learn basical thing in VueJS, Vuetify library, SASS

### The project setup commands
1. After cloning, use **npm install** or **npm i** to install necessary packages

2. Compile and execute, use **npm run serve**

3. Compiles and minifies for production, use: **npm run build**

4. Lints and fixes files, use: **npm run lint**

### Customize configuration

1. Use **npm** to install vue-cli (stand for Vue Command Line) globally
```
$ npm install -g @vue/cli
```

2. Create a new VueJS project: 
```
$ vue create <project_name>
```

3. Add Vuetify and modify components (from pure HTML to Vuetify components) at the same time
```
$ vue add vuetify (then select Vue 3 CLI)
```

4. Add Router and automatically create router folder with full settings
```
$ vue add router
```

### Using docker 
1. cd into this repository, replace **.env.example** with **.env**, then:
```
$ docker-compose up
```

2. Rebuild container after installing some new libraries or after writing some more codes
```
$ docker-compose up --build 
```

3. Rebuild container and run it in the background (after rebuilding, it will show successful signal but quit from docker session. We still can extract running container using **docker ps**)
```
$ docker-compose up -d --build
```

4. Build image and run a container when there's only Dockerfile (without docker-compose)
```
$ docker build -t <container_name> .
```