"use client";

import { useWorkspaceId } from "@/features/workspaces/hooks/use-workspace-id";

const WorkspaceIdPage = () => {
  const workspaceId = useWorkspaceId();
  return <div>{workspaceId}</div>;
};

export default WorkspaceIdPage;
