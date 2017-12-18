import LRG from '@/api/lrg'

let data = {
  settings: {
    endpoint: 'api.endpoint.test/'
  },
  resource: 'lrg/session'
}

describe('LRG Resource', () => {
  let resource
  let spyPostRequest = sinon.spy

  beforeEach(() => {
    resource = new LRG(data.settings)
    spyPostRequest = sinon.spy(resource, 'PostRequest')
  })
  afterEach(() => {
    spyPostRequest.restore()
  })

  it('should use the right resource', () => {
    expect(resource.resource).to.equal(data.resource)
  })

  it('should call GetRequest once on get()', () => {
    resource.get()
    expect(spyPostRequest.callCount).to.equal(1)
  })

  it('should pass the resource as the first argument on get()', () => {
    resource.get()
    expect(spyPostRequest.firstCall.args[0]).to.equal(data.resource)
  })
})

describe('LRG Resource', () => {
  let resource
  let spyPostRequest = sinon.stub
  let spyWindow = sinon.spy

  beforeEach(() => {
    resource = new LRG(data.settings)
    spyWindow = sinon.stub(window, 'location')
    spyPostRequest = sinon.stub(resource, 'PostRequest').resolves({
      body: {
        redirect_url: 'http://lrg.url'
      }
    })
  })
  afterEach(() => {
    spyPostRequest.restore()
  })

  it.skip('should call GetRequest once', () => {
    resource.redirect('http://www.redirecturl.com')
    expect(spyPostRequest.callCount).to.equal(1)
    expect(spyWindow.callCount).to.equal(1)
  })
})
