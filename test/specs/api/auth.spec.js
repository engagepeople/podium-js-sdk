import Auth from '@/api/auth'

let data = {
  settings: {
    endpoint: 'api.endpoint.test/'
  },
  token: 'qskrnmcyhnapvpuimndsfyhgdwqgfkxnfw',
  login: {
    username: 'testUser',
    password: 'password123',
    programId: 1
  }
}

describe('Auth Resource', () => {
  let resource
  let spyPostRequest = sinon.spy
  let spyAuthenticateRequest = sinon.spy

  beforeEach(() => {
    resource = new Auth(data.settings)
    spyAuthenticateRequest = sinon.spy(resource, 'AuthenticateRequest')
    spyPostRequest = sinon.spy(resource, 'PostRequest')
  })
  afterEach(() => {
    spyAuthenticateRequest.restore()
    spyPostRequest.restore()
  })

  it('should call get the same token set on getToken()', () => {
    resource.basicAuth(data.token)
    expect(resource.getToken()).to.equal(data.token)
  })

  it('should call AuthenticateRequest on login()', () => {
    resource.login(data.login.username, data.login.password, data.login.programId)
    expect(spyAuthenticateRequest.callCount).to.equal(1)
  })
  it('should call AuthenticateRequest on login() with the correct params', () => {
    resource.login(data.login.username, data.login.password, data.login.programId)
    expect(spyAuthenticateRequest.firstCall.args[0].user_account).to.equal(data.login.username)
    expect(spyAuthenticateRequest.firstCall.args[0].password).to.equal(data.login.password)
    expect(spyAuthenticateRequest.firstCall.args[0].program_id).to.equal(data.login.programId)
  })

  it('should call PostRequest on logout()', () => {
    resource.logout()
    expect(spyPostRequest.callCount).to.equal(1)
  })
})
