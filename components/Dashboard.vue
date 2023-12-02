<template>
    <div v-show="!isLoading">
        <!-- Dashboard and Button will lie at opposite side, center between -->
        <!-- <p class="d-flex justify-space-between align-center">
            Dashboard
            <v-btn color="success" class="lg-rounded">View Orders</v-btn>
        </p> -->

        <v-row class="my-2">
            <v-col lg="7" cols="12">
                <!-- <v-alert dense text type="success" class="mb-3" variant="outlined"> -->
                <!-- success will display a green -->
                <!-- <strong>Login successfull: </strong>Good morning -->
                <!-- </v-alert> -->

                <v-row>
                    <v-col lg="6" cols="12" v-for="(activity, index) in activities" :key="index">
                        <v-card elevation="5" class="rounded-lg">
                            <v-card-text class="d-flex justify-space-between align-center">
                                <div class="d-flex flex-column">
                                    <strong class="text-h6">{{ activity.title }}</strong>
                                    <p class="text-h7">{{ activity.row === 1 ? "今日中" : activity.name }}</p>
                                </div>

                                <v-avatar :color="activity.color" size="60">
                                    <span class="white-text font-weight-bold text-h5 text-white">
                                        {{ activity.amounts }}
                                    </span>
                                </v-avatar>
                            </v-card-text>
                        </v-card>
                    </v-col>
                </v-row>
            </v-col>

            <v-col lg="5" cols="12">
                <v-card elevation="5" class="rounded-lg" height="210">
                    <v-timeline side="end" align="start">
                        <v-timeline-item dot-color="pink" size="x-small">
                            <strong>午前９時　営業開始</strong>
                        </v-timeline-item>

                        <v-timeline-item dot-color="teal-lighten-3" size="x-small">
                            <strong>午後３時　休憩30分</strong>
                        </v-timeline-item>

                        <v-timeline-item dot-color="teal-lighten-3" size="x-small">
                            <strong>午後９時　閉店</strong>
                        </v-timeline-item>
                    </v-timeline>
                </v-card>
            </v-col>
        </v-row>

        <v-row>
            <div class="table-caption">注文履歴一覧</div>
            <v-col lg="12">
                <v-data-table :items-per-page="itemsPerPage" :headers="headers" :items="transactions" item-value="name"
                    class="elevation-1">
                    <template v-slot:item.status="{ value }">
                        <v-chip :color="getStatusColor(value)">
                            {{ value }}
                        </v-chip>
                    </template>
                    <template v-slot:item.transfer_type="{ value }">
                        {{ value }} <v-icon :color="getIconByValue(value).color">{{ getIconByValue(value).icon }}</v-icon>
                    </template>
                </v-data-table>
            </v-col>
        </v-row>
    </div>

    <div v-show="isLoading" class="loading">
        <v-progress-circular color="blue" indeterminate>
        </v-progress-circular>
    </div>
</template>

<script>
import {
    getFirestore,
    getDocs,
    orderBy,
    collection,
    query,
} from "firebase/firestore";
import { convertFBTimeStamp } from '../utils/functions/datetime';
import { getQuantity, getTodayQuantity } from '../utils/functions/statistic';
import useFirebaseApp from "~/composables/firebase.config";

export default {
    name: "Dashboard",
    setup() {
        const activities = ref([
            { title: "注文済み回数", color: "blue lighten-3", row: 1, amounts: 0 },
            { title: "処理中の注文数", color: "orange", row: 1, amounts: 0 },
            { title: "一番売れもの ", color: "green", row: 2, amounts: 0, name: "" },
            { title: "あまり売れないもの ", color: "red", row: 2, amounts: 0, name: "" },
        ]);

        const itemsPerPage = 5;
        const transactions = ref([]);
        const isLoading = ref(false);

        const headers = [
            {
                title: '食品名',
                align: 'start',
                sortable: false,
                key: 'name',
            },
            { title: '単価 (円)', align: 'start', key: 'price' },
            { title: '数', align: 'start', key: 'quantity' },
            { title: '取引金額 (円)', align: 'start', key: 'transaction_number' },
            { title: '支払い形式', align: 'start', key: 'transfer_type' },
            { title: '日時', align: 'start', key: 'order_date' },
            { title: '状態', align: 'start', key: 'status' },
        ];

        onMounted(() => {
            initData();
        })

        const initData = async () => {
            isLoading.value = true;
            const runtimeConfig = useRuntimeConfig();
            const app = useFirebaseApp(runtimeConfig);
            const db = getFirestore(app);
            const transactionRef = collection(db, "transaction");
            const q = query(transactionRef, orderBy('order_date', 'desc'));

            const querySnapshot = await getDocs(q);
            let counter = 0, status = '一般';
            querySnapshot.forEach((doc) => {
                status = counter === 0 ? '最新注文' : '一般';
                transactions.value.push({
                    id: doc.id,
                    name: doc.data().name,
                    price: doc.data().price,
                    quantity: doc.data().quantity,
                    transaction_number: doc.data().transaction_number,
                    transfer_type: doc.data().transfer_type,
                    order_date: convertFBTimeStamp(doc.data().order_date),
                    calculatedOrderDate: doc.data().order_date,
                    status: status,
                })
                counter++;
            });
            const result = getQuantity(transactions.value);
            const quantityToday = getTodayQuantity(transactions.value);
            activities.value[2].name = result.maxQuantityItem.name;
            activities.value[2].amounts = result.maxQuantityItem.quantity;
            activities.value[3].name = result.minQuantityItem.name;
            activities.value[3].amounts = result.minQuantityItem.quantity;
            activities.value[0].amounts = quantityToday;
            activities.value[1].amounts = quantityToday

            isLoading.value = false;
        }

        const getStatusColor = (status) => status === '最新注文' ? 'green' : 'blue';

        const getIconByValue = (value) => {
            if (value === '現金') return { icon: 'mdi-cash-usd', color: 'green-lighten-2' };
            else if (value === 'Paypay') return { icon: 'mdi-cellphone-iphone', color: 'red-lighten-2' };
            else return { icon: 'mdi-cards', color: 'orange-lighten-2' };
        }

        return {
            activities,
            itemsPerPage,
            headers,
            initData, getStatusColor, getIconByValue,
            transactions,
            isLoading,
        }
    }
}
</script>

<style scoped>
.table-caption {
    width: 100%;
    text-align: center;
    font-weight: bold;
    margin-top: 5px;
    margin-bottom: 5px;
    font-size: x-large;
}

.loading {
    margin: 0 auto;
    padding-top: 20%;
}
</style>