<template>
  <v-app id="inspire">
    <Header @handleDrawer="handleDrawer"></Header>

    <v-navigation-drawer v-model="drawer" temporary>
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
      ['mdi-microsoft-windows', 'ダッシュボード'],
      ['mdi-account', 'プロフィール'],
      ['mdi-clipboard-list-outline', '製品'],
      ['mdi-card-account-details-outline', '注文'],
      ['mdi-cog', 'システム設定'],
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