<template>
    <v-card class="mx-auto my-16" max-width="450" max-height="450" elevation="5">
        <v-card-title class="text-h5 text-center mt-4 font-weight-bold text-blue text-lighten-3">飲食店管理画面</v-card-title>
        <p class="text-h7 text-center my-3 font-weight-bold">
            ユーザログイン
        </p>
        <v-container>
            <v-text-field v-model="email" label="メールアドレス" variant="outlined" :error="errorEmail"
                :error-messages="errEmailMsg"></v-text-field>

            <v-text-field class="mt-5" :append-inner-icon="visible ? 'mdi-eye' : 'mdi-eye-off'"
                :type="visible ? 'text' : 'password'" @click:append-inner="visible = !visible" v-model="password" label="パスワード"
                variant="outlined" :error="errorPw" :error-messages="errPwMsg"></v-text-field>

            <p class="text-right font-weight-medium">
                アカウントを持っていません？<NuxtLink to="/sign-up" class="text-green text-lighten-3">サインアップ</NuxtLink>
            </p>

            <v-container class="d-flex align-center justify-center">
                <v-btn color="success" width="180" class="text-h6" @click="signIn">
                    <div v-show="isWaiting">
                        <v-progress-circular color="white" indeterminate size="22.5">
                        </v-progress-circular>
                    </div>
                    <div v-show="!isWaiting">ログイン</div>
                </v-btn>
            </v-container>
        </v-container>
    </v-card>
</template>

<script>
import { ref } from 'vue';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import useFirebaseApp from '../composables/firebase.config';
import { FirebaseError } from '@firebase/util'
import useUserData from '../composables/states';
import { DEFAULT_AVATAR } from "~/utils/common/constant";

export default {
    name: "SignIn",
    setup() {
        const email = ref('');
        const password = ref('');
        const visible = ref(false);
        const errorEmail = ref(false);
        const errorPw = ref(false);
        const errEmailMsg = ref('');
        const errPwMsg = ref('');
        const [user, setUser] = useUserData();
        const isWaiting = ref(false);

        const signIn = async () => {
            if (email.value === '' || !email.value.includes('@')) {
                errorEmail.value = true;
                errEmailMsg.value = 'メールは空あるいは形式が違います';
                if (password.value === '') {
                    errorEmail.value = true;
                    errPwMsg.value = 'パスワードは空です'
                }
                isWaiting.value = fasle;
                return
            }

            isWaiting.value = true;
            try {
                const runtimeConfig = useRuntimeConfig();
                const app = useFirebaseApp(runtimeConfig);
                const auth = getAuth(app);
                const result = await signInWithEmailAndPassword(auth, email.value, password.value);
                const newEmail = result.user.email

                setUser({ 
                    displayName: !result.user.displayName ? newEmail.split('@')[0] : result.user.displayName, 
                    email: result.user.email,
                    photoURL: !result.user.photoURL ? DEFAULT_AVATAR : result.user.photoURL
                });
                isWaiting.value = false;
                await navigateTo('/')
            } catch (e) {
                if (e instanceof FirebaseError) {
                    console.log(e)
                }
            }
        }

        return {
            email,
            password,
            visible,
            errorEmail, errorPw,
            errEmailMsg, errPwMsg,
            isWaiting,
            signIn,
        }
    }
}
</script>

<style></style>