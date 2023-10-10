<template>
    <v-container>
        <v-row>
            <v-responsive>
                <v-alert v-if="alert.message" :type="alert.status" :title="alert.title" :text="alert.message">
                </v-alert>
                <v-form v-model="valid" lazy-validation>
                <v-text-field
                v-model="user.username"
                :rules="[rules.required, rules.min, rules.max]"
                label="username"></v-text-field>
                <!-- <v-text-field
                v-model="user.email"
                :rules="rules.email"
                label="email"></v-text-field> -->
                <v-text-field
                v-model="user.password"
                :rules="rules.password"
                type="password"
                label="password"></v-text-field>
                <v-text-field
                v-model="user.passwordCheck"
                :rules="rules.passwordCheck"
                type="password"
                label="password again."></v-text-field>
                <v-btn @click="registerUser()" :disabled="valid">Submit</v-btn>
            </v-form>
            </v-responsive>
        </v-row>
        <v-row>
            <v-col cols="12">
                <!-- <span>info: Your email is only used for account recovery, you wont get any email from Asthriona ltd., or subdairy company unless you ask for it.</span> <br /> -->
                <span>Info: We are encrypting your information in our database, None of the Asthriona ltd, Asthriona Racing, nor Asthriona Engineering staff can decrypt it.</span>
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
            alert: {
                message: "",
                status: ""
            },
            rules: {
        required: (v) => !!v || "Required",
        min: (v) => (v && v.length >= 3) || "Must be at least 3 characters",
        max: (v) => (v && v.length <= 20) || "Must be less than 20 characters",
        email: (value) =>
  (value && /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i.test(value)) || "Invalid email",

        password: (value) =>
          (value &&
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
              value
            )) ||
          "Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character",
        passwordCheck: (v) => (v !== this.password) || "Passwords do not match",
            },
            valid: false,
        }
    },
    methods: {
        registerUser() {
            axios.post(`${import.meta.env.VITE_APP_URI}/auth/register`, {
                user: this.user
            })
            .then((res) => {
                console.log(res.data);
                this.alert = {
                    status: "success",
                    title: res.data.message,
                    text: "Your account has been created, you may now login!"
                }
            })
            .catch((err) => {
                console.log(err)
                this.alert = {
                    status: "error",
                    title: err.response.data.message,
                    text: err.response.data.message || "Something went wrong when trying to create your account, please try again later!"
                }
            })
        }
    }
}
</script>