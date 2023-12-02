// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/auth"
import type { RuntimeConfig } from "nuxt/schema";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const useFirebaseApp = (config: RuntimeConfig) => {
    const firebaseConfig = {
      apiKey: config.public.firebaseApiKey,
      authDomain: "vuejs-admin-panel-13efd.firebaseapp.com",
      projectId: "vuejs-admin-panel-13efd",
      storageBucket: "vuejs-admin-panel-13efd.appspot.com",
      messagingSenderId: config.public.firebaseMessageKey,
      appId: "1:414984117908:web:5032d11b3719afe5c21e81",
    };

    return initializeApp(firebaseConfig);
}

export default useFirebaseApp;