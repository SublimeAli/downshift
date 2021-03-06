beforeEach(() => {
  document.body.innerHTML = ''
})

test('sets the status', () => {
  const setA11yStatus = setup()
  setA11yStatus('hello')
  expect(document.body.firstChild).toMatchSnapshot()
})

test('repeat statuses get appended as children', () => {
  const setA11yStatus = setup()
  setA11yStatus('hello')
  setA11yStatus('hello')
  setA11yStatus('hello')
  expect(document.body.firstChild).toMatchSnapshot()
})

test('clears statuses when a change appears', () => {
  const setA11yStatus = setup()
  setA11yStatus('hello')
  setA11yStatus('hello')
  setA11yStatus('hello')
  setA11yStatus('goodbye')
  expect(document.body.firstChild).toMatchSnapshot()
})

test('does add anything for an empty string', () => {
  const setA11yStatus = setup()
  setA11yStatus('')
  expect(document.body.firstChild).toMatchSnapshot()
})

test('escapes HTML', () => {
  const setA11yStatus = setup()
  setA11yStatus('<script>alert("!!!")</script>')
  expect(document.body.firstChild).toMatchSnapshot()
})

function setup() {
  jest.resetModules()
  return require('../set-a11y-status').default
}
