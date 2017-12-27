'use strict'

module.exports = class PodiumQuery {
  constructor () {
    this.page = 1
    this.rowsPerPage = 2
    this.sort_field = 'created_at'
    this.sort_direction = 'desc'
  }

  setPage (page) {
    this.page = page
  }

  toParams () {
    return {
      page: this.page,
      count: this.rowsPerPage,
      sort_field: this.sort_field,
      sort_direction: this.sort_direction
    }
  }
}
