<template>
    <v-card
        class="mx-auto my-16"
        max-width="450"
        max-height="450"
        elevation="5"
    >
        <v-card-title class="text-h5 text-center mt-4 font-weight-bold text-blue text-lighten-3">飲食店管理画面</v-card-title>
        <p class="text-h7 text-center my-3 font-weight-bold">
            ユーザログイン
        </p>
        <v-container>
            <v-text-field
                v-model="email"
                label="メールアドレス"
                variant="outlined"
                :error="errorEmail"
                :error-messages="errEmailMsg"
            ></v-text-field>

            <v-text-field
                class="mt-5"
                :append-inner-icon="visible ? 'mdi-eye' : 'mdi-eye-off'"
                :type="visible ? 'text': 'password'"
                @click:append="visible = !visible"
                v-model="password"
                label="パスワード"
                variant="outlined"
                :error="errorPw"
                :error-messages="errPwMsg"

            ></v-text-field>

            <p class="text-right font-weight-medium">
                アカウントを持っていません？<NuxtLink to="/sign-up" class="text-green text-lighten-3">サインアップ</NuxtLink>
            </p>

            <v-container class="d-flex align-center justify-center">
                <v-btn color="success" width="180" class="text-h6" @click="signIn">
                    ログイン
                </v-btn>
            </v-container>
        </v-container>
    </v-card>
</template>

<script>
import { ref } from 'vue';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { FirebaseError } from '@firebase/util'

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

        const signIn = async () => {
            if (email.value === '' || !email.value.includes('@')){
                errorEmail.value = true;
                errEmailMsg.value = 'メールは空あるいは形式が違います';
                if (password.value === ''){
                    errorEmail.value = true;
                    errPwMsg.value = 'パスワードは空です'
                }
                return
            } 
            
            try {
                const auth = getAuth()
                await signInWithEmailAndPassword(auth, email, password)
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
            signIn,
        }
    }
}
</script>

<style></style>