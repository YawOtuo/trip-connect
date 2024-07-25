"use client";
import useNotifications from "@/lib/hooks/useNotifications";
import React from "react";
import { FaClock, FaRegStar } from "react-icons/fa"; // Importing timer and star icons
import NotificationCard from "./components/NotificationCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

function Page() {
  const { notifications, isLoading } = useNotifications();
  return (
    <div className="">
      {/* Title of the page */}
      <h1 className="text-xl font-bold text-primary">My Notifications</h1>

      {/* Additional content under the ovals */}

      <Tabs defaultValue="read" className="w-full md:w-[400px]">
        <TabsList>
          <TabsTrigger value="read">Read</TabsTrigger>
          <TabsTrigger value="unread">Unread</TabsTrigger>
        </TabsList>
        <TabsContent value="read">
          <div className="flex flex-col gap-4">
            {notifications?.map((notification) => (
              <NotificationCard
                notification={notification}
                key={notification.id}
              />
            ))}
            {notifications && notifications?.length < 1 && (
              <NotificationCard
                notification={{
                  subject: "Welcome",
                  message: "Glad to have you",
                  type: "alert",
                }}
                key={5}
              />
            )}
            {isLoading && <p>Loading your notifications...</p>}
          </div>
        </TabsContent>
        <TabsContent value="unread">
          {notifications
            ?.filter((notification) => !notification.read)
            .map((notification) => (
              <NotificationCard
                notification={notification}
                key={notification.id}
              />
            ))}
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default Page;
