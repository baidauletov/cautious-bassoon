<template>
  <div>
    <template v-if="$fetchState.pending">
      <ContentLoader>
          <rect x="0" y="0" rx="3" ry="3" width="250" height="10" />
      </ContentLoader>
    </template>
    <template v-else>
      {{ flyContent }}
    </template>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { ContentLoader } from 'vue-content-loader'

export default {
  name: 'IndexPage',

  components: {
    ContentLoader
  },

  async fetch() {
    await this.$store.dispatch('freedom-fly/getFreedomFly')
  },

  computed: {
    ...mapGetters({
      flyContent: 'freedom-fly/freedomFlyContent',
    }),
  },
}
</script>
