"use client";

import { DottedSeparator, PageLoader, PageError } from "@/components";

import { useGetTask } from "@/features/tasks/api/use-get-task";
import { useTaskId } from "@/features/tasks/hooks/use-task-id";

import { TaskBreadcrumbs } from "@/features/tasks/components/task-breadcrumbs";

export const TaskIdClient = () => {
    const taskId = useTaskId();
    const { data, isLoading } = useGetTask({ taskId });

    if (isLoading) return <PageLoader />
    if (!data) return <PageError message="Task ot found" />

    return (
        <div className="flex flex-col">
            <TaskBreadcrumbs project={data.project} task={data} />
            <DottedSeparator />
        </div>
    );
};