import { Notification } from "@/lib/types/notification";
import { FaClock, FaRegStar } from "react-icons/fa";

type Props = {
  notification: Notification;
};

const notificationTypes: any = {
  alert: <FaClock className="text-primary" />,
  message: <FaClock className="text-primary" />,
  update: <FaClock className="text-primary" />,
  reminder: <FaClock className="text-primary" />,
};
function NotificationCard({ notification }: Props) {
  return (
    <div className="w-full md:w-fit md:min-w-[700px] flex items-center gap-3 justify-start px-5 border-2 rounded-md py-2 cursor-pointer hover:scale-[1.01] transition-all duration-300">
      <div>{notificationTypes[notification.type || "Alert"]}</div>

      <div className="flex flex-col">
        <p className="text-primary font-bold capitalize">
          {notification.subject}
        </p>
        <p className="text-sm">{notification.message}</p>
      </div>
    </div>
  );
}

export default NotificationCard;
