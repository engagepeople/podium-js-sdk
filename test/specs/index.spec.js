import Podium from '@/index'
import Settings from '@/settings'

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
    expect(resource.setting).to.be.a('object')
  })

  it('should have properties', () => {
    expect(resource).to.have.property('setting')
    expect(resource).to.have.property('auth')
    expect(resource).to.have.property('lrg')
    expect(resource).to.have.property('incentive')
    expect(resource).to.have.property('terms')
    expect(resource).to.have.property('profile')
    // expect(resource.auth).to.be.('object')
  })

  it('should set settings correctly', () => {
    expect(resource.setting.endpoint).to.equal(data.settings.endpoint)
  })

  it('should default settings correctly', () => {
    resource = new Podium()
    expect(resource.setting.endpoint).to.equal(Settings.endpoint)
  })
})
