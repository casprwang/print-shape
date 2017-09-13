import mod from '.'

test(`init test`, ()=> {
  expect(mod.firstTouch()).toBe(2)
})


test(`triangle`, ()=> {
  console.log(mod.triangle(2))
  // expect(mod.triangle()).toBe(2)
})
