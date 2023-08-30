class Person {
  constructor() {}
}

interface ICTORPerson {
  new (): Person;
}
function factory(fn: ICTORPerson) {
  const f = new fn();
  return f;
}

factory(Person);
