import DashboardSideMenu from "./components/DashboardSideMenu";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-5 bg-primary-100">
      <div className="hidden col-span-1 lg:flex flex-col gap-5">
        <DashboardSideMenu />
      </div>

      <div className="col-span-5 lg:col-span-4 bg-white rounded-tl-3xl px-5 lg:px-10  py-10">{children}</div>
    </div>
  );
}

export default Layout;
