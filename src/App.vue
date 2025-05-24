<script setup lang="ts">
import { computed, ref } from "vue";
import type { Tab, TabKey } from "./types";
import TabLink from "./components/TabLink.vue";
import GeneralSettings from "./components/GeneralSettings.vue";
import NotificationsSettings from "./components/NotificationsSettings.vue";
import PrivacySettings from "./components/PrivacySettings.vue";
import FadeTransitions from "./components/FadeTransitions.vue";
import NotificationList from "./components/NotificationList.vue";

const tabs: Tab[] = [
  {
    key: "General",
    label: "General",
  },
  {
    key: "Notifications",
    label: "Notifications",
  },
  {
    key: "Privacy",
    label: "Privacy",
  },
];

const currentTab = ref<TabKey>("General");

const components = {
  General: GeneralSettings,
  Notifications: NotificationsSettings,
  Privacy: PrivacySettings,
};
const currentComponent = computed(() => components[currentTab.value]);
</script>

<template>
  <main class="max-w-2xl mx-auto px-4">
    <nav
      class="border-b border-b-gray-200 text-center font-medium text-gray-500"
    >
      <ul class="flex flex-wrap gap-4">
        <li v-for="tab in tabs" :key="tab.key" class="-mb-px">
          <TabLink
            :tab="tab"
            :current-tab="currentTab"
            @click="currentTab = tab.key"
          />
        </li>
      </ul>
    </nav>
    <FadeTransitions>
      <KeepAlive>
        <component :is="currentComponent" />
      </KeepAlive>
    </FadeTransitions>
    <NotificationList />
  </main>
</template>

<style scoped></style>
