function* numbGen () {
  let i = 0;
  while (true) {
    console.log(i++)
    yield i
  }
}

const iterator = numbGen();

iterator.next();
iterator.next();
iterator.next();
iterator.next();
iterator.next();
iterator.next();
iterator.next();
iterator.next();