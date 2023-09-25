import PanelComponent from "@/app/components/PanelComponent";
import { cookies } from "next/headers";

export default function Home() {
  const defaultLayout = getDefaultLayout();

  return (
    <main className="h-screen p-0 bg-slate-200">
      <PanelComponent defaultLayout={defaultLayout} />
    </main>
  );
}

function getDefaultLayout() {
  const layout = cookies().get("react-resizable-panels:layout");
  if (layout) {
    return JSON.parse(layout.value);
  }
  return [33, 67];
}
