/*import mariadb from 'mariadb';

// const mariadb = require('mariadb')
// import * as mariadb from 'mariadb';
// var mariadb: any = require('mariadb');


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

class DbDAO { // DAO = Data access object; goal = abstracting away database access.
  private _connectionPool: mariadb.Pool;
  private _connection: any;

  public constructor(connectionConfiguration: mariadb.PoolConfig) {
    this._connectionPool = mariadb.createPool(connectionConfiguration);
  }

  private async _connect(): Promise<mariadb.PoolConnection> {
    if (this._connection === undefined) {
      this._connection = await this._connectionPool.getConnection();
    }
    return this._connection;
  }

  private _buildFilterString(filter?: Record<string, unknown>): string {
    let filterString = '';
    if (filter !== undefined) {
      filterString += 'WHERE 1=1';
      for (const [key, value] of Object.entries(filter)) {
        filterString += ` AND ${key}='${value}'`; // TODO!!
      }
    }
    return filterString;
  }
  private async _insertRecord<TData, TClass extends AbstractEntity<TData>>(table: string, entity: TClass, duplicateMode_?: 'error' | 'ignore' | 'replace'): Promise<void> {
    const duplicateMode = duplicateMode_ ?? 'error';

    const connection = await this._connect();
    const data = entity.getBaseData();
    const dataKeys = Object.keys(data);
    const keysString = dataKeys.join(', ');
    const placeholdersString = '?'.repeat(dataKeys.length).split('').join(', ');
    return connection.query(`
      ${duplicateMode === 'error' ? 'INSERT' : (duplicateMode_ === 'ignore' ? 'INSERT IGNORE' : 'REPLACE')}
      INTO ${table} (${keysString}) VALUES (${placeholdersString});
    `, Object.values(data)); // CHECK/TODO!
  }
  private async _deleteRecord<TData>(table: string, primaryKey: Partial<TData>): Promise<void> {
    const connection = await this._connect();
    return connection.query(`
      DELETE FROM ${table} ${this._buildFilterString(primaryKey)};
    `);
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
    const connection = await this._connect();
    const rows = await connection.query(`
      SELECT * FROM ${table} ${this._buildFilterString(filter)};`
    );
    const recordDatas = rows as TData[];
    const records = recordDatas.map((recordData) => new entityClass(recordData));
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

  public async insertUser(user: User, duplicateMode?: 'error' | 'ignore' | 'replace'): Promise<void> {
    return this._insertRecord('Users', user, duplicateMode);
  }
  public async deleteUser(primaryKey: PrimaryKeyLookup['user']): Promise<void> {
    return this._deleteRecord('Users', primaryKey);
  }
  public async editUser(primaryKey: PrimaryKeyLookup['user'], newData: Partial<BaseData<User>>): Promise<void> {
    return this._editRecord('Users', User, primaryKey, newData);
  }
  public async fetchUser(primaryKey: PrimaryKeyLookup['user']): Promise<User | null> {
    return this._fetchRecord('Users', User, primaryKey);
  }
  public async fetchUsers(filter?: Partial<BaseData<User>>): Promise<User[]> {
    return this._fetchRecords('Users', User, filter);
  }

  public async insertCultureTag(cultureTag: CultureTag, duplicateMode?: 'error' | 'ignore' | 'replace'): Promise<void> {
    return this._insertRecord('CultureTags', cultureTag, duplicateMode);
  }
  public async deleteCultureTag(primaryKey: PrimaryKeyLookup['cultureTag']): Promise<void> {
    return this._deleteRecord('CultureTags', primaryKey);
  }
  public async editCultureTag(primaryKey: PrimaryKeyLookup['cultureTag'], newData: Partial<BaseData<CultureTag>>): Promise<void> {
    return this._editRecord('CultureTags', CultureTag, primaryKey, newData);
  }
  public async fetchCultureTag(primaryKey: PrimaryKeyLookup['cultureTag']): Promise<CultureTag | null> {
    return this._fetchRecord('CultureTags', CultureTag, primaryKey);
  }
  public async fetchCultureTags(filter?: Partial<BaseData<CultureTag>>): Promise<CultureTag[]> {
    return this._fetchRecords('CultureTags', CultureTag, filter);
  }

  public async insertUserPreference(userPreference: UserPreference, duplicateMode?: 'error' | 'ignore' | 'replace'): Promise<void> {
    return this._insertRecord('UserPreferences', userPreference, duplicateMode);
  }
  public async deleteUserPreference(primaryKey: PrimaryKeyLookup['userPreference']): Promise<void> {
    return this._deleteRecord('UserPreferences', primaryKey);
  }
  public async editUserPreference(primaryKey: PrimaryKeyLookup['userPreference'], newData: Partial<BaseData<UserPreference>>): Promise<void> {
    return this._editRecord('UserPreferences', UserPreference, primaryKey, newData);
  }
  public async fetchUserPreference(primaryKey: PrimaryKeyLookup['userPreference']): Promise<UserPreference | null> {
    return this._fetchRecord('UserPreferences', UserPreference, primaryKey);
  }
  // TODO!
  public async fetchUserPreferences(filter?: Partial<BaseData<UserPreference>>): Promise<UserPreference[]> {
    const records = await this._fetchRecords('UserPreferences', UserPreference, filter);
    const modifiedRecords = records.map((record) => {
      return new UserPreference(
        {...record.getBaseData(),
          preference: !!(record.getBaseData())
        }
      );
    });
    return modifiedRecords;
  }

  public async insertExperience(experience: Experience, duplicateMode?: 'error' | 'ignore' | 'replace'): Promise<void> {
    return this._insertRecord('Experiences', experience, duplicateMode);
  }
  public async deleteExperience(primaryKey: PrimaryKeyLookup['experience']): Promise<void> {
    return this._deleteRecord('Experiences', primaryKey);
  }
  public async editExperience(primaryKey: PrimaryKeyLookup['experience'], newData: Partial<BaseData<Experience>>): Promise<void> {
    return this._editRecord('Experiences', Experience, primaryKey, newData);
  }
  public async fetchExperience(primaryKey: PrimaryKeyLookup['experience']): Promise<Experience | null> {
    return this._fetchRecord('Experiences', Experience, primaryKey);
  }
  public async fetchExperiences(filter?: Partial<BaseData<Experience>>): Promise<Experience[]> {
    return this._fetchRecords('Experiences', Experience, filter);
  }

  public async insertVisit(visit: Visit, duplicateMode?: 'error' | 'ignore' | 'replace'): Promise<void> {
    return this._insertRecord('Visits', visit, duplicateMode);
  }
  public async deleteVisit(primaryKey: PrimaryKeyLookup['visit']): Promise<void> {
    return this._deleteRecord('Visits', primaryKey);
  }
  public async editVisit(primaryKey: PrimaryKeyLookup['visit'], newData: Partial<BaseData<Visit>>): Promise<void> {
    return this._editRecord('Visits', Visit, primaryKey, newData);
  }
  public async fetchVisit(primaryKey: PrimaryKeyLookup['visit']): Promise<Visit | null> {
    return this._fetchRecord('Visits', Visit, primaryKey);
  }
  public async fetchVisits(filter?: Partial<BaseData<Visit>>): Promise<Visit[]> {
    return this._fetchRecords('Visits', Visit, filter);
  }

  public async insertVenue(venue: Venue, duplicateMode?: 'error' | 'ignore' | 'replace'): Promise<void> {
    return this._insertRecord('Venues', venue, duplicateMode);
  }
  public async deleteVenue(primaryKey: PrimaryKeyLookup['venue']): Promise<void> {
    return this._deleteRecord('Venues', primaryKey);
  }
  public async editVenue(primaryKey: PrimaryKeyLookup['venue'], newData: Partial<BaseData<Venue>>): Promise<void> {
    return this._editRecord('Venues', Venue, primaryKey, newData);
  }
  public async fetchVenue(primaryKey: PrimaryKeyLookup['venue']): Promise<Venue | null> {
    return this._fetchRecord('Venues', Venue, primaryKey);
  }
  public async fetchVenues(filter?: Partial<BaseData<Venue>>): Promise<Venue[]> {
    return this._fetchRecords('Venues', Venue, filter);
  }

  public async insertVoting(voting: Voting, duplicateMode?: 'error' | 'ignore' | 'replace'): Promise<void> {
    return this._insertRecord('Votings', voting, duplicateMode);
  }
  public async deleteVoting(primaryKey: PrimaryKeyLookup['voting']): Promise<void> {
    return this._deleteRecord('Votings', primaryKey);
  }
  public async editVoting(primaryKey: PrimaryKeyLookup['voting'], newData: Partial<BaseData<Voting>>): Promise<void> {
    return this._editRecord('Votings', Voting, primaryKey, newData);
  }
  public async fetchVoting(primaryKey: PrimaryKeyLookup['voting']): Promise<Voting | null> {
    return this._fetchRecord('Votings', Voting, primaryKey);
  }
  public async fetchVotings(filter?: Partial<BaseData<Voting>>): Promise<Voting[]> {
    return this._fetchRecords('Votings', Voting, filter);
  }

  public async insertExperiencePart(experiencePart: ExperiencePart, duplicateMode?: 'error' | 'ignore' | 'replace'): Promise<void> {
    return this._insertRecord('ExperienceParts', experiencePart, duplicateMode);
  }
  public async deleteExperiencePart(primaryKey: PrimaryKeyLookup['experiencePart']): Promise<void> {
    return this._deleteRecord('ExperienceParts', primaryKey);
  }
  public async editExperiencePart(primaryKey: PrimaryKeyLookup['experiencePart'], newData: Partial<BaseData<ExperiencePart>>): Promise<void> {
    return this._editRecord('ExperienceParts', ExperiencePart, primaryKey, newData);
  }
  public async fetchExperiencePart(primaryKey: PrimaryKeyLookup['experiencePart']): Promise<ExperiencePart | null> {
    return this._fetchRecord('ExperienceParts', ExperiencePart, primaryKey);
  }
  public async fetchExperienceParts(filter?: Partial<BaseData<ExperiencePart>>): Promise<ExperiencePart[]> {
    return this._fetchRecords('ExperienceParts', ExperiencePart, filter);
  }

  public async insertExperiencePartCustomization(experiencePartCustomization: ExperiencePartCustomization, duplicateMode?: 'error' | 'ignore' | 'replace'): Promise<void> {
    return this._insertRecord('ExperiencePartCustomizations', experiencePartCustomization, duplicateMode);
  }
  public async deleteExperiencePartCustomization(primaryKey: PrimaryKeyLookup['experiencePartCustomization']): Promise<void> {
    return this._deleteRecord('ExperiencePartCustomizations', primaryKey);
  }
  public async editExperiencePartCustomization(primaryKey: PrimaryKeyLookup['experiencePartCustomization'], newData: Partial<BaseData<ExperiencePartCustomization>>): Promise<void> {
    return this._editRecord('ExperiencePartCustomizations', ExperiencePartCustomization, primaryKey, newData);
  }
  public async fetchExperiencePartCustomization(primaryKey: PrimaryKeyLookup['experiencePartCustomization']): Promise<ExperiencePartCustomization | null> {
    return this._fetchRecord('ExperiencePartCustomizations', ExperiencePartCustomization, primaryKey);
  }
  public async fetchExperiencePartCustomizations(filter?: Partial<BaseData<ExperiencePartCustomization>>): Promise<ExperiencePartCustomization[]> {
    return this._fetchRecords('ExperiencePartCustomizations', ExperiencePartCustomization, filter);
  }
}

export {DbDAO};

*/
