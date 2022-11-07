export type Role = "ADMIN" | "CHEF" | "CUSTOMER";
export type AuthErrorType = {
  message: string;
  status: string;
  timestamp: string;
  error: string; // TODO: we can define the error types in backend
  path: string;
};

export type AuthResponseType = {
  id: string;
  message: string;
  responseStatusId: number;
  objectList: User[];
};

export type VerifyOtpRequestType = {
  otp: string;
  role: Role;
  userId: string | null;
};

export type SignupRequestType = {
  firstName: string;
  lastName: string;
  mobile: string;
  password: string;
  role: Role;
  address: {
    street: string;
    houseNumber: string;
    city: string;
    postCode: string;
    coordinates: any[];
  };
};

export type LoginRequestType = {
  username: string;
  password: string;
};

export type User = {
  userId: string;
  firstName: string;
  lastName: string;
  kitchenName: string;
  openingTime: string;
  closingTime: string;
  address: Address;
  email: string;
  mobile: string;
  role: Role;
  profilePic: string;
  review: Review[];
  userCreatedAt: string;
  userModifiedAt: string;
};

export type Address = {
  addressTitle: string;
  street: string;
  houseNumber: string;
  postCode: string;
  city: string;
  coordinates: number[];
};

export type Review = {
  comment: string;
  rating: number;
  reviewFrom: string;
  reviewInserted: string;
  reviewModified: string;
};

export type GetNearbyChefRequest = {
  longitude: number;
  latitude: number;
};
