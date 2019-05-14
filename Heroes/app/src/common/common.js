
export default {
  async GainExperience (hero, ExperienceGained) {
    hero.TotalExperience += ExperienceGained

    if (hero.TotalExperience >= hero.ExperienceNeeded) {
      hero.Level++
      hero.ExperienceNeeded = Math.round((((hero.ExperienceNeeded * 20) / 100) + hero.ExperienceNeeded) * 2)
    }

    return hero
  }
}
