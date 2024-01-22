import Sidebar from '@components/sidebar';
export default function VaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative grid h-screen grid-cols-12">
      <div className="col-span-2 p-4 bg-slate-100">
        <Sidebar />
      </div>
      <div className="h-screen col-span-10 p-4 overflow-y-scroll bg-slate-50">
        {children}
      </div>
    </div>
  );
}
