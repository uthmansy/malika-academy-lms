import { useQuery } from "react-query";
import { classroomsKeys, teacherClassroomKeys } from "../constants/QUERY_KEYS";
import {
  getAllClassrooms,
  getAllTeacherClassrooms,
  getTeacherByProfile,
} from "../helpers/apiFunctions";
import useAuthStore from "../store/auth";
import { App } from "antd";
import { SelectOption } from "../types/comps";

interface HookReturn {
  classroomOptions: SelectOption[];
}

function useClassroomOptions(): HookReturn {
  const { userProfile } = useAuthStore();
  const { message } = App.useApp();

  //fetch teacher classrooms
  const { data: teacherClassrooms = [] } = useQuery({
    queryKey: [teacherClassroomKeys.getTeacherClassroomsAll, userProfile?.id],
    enabled: userProfile?.role === "Teacher",
    queryFn: async () => {
      if (userProfile) {
        const teacher = await getTeacherByProfile(userProfile?.id);
        const classrooms = await getAllTeacherClassrooms(teacher.id);
        return classrooms.map((classroom) => ({
          label: classroom.classroom_table.name,
          value: classroom.classroom_table.id,
        }));
      }
    },
    onError: () => message.error("Failed to load teacher classrooms"),
  });

  // Fetch classrooms
  const { data: classrooms = [] } = useQuery({
    queryKey: classroomsKeys.getClassroomsAll,
    queryFn: getAllClassrooms,
    onError: () => message.error("Failed to load classrooms"),
  });

  // Classroom options with "All" option
  const classroomOptionsAll = [
    { label: "All Classrooms", value: "" },
    ...classrooms.map((classroom) => ({
      label: classroom.name,
      value: classroom.id,
    })),
  ];

  const classroomOptions =
    userProfile?.role === "Admin" ? classroomOptionsAll : teacherClassrooms;
  return { classroomOptions };
}

export default useClassroomOptions;
