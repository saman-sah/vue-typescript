// 1. Partial<Type>
interface User1 {
  id: number;
  name: string;
  age: number;
}
type PartialUser = Partial<User1>;
// Equivalent to:
// type PartialUser = {
//   id?: number;
//   name?: string;
//   age?: number;
// }
// ===============================================


// 2. Required<Type>
interface User2 {
  id: number;
  name?: string;
  age?: number;
}
type RequiredUser = Required<User2>;
// Equivalent to:
// type RequiredUser = {
//   id: number;
//   name: string;
//   age: number;
// }
// ===============================================


// 3. Readonly<Type>
interface User3 {
  id: number;
  name: string;
  age: number;
}
type ReadonlyUser = Readonly<User3>;
// Equivalent to:
// type ReadonlyUser = {
//   readonly id: number;
//   readonly name: string;
//   readonly age: number;
// }
// ===============================================


// 4. Record<Keys, Type>
type Role = 'admin' | 'user' | 'guest';
type RolePermissions = Record<Role, string[]>;
// Equivalent to:
// type RolePermissions = {
//   admin: string[];
//   user: string[];
//   guest: string[];
// }
// ===============================================


// 5. Pick<Type, Keys>
interface User4 {
  id: number;
  name: string;
  age: number;
}
type UserSummary = Pick<User4, 'id' | 'name'>;
// Equivalent to:
// type UserSummary = {
//   id: number;
//   name: string;
// }
// ===============================================


// 6. Omit<Type, Keys>
interface User5 {
  id: number;
  name: string;
  age: number;
}
type UserWithoutAge = Omit<User5, 'age'>;
// Equivalent to:
// type UserWithoutAge = {
//   id: number;
//   name: string;
// }

// ===============================================


// 7. Extract<Type, Union>
type T1 = 'a' | 'b' | 'c' | 'd';
type U1 = 'a' | 'c' | 'e';
type Extracted1 = Extract<T1, U1>; // 'a' | 'c'
// ===============================================


// 8. Exclude<Type, Union>
type T2 = 'a' | 'b' | 'c' | 'd';
type U2 = 'a' | 'c' | 'e';
type Excluded1 = Exclude<T2, U2>; // 'b' | 'd'
// ===============================================


// 9. NonNullable<Type>
type NullableUser = User1 | null | undefined;
type NonNullableUser = NonNullable<NullableUser>;
// Equivalent to:
// type NonNullableUser = User;
// ===============================================


// 10. ReturnType<Type>
function getUser() {
  return { id: 1, name: 'Alice', age: 25 };
}

type User6 = ReturnType<typeof getUser>;
// Equivalent to:
// type User = {
//   id: number;
//   name: string;
//   age: number;
// }
// ===============================================


// 11. InstanceType<Type>
class User1 {
  constructor(public id: number, public name: string, public age: number) { }
}
type UserInstance = InstanceType<typeof User1>;
// Equivalent to:
// type UserInstance = User;
// ===============================================


// 12. Parameters<Type>
function createUser(id: number, name: string, age: number) {
  return { id, name, age };
}
type CreateUserParams = Parameters<typeof createUser>;
// Equivalent to:
// type CreateUserParams = [number, string, number];
// ===============================================


// 13. ConstructorParameters<Type>
class User {
  constructor(public id: number, public name: string, public age: number) { }
}

type UserConstructorParams = ConstructorParameters<typeof User>;
// Equivalent to:
// type UserConstructorParams = [number, string, number];
