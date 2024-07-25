import { url } from "../../../weburl";
import { Notification } from "../types/notification";



export const getNotificationsByUser = async (userId: number): Promise<Notification[]> => {
  const response = await fetch(`${url}api/notifications/users/${userId}/`, {
    method: "GET",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch notifications");
  }

  return response.json();
};

export const createNotification = async (notificationData: Notification): Promise<Notification> => {
  const response = await fetch(`${url}api/notifications/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(notificationData),
  });

  if (!response.ok) {
    throw new Error("Failed to create notification");
  }

  return response.json();
};

export const getNotificationDetail = async (notificationId: number, userId: number): Promise<Notification> => {
  const response = await fetch(`${url}api/notifications/${notificationId}/users/${userId}/`, {
    method: "GET",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch notification detail");
  }

  return response.json();
};

export const markNotificationAsRead = async (notificationId: number, userId: number): Promise<{ message: string }> => {
  const response = await fetch(`${url}api/notifications/${notificationId}/users/${userId}/mark-as-read/`, {
    method: "POST",
  });

  if (!response.ok) {
    throw new Error("Failed to mark notification as read");
  }

  return response.json();
};

export const deleteNotification = async (notificationId: number, userId: number): Promise<{ message: string }> => {
  const response = await fetch(`${url}api/notifications/${notificationId}/users/${userId}/`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Failed to delete notification");
  }

  return response.json();
};
