import { Address, Review, Role } from "../../store/feature/auth/type";

export class UserModel {
  constructor(
    public userId: string,
    public firstName: string,
    public lastName: string,
    public kitchenName: string,
    public openingTime: string,
    public closingTime: string,
    public address: Address,
    public email: string,
    public mobile: string,
    public role: Role,
    public profilePic: string,
    public review: Review[],
    public userCreatedAt: string,
    public userModifiedAt: string
  ) {}
}
