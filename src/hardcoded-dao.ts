import {
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
} from './data-models';

type BaseData<Entity extends AbstractEntity<any>> = ReturnType<Entity['getBaseData']>;
type PrimaryKeyLookup = {
  user: Pick<BaseData<User>, 'username'>,
  cultureTag: Pick<BaseData<CultureTag>, 'tag'>,
  userPreference: Pick<BaseData<UserPreference>, 'username' | 'cultureTag'>,
  experience: Pick<BaseData<Experience>, 'id'>,
  visit: Pick<BaseData<Visit>, 'username' | 'experienceId' | 'startDateTime'>,
  venue: Pick<BaseData<Venue>, 'id'>,
  voting: Pick<BaseData<Voting>, 'username' | 'experienceId'>,
  experiencePart: Pick<BaseData<ExperiencePart>, 'experienceId' | 'partId'>,
  experiencePartCustomization: Pick<BaseData<ExperiencePartCustomization>, 'experienceId' | 'partId' | 'customizationLabel'>,
}

class HardcodedDAO {
  private _store: Record<string, Record<string, unknown>[]>;

  public constructor(store: Record<string, Record<string, unknown>[]>) {
    this._store = store;
  }

  private _checkFilter(recordData: any, filter?: any): boolean {
    if (filter === undefined) return true;
    for (const [key, value] of Object.entries(filter)) {
      if (recordData[key] !== value) return false;
    }
    return true;
  }
  private async _insertRecord<TData, TClass extends AbstractEntity<TData>>(table: string, entity: TClass): Promise<void> {
    const data = entity.getBaseData();
    this._store[table].push(data as any);
  }
  private async _deleteRecord<TData>(table: string, primaryKey: Partial<TData>): Promise<void> {
    const recordDatas = this._store[table];
    const recordDataIndex = recordDatas.findIndex((recordData) => this._checkFilter(recordData, primaryKey));
    if (recordDataIndex === -1) {
      throw new Error('Record with primary key has not been found.');
    }
    this._store[table].splice(recordDataIndex, 1);
  }
  private async _editRecord<TData, TClass extends AbstractEntity<TData>>(table: string, entityClass: new (recordData: TData) => TClass, primaryKey: Partial<TData>, newData: Partial<TData>): Promise<void> {
    const oldRecord = await this._fetchRecord(table, entityClass, primaryKey);
    if (oldRecord === null) {
      throw new Error('Record with primary key has not been found.');
    }
    const oldData = oldRecord.getBaseData();
    const fullNewData = {...oldData, ...newData};
    await this._deleteRecord(table, primaryKey);
    await this._insertRecord(table, new entityClass(fullNewData));
  }
  private async _fetchRecords<TData, TClass extends AbstractEntity<TData>>(table: string, entityClass: new (recordData: TData) => TClass, filter?: Partial<TData>): Promise<TClass[]> {
    const recordDatas = this._store[table];
    const filteredRecordDatas = recordDatas.filter((recordData) => this._checkFilter(recordData, filter));
    const records = filteredRecordDatas.map((recordData) => new entityClass(recordData as TData));
    return records;
  }
  private async _fetchRecord<TData, TClass extends AbstractEntity<TData>>(table: string, cls: new (recordData: TData) => TClass, primaryKey: Partial<TData>): Promise<TClass | null> {
    const records = await this._fetchRecords(table, cls, primaryKey);
    switch (records.length) {
      case 0:
        return null;
      case 1:
        return records[0];
      default:
        throw new Error(`Result contains ${records.length} records but should contain only 1.`);
    }
  }

  public async insertUser(user: User): Promise<void> {
    return this._insertRecord('users', user);
  }
  public async deleteUser(primaryKey: PrimaryKeyLookup['user']): Promise<void> {
    return this._deleteRecord('users', primaryKey);
  }
  public async editUser(primaryKey: PrimaryKeyLookup['user'], newData: Partial<BaseData<User>>): Promise<void> {
    return this._editRecord('users', User, primaryKey, newData);
  }
  public async fetchUser(primaryKey: PrimaryKeyLookup['user']): Promise<User | null> {
    return this._fetchRecord('users', User, primaryKey);
  }
  public async fetchUsers(filter?: Partial<BaseData<User>>): Promise<User[]> {
    return this._fetchRecords('users', User, filter);
  }

