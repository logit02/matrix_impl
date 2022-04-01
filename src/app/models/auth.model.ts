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

