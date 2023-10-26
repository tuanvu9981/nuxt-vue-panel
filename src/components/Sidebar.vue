<template>
    <v-navigation-drawer v-if="drawer" app>
        <v-img height="140" class="pa-4" src="https://preview.pixlr.com/images/800wm/1439/2/1439104804.jpg">
            <div class="text-center">
                <v-avatar class="mb-4" color="grey darken-1" size="64">
                    <v-img aspect-ratio="30"
                        src="https://yt3.ggpht.com/esazPAO03T0f0vKdByJvkDy6MSwjyG5f-c_2S2CJapszQ3KPQyZarpoqvgv0Us0atUbILytj=s88-c-k-c0x00ffffff-no-rj" />
                </v-avatar>
                <h2 class="white--text">Dashboard</h2>
            </div>
        </v-img>

        <v-divider></v-divider>

        <v-list>
            <v-list-item v-for="[icon, text] in links" :key="icon" link>

                <template v-slot:prepend>
                    <v-icon :icon="icon"></v-icon>
                </template>

                <v-list-item-content v-text="text"></v-list-item-content>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
export default {
    name: "Sidebar",
    props: ["drawer"],
    data() {
        return {
            links: [
                ['mdi-microsoft-windows', 'ダッシュボード'],
                ['mdi-account', 'プロフィール'],
                ['mdi-clipboard-list-outline', '製品'],
                ['mdi-card-account-details-outline', '注文'],
                ['mdi-cog', 'システム設定'],
            ]
        }
    }
}
</script>

<style></style>