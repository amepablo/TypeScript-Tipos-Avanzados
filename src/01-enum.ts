export enum ROLES {
  ADMIN = 'admin',
  SELLER = ' seller',
  CUSTOMER = 'customer'
}

export type User = {
  username: string;
  role: ROLES;
}

const pabloUser: User = {
  username: 'amepablo',
  role: ROLES.SELLER
}
