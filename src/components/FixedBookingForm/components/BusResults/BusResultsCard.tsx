import { Button } from "@/components/ui/button";
import {
  TransportSchedule,
  TransportScheduleWithBuses,
} from "@/lib/types/transportschedule";
import moment from "moment";
import { useTellUsMoreStore } from "../TellUsMore/useTellUsMoreStore";
import { useEffect } from "react";

type Props = {
  schedule: TransportScheduleWithBuses;
};

function BusResultsCard({ schedule }: Props) {
  const formattedDepartureTime = moment(schedule.departure_time).format(
    "dddd, MMMM Do YYYY, h:mm:ss a"
  );
  const {
    setScheduleSelected,
    setSelectedBus,
    selectedBus,
    scheduleSelected,
    setBusFound,
    busFound,
  } = useTellUsMoreStore();

  useEffect(() => {
    if (schedule.transportbusesandschedules_set.length > 1) {
      setBusFound(true);
    }
  }, [schedule.transportbusesandschedules_set, setBusFound]);

  return (
    <div className="border-2 rounded-md px-5 py-2 flex items-center gap-5 ">
      {busFound ? (
        <div className="flex flex-col gap-5 justify-start h-full">
          <p>Departure Time: {formattedDepartureTime}</p>
          <div className="flex flex-col gap-2  justify-start">
            <p className="text-primary ">Buses Available</p>
            {schedule.transportbusesandschedules_set?.map((r) => (
              <div
                className="flex items-center gap-5 w-full"
                key={r?.transportbus?.id}>
                {/* <p>{r?.transportbus?.vehicle_number}</p> */}
                <p>{r?.transportbus?.bus_type}</p>

                <Button
                  onClick={() => {
                    setScheduleSelected(schedule.id);
                    setSelectedBus(r?.transportbus);
                  }}
                  variant={`${
                    selectedBus?.id === r?.transportbus?.id &&
                    scheduleSelected == schedule.id
                      ? "default"
                      : "outline"
                  }`}
                  className="px-4"
                  size={"sm"}>
                  Select
                </Button>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div>
          <p>Sorry!! no buses found</p>
        </div>
      )}
    </div>
  );
}

export default BusResultsCard;
