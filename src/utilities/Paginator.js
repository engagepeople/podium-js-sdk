'use strict'

module.exports = class PodiumQuery {
  constructor () {
    this.page = 1
    this.perPage = 50
    this.sort_field = 'created_at'
    this.sort_direction = 'desc'
  }

  setContext (ctx) {
    this.setPage(ctx.currentPage || this.page)
    this.setPerPage(ctx.perPage || this.perPage)
    this.setSortBy(ctx.sortBy || this.sort_field)
    this.setSortDesc(ctx.sortDesc || this.sort_direction)
    return this
  }

  setPage (page) {
    this.page = page
  }

  setPerPage (perPage) {
    this.perPage = perPage
  }

  setSortBy (sortBy) {
    this.sortBy = sortBy
  }

  setSortDirection (direction) {
    this.sort_direction = direction
  }

  setSortDesc (direction) {
    if (direction) {
      this.sort_direction = 'desc'
    } else {
      this.sort_direction = 'asc'
    }
  }

  toParams () {
    return {
      page: this.page,
      count: this.perPage,
      sort_field: this.sort_field,
      sort_direction: this.sort_direction
    }
  }
}
