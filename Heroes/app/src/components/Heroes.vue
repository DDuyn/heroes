<template>
    <div class="heroes row">
        <h1>Heroes</h1>
        <div class="col-md-12" v-for="hero in heroes" :key="hero._id">
            <div class="col-md-12"> <h3><small class="text-muted"> {{ hero.Name }} </small> </h3> </div>
            <hr />
            <div class="container-fluid">
                <dl class="row">
                    <ddt class="col-sm-3">Owner</ddt>
                    <dd class="col-sm-9"> {{ hero.Owner }} </dd>
                    
                    <ddt class="col-sm-3">Class</ddt>
                    <dd class="col-sm-9"> {{ hero.Class }} </dd>

                    <ddt class="col-sm-3">Level</ddt>
                    <dd class="col-sm-9"> {{ hero.Level }} </dd>

                    <ddt class="col-sm-3">Total Experience</ddt>
                    <dd class="col-sm-9"> {{ hero.TotalExperience }} </dd>

                    <ddt class="col-sm-3">Experience Needed</ddt>
                    <dd class="col-sm-9"> {{ hero.ExperienceNeeded }} </dd>

                    <button type="button" class="btn btn-outline-success btn-sm" @click="addExperience(hero)">GainExperience</button>

                </dl>
            </div>
        </div>
    </div>
</template>

<script>
import HeroesService from '@/services/HeroesService'
    export default {
        name: 'heroes',
        data() {
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
            
               hero.TotalExperience += 50

               if (hero.TotalExperience >= hero.ExperienceNeeded) {
                   
                   hero.Level++
                   hero.ExperienceNeeded = Math.round((((hero.ExperienceNeeded * 20) / 100) + hero.ExperienceNeeded) * 2)
                   hero.GainedExperience = 0
               }
               const response = await HeroesService.addExperience({hero})
            }
        }
    }
</script>

<style scoped>

</style>