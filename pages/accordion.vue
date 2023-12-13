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
                <!-- <v-table style="overflow:unset;">
                    <thead>
                        <tr>
                            <th>履歴ID</th>
                            <th>ASIN</th>
                            <th>登録日時</th>
                            <th>更新日時</th>
                            <th>ステータス</th>
                            <th>データ</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in data" :key="item.id">
                            <td>{{ item.id }}</td>
                            <td>{{ item.asin }}</td>
                            <td>{{ item.register }}</td>
                            <td>{{ item.updated }}</td>
                            <td>{{ item.status }}</td>
                            <td>{{ item.data_file }}</td>
                        </tr>
                    </tbody>
                </v-table> -->

                <v-data-table 
                    :expanded="expanded" 
                    :headers="headers" 
                    :items="data" 
                    item-key="id"
                    show-expand
                >
                    <template v-slot:top>
                        <v-toolbar flat>
                            <v-toolbar-title>Amazonレビューウオッチャー任意実行模倣</v-toolbar-title>
                        </v-toolbar>
                    </template>

                    <!-- <template v-slot:item="{index, item, isExpanded, expand}">
                        <tr

                        :class="getEvenOddClass(index)"
                        >
                            <td> {{ item.id }} </td>
                            <td> {{ item.asin }} </td>
                            <td> {{ item.register }} </td>
                            <td> {{ item.updated }} </td>
                            <td> {{ item.status }} </td>
                            <td> {{ item.data_file }} </td>
                        </tr>
                    </template> -->

                    <template v-slot:expanded-row="{ item }">
                        <tr :class="getEvenOddClass(index)" v-for="(retryItem, index) in item.retry" :key="index">
                            <td> </td>
                            <td>{{ retryItem.asin }}</td>
                            <td>{{ retryItem.register }}</td>
                            <td>{{ retryItem.updated }}</td>
                            <td>{{ retryItem.status }}</td>
                            <td>{{ retryItem.data_file }}</td>
                        </tr>
                    </template>
                    <template v-slot:bottom></template>
                </v-data-table>
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
import { links } from '../utils/common/constant';
export default {
    name: "Arcordion",
    setup() {
        const drawer = ref(false);

        const handleDrawer = () => drawer.value = !drawer.value;

        const data = [
            {
                id: "123456ABCD",
                asin: "123456ABCD",
                register: "2023-12-03",
                updated: "2023-12-06",
                status: 203,
                data_file: true,
                retry: [
                    {
                        id: "123456ABCD-1",
                        asin: "123456ABCD",
                        register: "2023-12-03",
                        updated: "2023-12-06",
                        status: 203,
                        data_file: true,
                    },
                    {
                        id: "123456ABCD-2",
                        asin: "123456ABCD",
                        register: "2023-12-03",
                        updated: "2023-12-06",
                        status: 203,
                        data_file: true,
                    },
                ],
            },
            {
                id: "123456ABCE",
                asin: "123456ABCE",
                register: "2023-12-03",
                updated: "2023-12-06",
                status: 203,
                data_file: false,
                retry: [],
            },
            {
                id: "123456ABCF",
                asin: "123456ABCF",
                register: "2023-12-03",
                updated: "2023-12-06",
                status: 203,
                data_file: true,
                retry: [],
            },
            {
                id: "123456ABCG",
                asin: "123456ABCF",
                register: "2023-12-03",
                updated: "2023-12-06",
                status: 203,
                data_file: false,
                retry: [
                    {
                        id: "123456ABCG-1",
                        asin: "123456ABCF",
                        register: "2023-12-03",
                        updated: "2023-12-06",
                        status: 203,
                        data_file: false,
                    },
                    {
                        id: "123456ABCG-2",
                        asin: "123456ABCF",
                        register: "2023-12-03",
                        updated: "2023-12-06",
                        status: 203,
                        data_file: false,
                    },
                    {
                        id: "123456ABCG-3",
                        asin: "123456ABCF",
                        register: "2023-12-03",
                        updated: "2023-12-06",
                        status: 203,
                        data_file: false,
                    }
                ],
            },
        ];

        const expanded = ref([]);

        const getEvenOddClass = (index) => index%2 === 0 ? "even-row" : "odd-row";

        const clickedRow = (value) => {
            console.log("1")
            console.log(expanded.value)
            console.log(value)
            if (expanded.value.length && expanded.value[0].id == value.id) {
                expanded.value = [];
            } else {
                expanded.value = [];
                expanded.value.push(value);
            }
            console.log("2")
            console.log(expanded.value)
            console.log(value)
        }

        const headers = ref([
            { title: '履歴ID', align: 'start', key: 'id', sortable: false },
            { title: 'ASIN', key: 'asin', sortable: false },
            { title: '登録日時', key: 'register', sortable: false },
            { title: '更新日時 ', key: 'updated', sortable: false },
            { title: 'ステータス', key: 'status', sortable: false },
            { title: 'ダウロード', key: 'data_file', sortable: false },
        ]);

        return {
            drawer, handleDrawer,
            links, data,
            expanded, headers, 
            getEvenOddClass, clickedRow
        }
    }
}

</script>

<style>
.even-row {
    background-color: #ADD8E6;
}

.odd-row {
    background-color: white;
}   

</style>