  public async insertCultureTag(cultureTag: CultureTag): Promise<void> {
    return this._insertRecord('culture-tags', cultureTag);
  }
  public async deleteCultureTag(primaryKey: PrimaryKeyLookup['cultureTag']): Promise<void> {
    return this._deleteRecord('culture-tags', primaryKey);
  }
  public async editCultureTag(primaryKey: PrimaryKeyLookup['cultureTag'], newData: Partial<BaseData<CultureTag>>): Promise<void> {
    return this._editRecord('culture-tags', CultureTag, primaryKey, newData);
  }
  public async fetchCultureTag(primaryKey: PrimaryKeyLookup['cultureTag']): Promise<CultureTag | null> {
    return this._fetchRecord('culture-tags', CultureTag, primaryKey);
  }
  public async fetchCultureTags(filter?: Partial<BaseData<CultureTag>>): Promise<CultureTag[]> {
    return this._fetchRecords('culture-tags', CultureTag, filter);
  }

  public async insertUserPreference(userPreference: UserPreference): Promise<void> {
    return this._insertRecord('user-preferences', userPreference);
  }
  public async deleteUserPreference(primaryKey: PrimaryKeyLookup['userPreference']): Promise<void> {
    return this._deleteRecord('user-preferences', primaryKey);
  }
  public async editUserPreference(primaryKey: PrimaryKeyLookup['userPreference'], newData: Partial<BaseData<UserPreference>>): Promise<void> {
    return this._editRecord('user-preferences', UserPreference, primaryKey, newData);
  }
  public async fetchUserPreference(primaryKey: PrimaryKeyLookup['userPreference']): Promise<UserPreference | null> {
    return this._fetchRecord('user-preferences', UserPreference, primaryKey);
  }
  // TODO!
  public async fetchUserPreferences(filter?: Partial<BaseData<UserPreference>>): Promise<UserPreference[]> {
    const records = await this._fetchRecords('user-preferences', UserPreference, filter);
    const modifiedRecords = records.map((record) => {
      return new UserPreference(
        {...record.getBaseData(),
          preference: !!(record.getBaseData())
        }
      );
    });
    return modifiedRecords;
  }

  public async insertExperience(experience: Experience): Promise<void> {
    return this._insertRecord('experiences', experience);
  }
  public async deleteExperience(primaryKey: PrimaryKeyLookup['experience']): Promise<void> {
    return this._deleteRecord('experiences', primaryKey);
  }
  public async editExperience(primaryKey: PrimaryKeyLookup['experience'], newData: Partial<BaseData<Experience>>): Promise<void> {
    return this._editRecord('experiences', Experience, primaryKey, newData);
  }
  public async fetchExperience(primaryKey: PrimaryKeyLookup['experience']): Promise<Experience | null> {
    return this._fetchRecord('experiences', Experience, primaryKey);
  }
  public async fetchExperiences(filter?: Partial<BaseData<Experience>>): Promise<Experience[]> {
    return this._fetchRecords('experiences', Experience, filter);
  }

  public async insertVisit(visit: Visit): Promise<void> {
    return this._insertRecord('visits', visit);
  }
  public async deleteVisit(primaryKey: PrimaryKeyLookup['visit']): Promise<void> {
    return this._deleteRecord('visits', primaryKey);
  }
  public async editVisit(primaryKey: PrimaryKeyLookup['visit'], newData: Partial<BaseData<Visit>>): Promise<void> {
    return this._editRecord('visits', Visit, primaryKey, newData);
  }
  public async fetchVisit(primaryKey: PrimaryKeyLookup['visit']): Promise<Visit | null> {
    return this._fetchRecord('visits', Visit, primaryKey);
  }
  public async fetchVisits(filter?: Partial<BaseData<Visit>>): Promise<Visit[]> {
    return this._fetchRecords('visits', Visit, filter);
  }

