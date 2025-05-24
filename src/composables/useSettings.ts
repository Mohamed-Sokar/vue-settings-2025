import { ref, watch } from "vue";
import type {
  GeneralSettings,
  NotificationSettings,
  PrivacySettings,
  SettingsKey,
  SettingsMap,
} from "../types";

const init = <T extends SettingsKey>(key: T, defaults: SettingsMap[T]) => {
  const stored = localStorage.getItem(key);
  return stored !== null ? JSON.parse(stored) : defaults;
};

const general = ref<GeneralSettings>(
  init("general", {
    about: "",
    country: "USA",
    gender: "Male",
    email: "",
    username: "",
  })
);

const notifications = ref<NotificationSettings>(
  init("notifications", {
    email: false,
    sms: false,
  })
);

const privacy = ref<PrivacySettings>(
  init("privacy", {
    searchEngineIndexing: false,
    visibility: "public",
  })
);

const watcher =
  <T extends SettingsKey>(key: T) =>
  (value: SettingsMap[T]) => {
    localStorage.setItem(key, JSON.stringify(value));
  };

watch(general, watcher("general"), { deep: true });
watch(notifications, watcher("notifications"), { deep: true });
watch(privacy, watcher("privacy"), { deep: true });

export { general, notifications, privacy };
