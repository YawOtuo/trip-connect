import { useAppStore } from "@/lib/store/useAppStore";
import { DetailItem } from "./PersonalInformation";
import moment from "moment";

function AccountInformation() {
  const { DBDetails } = useAppStore();

  return (
    <div className="flex flex-col gap-1">
      <div className="text-primary font-bold">Account Information</div>

      <div className="flex flex-col gap-1 flex-wrap">
        <DetailItem name="Member Since" value={moment(DBDetails?.created_at).format("dddd Do MMMM YYYY")} />
        <DetailItem name="Premium Membership Status" />
        <DetailItem name="Positive Reviews Count" />
      </div>
    </div>
  );
}

export default AccountInformation;
