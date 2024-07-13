import FramerWrapper from "@/components/FramerWrapper";
import { fadeIn } from "@/lib/animations";
import useVehicles from "@/lib/hooks/useVehicles";
import { useTellUsMoreStore } from "./TellUsMore/useTellUsMoreStore";

function Searching() {
  const { selectedFrom, selectedTo } = useTellUsMoreStore();

  const { searchVehicles, isSearchVehiclesLoading, isSearchVehiclesError } =
    useVehicles({
      travelling_from: selectedFrom,
      travelling_to: selectedTo,
    });
  return <FramerWrapper {...fadeIn}>Searching (Terrance)</FramerWrapper>;
}

export default Searching;
