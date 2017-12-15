import convertTime from '@/utilities/convertTime'

let payload = {
  age: 29,
  time: '2020-01-01 00:00:00',
  nested: {
    otherProperty: 'string',
    otherDate: '2029-11-29 12:03:02'
  }
}

describe('APIToUTC', () => {
  let convertedData
  beforeEach(() => {
    convertedData = convertTime.APIToUTC(payload)
  })
  it('should find an create a date object', () => {
    expect(convertedData.time)
      .to.be.an.instanceof(Date)
  })
  it('should be convert be in UTC', () => {
    expect(convertedData.time.toUTCString())
      .to.equal('Wed, 01 Jan 2020 00:00:00 GMT')
  })
  it('should be not effect other properties', () => {
    expect(convertedData.age)
      .to.equal(29)
  })
  it('should be convert deep properties', () => {
    expect(convertedData.nested.otherDate.toUTCString())
      .to.equal('Thu, 29 Nov 2029 12:03:02 GMT')
  })
  it('it should not do anything to non objects', () => {
    let data = convertTime.APIToUTC('string')
    expect(data)
      .to.equal('string')
  })
  it('it should not do anything to non objects', () => {
    let data = convertTime.APIToUTC(29)
    expect(data)
      .to.equal(29)
  })
})
describe('UTCtoAPI', () => {
  let convertedData
  beforeEach(() => {
    convertedData = convertTime.UTCtoAPI(convertTime.APIToUTC((payload)))
  })
  it('should convert back to a string', () => {
    expect(convertedData.time)
      .to.be.a('string')
  })
  it('should convert back to a date string', () => {
    expect(convertedData.time)
      .to.be.an.equal('2020-01-01 00:00:00')
  })
  it('should find an create a date object', () => {
    expect(convertedData.time)
      .to.be.an.equal('2020-01-01 00:00:00')
  })
  it('should convert back to a deep property to date string', () => {
    expect(convertedData.nested.otherDate)
      .to.be.an.equal('2029-11-29 12:03:02')
  })

  it('it should not do anything to non objects', () => {
    let data = convertTime.UTCtoAPI('string')
    expect(data)
      .to.equal('string')
  })
  it('it should not do anything to non objects', () => {
    let data = convertTime.UTCtoAPI(29)
    expect(data)
      .to.equal(29)
  })
})
