export interface ISync {
  account_data: {
    events: IEvents[]
  }
  device_one_time_keys_count: {signed_curve25519: 0}
  device_unused_fallback_key_types: string[]
  next_batch: string;
  "org.matrix.msc2732.device_unused_fallback_key_types": any;
  presence: IPresenceEvents[]
  rooms: any
}

interface IEvents {
  type: string;
  content: {
    "recent_rooms"? : string[];
    accepted? : string[];
  }
}

interface IPresenceEvents {
  type: "m.presence";
  sender: string;
  content: {
    presence: string;
    last_active_ago: number;
    currently_active: boolean
  }
}

interface IDirect {
  type: "m.direct",
  content: {
    [key: string]: string[]
  }
}
