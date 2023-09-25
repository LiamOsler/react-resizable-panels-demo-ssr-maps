"use client";

import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";

import MapComponent from "./MapComponent";


export default function PanelComponent({
  defaultLayout,
}: {
  defaultLayout: number[];
}) {
  const onLayout = (sizes: number[]) => {
    document.cookie = `react-resizable-panels:layout=${JSON.stringify(sizes)}`;
  };

  return (
    <PanelGroup direction="horizontal" onLayout={onLayout}>
      <Panel>
        <PanelGroup direction="vertical">
          <Panel defaultSize = {80} className = "pt-1 pl-1">
            <MapComponent />
          </Panel>
          <PanelResizeHandle className="my-1 h-2 bg-slate-300" />
          <Panel>
            <PanelGroup direction="horizontal">
              <Panel>
                left
              </Panel>
            </PanelGroup>
          </Panel>
        </PanelGroup>
      </Panel>
      <PanelResizeHandle className="mx-1 w-2 bg-slate-300"  />
      <Panel defaultSize = {20}>
        right
      </Panel>
    </PanelGroup>
  );
}
