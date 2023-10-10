import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
    state: () => ({
        userId: "",
        username: "",
        profile: null,
        isAdmin: false,
        isLoggedIn: false
    }),
    actions: {
        setUser(user) {
            this.userId = user.userId,
            this.username = user.username,
            this.profile = user.driver,
            this.isAdmin = user.isAdmin,
            this.isLoggedIn = true
        }
    }
})