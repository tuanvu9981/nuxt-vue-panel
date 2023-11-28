const FOOD_TYPES = 5

const getKeyByValue = (object:any, value:number) => {
    return Object.keys(object).find(key => object[key] === value);
}

const mapping = (word?:string) => {
    if (word === 'hamburger') return 'ハンバーガー';
    else if (word === 'kareraisu') return 'カレーライス';
    else if (word === 'sandwitch') return 'サンドイッチ';
    else if (word === 'tempura') return '天ぷら';
    else return 'カツ丼';
}

export const getQuantity = (transactions: any) => {
    let items = {
        hamburger: 0,
        kareraisu: 0,
        sandwitch: 0,
        tempura: 0,
        katsudon: 0,
    }
    for(let i=0;i<transactions.length;i++){
        if (transactions[i].name === 'ハンバーガー'){
            items.hamburger += parseInt(transactions[i].quantity);
        }
        if (transactions[i].name === 'カレーライス'){
            items.kareraisu += parseInt(transactions[i].quantity);
        } 
        if (transactions[i].name === 'サンドイッチ'){
            items.sandwitch += parseInt(transactions[i].quantity);
        } 
        if (transactions[i].name === 'カツ丼') {
            items.katsudon += parseInt(transactions[i].quantity);
        } 
        if (transactions[i].name === '天ぷら') {
            items.tempura += parseInt(transactions[i].quantity);
        }
    }

    const maxNumber = Math.max(...Object.values(items));
    const minNumber = Math.min(...Object.values(items));
    return {
        maxQuantityItem: {
            name: mapping(getKeyByValue(items, maxNumber)),
            quantity: maxNumber,
        },
        minQuantityItem: {
            name: mapping(getKeyByValue(items, minNumber)),
            quantity: minNumber,
        }
    }
}

export const getTodayQuantity = (transactions: any) => {
    let quantityToday = 0;
    for(let i=0;i<transactions.length;i++){
        const date = transactions[i].calculatedOrderDate;
        const seconds = date.seconds;
        const nanoseconds = date.nanoseconds;

        const dateTime = new Date(seconds * 1000 + nanoseconds / 1000000);
        const today = new Date();
        if (today.getDate() === dateTime.getDate()){
            quantityToday += 1;
        }
    }
    return quantityToday;
}