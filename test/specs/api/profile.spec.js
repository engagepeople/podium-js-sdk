import Profile from '@/api/profile'

let data = {
  settings: {
    endpoint: 'api.endpoint.test/'
  },
  resource: 'profile'
}

describe('Profile Resource', () => {
  let resource
  let spyGetRequest = sinon.spy

  beforeEach(() => {
    resource = new Profile(data.settings)
    spyGetRequest = sinon.spy(resource, 'GetRequest')
  })
  afterEach(() => {
    spyGetRequest.restore()
  })

  it('should use the right resource', () => {
    expect(resource.resource).to.equal(data.resource)
  })

  it('should call GetRequest once', () => {
    resource.get()
    expect(spyGetRequest.callCount).to.equal(1)
  })

  it('should pass the resource as the first argument', () => {
    resource.get()
    expect(spyGetRequest.firstCall.args[0]).to.equal(data.resource)
  })
})
