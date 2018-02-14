import Incentive from '@/api/incentive'

let data = {
  settings: {
    endpoint: 'api.endpoint.test/'
  },
  resource: 'ledger',
  ledgerId: 123
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

  it('should call GetRequest once on getLedgers', () => {
    resource.getLedgers()
    expect(spyGetRequest.callCount).to.equal(1)
  })

  it('should call GetRequest once on getLedgers', () => {
    resource.getLedgers()
    expect(spyGetRequest.callCount).to.equal(1)
  })

  it('should call getTransactions once on getTransactions', () => {
    resource.getTransactions(data.ledgerId)
    expect(spyGetRequest.firstCall.args[0]).to.equal(`ledger/${data.ledgerId}/transaction`)
    expect(spyGetRequest.callCount).to.equal(1)
  })
})
