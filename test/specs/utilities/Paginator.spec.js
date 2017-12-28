import PodiumPaginator from '@/utilities/Paginator'

let context = {
  currentPage: 29,
  perPage: 50,
  sortBy: 'created_by',
  sortDesc: true
}

describe('PodiumPaginator', () => {
  let paginator
  beforeEach(() => {
    paginator = new PodiumPaginator()
    paginator.setContext(context)
  })
  it('should be an instance of PodiumPaginator', () => {
    expect(paginator).to.be.an.instanceof(PodiumPaginator)
  })
  it('should be set setSortDirection', () => {
    paginator.setSortDirection('asc')
    expect(paginator.toParams().sort_direction).to.equal('asc')
  })
  it('should be set setSortDesc', () => {
    paginator.setSortDesc(false)
    expect(paginator.toParams().sort_direction).to.equal('asc')
  })
  it('should return correct params ', () => {
    expect(paginator.toParams().page).to.equal(context.currentPage)
    expect(paginator.toParams().count).to.equal(context.perPage)
    expect(paginator.toParams().sort_field).to.equal(context.sortBy)
    expect(paginator.toParams().sort_direction).to.equal('desc')
  })
})
