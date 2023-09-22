
// bucket 0 | bucket 1 | bucket 2 | bucket 3 | bucket 4 - ячейки в которые будут помещаться значения

const hashSet = new Set()
////

hashSet.add("Миша")
/// вызывается функция hashCode("Миша")
/// hashCode преобразует любой объект который мы передаем в число
/// например "Миша" -> 21
/// Главное что hashCode всегда будет преобразовывать Миша в 21
/// После преобразования Миши в число, он получает index bucket'a
/// Для этого hashSet берет остаток от деления 21 на число бакетов (например от 5)
/// 21 % 5 = 1
/// в bucket с этим номером записывает Мишу
/// цепочка такая add("Миша") -> hashCode("Миша") -> 21 -> %5 -> 1
hashSet.add("Андрей")
// тоже самое
hashSet.has("Андрей")
// проверяет есть ли элемент в сете has("Андрей") -> hashCode("Андрей") -> -5 -> %5 -> 0

hashSet.delete("Миша")

///Но на самом деле цепочка следущая
// add("Андрей")

//HashTab in JavaScript is Object
const object = {Anatoliy: 23}
object.Roman = 23

const age = object.Roman