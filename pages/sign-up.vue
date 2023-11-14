<template>

</template>

<script>
import { ref } from 'vue';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'
import { FirebaseError } from '@firebase/util'

export default {
    name: "SignUp",
    setup(){
        const email = ref('')
        const password = ref('')

        const signUp = async () => {
            try {
                const auth = getAuth()
                const user = await createUserWithEmailAndPassword(auth, email, password)
                // user: UserCredential
            } catch (e) {
                if (e instanceof FirebaseError) {
                    console.log(e)
                }
            }
        }

        return {
            email,
            password,
            signUp
        }
    }
}
</script>

<style>
</style>