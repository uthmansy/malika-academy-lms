// useStudentsRecords.ts
import { useQuery } from "react-query";
import { message } from "antd";
import { useState } from "react";
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

export type StudentsRecordsState = {
  term: Term | null;
  class: Class | null;
  classroom: Classroom | null;
};

export const useStudentsRecords = () => {
  const [state, setState] = useState<StudentsRecordsState>({
    term: null,
    class: null,
    classroom: null,
  });

  // Fetch classes based on selected class (no dependency on term)
  const fetchClasses = async (): Promise<Class[]> => {
    const data = await getClassesAll(); // Replace with your API call
    return data;
  };
  const { data: classes = [], isLoading: loadingClasses } = useQuery({
    queryKey: classesKeys.getClassesAll,
    queryFn: fetchClasses,
    onError: () => message.error("Failed to load classes"),
  });

  // Fetch classrooms based on selected class
  const fetchClassrooms = async (classId?: string): Promise<Classroom[]> => {
    const data = await getClassroomsByClass(classId); // Replace with your API call
    return data;
  };
  const {
    data: classrooms = [],
    isLoading: loadingClassrooms,
    isRefetching: isRefetchingClassrooms,
  } = useQuery({
    queryKey: [classroomsKeys.byClass, state.class],
    queryFn: () => fetchClassrooms(state.class?.id),
    enabled: !!state.class, // Only fetch if a class is selected
    onError: () => message.error("Failed to load classrooms"),
  });

  // Fetch terms based on selected classroom
  const fetchTerms = async (): Promise<Term[]> => {
    const data = await getAllTerms(); // Replace with your API call
    return data;
  };
  const { data: terms = [], isLoading: loadingTerms } = useQuery({
    queryKey: termsKeys.getTermsAll,
    queryFn: () => fetchTerms(),
    enabled: !!state.classroom, // Only fetch if a classroom is selected
    onError: () => message.error("Failed to load terms"),
  });

  // Update state methods with class → classroom → term hierarchy
  const setClass = (selectedClass: Class) => {
    setState((prev) => ({
      ...prev,
      class: selectedClass,
      classroom: null, // Reset classroom when class changes
      term: null, // Reset term when class changes
    }));
  };

  const setClassroom = (selectedClassroom: Classroom) => {
    setState((prev) => ({
      ...prev,
      classroom: selectedClassroom,
      term: null, // Reset term when classroom changes
    }));
  };

  const setTerm = (selectedTerm: Term) => {
    setState((prev) => ({
      ...prev,
      term: selectedTerm,
    }));
  };

  return {
    state,
    terms,
    classes,
    classrooms,
    loadingTerms,
    loadingClasses,
    loadingClassrooms: loadingClassrooms || isRefetchingClassrooms,
    setTerm,
    setClass,
    setClassroom,
  };
};
