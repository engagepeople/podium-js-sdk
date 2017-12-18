import Terms from '@/api/terms'

let data = {
  settings: {
    endpoint: 'api.endpoint.test/'
  },
  resource: 'terms'
}

describe('Terms Resource', () => {
  let resource
  let spyGetRequest = sinon.spy
  let spyPostRequest = sinon.spy

  beforeEach(() => {
    resource = new Terms(data.settings)
    spyGetRequest = sinon.spy(resource, 'GetRequest')
    spyPostRequest = sinon.spy(resource, 'PostRequest')
  })
  afterEach(() => {
    spyGetRequest.restore()
  })

  it('should call GetRequest once on get', () => {
    resource.get()
    expect(spyGetRequest.callCount).to.equal(1)
  })

  it('should call PostRequest once on accept', () => {
    resource.accept()
    expect(spyPostRequest.callCount).to.equal(1)
  })

  it('should call PostRequest with the right arguments', () => {
    const termsId = 1232
    resource.accept(termsId)
    expect(spyPostRequest.firstCall.args[0]).to.equal(data.resource)
    expect(spyPostRequest.firstCall.args[1].terms_id).to.equal(termsId)
  })
})
