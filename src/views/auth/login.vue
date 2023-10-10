<template>
    <v-container>
        <v-row>
            <v-col cols="12">
                <v-form>
                <v-text-field
                v-model="user.username"
                label="username"></v-text-field>
                <v-text-field
                v-model="user.password"
                label="password"
                type="password"></v-text-field>
                <v-btn @click="loginUser()" :disabled="valid">Submit</v-btn>
            </v-form>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import axios from 'axios';

export default {
    name: "login-view",
    data() {
        return { 
            user: {},
        }
    },
    methods: {
        async loginUser() {
            axios.post(`${import.meta.env.VITE_APP_URI}/auth/login`, {}, {username: this.user.username, password: this.user.password} )
            .then((res) => {
                localStorage.setItem('token', res.data.token);
            })
            .catch((err) => {
                this.alert = {
                    type: "error",
                    title: err.response.data.message
                }
            })
        }
    }
}
</script>