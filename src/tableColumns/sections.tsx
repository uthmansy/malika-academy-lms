// tableColumns/sections.ts
export const sectionAdminColumns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Created At",
    dataIndex: "created_at",
    key: "created_at",
    render: (date: string) => new Date(date).toLocaleString(),
  },
  {
    title: "Updated At",
    dataIndex: "updated_at",
    key: "updated_at",
    render: (date: string) => new Date(date).toLocaleString(),
  },
];
