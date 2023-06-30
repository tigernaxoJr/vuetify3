<template>
  <router-view />
</template>

<script setup>
import { onMounted } from "vue";
// import dayx from "../src/utils/dayx";
import { useAppStore } from "./store/app";
import { useAuthStore } from "./store/auth";

const appstore = useAppStore();
const authstore = useAuthStore();

appstore.addInitProcedure(() => {
  console.log("app init procedue 1");
});
appstore.addInitProcedure(() => {
  console.log("app init procedue 2");
});

onMounted(async () => {
  const loadingHolder = "app";
  appstore.AddLoading(loadingHolder);
  try {
    authstore.Authentication(); // 取得驗證
    appstore.init(); // 初始化 app
  } catch (error) {
    // handle error
    console.error(error);
  } finally {
    appstore.RemoveLoading(loadingHolder);
  }
});

// function dateUsage() {
//   //#region 從資料庫的 dte, tme 欄位
//   let d = dayx();
//   d.dte = "330315";
//   d.tme = "123338";
//   console.log(d.format("民國YYY年MM月DD日 HH:mm:ss"));
//   // 民國110年03月15日 12:33:38
//   //#endregion

//   // //#region 從原生 Date
//   // d = dayx("2022-03-15T12:33:38");
//   // console.log(d.format("民國YYY年MM月DD日 HH:mm:ss"));
//   // // 民國110年03月15日 12:33:38
//   // //#endregion

//   // //#region 使用當下時間不需要任何參數
//   // d = dayx();
//   // console.log(d.format("民國YYY年MM月DD日 HH:mm:ss"));
//   // //#endregion
// }
// window.day = dayx;
</script>
