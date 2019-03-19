<template>
    <div class="heroes">
        <h1>Heroes</h1>
        This file will list heroes

        <div v-for="heroe in heroes" :key="heroe._id">
            <p>
                <span><b>{{ heroe.Name }}</b></span>
            </p>
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
            }
        }
    }
</script>

<style scoped>

</style>