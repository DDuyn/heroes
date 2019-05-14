<template>
  <div class="heroes row">
    <h1>New Hero</h1>
    <div class="col-md-12">
      <form>
        <div class="form-group col-md-4">
          <label for="heroname">Hero name</label>
          <input
            type="text"
            class="form-control"
            name="name"
            placeholder="Hero Name"
            v-model="name"
          >
        </div>
        <div class="form-group col-md-4">
          <label for="ownername">Owner</label>
          <input type="text" class="form-control" name="owner" placeholder="Owner" v-model="owner">
        </div>
        <div class="form-group col-md-4">
          <label for="classname">Class</label>
          <select class="form-control" name="class" v-model="classSelected">
            <option disabled value>Choose Class</option>
            <option v-for="classHero in classes" :key="classHero._id">{{ classHero.Name }}</option>
          </select>
        </div>
        <div class="form-group col-md-4">
          <button class="btn btn-success" @click="addHero">Add</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import HeroesService from '@/services/HeroesService'
import ClassesService from '@/services/ClassesService'

export default {
  name: 'NewHero',
  data () {
    return {
      name: '',
      owner: '',
      classSelected: '',
      classes: []
    }
  },
  mounted () {
    this.getClasses()
  },
  methods: {
    async getClasses () {
      const response = await ClassesService.getClasses()
      this.classes = response.data.classes
    },
    async addHero () {
      await HeroesService.addHero({
        name: this.name,
        owner: this.owner,
        class: this.classSelected
      })
      this.$router.push({ name: 'Heroes' })
    }
  }
}
</script>

<style scoped>

</style>
