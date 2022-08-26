
import { Inventory2, LocalAtm, ManageSearch, InsertChart, ShoppingCart, Home, Dashboard, Settings, Person } from "@mui/icons-material";
import Loge from "./components/assets/RETEX.svg"




export const loading = {
    img : <Loge/>
};

export const admin = {
    title: "pos登入",
}

export const home = {
    title: "POS",
    content: "POS功能",
    list: [
        {
            link: "/CheckInventory",
            icon: <Inventory2/>,
            className: "p-4 text-sky-500",
            value: "查詢庫存"
        },
        {
            link: "/",
            icon: <LocalAtm/>,
            className: "p-4 text-emerald-500",
            value: "收銀結帳"
        },
        {
            link: "/",
            icon: <ManageSearch/>,
            className: "p-4 text-amber-500",
            value: "交易查詢"
        },
        {
            link: "/",
            icon: <InsertChart/>,
            className: "p-4 text-indigo-500",
            value: "報表分析"
        },
        {
            link: "/",
            icon: <ShoppingCart />,
            className: "p-4 text-cyan-500",
            value: "銷售交易"
        },
    ]
}

export const footer = {
    item: [
        {
            icon: <Home/>,
            value: "選單文字"
        },
        {
            icon: <Dashboard/>,
            value: "選單文字"
        },
        {
            icon: <Settings/>,
            value: "選單文字"
        },
        {
            icon: <Person/>,
            value: "選單文字"
        },
    ]
}

export const sort = {
    list: [
        {
            title: "C商品名稱",
            content: "商品編號：4550002527021",
            value: "本店庫存 250",
        },
        {
            title: "D商品名稱",
            content: "商品編號：4550002523647",
            value: "本店庫存 342",
        },
        {
            title: "E商品名稱",
            content: "商品編號：4550002526924",
            value: "本店庫存 418",
        },
        {
            title: "F商品名稱",
            content: "商品編號：4550002523945",
            value: "本店庫存 242",
        },
    ],
    list2: [
        {
            title: "A商品名稱",
            content: "商品編號：4550002527564",
            value: "本店庫存 789",
        },
        {
            title: "S商品名稱",
            content: "商品編號：4550002524563",
            value: "本店庫存 754",
        },
        {
            title: "D商品名稱",
            content: "商品編號：4550002522145",
            value: "本店庫存 457",
        },
        {
            title: "F商品名稱",
            content: "商品編號：4550002527854",
            value: "本店庫存 125",
        },
    ],
    list3: [
        {
            title: "I商品名稱",
            content: "商品編號：4550002527021",
            value: "本店庫存 123",
        },
        {
            title: "A商品名稱",
            content: "商品編號：4550002523647",
            value: "本店庫存 342",
        },
        {
            title: "X商品名稱",
            content: "商品編號：4550002526924",
            value: "本店庫存 418",
        },
        {
            title: "Z商品名稱",
            content: "商品編號：455000252452",
            value: "本店庫存 242",
        },
    ],
    list4: [
        {
            title: "G商品名稱",
            content: "商品編號：4550002524521",
            value: "本店庫存 421",
        },
        {
            title: "Q商品名稱",
            content: "商品編號：4550002523673",
            value: "本店庫存 347",
        },
        {
            title: "U商品名稱",
            content: "商品編號：4550002526947",
            value: "本店庫存 445",
        },
        {
            title: "Z商品名稱",
            content: "商品編號：4550002523852",
            value: "本店庫存 158",
        },
    ],
    list5: [
        {
            title: "W商品名稱",
            content: "商品編號：4550002524851",
            value: "本店庫存 120",
        },
        {
            title: "Q商品名稱",
            content: "商品編號：4550002578522",
            value: "本店庫存 482",
        },
        {
            title: "A商品名稱",
            content: "商品編號：4550002527522",
            value: "本店庫存 358",
        },
        {
            title: "E商品名稱",
            content: "商品編號：4550002523544",
            value: "本店庫存 452",
        },
    ],
    
}