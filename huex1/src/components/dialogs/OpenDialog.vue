<template>
  <v-card>
    <v-card-title>Open Board</v-card-title>
    <v-divider></v-divider>
    <v-card-text>
    <v-card>
    <v-list class="mt-3" flat dense>
      <v-list-item-group v-model="model" color="primary" @change="selectBoard">
        <v-list-item
          v-for="(value, id) in boards"
          :key="id"
          :value="id"
        >
          <v-list-item-content>
            <v-list-item-title>{{ value.name }} <small>#{{ id }}</small></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
    </v-card>

      <v-text-field
        v-model="selectedId"
        outlined
        hide-details
        dense
        class="mt-4"
        prefix="#"
      >
        <template v-slot:append-outer>
          <v-btn
            class="load-button"
            color="primary"
            large
            @click="loadBoard"
            :disabled="buttonClickable"
          >
            Load Board
          </v-btn>
        </template>
      </v-text-field>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="accent" text @click="$emit('dialog', false)">Cancel</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "OpenDialog",
  data: () => ({
    selectedId: '',
    model: 1,
  }),
  computed: {
    boards: function() {
      return this.$store.state.localStoredBoards
    },
    buttonClickable: function() {
      return this.selectedId === this.$store.getters.getBoardId || !this.selectedId || !(this.selectedId.length > 0)
    }
  },
  methods: {
    selectBoard(event: any) {
      this.selectedId = event
    },
    loadBoard() {
      this.$store.dispatch('bindCurrentBoard', this.selectedId)
    }
  }
});
</script>

<style lang="scss" scoped>
  .load-button {
    width: 9rem;
  }
</style>