<template>
    <div class="dashboard">
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
                <v-data-table :items-per-page="itemsPerPage" :headers="headers" :items="orders" item-value="name"
                    class="elevation-1">
                    <template #header>
                        <caption class="d-sr-only">Ice Cream Flavors</caption>
                    </template>
                </v-data-table>
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {
    name: "Dashboard",
    setup() {
        const activities = [
            { title: "注文済み回数", color: "blue lighten-3", amounts: 25, row: 1 },
            { title: "処理中の注文数", color: "orange", amounts: 4, row: 1 },
            { title: "一番売れもの ", color: "green", amounts: 20, row: 2, name: "ハンバーガー" },
            { title: "あまり売れないもの ", color: "red", amounts: 1, row: 2, name: "コカコラ" },
        ]

        const itemsPerPage = 5;

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
        ];

        const orders = [
            {
                name: 'ハンバーガー',
                price: 760,
                quantity: 6,
                transaction_number: 4560,
                transfer_type: '現金',
                order_date: '2023-09-24',
            },
            {
                name: 'ハンバーガー',
                price: 760,
                quantity: 6,
                transaction_number: 4560,
                transfer_type: '現金',
                order_date: '2023-09-24',
            },
            {
                name: 'ハンバーガー',
                price: 760,
                quantity: 6,
                transaction_number: 4560,
                transfer_type: '現金',
                order_date: '2023-09-24',
            },
            {
                name: 'ハンバーガー',
                price: 760,
                quantity: 6,
                transaction_number: 4560,
                transfer_type: '現金',
                order_date: '2023-09-24',
            },
            {
                name: 'ハンバーガー',
                price: 760,
                quantity: 6,
                transaction_number: 4560,
                transfer_type: '現金',
                order_date: '2023-09-24',
            },
            {
                name: 'ハンバーガー',
                price: 760,
                quantity: 6,
                transaction_number: 4560,
                transfer_type: '現金',
                order_date: '2023-09-24',
            },
            {
                name: 'ハンバーガー',
                price: 760,
                quantity: 6,
                transaction_number: 4560,
                transfer_type: '現金',
                order_date: '2023-09-24',
            },
            {
                name: 'ハンバーガー',
                price: 760,
                quantity: 6,
                transaction_number: 4560,
                transfer_type: '現金',
                order_date: '2023-09-24',
            },
        ];

        return {
            activities,
            itemsPerPage,
            headers,
            orders
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
</style>