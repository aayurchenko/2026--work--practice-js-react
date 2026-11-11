interface Tree<T> {
  id: number;
  name: string;
  value: T;
  children: Tree<T>[] | null;
}


const TreeNodes: Tree<string> = {
  id: Math.random(),
  name: "Patrick",
  value: 'adult tree',
  children: []
}