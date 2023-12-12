import useUserData from "~/composables/states"

export default defineNuxtRouteMiddleware((to, from) => {
    
    // console.log(process.server); // true
    
    // if (to.path !== '/sign-in' && to.path !== '/sign-up') {
    //     const [user, setUser] = useUserData();
    //     if (user.value.email === '') {
    //         // unauthorized
    //         return navigateTo('/sign-in', { redirectCode: 301 });
    //     }
    // }

})