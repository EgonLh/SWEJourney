import {Metadata} from "next";
async function getData() {
    return new Promise<Number>(((resolve, reject) => {
        setTimeout(()=>resolve(1000),5000)
    }))
}
export default function Page() {
    const data = getData();
    return (<div>
        Dashboard {data}
    </div>)
}
export const metadata: Metadata = {
    title: "Dashboard",
};