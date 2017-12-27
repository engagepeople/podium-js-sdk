'use strict'

module.exports = class PodiumPaginator {
  constructor (userSettings = require('./../settings')) {
    this.page = 1
    this.perPage = userSettings.perPage
    this.sort_field = userSettings.sortField
    this.sort_direction = userSettings.sortDirection
  }

  setContext (ctx) {
    this.setPage(ctx.currentPage)
    this.setPerPage(ctx.perPage)
    this.setSortBy(ctx.sortBy)
    this.setSortDesc(ctx.sortDesc)
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
