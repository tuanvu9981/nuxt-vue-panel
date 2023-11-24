<template>
    <v-app id="inspire">
        <Header @handleDrawer="handleDrawer"></Header>

        <v-navigation-drawer v-model="drawer" temporary width="250">
            <v-list class="ml-4">
                <v-list-item v-for="[icon, text] in links" :key="icon" link>
                    <template v-slot:prepend>
                        <v-icon :icon="icon"></v-icon>
                    </template>

                    <v-list-item-content>{{ text }}</v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

        <v-main>
            <v-container class="py-8 px-6">
                <v-row>
                    <v-col>
                        <p>
                            食品名
                        </p>
                        <v-select clearable label="Select"
                            :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']">
                        </v-select>
                    </v-col>

                    <v-col>
                        <p>
                            数
                        </p>
                        <v-text-field v-model="number" solo label="Solo" clearable></v-text-field>
                    </v-col>
                </v-row>

                <v-row>
                    <v-col>
                        <p>
                            支払い形式
                        </p>
                        <v-select clearable label="Select"
                            :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']">
                        </v-select>
                    </v-col>
                </v-row>

                <v-row>
                    <v-btn>
                        確定
                    </v-btn>
                </v-row>
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
export default {
    name: "NewOrder",
    setup() {
        const drawer = ref(false);
        const number = ref(0);
        const links = [
            ['mdi-card-account-details-outline', '新しい注文'],
            ['mdi-clipboard-list-outline', '統計'],
        ]
        const foodList = [
            { name: "", image: "" },
            { name: "", image: "" },
            { name: "", image: "" }
        ]

        const handleDrawer = () => {
            drawer.value = !drawer.value;
        }

        return {
            handleDrawer,
            drawer,
            links,
            number,
            foodList,
        }
    }
}
</script>

<style></style>