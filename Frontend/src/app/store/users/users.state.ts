import { ProfileModel } from '../../users/profile/profile-user.model';
export interface IUsersState {
  userRegistered: boolean;
  userAuthenticated: boolean;
  token: string;
  username: string;
  // profileCreated: boolean;
  usersList: Array<ProfileModel>; // TODO: User Model
  profile: ProfileModel;
}

export const initialState: IUsersState = {
  userRegistered: false,
  userAuthenticated: false,
  token: null,
  username: null,
  // profileCreated: false,
  usersList: [],
  profile: null
};
