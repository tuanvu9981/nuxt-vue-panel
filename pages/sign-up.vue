<template>
    <v-card class="mx-auto my-16" max-width="450" elevation="5">
        <v-card-title class="text-h5 text-center mt-4 font-weight-bold text-blue text-lighten-3">飲食店管理画面</v-card-title>
        <p class="text-h7 text-center my-3 font-weight-bold">
            ユーザサインアップ
        </p>
        <v-container>
            <v-text-field v-model="email" label="メールアドレス" variant="outlined" :error="errorEmail"
                :error-messages="errEmailMsg"></v-text-field>

            <v-text-field class="mt-5" :append-inner-icon="visible ? 'mdi-eye' : 'mdi-eye-off'"
                :type="visible ? 'text' : 'password'" @click:append="visible = !visible" v-model="password" label="パスワード"
                variant="outlined" :error="errorPw" :error-messages="errPwMsg"></v-text-field>

            <p class="text-right font-weight-medium">
                アカウントを持っています？<NuxtLink to="/sign-in" class="text-green text-lighten-3">ログイン</NuxtLink>
            </p>

            <v-checkbox v-model="checked" color="success" :error="errorChecked" :error-messages="errCheckbox">
                <template v-slot:label>
                    <div>
                        私は
                        <v-tooltip location="bottom">
                            <template v-slot:activator="{ props }">
                                <a target="_blank" href="https://vuetifyjs.com" v-bind="props" @click.stop>
                                    利用条件
                                </a>
                            </template>
                            新しいウィンドウで開く
                        </v-tooltip>
                        に合意する
                    </div>
                </template>
            </v-checkbox>

            <v-container class="d-flex align-center justify-center">
                <v-btn color="success" width="180" class="text-h6" @click="signUp">
                    サインアップ
                </v-btn>
            </v-container>
        </v-container>
    </v-card>
</template>

<script>
import { ref } from 'vue';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'
import { app } from '../firebase/config';
import { FirebaseError } from '@firebase/util'

export default {
    name: "SignUp",
    setup() {
        const email = ref('');
        const password = ref('');
        const visible = ref(false);
        const errorEmail = ref(false);
        const errorPw = ref(false);
        const errorChecked = ref(false);
        const errEmailMsg = ref('');
        const errPwMsg = ref('');
        const errCheckbox = ref('');
        const checked = ref(false)

        const signUp = async () => {
            if (email.value === '' || !email.value.includes('@')) {
                errorEmail.value = true;
                errEmailMsg.value = 'メールは空あるいは形式が違います';
                if (password.value === '') {
                    errorEmail.value = true;
                    errPwMsg.value = 'パスワードは空です'
                }
                if (!checked.value) {
                    errorChecked.value = true;
                    errCheckbox.value = '利用条件チェックしてください'
                }
                return
            }
            try {
                const auth = getAuth(app);
                const user = await createUserWithEmailAndPassword(auth, email.value, password.value)
                // console.log(user);
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
            checked,
            visible,
            errorEmail, errorPw,
            errEmailMsg, errPwMsg,
            errorChecked, errCheckbox,
            signUp
        }
    }
}
</script>

<style></style>