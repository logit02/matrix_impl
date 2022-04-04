export interface ISync {
  account_data: {
    events: IEvents[]
  }
  device_one_time_keys_count: { signed_curve25519: 0 }
  device_unused_fallback_key_types: string[]
  next_batch: string;
  "org.matrix.msc2732.device_unused_fallback_key_types": any;
  presence: IPresenceEvents[]
  rooms: any
}

export interface IEvents {
  type: eventsType;
  content: {
    [room_types: string]: string[];
  }
}

export type eventsType = 'm.direct' | 'm.accepted_terms';

export enum ROOM_TYPES {
  accepted = 'accepted',
  recent_rooms = 'recent_rooms'
}

export interface IPresenceEvents {
  type: "m.presence";
  sender: string;
  content: {
    presence: string;
    last_active_ago: number;
    currently_active: boolean
  }
}

export interface IDirect {
  type: "m.direct",
  content: {}
}
