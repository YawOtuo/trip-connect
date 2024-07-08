import ActiveVehicleHires from "./components/ActiveVehicleHires";
import PendingBusTrips from "./components/PendingBusTrips";
import RecentBusTrips from "./components/RecentBusTrips";
import Welcome from "./components/Welcome";

function Page() {
  return (
    <div>
      <ActiveVehicleHires />
      <PendingBusTrips />
      <Welcome />
      <RecentBusTrips />
    </div>
  );
}

export default Page;
