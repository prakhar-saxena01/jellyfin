<template>
  <div class="ma-2 d-flex flex-column pointer" @click="$emit('connect', user)">
    <v-btn plain ripple :height="128" :width="128" class="rounded">
      <user-image :size="128" :user="user" />
    </v-btn>
    <a class="text-subtitle-1 text-center mt-2 link">
      {{ user.Name }}
    </a>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { UserDto } from '@jellyfin/client-axios';

export default Vue.extend({
  props: {
    user: {
      type: Object as () => UserDto,
      required: true
    }
  },
  methods: {
    formatDistance(value: string): string {
      if (value) {
        return this.$dateFns.formatDistanceToNow(new Date(value), {
          addSuffix: true,
          locale: this.$i18n.locale
        });
      } else {
        return this.$t('never');
      }
    }
  }
});
</script>
<style lang="scss" scoped>
.rounded {
  border-radius: 100% !important;
}
</style>
