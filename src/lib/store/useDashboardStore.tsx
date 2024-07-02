import { create } from "zustand";

type DashboardStore = {
    activeTab: string;
    setActiveTab: (val: string) => void;

}

export const useDashboardStore = create<DashboardStore>((set) => ({
    activeTab: "Home",
    setActiveTab: (val) => set({ activeTab: val }),
}));
