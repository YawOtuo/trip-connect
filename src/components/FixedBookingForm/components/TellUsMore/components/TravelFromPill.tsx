import { useTellUsMoreStore } from "../useTellUsMoreStore";

const TravelFromToPill = ({
  label,
  type,
}: {
  label: string;
  type: "from" | "to";
}) => {
  const { selectedTo, selectedFrom, setSelectedFrom, setSelectedTo } =
    useTellUsMoreStore();

  return (
    <button
      onClick={() => {
        type == "from" && setSelectedFrom(label);
        type == "to" && setSelectedTo(label);
      }}
      className={`border-2 border-primary appearance-none px-5 py-1 hover:bg-primary hover:text-white transition-all rounded-3xl   ${
        type == "from" && selectedFrom ==  label  && "bg-primary text-white"
      } ${type == "to" && selectedTo ==  label  && "bg-primary text-white"}`}>
      {label}
    </button>
  );
};

export default TravelFromToPill;
