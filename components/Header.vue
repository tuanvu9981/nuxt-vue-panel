<template>
  <v-app-bar>
    <!-- Drawer icon -->
    <v-app-bar-nav-icon @click="$emit('handleDrawer')"></v-app-bar-nav-icon>
    <!-- Drawer icon -->

    <v-app-bar-title>飲食店</v-app-bar-title>

    <!-- Input Data -->
    <!-- <v-col lg="6" cols="12">
      <v-form>
        <v-text-field class="p-0 m-0 mt-6" variant="outlined" prepend-inner-icon="mdi-magnify" placeholder="検索" />
      </v-form>
    </v-col>
    <v-spacer /> -->
    <!-- Input Data -->

    <!-- Bell-shaped icon with notification -->
    <v-menu class="mr-6">
      <template v-slot:activator="{ props }">
        <v-btn class="text-none" stacked v-bind="props" @click="showNotification">
          <v-badge content="5" color="error">
            <v-icon>mdi-bell-outline</v-icon>
          </v-badge>
        </v-btn>
      </template>
      <v-list width="250" class="py-0">
        <v-list-item v-for="(item, index) in items" :key="index" :value="index">
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

    <!-- User Information Display -->
    <v-menu>
      <template v-slot:activator="{ props }">
        <v-btn color="black" stacked v-bind="props" @click="changeIcon">
          <!-- <v-badge dot bottom offset-y="20" offset-x="10" color="green"> -->
          <v-list-item one-line :title="user.displayName" :prepend-avatar="user.photoURL">
            <template v-slot:append>
              <v-btn color="black" :icon="arrowIcon" variant="text"></v-btn>
            </template>
          </v-list-item>
          <!-- </v-badge> -->

        </v-btn>
      </template>

      <v-list width="250" class="py-0">
        <v-list-item lines="two" :title="user.displayName" :subtitle="user.email" :prepend-avatar="user.photoURL">
        </v-list-item>
        <v-divider thickness="2"></v-divider>

        <v-list-item v-for="(item, index) in menu" :key="index">
          <template v-slot:prepend>
            <v-icon :icon="item.icon"></v-icon>
          </template>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>
  
<script>
import { ref } from 'vue';
import useUserData from '~/composables/states';
export default {
  name: "Topbar",

  setup() {
    const arrowIcon = ref('mdi-menu-down')
    const items = [
      { title: 'コードA123ZG 新しい注文が届きました！' },
      { title: 'コードB81730 新しい注文が届きました！' },
      { title: 'コードC81670 新しい注文が届きました！' },
      { title: 'コードD81733 新しい注文が届きました！' },
      { title: 'コードE81733 新しい注文が届きました！' },
    ]

    const menu = [
      { title: 'プロフィール', icon: 'mdi-account' },
      { title: 'パスワード更新', icon: 'mdi-key' },
      { title: '設定', icon: 'mdi-cog' },
      { title: 'ログアウト', icon: 'mdi-logout' },
    ]

    const [user, setUser] = useUserData();

    const changeIcon = () => {
      arrowIcon.value = arrowIcon.value === "mdi-menu-down" ? "mdi-menu-up" : "mdi-menu-down";
    }

    const showNotification = () => {
      arrowIcon.value = arrowIcon.value === "mdi-menu-down" ? "mdi-menu-up" : "mdi-menu-down";
    }

    return {
      items,
      menu,
      user,
      arrowIcon,
      changeIcon,
      showNotification
    }
  }
};
</script>
  
<style scoped></style>