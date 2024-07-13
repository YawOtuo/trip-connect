import { Button } from "@/components/ui/button";

type Props = {
  index: number;
  results: TransportSchedule
};
function SearchResultsCard({ index, results }: Props) {
  return (
    <div className="flex items-center justify-around gap-5 w-full border-2 rounded-md py-1" >
      {" "}
      <p>{index + 1}</p>
      <p>Departure Time: {results?.departure_time}</p>
      {/* <p>{r?.estimated_arrival_time}</p> */}
      <Button size="sm" variant={"secondary"} className="px-10">
        Select
      </Button>
    </div>
  );
}

export default SearchResultsCard;
