"use client";

import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";

export default function ClientComponent({
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
            <Panel>
              top
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
        <Panel>
          right
        </Panel>
      </PanelGroup>
  );
}
