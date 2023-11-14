<template>
  <v-app id="inspire">

    <!-- Sidebar -->
    <Sidebar :drawer="drawer" />

    <!-- Header -->
    <Header @handleDrawer="handleDrawer" />

    <!-- Dashboard -->
    <v-main>
      <v-container class="py-8 px-6" fluid>
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
          <Dashboard/>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { ref } from 'vue';
import Header from '../components/Header.vue';
import Sidebar from '../components/Sidebar.vue';
import Dashboard from '../components/Dashboard.vue';

export default {
  components: { Sidebar, Header, Dashboard },
  name: "HomeView",
  setup() {

    const drawer = ref(true);
    const cards = ['Today', 'Yesterday'];

    const handleDrawer = () => {
      drawer.value = !drawer.value;
    }

    return {
      handleDrawer,
      drawer,
      cards,
    }
  }

}
</script>