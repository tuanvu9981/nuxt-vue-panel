import type { Timestamp } from "firebase/firestore";

export const convertFBTimeStamp = (date:Timestamp) => {
    console.log(date);
    const seconds = date.seconds;
    const nanoseconds = date.nanoseconds;

    const dateTime = new Date(seconds * 1000 + nanoseconds / 1000000);
    const year = dateTime.getFullYear();
    const month = dateTime.getMonth() + 1;
    const date1 = dateTime.getDate();
    const hour = dateTime.getHours(); 
    const minute = dateTime.getMinutes();
    return `${year}年${month}月${date1}日   ${hour}時${minute}分`;
}