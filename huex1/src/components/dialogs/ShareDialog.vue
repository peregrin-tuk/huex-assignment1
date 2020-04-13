<template>
  <v-card>
    <v-card-title>Share</v-card-title>
    <v-divider></v-divider>
    <v-card-text>
      <v-text-field
        :value="shareURL"
        outlined
        readonly
        hide-details
        class="mt-6"
      >
      <template v-slot:append-outer>
        <v-btn 
          class="copy-button"
          color="primary"
          large
          @click="copyToClipboard"
        >
          <v-icon class="mr-2">{{ copyButtonIcon }}</v-icon>
          {{ copyButtonText }}
        </v-btn>
      </template>
      </v-text-field>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="primary" text @click="dialog = false">Close</v-btn>
    </v-card-actions>
  </v-card> 
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "OpenDialog",
  data: () => ({
    copied: false,
  }),
  computed: {
    baseURL(): string {
      let getUrl = window.location;
      let baseUrl = getUrl.protocol + "//" + getUrl.host + "/" + getUrl.pathname.split('/')[1];
      //return getUrl.href;
      return baseUrl;
    },
    boardID(): string {
      return this.$store.getters.getBoardId;
    },
    shareURL(): string {
      return this.baseURL + "#" + this.boardID;
    },
    copyButtonText(): string {
      return this.copied ? "Copied" : "Copy Url";
    },
    copyButtonIcon(): string {
      return this.copied ? "mdi-clipboard-check-outline" : "mdi-clipboard-outline";
    }
  },
  methods: {
    copyToClipboard: function() {
      const el: HTMLInputElement | null = this.$el.querySelector("input[readonly='readonly']");
      if (el) {
        el.select();
      }
      document.execCommand('copy');
      this.copied = true;
      setTimeout(() => { this.copied = false; }, 5000);
    }
  }
});
</script>

<style lang="scss" scoped>
  .copy-button {
    top: -12px;
    width: 9rem;
  }
</style>