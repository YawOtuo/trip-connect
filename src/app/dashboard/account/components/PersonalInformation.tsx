import { useAppStore } from "@/lib/store/useAppStore";
import { BsFillHouseFill, BsTelephone } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { LuContact } from "react-icons/lu";

type DetailItemProps = {
  icon?: React.ReactNode;
  name: string;
  value?: string | null;
};

export const DetailItem = ({ icon, name, value }: DetailItemProps) => {
  return (
    <div className="flex items-center justify-start gap-3">
      <div className="flex items-center justify-start gap-1 capitalize">
        {icon}
        {name} :
      </div>
      <p>{value || "N/A"}</p>
    </div>
  );
};
function PersonalInformation() {
  const { DBDetails } = useAppStore();

  return (
    <div className="w-full flex flex-col gap-1 items-start">
      <div className="text-primary font-bold">Personal Information</div>

      <div className="flex flex-col items-start gap-1">
        <DetailItem
          icon={<LuContact />}
          name={"Username"}
          value={DBDetails?.username}
        />
        <DetailItem
          icon={<BsTelephone />}
          name={"Phone Number"}
          value={DBDetails?.phone_number}
        />
        <DetailItem icon={<FiMail />} name={"Email"} value={DBDetails?.email} />{" "}
        <DetailItem
          icon={<BsFillHouseFill />}
          name={"contact address"}
          value={DBDetails?.contact_address}
        />{" "}
        <DetailItem
          icon={<BsFillHouseFill />}
          name={"ghana card number"}
          value={DBDetails?.ghana_card_number}
        />{" "}
        <DetailItem
          icon={<BsFillHouseFill />}
          name={"drivers license number"}
          value={DBDetails?.drivers_license_number}
        />{" "}
        <DetailItem
          icon={<BsFillHouseFill />}
          name={"country of origin"}
          value={DBDetails?.country_of_origin}
        />{" "}
        <DetailItem
          icon={<BsFillHouseFill />}
          name={"Date of birth"}
          value={DBDetails?.date_of_birth}
        />{" "}
     
      </div>
    </div>
  );
}

export default PersonalInformation;
