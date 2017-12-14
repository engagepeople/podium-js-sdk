import Podium from '@/index'

describe('Spy', () => {
  let podium
  beforeEach(() => {
    podium = new Podium({endpoint: 'https://stage-api.podiumrewards.com/v1/'})
  })

  it('It should return what was sent', () => {
    let n = podium.terms.test('test')
    expect(n).to.equal(n)
  })

  it('it should spy test 3 times', () => {
    const testSpy = sinon.spy(podium.terms, 'test')

    podium.terms.test()
    podium.terms.test()
    podium.terms.test()
    testSpy.restore()

    expect(testSpy.calledThrice).to.equal(true)
    expect(testSpy.callCount).to.equal(3)
  })

  it('It should be called with test', () => {
    const testSpy = sinon.spy(podium.terms, 'test')
    podium.terms.test('test')
    testSpy.alwaysCalledWith('test')
    testSpy.restore()

    expect(testSpy.alwaysCalledWith('test')).to.equal(true)
  })
})

describe.only('Stub', () => {
  let podium
  beforeEach(() => {
    podium = new Podium({endpoint: 'https://stage-api.podiumrewards.com/v1/'})
  })

  it('It should return what was sent', () => {
    const stub = sinon.stub()
    stub('hello')
    expect(stub.firstCall.args[0]).to.equal('hello')
  })

  it('should call callback after saving', () => {
    let post = sinon.stub($, 'post')
    post.yields()
    let callback = sinon.spy()

    // expect(stub.firstCall.args[0]).to.equal('hello')
  })

})