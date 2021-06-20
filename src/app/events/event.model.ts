export class Experience { // e.g. exhibition in a museum
  constructor(public id: string,
  public title: string,
  public description?: string,
  public imageUrl?: string,
  public startDateTime?: Date,
  public endDateTime?: Date,
  public venueId?: string) {}
}
