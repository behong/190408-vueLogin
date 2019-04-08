<template>
  <div>
    <h1>{{ userInfo.name }} 님 환영 합니다. {{ testInfo.name }}</h1>
  </div>
</template>

<script>
import { mapState } from "vuex"
export default {
  computed: {
    ...mapState(["userInfo", "testInfo"])
  }
}
</script>
