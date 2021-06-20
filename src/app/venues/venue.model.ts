export class Venue { // e.g. museum
  constructor(
  public id: string,
  public name: string,
  public imageUrl: string,
  public streetAddress: string,
  public zipCode: string,
  public city: string,
  public country: string,
  public latitude?: number,
  public longitude?: number,
  ){}
}

