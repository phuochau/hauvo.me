export const state = () => ({
  projects: []
})

export const mutations = {
  setProjects(state, projects) {
    state.projects = projects
  }
}

export const getters = {
  projects: (state) => state.projects
}
