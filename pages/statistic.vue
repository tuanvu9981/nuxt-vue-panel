<template>
    <v-app id="inspire">
        <Header @handleDrawer="handleDrawer"></Header>

        <v-navigation-drawer v-model="drawer" temporary width="250">
            <v-list class="ml-4">
                <v-list-item v-for="[icon, text, link] in links" :key="icon" link :to="link">
                    <template v-slot:prepend>
                        <v-icon :icon="icon"></v-icon>
                    </template>

                    <v-list-item-content>{{ text }}</v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
    </v-app>
</template>

<script>
import { ref } from 'vue';
import { links } from '~/utils/common/constant';

export default {
  name: "Statistic",
  setup() {

    const drawer = ref(false);

    const handleDrawer = () => {
      drawer.value = !drawer.value;
    }

    return {
      handleDrawer,
      drawer,
      links,
    }
  }

}
</script>