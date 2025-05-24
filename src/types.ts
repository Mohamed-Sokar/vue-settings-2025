type TabKey = "General" | "Notifications" | "Privacy";
type Visibility = "public" | "private";

interface Tab {
  key: TabKey;
  label: string;
}

interface SettingsMap {
  general: GeneralSettings;
  privacy: PrivacySettings;
  notifications: NotificationSettings;
}

type SettingsKey = keyof SettingsMap;

interface Notification {
  id: number;
  message: string;
}

interface GeneralSettings {
  about: string;
  country: string;
  gender: string;
  email: string;
  username: string;
}

interface NotificationSettings {
  email: boolean;
  sms: boolean;
  // push: boolean;
}

interface PrivacySettings {
  searchEngineIndexing: boolean;
  visibility: Visibility;
}

export type {
  Tab,
  TabKey,
  GeneralSettings,
  NotificationSettings,
  PrivacySettings,
  SettingsKey,
  SettingsMap,
  Notification,
};
