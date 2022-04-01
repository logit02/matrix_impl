export interface ILoginBody {
  identifier: IIdentifier;
  initial_device_display_name: string;
  password: string;
  type: string;
}


 interface IIdentifier {
  type: string;
  user: string;
 }

export interface ILoginResp {
  user_id: string;
  access_token: string;
  home_server: string;
  device_id: string;
  well_known: {
    "m.homeserver": {
      base_url: string;
    }
  }
}
