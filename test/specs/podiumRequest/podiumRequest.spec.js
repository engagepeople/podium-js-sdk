import PodiumRequest from '@/podiumRequest/podiumRequest'
import moxios from 'moxios'

let data = {
  settings: {
    endpoint: 'api.endpoint.test/'
  },
  token: 'TESTTOKENTESTTOKENTESTTOKENTESTTOKENTESTTOKENTESTTOKEN'
}

describe('podiumRequest', () => {

  describe('Authentication ', () => {
    let podiumRequest

    beforeEach(() => {
      podiumRequest = new PodiumRequest(data.settings)
      podiumRequest._removeToken()
      moxios.install()
    })
    afterEach(function () {
      moxios.uninstall()
    })

    it('Expects Authenticate2Request to set token', function (done) {

      expect(podiumRequest._getToken()).to.equal(null)

      moxios.withMock(function () {
        let onFulfilled = sinon.spy()
        let axObj = podiumRequest.AuthenticateRequest({username: 'testUser', password: '1234', program_id: 1})
        axObj.then(onFulfilled)

        moxios.wait(function () {
          let request = moxios.requests.mostRecent()
          request.respondWith({
            status: 200,
            response: {
              id: 12345, username: 'John', token: data.token
            }
          }).then(function () {
            expect(podiumRequest._getToken()).to.equal(data.token)
            expect(request.url).to.equal('api.endpoint.test/login')
            expect(request.headers.Authentication).to.equal(undefined)
            done()
          })
        })
      })
    })
  })

  describe('Where Token Is already set', () => {
    let podiumRequest

    beforeEach(() => {
      podiumRequest = new PodiumRequest(data.settings)
      podiumRequest._setToken(data.token)
      moxios.install()
    })
    afterEach(function () {
      moxios.uninstall()
    })

    it('_makeUrl should generate an endpoint', () => {
      let url = podiumRequest._makeUrl('user')
      expect(url).to.be.a('string')
      expect(url).to.equal('api.endpoint.test/user')
    })

    it('Expect GetRequest make request with right header return data', function (done) {
      moxios.withMock(function () {
        let onFulfilled = sinon.spy()
        let axObj = podiumRequest.GetRequest('users')
        axObj.then(onFulfilled)

        moxios.wait(function () {
          let request = moxios.requests.mostRecent()
          request.respondWith({
            status: 200,
            response: {
              id: 12345, firstName: 'John', lastName: 'Flintstone'
            }
          }).then(function () {
            expect(request.url).to.equal('api.endpoint.test/users')
            expect(request.headers.Authentication).to.equal(data.token)
            done()
          })
        })
      })
    })

    it('Expect PostRequest make request with right header return data', function (done) {
      moxios.withMock(function () {
        let onFulfilled = sinon.spy()
        let axObj = podiumRequest.PostRequest('users', {username: 'testUser'})
        axObj.then(onFulfilled)

        moxios.wait(function () {
          let request = moxios.requests.mostRecent()
          request.respondWith({
            status: 200,
            response: {
              id: 12345, firstName: 'John', lastName: 'Flintstone'
            }
          }).then(function () {
            expect(request.url).to.equal('api.endpoint.test/users')
            expect(request.headers.Authentication).to.equal(data.token)
            done()
          })
        })
      })
    })

  })
})
