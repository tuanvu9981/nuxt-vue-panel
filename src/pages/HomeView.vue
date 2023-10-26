<template>
  <v-app id="inspire">
    <Sidebar :drawer="drawer"/>
    <Header @handleDrawer="handleDrawer" />

    <v-main>
      <v-container class="py-8 px-6" fluid>
        <v-row>
          <v-col v-for="card in cards" :key="card" cols="12">
            <v-card>
              <v-list lines="two">
                <v-list-subheader :title="card"></v-list-subheader>
                  <template v-for="n in 6" :key="n">
                    <v-list-item
                      class="d-flex justify-left"
                      :title="`Message ${n}`"
                      subtitle="Lorem ipsum dolor sit amet, consectetur adipisicing elit"
                    >
                      <template v-slot:prepend>
                        <v-avatar color="grey-darken-1"></v-avatar>
                      </template>
                    </v-list-item>

                    <v-divider v-if="n !== 6" :key="`divider-${n}`" inset></v-divider>
                  </template>
              </v-list>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
  import Header from '../components/Header.vue';
  import Sidebar from '../components/Sidebar.vue';
  export default {
    components: {Sidebar, Header},
    name: "HomeView",

    data: () => ({
      cards: ['Today', 'Yesterday'],
      drawer: false,
    }),

    methods: {
      handleDrawer(){
        this.drawer = !this.drawer;
      }
    }

  }
</script>