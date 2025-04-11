import create from "zustand";
import { Term, Class, Classroom } from "../types/db";

export type StudentsRecordsState = {
  term: Term | null;
  class: Class | null;
  classroom: Classroom | null;
  setClass: (selectedClass: Class) => void;
  setClassroom: (selectedClassroom: Classroom) => void;
  setTerm: (selectedTerm: Term) => void;
};

export const useStudentsRecordsStore = create<StudentsRecordsState>((set) => ({
  term: null,
  class: null,
  classroom: null,
  setClass: (selectedClass: Class) =>
    set((state) => ({
      ...state,
      class: selectedClass,
      classroom: null, // Reset classroom when class changes
      term: null, // Reset term when class changes
    })),
  setClassroom: (selectedClassroom: Classroom) =>
    set((state) => ({
      ...state,
      classroom: selectedClassroom,
      term: null, // Reset term when classroom changes
    })),
  setTerm: (selectedTerm: Term) =>
    set((state) => ({
      ...state,
      term: selectedTerm,
    })),
}));