  public async insertVenue(venue: Venue): Promise<void> {
    return this._insertRecord('venues', venue);
  }
  public async deleteVenue(primaryKey: PrimaryKeyLookup['venue']): Promise<void> {
    return this._deleteRecord('venues', primaryKey);
  }
  public async editVenue(primaryKey: PrimaryKeyLookup['venue'], newData: Partial<BaseData<Venue>>): Promise<void> {
    return this._editRecord('venues', Venue, primaryKey, newData);
  }
  public async fetchVenue(primaryKey: PrimaryKeyLookup['venue']): Promise<Venue | null> {
    return this._fetchRecord('venues', Venue, primaryKey);
  }
  public async fetchVenues(filter?: Partial<BaseData<Venue>>): Promise<Venue[]> {
    return this._fetchRecords('venues', Venue, filter);
  }

  public async insertVoting(voting: Voting): Promise<void> {
    return this._insertRecord('votings', voting);
  }
  public async deleteVoting(primaryKey: PrimaryKeyLookup['voting']): Promise<void> {
    return this._deleteRecord('votings', primaryKey);
  }
  public async editVoting(primaryKey: PrimaryKeyLookup['voting'], newData: Partial<BaseData<Voting>>): Promise<void> {
    return this._editRecord('votings', Voting, primaryKey, newData);
  }
  public async fetchVoting(primaryKey: PrimaryKeyLookup['voting']): Promise<Voting | null> {
    return this._fetchRecord('votings', Voting, primaryKey);
  }
  public async fetchVotings(filter?: Partial<BaseData<Voting>>): Promise<Voting[]> {
    return this._fetchRecords('votings', Voting, filter);
  }

  public async insertExperiencePart(experiencePart: ExperiencePart): Promise<void> {
    return this._insertRecord('experience-parts', experiencePart);
  }
  public async deleteExperiencePart(primaryKey: PrimaryKeyLookup['experiencePart']): Promise<void> {
    return this._deleteRecord('experience-parts', primaryKey);
  }
  public async editExperiencePart(primaryKey: PrimaryKeyLookup['experiencePart'], newData: Partial<BaseData<ExperiencePart>>): Promise<void> {
    return this._editRecord('experience-parts', ExperiencePart, primaryKey, newData);
  }
  public async fetchExperiencePart(primaryKey: PrimaryKeyLookup['experiencePart']): Promise<ExperiencePart | null> {
    return this._fetchRecord('experience-parts', ExperiencePart, primaryKey);
  }
  public async fetchExperienceParts(filter?: Partial<BaseData<ExperiencePart>>): Promise<ExperiencePart[]> {
    return this._fetchRecords('experience-parts', ExperiencePart, filter);
  }

  public async insertExperiencePartCustomization(experiencePartCustomization: ExperiencePartCustomization): Promise<void> {
    return this._insertRecord('experience-part-customizations', experiencePartCustomization);
  }
  public async deleteExperiencePartCustomization(primaryKey: PrimaryKeyLookup['experiencePartCustomization']): Promise<void> {
    return this._deleteRecord('experience-part-customizations', primaryKey);
  }
  public async editExperiencePartCustomization(primaryKey: PrimaryKeyLookup['experiencePartCustomization'], newData: Partial<BaseData<ExperiencePartCustomization>>): Promise<void> {
    return this._editRecord('experience-part-customizations', ExperiencePartCustomization, primaryKey, newData);
  }
  public async fetchExperiencePartCustomization(primaryKey: PrimaryKeyLookup['experiencePartCustomization']): Promise<ExperiencePartCustomization | null> {
    return this._fetchRecord('experience-part-customizations', ExperiencePartCustomization, primaryKey);
  }
  public async fetchExperiencePartCustomizations(filter?: Partial<BaseData<ExperiencePartCustomization>>): Promise<ExperiencePartCustomization[]> {
    return this._fetchRecords('experience-part-customizations', ExperiencePartCustomization, filter);
  } 
}

export {HardcodedDAO};
