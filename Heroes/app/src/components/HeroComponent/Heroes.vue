<template>
  <div class="heroes row">
    <h1>Heroes</h1>
    <button type="button" class="btn btn-outline-success btn-sm" @click="goCreateHero()">New Hero</button>
    <div class="col-md-12" v-for="hero in heroes" :key="hero._id">
      <div class="col-md-12">
        <h3>
          <small class="text-muted">{{ hero.Name }}</small>
        </h3>
      </div>
      <hr>
      <div class="container-fluid">
        <dl class="row">
          <ddt class="col-sm-3">Owner</ddt>
          <dd class="col-sm-9">{{ hero.Owner }}</dd>

          <ddt class="col-sm-3">Class</ddt>
          <dd class="col-sm-9">{{ hero.Class }}</dd>

          <ddt class="col-sm-3">Level</ddt>
          <dd class="col-sm-9">{{ hero.Level }}</dd>

          <ddt class="col-sm-3">Total Experience</ddt>
          <dd class="col-sm-9">{{ hero.TotalExperience }}</dd>

          <ddt class="col-sm-3">Experience Needed</ddt>
          <dd class="col-sm-9">{{ hero.ExperienceNeeded }}</dd>

          <button
            type="button"
            class="btn btn-outline-success btn-sm"
            @click="addExperience(hero)"
          >GainExperience</button>
        </dl>
      </div>
    </div>
  </div>
</template>

<script>
import HeroesService from '@/services/HeroesService'
import Common from '@/common/common'

export default {
  name: 'heroes',
  data () {
    return {
      heroes: []
    }
  },
  mounted () {
    this.getHeroes()
  },
  methods: {
    async getHeroes () {
      const response = await HeroesService.fetchHeroes()
      console.log(response.data.heroes)
      this.heroes = response.data.heroes
    },
    async addExperience (hero) {
      // TODO: Calcular Experiencia.
      // TODO: No va aquí.
      hero = await Common.GainExperience(hero, 50)
      await HeroesService.addExperience({ hero })
    },
    goCreateHero () {
      this.$router.push({ name: 'NewHero' })
    }
  }
}
</script>

<style scoped>

</style>
