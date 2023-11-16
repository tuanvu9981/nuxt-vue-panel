<template>
    <v-main>
        
    </v-main>
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

        const signIn = async () => {
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
            signIn,
        }
    }
}
</script>

<style></style>