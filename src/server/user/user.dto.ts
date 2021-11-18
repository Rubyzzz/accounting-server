// user.dto.ts
export class CreateUserDTO {
  readonly mobile: string;
  readonly password: string;
  readonly username: string;
  readonly description: string;
  readonly avatar: string;
}

export class EditUserDTO {
  readonly _id: string;
  readonly mobile: string;
  readonly password: string;
  readonly username: string;
  readonly description: string;
  readonly avatar: string;
}
