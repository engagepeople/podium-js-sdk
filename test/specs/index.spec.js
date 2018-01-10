import Podium from '@/index'
import Settings from '@/settings'
import Paginator from '@/utilities/Paginator'

let data = {
  settings: {
    endpoint: 'api.endpoint.test/'
  }
}

describe('Podium Resource', () => {
  let resource

  beforeEach(() => {
    resource = new Podium(data.settings)
  })

  it('should use the right resource', () => {
    expect(resource.settings).to.be.a('object')
  })

  it('should have properties', () => {
    expect(resource).to.have.property('settings')
    expect(resource).to.have.property('auth')
    expect(resource).to.have.property('lrg')
    expect(resource).to.have.property('incentive')
    expect(resource).to.have.property('terms')
    expect(resource).to.have.property('profile')
    expect(resource).to.have.property('Paginator')
    // expect(resource.auth).to.be.('object')
  })

  it('should have Paginator as a factory', () => {
    expect(resource.Paginator).to.be.a('function')
  })
  it('should have Paginator to be a Paginator', () => {
    expect(resource.Paginator()).to.be.instanceOf(Paginator)
  })
  it('should set settings correctly', () => {
    expect(resource.settings.endpoint).to.equal(data.settings.endpoint)
  })

  it('should default settings correctly', () => {
    resource = new Podium()
    expect(resource.settings.endpoint).to.equal(Settings.endpoint)
  })
})
