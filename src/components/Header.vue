<template>
    <v-app-bar app color="white">
        <v-app-bar-nav-icon @click="$emit('handleDrawer')"></v-app-bar-nav-icon>

        <!-- <v-toolbar-title>Title</v-toolbar-title> -->

        <v-spacer />

        <v-col lg="6" cols="12">
            <v-form class="mt-5">
                <v-text-field clearable variant="outlined" placeholder="検索" append-inner-icon="mdi-magnify" />
            </v-form>
        </v-col>
        <v-spacer />

        <v-menu offset-y>
            <template v-slot:activator="{ attrs, on }">
                <span class="mx-5 mr-10" style="cursor: pointer" v-bind="attrs" v-on="on">
                    <v-badge content="3" color="red" offset-y="10" offset-x="10">
                        <v-icon>mdi-bell</v-icon>
                    </v-badge>
                </span>
            </template>
            <v-list three-line width="250">
                <template v-for="(item, index) in items">
                    <v-subheader v-if="item.header" :key="item.header" v-text="item.header"></v-subheader>

                    <v-divider v-else-if="item.divider" :key="index" :inset="item.inset"></v-divider>

                    <v-list-item v-else :key="item.title">
                        <v-list-item-avatar>
                            <v-img :src="item.avatar"></v-img>
                        </v-list-item-avatar>

                        <v-list-item-content>
                            <v-list-item-title v-html="item.title"></v-list-item-title>
                            <v-list-item-subtitle v-html="item.subtitle"></v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                </template>
            </v-list>
        </v-menu>

        <v-btn icon>
            <v-icon>mdi-heart</v-icon>
        </v-btn>

        <v-btn icon>
            <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>

    </v-app-bar>
</template>

<script>
export default {
    name: "Header",

    items: [
        {
            avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
            title: "Brunch this weekend?",
            subtitle: `<span class="text--primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
        },
        { divider: true, inset: true },
        {
            avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
            title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
            subtitle: `<span class="text--primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.`,
        },
        { divider: true, inset: true },
        {
            avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
            title: "Oui oui",
            subtitle:
                '<span class="text--primary">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?',
        },
        { divider: true, inset: true },
        {
            avatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
            title: "Birthday gift",
            subtitle:
                '<span class="text--primary">Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?',
        },
        { divider: true, inset: true },
        {
            avatar: "https://cdn.vuetifyjs.com/images/lists/5.jpg",
            title: "Recipe to try",
            subtitle:
                '<span class="text--primary">Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
        },
    ],
}
</script>

<style></style>