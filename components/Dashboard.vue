<template>
    <div class="dashboard">
        <!-- Dashboard and Button will lie at opposite side, center between -->
        <!-- <p class="d-flex justify-space-between align-center">
            Dashboard
            <v-btn color="success" class="lg-rounded">View Orders</v-btn>
        </p> -->

        <v-row class="my-2">
            <v-col lg="7" cols="12">
                <v-alert dense text type="success" class="mb-3" variant="outlined">
                    <!-- success will display a green -->
                    <strong>Login successfull: </strong>Good morning
                </v-alert>

                <v-row>
                    <v-col lg="6" cols="12" v-for="(activity, index) in activities" :key="index">
                        <v-card elevation="2" class="rounded-lg">
                            <v-card-text class="d-flex justify-space-between align-center">
                                <div class="">
                                    <strong>{{ activity.title }}</strong>
                                    <small>Last 2 week</small>
                                </div>

                                <v-avatar :color="activity.color" size="60">
                                    <span class="white-text">{{ activity.amounts }}</span>
                                </v-avatar>
                            </v-card-text>
                        </v-card>
                    </v-col>
                </v-row>
            </v-col>

            <v-col lg="5" cols="12">
                <v-card>
                    <v-card-title>Activities</v-card-title>
                    <v-timeline side="end" align="start">
                        <v-timeline-item dot-color="pink" size="small">
                            <div class="d-flex">
                                <div>
                                    <strong>New Icon</strong>
                                    <div class="text-caption">
                                        Mobile App
                                    </div>
                                </div>
                            </div>
                        </v-timeline-item>

                        <v-timeline-item dot-color="teal-lighten-3" size="small">
                            <div class="d-flex">
                                <div>
                                    <strong>Design Stand Up</strong>
                                    <div class="text-caption mb-2">
                                        Hangouts
                                    </div>
                                </div>
                            </div>
                        </v-timeline-item>

                        <v-timeline-item dot-color="teal-lighten-3" size="small">
                            <div class="d-flex">
                                <div>
                                    <strong>Finish Home Screen</strong>
                                    <div class="text-caption">
                                        Web App
                                    </div>
                                </div>
                            </div>
                        </v-timeline-item>
                    </v-timeline>
                </v-card>
            </v-col>
        </v-row>

        <v-row>
            <div class="table-caption">Data table</div>
            <v-col lg="12">
                <v-data-table :items-per-page="itemsPerPage" :headers="headers" :items="desserts" item-value="name"
                    class="elevation-1">
                    <template #header>
                        <caption class="d-sr-only">Ice Cream Flavors</caption>
                    </template>
                </v-data-table>
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {
    name: "Dashboard",
    setup() {
        const activities = [
            { title: "Total Products ", color: "red", amounts: 4545 },
            { title: "Total Categories ", color: "purple", amounts: 23 },
            { title: "Total Orders ", color: "indigo", amounts: 4545 },
            { title: "Pending Products ", color: "light-blue", amounts: 4545 },
        ]

        const itemsPerPage = 5;

        const headers = [
            {
                title: 'Dessert (100g serving)',
                align: 'start',
                sortable: false,
                key: 'name',
            },
            { title: 'Calories', align: 'end', key: 'calories' },
            { title: 'Fat (g)', align: 'end', key: 'fat' },
            { title: 'Carbs (g)', align: 'end', key: 'carbs' },
            { title: 'Protein (g)', align: 'end', key: 'protein' },
            { title: 'Iron (%)', align: 'end', key: 'iron' },
        ];

        const desserts = [
            {
                name: 'Frozen Yogurt',
                calories: 159,
                fat: 6.0,
                carbs: 24,
                protein: 4.0,
                iron: '1',
            },
            {
                name: 'Jelly bean',
                calories: 375,
                fat: 0.0,
                carbs: 94,
                protein: 0.0,
                iron: '0',
            },
            {
                name: 'KitKat',
                calories: 518,
                fat: 26.0,
                carbs: 65,
                protein: 7,
                iron: '6',
            },
            {
                name: 'Eclair',
                calories: 262,
                fat: 16.0,
                carbs: 23,
                protein: 6.0,
                iron: '7',
            },
            {
                name: 'Gingerbread',
                calories: 356,
                fat: 16.0,
                carbs: 49,
                protein: 3.9,
                iron: '16',
            },
            {
                name: 'Ice cream sandwich',
                calories: 237,
                fat: 9.0,
                carbs: 37,
                protein: 4.3,
                iron: '1',
            },
            {
                name: 'Lollipop',
                calories: 392,
                fat: 0.2,
                carbs: 98,
                protein: 0,
                iron: '2',
            },
            {
                name: 'Cupcake',
                calories: 305,
                fat: 3.7,
                carbs: 67,
                protein: 4.3,
                iron: '8',
            },
            {
                name: 'Honeycomb',
                calories: 408,
                fat: 3.2,
                carbs: 87,
                protein: 6.5,
                iron: '45',
            },
            {
                name: 'Donut',
                calories: 452,
                fat: 25.0,
                carbs: 51,
                protein: 4.9,
                iron: '22',
            },
        ];

        return {
            activities,
            itemsPerPage,
            headers,
            desserts
        }
    }
}
</script>

<style scoped>
.table-caption {
    width: 100%;
    text-align: center;
    font-weight: bold;
    margin-top: 5px;
    margin-bottom: 5px;
    font-size: x-large;
}
</style>