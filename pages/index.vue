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

    <v-main>
      <v-container class="py-8 px-6">
        <v-row>
          <!-- <v-col v-for="card in cards" :key="card" cols="12">
              <v-card>
                <v-list lines="two">
                  <v-list-subheader :title="card"></v-list-subheader>
                  <template v-for="n in 6" :key="n">
                    <v-list-item class="d-flex justify-left" :title="`Message ${n}`"
                      subtitle="Lorem ipsum dolor sit amet, consectetur adipisicing elit">
                      <template v-slot:prepend>
                        <v-avatar color="grey-darken-1"></v-avatar>
                      </template>
                    </v-list-item>

                    <v-divider v-if="n !== 6" :key="`divider-${n}`" inset></v-divider>
                  </template>
                </v-list>
              </v-card>
            </v-col> -->
          <Dashboard />
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { ref } from 'vue';
import Header from '../components/Header.vue';
import Dashboard from '../components/Dashboard.vue';

export default {
  components: { Header, Dashboard },
  name: "HomeView",
  setup() {

    const drawer = ref(false);
    const cards = ['Today', 'Yesterday'];
    const links = [
      ['mdi-card-account-details-outline', '新しい注文', '/new-order'],
      ['mdi-clipboard-list-outline', '統計', '/statistic'],
    ]

    const handleDrawer = () => {
      drawer.value = !drawer.value;
    }

    return {
      handleDrawer,
      drawer,
      cards,
      links,
    }
  }

}
</script>