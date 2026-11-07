export class User {
  name: string;
  pic: string;
  
  constructor(
    name: string,
    pic: string
  ) {
    this.name = name;
    this.pic = pic;
  }

  getName(): string {
    return this.name;
  }

  getPic(): string {
    return this.pic;
  }
}