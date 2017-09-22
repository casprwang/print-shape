# print-shape

print out a variety of shapes from your console

## Usage
```js
// index.js
const { triangle, square, rhombus } = require('print-shape')

triangle(6)
square(6)
rhombus(6)
```

execute with
```
# node index.js
```

in terminal
```
     /\
    /  \
   /    \
  /      \
 /        \
/----------\
|------|
|      |
|      |
|      |
|      |
|------|
  /-\
 /   \
/     \
\     /
 \   /
  \-/
```

## API
### .triangle(num: number): null
no return just log the shape in terminal
### .square(num: number(>1)): null 
no return just log the shape in terminal
### .rhombus(num: number(even)): null 
no return just log the shape in terminal

## License
MIT © [Song Wang](https://songwang.io)

