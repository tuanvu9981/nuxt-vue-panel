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
                <v-table style="overflow:unset;">
                    <thead>
                        <tr>
                            <th>
                                履歴ID
                            </th>
                            <th>
                                ASIN
                            </th>
                            <th>
                                登録日時
                            </th>
                            <th>
                                更新日時
                            </th>
                            <th>
                                ステータス
                            </th>
                            <th>
                                データ
                            </th>
                            <th>
                                再実行
                            </th>
                        </tr>
                    </thead>
                </v-table>
            </v-container>    
        </v-main>
    </v-app>
</template>

<script>
import { links } from '../utils/common/constant';
export default {
    name: "Arcordion",
    setup(){
        const drawer = ref(false);

        const handleDrawer = () => drawer.value = !drawer.value;

        return {
            drawer, handleDrawer, 

        }
    }
}

</script>

<style></style>