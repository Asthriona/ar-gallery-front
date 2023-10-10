<template>
    <v-container>
        <v-row>
            <v-col cols="12">
                <h1>Race Stuff</h1>
            </v-col>
            <v-col cols="12">
                <h1>race:</h1> <br />
                <v-btn>Add Race</v-btn>
                <v-btn>Update Race</v-btn>
                <v-btn>Delete Race</v-btn>
                <br />
                Season: <br>
                <v-btn>Add Season</v-btn>
            </v-col>
            <v-col cols="12">
                <h1>Drivers</h1>
            </v-col>
            <v-col cols="12">
                <v-btn>
                    Create driver Profile
                </v-btn>
            </v-col>
            <v-col cols="2" v-for="driver in drivers" :key="driver._id">
                <v-card class="mr-4 ml-4 mx-auto">
                    <v-img :src="driver.image"></v-img>
                    <v-card-title>{{ driver.name }}</v-card-title>
                    <v-card-text>
                        Car: {{ driver.carNbr }} <br />
                        Team: {{ driver.team || "None" }}
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import axios from "axios";

export default {
    name: "admin-home",
    data() {
        return { 
            drivers: []
        }
    },
    methods: {
        getDrivers() {
            axios.get(`${import.meta.env.VITE_APP_URI}/driver`)
            .then((res) => {
                this.drivers = res.data.driver;
            })
        }
    },
    mounted() {
        this.getDrivers()
    }
}
</script>