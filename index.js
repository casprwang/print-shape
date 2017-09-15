const shape = {
  middle: '-',
  leftSlope: '/',
  rightSlope: '\\',
  vertical: '|',
}

const checkBasic = (...args) => {
  if ([...args].length !==1)throw `use only one argument`
  if (typeof [...args][0] !== 'number')throw `use only one argument`
  if ( [...args] < 1 || !Number.isInteger([...args][0])) throw `use a integer larger than 0`
}

const isEven = n => n % 2 ===0

const triangle = (lines, ...args) => {
  checkBasic(...[lines, ...args])
  for (let i =0; i<lines; i+=1) {
    if (i !==lines-1)
      console.log(' '.repeat(lines-i-1)+ shape.leftSlope + ' '.repeat(i*2) + shape.rightSlope)
    else
      console.log(' '.repeat(lines-i-1)+ shape.leftSlope + '-'.repeat(i*2) + shape.rightSlope)
  }
}


const square = (lines, ...args) => {
  checkBasic(...[lines, ...args])
  if(lines < 2) throw `use an integer larger than 1`
  if (lines)
  console.log(shape.vertical + shape.middle.repeat(lines) + shape.vertical)
  for (let i =0; i<lines-2; i++) {
    console.log(shape.vertical + ' '.repeat(lines) + shape.vertical)
  }
  console.log(shape.vertical + shape.middle.repeat(lines) + shape.vertical)
}


const rhombus = (lines, ...args) => {
  checkBasic(...[lines, ...args])
  if (!isEven(lines)) throw `use even number`
  if(lines < 2) throw `use an integer larger than 1`
  for (let i = 0; i< lines /2 ; i++) {
    if (i===0) console.log(' '.repeat(lines/2 -i-1) + shape.leftSlope + '-'.repeat(2*i +1) + shape.rightSlope)
    else console.log(' '.repeat(lines/2 -i-1) + shape.leftSlope + ' '.repeat(2*i+1) + shape.rightSlope)
  }
  for (let i = lines/2-1; i>=0; i--) {
    if (i===0) console.log(' '.repeat(lines/2 -i-1) + shape.rightSlope + '-'.repeat(2*i +1) + shape.leftSlope)
    else console.log(' '.repeat(lines/2 -i-1) + shape.rightSlope + ' '.repeat(2*i+1) + shape.leftSlope)
  }
}


module.exports = {
  triangle,
  rhombus,
  square
}
