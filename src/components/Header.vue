<template>
  <v-app-bar app elevate-on-scroll elevation="3" color="white">
    <!-- Drawer icon -->
    <v-app-bar-nav-icon @click="$emit('handleDrawer')"></v-app-bar-nav-icon>
    <!-- Drawer icon -->
    <v-spacer />

    <!-- Input Data -->
    <v-col lg="6" cols="12">
      <v-form>
        <v-text-field class="p-0 m-0 mt-6" full-width dense append-icon="mdi-magnify" placeholder="検索" />
      </v-form>
    </v-col>
    <v-spacer />
    <!-- Input Data -->

    <!-- Bell-shaped icon with notification -->
    <v-menu class="mr-6">
      <template v-slot:activator="{ props }">
        <v-btn class="text-none" stacked v-bind="props">
          <v-badge content="5" color="error">
            <v-icon>mdi-bell-outline</v-icon>
          </v-badge>
        </v-btn>
      </template>
      <v-list>
        <v-list-item v-for="(item, index) in items" :key="index" :value="index">
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

    <v-menu>
      <template v-slot:activator="{ props }">
        <v-btn color="black" v-bind="props">
          <v-card>
            
          </v-card>
        </v-btn>
      </template>

      <v-list>
        <v-list-item v-for="(item, index) in newItems" :key="index">
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>
  
<script>
export default {
  name: "Topbar",
  setup() {
    const items = [
      { title: 'Click Me' },
      { title: 'Click Me' },
      { title: 'Click Me' },
      { title: 'Click Me 2' },
    ]

    const newItems = [
      { title: 'Click Me' },
      { title: 'Click Me' },
      { title: 'Click Me' },
      { title: 'Click Me 2' },
    ]

    return {
      items,
      newItems,
    }
  }
};
</script>
  
<style scoped></style>