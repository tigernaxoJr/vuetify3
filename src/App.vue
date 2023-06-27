<template>
  <router-view />
</template>

<script setup>
import api from "@/api";
import { onMounted, reactive } from "vue";
import dayx from "../src/utils/dayx";
import { useAppStore } from "./store/app";
import { useAuthStore } from "./store/auth";
const state = reactive({});
onMounted(async () => {
  state.users = await api.GetUser();
  dateUsage();
});

const appstore = useAppStore();
const authstore = useAuthStore();
onMounted(async () => {
  appstore.loading = true;
  try {
    authstore.Authentication();
  } catch (error) {
    // handle error
    console.error(error);
  } finally {
    appstore.loading = false;
  }
});

function dateUsage() {
  //#region 從資料庫的 dte, tme 欄位
  let d = dayx();
  d.dte = "330315";
  d.tme = "123338";
  console.log(d.format("民國YYY年MM月DD日 HH:mm:ss"));
  // 民國110年03月15日 12:33:38
  //#endregion

  // //#region 從原生 Date
  // d = dayx("2022-03-15T12:33:38");
  // console.log(d.format("民國YYY年MM月DD日 HH:mm:ss"));
  // // 民國110年03月15日 12:33:38
  // //#endregion

  // //#region 使用當下時間不需要任何參數
  // d = dayx();
  // console.log(d.format("民國YYY年MM月DD日 HH:mm:ss"));
  // //#endregion
}
window.day = dayx;
</script>
