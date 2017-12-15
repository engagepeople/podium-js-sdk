import Incentive from '@/api/incentive'

let data = {
  settings: {
    endpoint: 'api.endpoint.test/'
  },
  resource: 'balance'
}

describe('Incentive Resource', () => {
  let resource
  let spyGetRequest = sinon.spy

  beforeEach(() => {
    resource = new Incentive(data.settings)
    spyGetRequest = sinon.spy(resource, 'GetRequest')
  })
  afterEach(() => {
    spyGetRequest.restore()
  })

  it('should call GetRequest once on getBalance', () => {
    resource.getBalance()
    expect(spyGetRequest.callCount).to.equal(1)
  })

  it('should call getTransactions once on getBalance', () => {
    resource.getTransactions()
    expect(spyGetRequest.callCount).to.equal(1)
  })
})
