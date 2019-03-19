<template>
    <div class="heroes">
        <h1>Add Post</h1>
        <div class="form">
            <div>
                <input type="text" name="name" placeholder="Hero Name" v-model="name">           
            </div>
            <div>
                <textarea rows="15" cols="15" placeholder="Owner" v-model="owner"></textarea>
            </div>
            <div>
                <button class="app_post_btn" @click="addHero">Add</button>
            </div>
        </div>
    </div>
</template>

<script>
import HeroesService from '@/services/HeroesService'
    export default {
        name: 'NewHero',
        data () {
            return {
                name: '',
                owner: '',
            }
        },
        methods: {
            async addHero () {
                await HeroesService.addHero({
                    name: this.name,
                    owner: this.owner
                })
                this.$router.push({ name: 'Heroes' })
            }
        }
    }
</script>

<style scoped>

</style>