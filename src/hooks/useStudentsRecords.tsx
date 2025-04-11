// useStudentsRecords.ts
import { useQuery } from "react-query";
import { message } from "antd";
import {
  getAllTerms,
  getClassesAll,
  getClassroomsByClass,
} from "../helpers/apiFunctions";
import { Term, Class, Classroom } from "../types/db";
import {
  classesKeys,
  classroomsKeys,
  termsKeys,
} from "../constants/QUERY_KEYS";
import { useStudentsRecordsStore } from "../store/studentsExamRecords";

export const useStudentsRecords = () => {
  // Get state and state updater functions from Zustand store
  const {
    term,
    class: selectedClass,
    classroom,
    setClass,
    setClassroom,
    setTerm,
  } = useStudentsRecordsStore();

  // Fetch classes (independent of term)
  const fetchClasses = async (): Promise<Class[]> => {
    const data = await getClassesAll();
    return data;
  };
  const { data: classes = [], isLoading: loadingClasses } = useQuery({
    queryKey: classesKeys.getClassesAll,
    queryFn: fetchClasses,
    onError: () => message.error("Failed to load classes"),
  });

  // Fetch classrooms based on the selected class
  const fetchClassrooms = async (classId?: string): Promise<Classroom[]> => {
    const data = await getClassroomsByClass(classId);
    return data;
  };
  const {
    data: classrooms = [],
    isLoading: loadingClassrooms,
    isRefetching: isRefetchingClassrooms,
  } = useQuery({
    queryKey: [classroomsKeys.byClass, selectedClass],
    queryFn: () => fetchClassrooms(selectedClass?.id),
    enabled: !!selectedClass, // Only fetch if a class is selected
    onError: () => message.error("Failed to load classrooms"),
  });

  // Fetch terms based on the selected classroom
  const fetchTerms = async (): Promise<Term[]> => {
    const data = await getAllTerms();
    return data;
  };
  const { data: terms = [], isLoading: loadingTerms } = useQuery({
    queryKey: termsKeys.getTermsAll,
    queryFn: fetchTerms,
    enabled: !!classroom, // Only fetch if a classroom is selected
    onError: () => message.error("Failed to load terms"),
  });

  return {
    state: {
      term,
      class: selectedClass,
      classroom,
    },
    terms,
    classes,
    classrooms,
    loadingTerms,
    loadingClasses,
    loadingClassrooms:
      loadingClasses || isRefetchingClassrooms || loadingClassrooms,
    setTerm,
    setClass,
    setClassroom,
  };
};
