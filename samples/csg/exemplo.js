let a = CSG.cube({ center: [-0.25, -0.25, -0.25] });
let b = CSG.sphere({ radius: 1.3, center: [0.25, 0.25, 0.25] });

a.setColor(1, 0, 0);
b.setColor(0, 0, 1);

let operations = [
  { result: a, id: 'a' },
  { result: b, id: 'b' },
  { result: a.union(b), id: 'a-union-b' },
  { result: a.subtract(b), id: 'a-subtract-b' },
  { result: a.intersect(b), id: 'a-intersect-b' },
];

for (let operation of operations) {
  addViewer(new Viewer(operation.result, 100, 100, 6), operation.id);
}

function addViewer(viewer, id) {
  document.getElementById(id).appendChild(viewer.gl.canvas);
}
