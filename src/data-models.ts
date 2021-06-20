abstract class AbstractEntity<TData extends {}> {
  protected _data: TData;

  public constructor(data: TData) {
    this._data = {...data};

    return new Proxy(this, {
      get: function(target: AbstractEntity<TData>, propertyName: string, receiver: any) {
        if (propertyName in target) {
          return target[propertyName as keyof typeof target];
        } else if (propertyName in target._data) {
          return target._data[propertyName as keyof typeof target._data];
        }
        return undefined;
      },
      getPrototypeOf: function(target: AbstractEntity<TData>) {
        return (this as any).prototype; // TODO
      }
    });
  }

  public getBaseData(): TData {return {...this._data};}
}

interface UserData {
  username: string;
  emailAddress: string;
  gender?: 'male' | 'female' | 'other';
  firstName: string;
  lastName?: string;
  birthday?: Date;
  passwordHash: string;
  statusPoints?: number;
  imageURL?: string;
}
class User extends AbstractEntity<UserData> {}
interface User extends UserData {}

interface CultureTagData {
  cluster: string;
  tag: string;
  description?: string;
}
class CultureTag extends AbstractEntity<CultureTagData> {}
interface CultureTag extends CultureTagData {}

interface UserPreferenceData {
  username: string;
  cultureTagCluster: string;
  cultureTag: string;
  preference: boolean;
}
class UserPreference extends AbstractEntity<UserPreferenceData> {}
interface UserPreference extends UserPreferenceData {}

interface ExperienceData {
  id: string;
  title: string;
  description?: string;
  startDateTime?: Date;
  endDateTime?: Date;
  venueId?: string;
  offerURL: string;
  imageURL?: string;
}
class Experience extends AbstractEntity<ExperienceData> {}
interface Experience extends ExperienceData {}

interface VisitData {
  username: string;
  experienceId: string;
  customizationLabel: string;
  startDateTime: Date;
  endDateTime: Date;
}
class Visit extends AbstractEntity<VisitData> {}
interface Visit extends VisitData {}

interface VenueData {
  id: string;
  name: string;
  streetAddress: string;
  zipCode: string;
  city: string;
  country: string;
  latitude?: number;
  longitude?: number;
  websiteURL?: string;
}
class Venue extends AbstractEntity<VenueData> {}
interface Venue extends VenueData {}

interface VotingData {
  username: string;
  experienceId: string;
  vote: number;
  lastUpdateDateTime: Date;
}
class Voting extends AbstractEntity<VotingData> {}
interface Voting extends VotingData {}

interface ExperiencePartData {
  experienceId: string;
  partId: string;
  title: string;
}
class ExperiencePart extends AbstractEntity<ExperiencePartData> {}
interface Experience extends ExperienceData {}

interface ExperiencePartCustomizationData {
  experienceId: string;
  partId: string;
  customizationLabel: string;
  customizedContentJSON: string;
}
class ExperiencePartCustomization extends AbstractEntity<ExperiencePartCustomizationData> {}
interface ExperiencePartCustomization extends ExperiencePartCustomizationData {}


export {
  AbstractEntity,
  User,
  CultureTag,
  UserPreference,
  Experience,
  Visit,
  Venue,
  Voting,
  ExperiencePart,
  ExperiencePartCustomization,
};
