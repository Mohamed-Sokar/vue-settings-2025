import { ref } from "vue";
import type { Notification } from "../types";

const notifications = ref<Notification[]>([]);

const addNotification = (message: string) => {
  const id = Date.now();
  notifications.value.push({ id, message });

  setTimeout(() => {
    removeNotification(id);
  }, 5000);
};

const removeNotification = (id: number) => {
  const index = notifications.value.findIndex((n) => n.id === id);
  if (index !== -1) {
    notifications.value.splice(index, 1);
  }
};
export function useNotifications() {
  return {
    notifications,
    addNotification,
    removeNotification,
  };
}
