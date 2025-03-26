import create from "zustand";

// types.ts
type Term = {
  id: string;
  name: string;
};

type Class = {
  id: string;
  name: string;
};

type Classroom = {
  id: string;
  name: string;
};

interface SelectionState {
  term: Term | null;
  setTerm: (term: Term) => void;

  class: Class | null;
  setClass: (classItem: Class) => void;

  classroom: Classroom | null;
  setClassroom: (classroom: Classroom) => void;
}

export const useStudentsRecordsStore = create<SelectionState>((set) => ({
  term: null,
  setTerm: (term) => set({ term }),

  class: null,
  setClass: (classItem) => set({ class: classItem }),

  classroom: null,
  setClassroom: (classroom) => set({ classroom }),
}));
