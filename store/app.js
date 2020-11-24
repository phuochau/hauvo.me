import projects from '../data/projects.json'
import about from '../data/about.json'

export const state = () => ({
  projects,
  about
})

export const mutations = {
  setProjects(state, projects) {
    state.projects = projects
  },
  setAbout(state, about) {
    state.about = about
  }
}

export const getters = {
  projects: (state) => state.projects,
  about: (state) => state.about
}
