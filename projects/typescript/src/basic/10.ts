// Задача 9. Дискриминируемое объединение и сужение типа.

type Circle = {
  kind: 'circle';
  radius: number;
}

type Rectangle = {
  kind: 'rectangle';
  width: number;
  height: number;
}

type Shape = Circle | Rectangle;

function calculateArea(shape: Shape): number {

  if (shape.kind === 'circle') {
    console.log(Math.PI * shape.radius * shape.radius);
    return Math.PI * shape.radius * shape.radius;
  } else {
    console.log(shape.width * shape.height);
    return shape.width * shape.height;
  }
}

calculateArea({
  kind: "circle",
  radius: 5,
});

calculateArea({
  kind: "rectangle",
  width: 4,
  height: 6,
});