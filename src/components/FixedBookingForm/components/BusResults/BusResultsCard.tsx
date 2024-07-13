import { Button } from "@/components/ui/button";
import { TransportSchedule } from "@/lib/types/transportschedule";
import moment from "moment";

type Props = {
  schedule: TransportSchedule;
};

function BusResultsCard({ schedule }: Props) {
  const formattedDepartureTime = moment(schedule.departure_time).format(
    "dddd, MMMM Do YYYY, h:mm:ss a"
  );
  return (
    <div className="border-2 rounded-md px-5 py-2 flex items-center gap-5 ">
      <div className="flex flex-col gap-5">
        <p>Departure Time: {formattedDepartureTime}</p>
        <div className="flex flex-col gap-5">
          <p className="text-primary ">Buses Available</p>
          {schedule.transportbusesandschedules_set?.map((r) => (
            <div className="flex items-center gap-5 w-full" key={r?.vehicle?.id}>
              <p >{r.vehicle?.vehicle_number}</p>
              <Button variant={"outline"} size={"sm"}>
                Select
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BusResultsCard;
