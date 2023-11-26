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
                    <v-col>
                        <p class="text-h6 mb-2">食品名</p>

                        <v-select :items="items" label="食品名を選んで下さい" item-title="name" item-value="name" v-model="foodValue"
                            :error="foodErr" :errorMessages="foodErrMsg">
                            <template #selection="{ item }">
                                <span>{{ item.raw.name }}</span>
                            </template>
                            <template #item="{ item, props }">
                                <v-list-item v-bind="props">
                                    <template #title>
                                        <span class="select-item">
                                            <img :src="item.raw.image" height="50" width="100" /> {{ item.raw.name }}
                                        </span>
                                    </template>
                                </v-list-item>
                            </template>
                        </v-select>

                    </v-col>

                    <v-col>
                        <p class="text-h6 mb-2">数</p>
                        <v-text-field v-model="number" solo label="数量を入力して下さい" clearable :error="numberErr"
                            :errorMessages="numberErrMsg"></v-text-field>
                    </v-col>
                </v-row>

                <v-row>
                    <v-col>
                        <p class="text-h6 mb-2">支払い形式</p>
                        <v-select clearable label="支払い形式を選んで下さい" :items="transfer" v-model="transferValue"
                            :error="transferErr" :errorMessages="transferErrMsg">
                        </v-select>
                    </v-col>
                </v-row>

                <v-container class="d-flex align-center justify-center">
                    <v-btn color="success" width="180" class="text-h6" @click="add">
                        確定
                    </v-btn>
                </v-container>
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
import { links } from '../utils/common/constant'
export default {
    name: "NewOrder",
    setup() {
        const drawer = ref(false);
        const number = ref(0);
        const numberErr = ref(false);
        const numberErrMsg = ref('');

        const transferValue = ref('');
        const transferErr = ref(false);
        const transferErrMsg = ref('')

        const foodValue = ref('');
        const foodErr = ref(false);
        const foodErrMsg = ref('');

        const items = [
            { name: "サンドイッチ", image: "https://firebasestorage.googleapis.com/v0/b/vuejs-admin-panel-13efd.appspot.com/o/foodImages%2F%E3%82%B5%E3%83%B3%E3%83%89%E3%82%A4%E3%83%83%E3%83%81.jpg?alt=media&token=1559986c-3253-43a2-9fb0-222a1d3486f8" },
            { name: "ハンバーガー", image: "https://firebasestorage.googleapis.com/v0/b/vuejs-admin-panel-13efd.appspot.com/o/foodImages%2F%E3%83%8F%E3%83%B3%E3%83%90%E3%83%BC%E3%82%AC%E3%83%BC.jpg?alt=media&token=39692a52-cedb-40c6-8f5d-b6d661bacb36" },
            { name: "カレーライス", image: "https://firebasestorage.googleapis.com/v0/b/vuejs-admin-panel-13efd.appspot.com/o/foodImages%2F%E3%82%AB%E3%83%AC%E3%83%BC%E3%83%A9%E3%82%A4%E3%82%B9.jpg?alt=media&token=828772c0-0f30-40bc-a613-80de371254c5" },
            { name: "天ぷら", image: "https://firebasestorage.googleapis.com/v0/b/vuejs-admin-panel-13efd.appspot.com/o/foodImages%2F%E5%A4%A9%E3%81%B7%E3%82%89.jpg?alt=media&token=de2b48a1-975c-48f1-ae3f-2246212d7a75" },
            { name: "カツ丼", image: "https://firebasestorage.googleapis.com/v0/b/vuejs-admin-panel-13efd.appspot.com/o/foodImages%2F%E3%82%AB%E3%83%84%E4%B8%BC.jpg?alt=media&token=14c710f9-235d-4ff9-9fff-f48420fa8f49" },
        ]
        const transfer = ['現金', 'Paypay', 'カード']

        const handleDrawer = () => {
            drawer.value = !drawer.value;
        }

        const add = () => {
            if (number.value === 0) {
                numberErr.value = true;
                numberErrMsg.value = '数は０であってはなりません！';

                if (transferValue.value === '') {
                    transferErr.value = true;
                    transferErrMsg.value = '支払い形式は空であってはなりません!';

                    if (foodValue.value === '') {
                        foodErr.value = true;
                        foodErrMsg.value = '食品名は空であってはなりません!';
                    }
                }
                return
            }

            // add new value to firestore.
        }

        return {
            handleDrawer,
            add,
            drawer, links,
            number, numberErr, numberErrMsg,
            transfer, transferValue, transferErr, transferErrMsg,
            items, foodValue, foodErr, foodErrMsg
        }
    }
}
</script>

<style>
img {
    border-radius: 10px;
}

.select-item {
    display: flex;
    align-items: center;
    gap: 20px;
}
</style>