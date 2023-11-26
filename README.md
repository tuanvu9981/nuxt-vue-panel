## A small project to learn basical thing in VueJS, NuxtJS, Vuetify library, SASS

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

### Using macbook with VSCode　MacbookでのVSCodeを使用
1. Search through the whole project プロジェクト全体を検索: ```Command + Shift + F```
2. Search in a specific file 特定ファイルで検索: ```Command + F```
3. Select a whole variable, constant string: ```Command + D```
4. Preview README.md: ```Command + K + V```

### Tables in Vuejs
1. You need to import these components into plugin before using
```
import {
  VDataTable,
  VDataTableServer,
  VDataTableVirtual,
} from "vuetify/labs/VDataTable";

export default createVuetify({
  components: {
    VDataTable,
    VDataTableServer,
    VDataTableVirtual,
  },
})
```

2. October 31st, attributes **caption** of **<v-table-data>** was removed. You need to use another css class to custom 

### Automatically deploy to firebase hosting
- Reference: [Firebase hosting deploy](https://medium.com/@mrjohnkilonzi/how-to-deploy-your-vuejs-using-github-actions-on-firebase-hosting-a667aabd88f7)

3. Deploy your app to Firebase directly (**manually**)
- Install firebase with npm 
```
$ npm install firebase
```

- Install firebase cli 
```
$ npm install -g firebase-tools
```

- Deploy your code to firebase hosting
  - **(1st-compulsory command): Sign in to google** 
  ```
  $ firebase login
  ```

  - **(2nd-compulsory command): Initialize your project at local**
  ```
  $ firebase init
  ```

  - **(3rd-compulsory command): Initialize hosting by answering questions in terminal** 
  ```
  $ firebase init hosting
  ```
  - After **firebase init**, firebase can select projects in **logged account**
  - We will select one of **existing projects** 
  - Then, authorize Firebase to **access Github repositories**. In this case, Firebase will have the right to create **FIREBASE_TOKEN** in **vuejs-admin-panel** repository's secret. (used in workflow github-action)
  - Firebase CLI will automatically create 2 files: **firebase.json** and **.firebaserc**
  - Firebase ask which command line should be execute when merging, then Firebase also helps us to automatically create github action yaml file to deploy.  

  - Deploy your web app to firebase (manually)
  ```
  $ firebase deploy
  ```
* Note: **npm i -g <package_name>** is a command to install a global package/tool

4. Create secret value in github
- References: [Github secret value](https://docs.github.com/en/actions/security-guides/using-secrets-in-github-actions)
- Description: Github repo > Settings > Click on **New repository secret** > Input new secret and save.

5. Firebase commands.
- **References**: 
  - [Firebase Login Command](https://stackoverflow.com/questions/33916448/how-to-change-firebase-user-login-identity-from-command-line-cli)
  - 

- **The most-used commands**:
  - Check version of firebase:
  ```
  $ firebase --version
  ```

  - First time login, then a new window in default browser will be opened automatically. You need to allow Firebase-cli to access your project (images in **images/firebase** folder)
  ```
  $ firebase login
  ```

  - If you want to add new firebase account, use the below command (the authentication and authorization process will be the same as first time login)
  ```
  $ firebase login:add <new_email>
  ``` 

  - Check list of logged in accounts
  ```
  $ firebase login:list
  ```

  - Switch from an account to another account
  ```
  $ firebase login:use <new_account>
  ```

  - Or if you cant switch, use this below command (new URL in browser will be automatically opened). Wait until **✔  Success! Logged in as <new_email>** appear
  ```
  $ firebase login --reauth
  ```
### Firebase Hosting
1. **firebase.json** with pure Vuejs hosting deploy
```
{
  "hosting": {
    "public": "dist",
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ]
  }
}
```

2. with nuxtjs (using **npm run build**)
```
{
  "functions": {
    "source": ".output/server"
  },
  "hosting": [
    {
      "site": "vuejs-admin-panel-13efd",
      "public": ".output/public",
      "cleanUrls": true,
      "rewrites": [
        {
          "source": "**",
          "function": "server"
        }
      ]
    }
  ]
}
```

3. with nuxtjs (using **npm run generate**)
```
{
  "hosting": {
    "public": ".output/public",
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ]
  }
}
```
- **npm run build** command will execute **vue-cli-service build** command, generate **dist** folder. There is an **index.html** file inside this **dist** folder, which was compiled after building.


### Firebase functions
- Reference: [Hosting setup and authorization](https://qiita.com/zono345/items/27744ef00b97b0cd8886)


### NuxtJS setup 
- Start project command: 
    - In a pure VueJS project:
    ```
    $ npm run serve
    ```

    - In a NuxtJS project
    ```
    $ npm run dev
    ```

    - Because the start command changed, we also need to change start command in **Dockerfile** as well.

- Basic command line in NuxtJS
    - Build the application for production
    ```
    $ npm run build
    ```

    - Preview production built application
    ```
    $ npm run preview
    ```

- **Nuxtjs** will add a **nuxt.config.ts** file to define necessary configuration for the whole project. Follow the instruction in [VueJS page instruction](https://vuetifyjs.com/en/getting-started/installation/#using-nuxt-3) to define 

- Then, add a **plugins** folder and a **vuetify.ts** inside
```
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { aliases, mdi } from "vuetify/iconsets/mdi"
import { createVuetify } from 'vuetify'

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    components,
    directives,
    icons: {
      defaultSet: "mdi",
      aliases,
      sets: {
        mdi
      }
    }
  })
  app.vueApp.use(vuetify)
})
```

- The default exported **components** above doesnt contain **Table**. So you also need to declare Table components to be used.

```
import {
  VDataTable,
  VDataTableServer,
  VDataTableVirtual,
} from "vuetify/labs/VDataTable";

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    components: {
        ...components,
        VDataTable,
        VDataTableServer,
        VDataTableVirtual,
    },
    directives,
    ...
    })
    app.vueApp.use(vuetify)
})
```

### Deployment
1. Using **nuxt generate**, we can generate a static html file, but ERROR kept appearing and [here's](https://nitro.unjs.io/deploy/providers/firebase) the reason why: 
```
Firebase tools use the engines.node version in package.json to determine which node version to use for your functions. Nitro automatically writes to the .output/server/package.json with configured Node.js version.
```

