'use strict'

module.exports = class Paginator {
  constructor (userSettings = require('./../settings')) {
    this.page = 1
    this.perPage = userSettings.perPage
    this.sortField = userSettings.sortField
    this.sortDirection = userSettings.sortDirection
  }

  setContext (ctx) {
    this.setPage(ctx.currentPage)
    this.setPerPage(ctx.perPage)
    this.setSortField(ctx.sortBy)
    this.setSortDesc(ctx.sortDesc)
    return this
  }

  setPage (page) {
    this.page = page
    return this
  }

  setPerPage (perPage) {
    this.perPage = perPage
    return this
  }

  setSortField (sortField) {
    this.sortField = sortField
    return this
  }

  setSortDirection (direction) {
    this.sortDirection = direction
    return this
  }

  setSortDesc (direction) {
    if (direction) {
      this.sortDirection = 'desc'
    } else {
      this.sortDirection = 'asc'
    }
    return this
  }

  toParams () {
    return {
      page: this.page,
      count: this.perPage,
      sort_field: this.sortField,
      sort_direction: this.sortDirection
    }
  }
}
