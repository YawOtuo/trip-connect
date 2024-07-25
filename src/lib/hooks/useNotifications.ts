import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useAppStore } from "../store/useAppStore";
import {
  getNotificationsByUser,
  createNotification,
  markNotificationAsRead,
  deleteNotification,
  // deleteNotification
} from "../api/notifications"; // Assume these are the correct imports
import { Notification } from "../types/notification";


const useNotifications = () => {
  const queryClient = useQueryClient();
  const { DBDetails } = useAppStore();

  const {
    data: notifications,
    isLoading,
    error,
  } = useQuery<Notification[]>({
    queryKey: ["notifications"],
    queryFn: () => getNotificationsByUser(Number(DBDetails?.id)),
    enabled: !!DBDetails?.id,
  });

  const createNotificationMutation = useMutation({
    mutationFn: async (notificationData: Notification) => {
      const response = await createNotification(notificationData);
      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["notifications"] });
      queryClient.invalidateQueries({ queryKey: ["unread_notifications_count"] });
    },
  });

  const markAsReadMutation = useMutation({
    mutationFn: (notificationId: number) => markNotificationAsRead(notificationId, Number(DBDetails?.id)),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["notifications"] });
      queryClient.invalidateQueries({ queryKey: ["unread_notifications_count"] });
    },
  });

  const deleteNotificationMutation = useMutation({
    mutationFn: (notificationId: number) => deleteNotification(notificationId, Number(DBDetails?.id)),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["notifications"] });
      queryClient.invalidateQueries({ queryKey: ["unread_notifications_count"] });
    },
  });

  return {
    notifications,
    isLoading,
    error,
    createNotification: createNotificationMutation.mutate,
    markAsRead: markAsReadMutation.mutate,
    deleteNotification: deleteNotificationMutation.mutate,
  };
};

export default useNotifications;
