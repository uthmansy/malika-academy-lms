export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      academic_calendar: {
        Row: {
          created_at: string | null
          end_date: string | null
          event_name: string
          event_type: Database["public"]["Enums"]["event_type"]
          id: string
          start_date: string
          term_id: string
        }
        Insert: {
          created_at?: string | null
          end_date?: string | null
          event_name: string
          event_type: Database["public"]["Enums"]["event_type"]
          id?: string
          start_date: string
          term_id: string
        }
        Update: {
          created_at?: string | null
          end_date?: string | null
          event_name?: string
          event_type?: Database["public"]["Enums"]["event_type"]
          id?: string
          start_date?: string
          term_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "academic_calendar_term_id_fkey"
            columns: ["term_id"]
            isOneToOne: false
            referencedRelation: "terms"
            referencedColumns: ["id"]
          },
        ]
      }
      class_subjects: {
        Row: {
          class_id: string
          created_at: string
          subject_id: string
        }
        Insert: {
          class_id: string
          created_at?: string
          subject_id: string
        }
        Update: {
          class_id?: string
          created_at?: string
          subject_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "class_subjects_class_id_fkey"
            columns: ["class_id"]
            isOneToOne: false
            referencedRelation: "classes"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "class_subjects_subject_id_fkey"
            columns: ["subject_id"]
            isOneToOne: false
            referencedRelation: "subjects"
            referencedColumns: ["id"]
          },
        ]
      }
      classes: {
        Row: {
          created_at: string | null
          form_master_id: string | null
          id: string
          name: string
          next_class_id: string | null
          rank: number
          section_id: string
          stream: Database["public"]["Enums"]["student_stream"]
        }
        Insert: {
          created_at?: string | null
          form_master_id?: string | null
          id?: string
          name: string
          next_class_id?: string | null
          rank?: number
          section_id: string
          stream?: Database["public"]["Enums"]["student_stream"]
        }
        Update: {
          created_at?: string | null
          form_master_id?: string | null
          id?: string
          name?: string
          next_class_id?: string | null
          rank?: number
          section_id?: string
          stream?: Database["public"]["Enums"]["student_stream"]
        }
        Relationships: [
          {
            foreignKeyName: "classes_form_master_id_fkey"
            columns: ["form_master_id"]
            isOneToOne: false
            referencedRelation: "teachers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "classes_next_class_id_fkey"
            columns: ["next_class_id"]
            isOneToOne: false
            referencedRelation: "classes"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "classes_section_id_fkey"
            columns: ["section_id"]
            isOneToOne: false
            referencedRelation: "school_sections"
            referencedColumns: ["id"]
          },
        ]
      }
      classrooms: {
        Row: {
          capacity: number | null
          class_id: string
          created_at: string | null
          id: string
          label: string
          name: string
        }
        Insert: {
          capacity?: number | null
          class_id: string
          created_at?: string | null
          id?: string
          label?: string
          name: string
        }
        Update: {
          capacity?: number | null
          class_id?: string
          created_at?: string | null
          id?: string
          label?: string
          name?: string
        }
        Relationships: [
          {
            foreignKeyName: "classrooms_class_id_fkey"
            columns: ["class_id"]
            isOneToOne: false
            referencedRelation: "classes"
            referencedColumns: ["id"]
          },
        ]
      }
      fee_discounts: {
        Row: {
          calculated_amount: number
          created_at: string | null
          discount_type: string | null
          discount_value: number | null
          fee_structure_id: string
          id: string
          reason: string | null
          student_id: string
        }
        Insert: {
          calculated_amount: number
          created_at?: string | null
          discount_type?: string | null
          discount_value?: number | null
          fee_structure_id: string
          id?: string
          reason?: string | null
          student_id: string
        }
        Update: {
          calculated_amount?: number
          created_at?: string | null
          discount_type?: string | null
          discount_value?: number | null
          fee_structure_id?: string
          id?: string
          reason?: string | null
          student_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "fee_discounts_fee_structure_id_fkey"
            columns: ["fee_structure_id"]
            isOneToOne: false
            referencedRelation: "fee_structures"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fee_discounts_student_id_fkey"
            columns: ["student_id"]
            isOneToOne: false
            referencedRelation: "students"
            referencedColumns: ["id"]
          },
        ]
      }
      fee_payments: {
        Row: {
          amount: number | null
          created_at: string | null
          fee_structure_id: string
          id: string
          method: Database["public"]["Enums"]["payment_method"]
          payment_date: string | null
          reference_number: string | null
          student_id: string
        }
        Insert: {
          amount?: number | null
          created_at?: string | null
          fee_structure_id: string
          id?: string
          method: Database["public"]["Enums"]["payment_method"]
          payment_date?: string | null
          reference_number?: string | null
          student_id: string
        }
        Update: {
          amount?: number | null
          created_at?: string | null
          fee_structure_id?: string
          id?: string
          method?: Database["public"]["Enums"]["payment_method"]
          payment_date?: string | null
          reference_number?: string | null
          student_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "fee_payments_fee_structure_id_fkey"
            columns: ["fee_structure_id"]
            isOneToOne: false
            referencedRelation: "fee_structures"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fee_payments_student_id_fkey"
            columns: ["student_id"]
            isOneToOne: false
            referencedRelation: "students"
            referencedColumns: ["id"]
          },
        ]
      }
      fee_structures: {
        Row: {
          class_id: string
          created_at: string | null
          id: string
          term_id: string
          total_amount: number | null
        }
        Insert: {
          class_id: string
          created_at?: string | null
          id?: string
          term_id: string
          total_amount?: number | null
        }
        Update: {
          class_id?: string
          created_at?: string | null
          id?: string
          term_id?: string
          total_amount?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "fee_structures_class_id_fkey"
            columns: ["class_id"]
            isOneToOne: false
            referencedRelation: "classes"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fee_structures_term_id_fkey"
            columns: ["term_id"]
            isOneToOne: false
            referencedRelation: "terms"
            referencedColumns: ["id"]
          },
        ]
      }
      grading_schemes: {
        Row: {
          grade: string
          max_score: number
          min_score: number
        }
        Insert: {
          grade: string
          max_score: number
          min_score: number
        }
        Update: {
          grade?: string
          max_score?: number
          min_score?: number
        }
        Relationships: []
      }
      guardians: {
        Row: {
          created_at: string | null
          email: string | null
          full_name: string
          id: string
          phone: string
          profile_id: string
          relationship: Database["public"]["Enums"]["relationship_type"]
        }
        Insert: {
          created_at?: string | null
          email?: string | null
          full_name: string
          id?: string
          phone: string
          profile_id: string
          relationship: Database["public"]["Enums"]["relationship_type"]
        }
        Update: {
          created_at?: string | null
          email?: string | null
          full_name?: string
          id?: string
          phone?: string
          profile_id?: string
          relationship?: Database["public"]["Enums"]["relationship_type"]
        }
        Relationships: [
          {
            foreignKeyName: "guardians_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: true
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      posts: {
        Row: {
          author: string
          content: string
          created_at: string | null
          date: string
          feature_image_path: string | null
          feature_image_url: string | null
          id: string
          title: string
        }
        Insert: {
          author: string
          content: string
          created_at?: string | null
          date?: string
          feature_image_path?: string | null
          feature_image_url?: string | null
          id?: string
          title: string
        }
        Update: {
          author?: string
          content?: string
          created_at?: string | null
          date?: string
          feature_image_path?: string | null
          feature_image_url?: string | null
          id?: string
          title?: string
        }
        Relationships: [
          {
            foreignKeyName: "posts_author_fkey"
            columns: ["author"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["username"]
          },
        ]
      }
      profiles: {
        Row: {
          avatar_url: string | null
          full_name: string | null
          id: string
          restricted: boolean | null
          role: Database["public"]["Enums"]["staff_role"] | null
          updated_at: string | null
          username: string | null
          website: string | null
        }
        Insert: {
          avatar_url?: string | null
          full_name?: string | null
          id: string
          restricted?: boolean | null
          role?: Database["public"]["Enums"]["staff_role"] | null
          updated_at?: string | null
          username?: string | null
          website?: string | null
        }
        Update: {
          avatar_url?: string | null
          full_name?: string | null
          id?: string
          restricted?: boolean | null
          role?: Database["public"]["Enums"]["staff_role"] | null
          updated_at?: string | null
          username?: string | null
          website?: string | null
        }
        Relationships: []
      }
      school_sections: {
        Row: {
          created_at: string | null
          id: string
          name: string
          school: Database["public"]["Enums"]["school_type"]
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          name: string
          school?: Database["public"]["Enums"]["school_type"]
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          name?: string
          school?: Database["public"]["Enums"]["school_type"]
          updated_at?: string | null
        }
        Relationships: []
      }
      staff: {
        Row: {
          created_at: string | null
          id: string
          profile_id: string | null
          role: Database["public"]["Enums"]["staff_role"]
        }
        Insert: {
          created_at?: string | null
          id?: string
          profile_id?: string | null
          role: Database["public"]["Enums"]["staff_role"]
        }
        Update: {
          created_at?: string | null
          id?: string
          profile_id?: string | null
          role?: Database["public"]["Enums"]["staff_role"]
        }
        Relationships: [
          {
            foreignKeyName: "staff_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: true
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      student_classrooms: {
        Row: {
          class_id: string
          classroom_id: string
          student_id: string
          term_id: string
        }
        Insert: {
          class_id: string
          classroom_id: string
          student_id: string
          term_id: string
        }
        Update: {
          class_id?: string
          classroom_id?: string
          student_id?: string
          term_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "student_classrooms_class_id_fkey"
            columns: ["class_id"]
            isOneToOne: false
            referencedRelation: "classes"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "student_classrooms_classroom_id_fkey"
            columns: ["classroom_id"]
            isOneToOne: false
            referencedRelation: "classrooms"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "student_classrooms_student_id_fkey"
            columns: ["student_id"]
            isOneToOne: false
            referencedRelation: "students"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "student_classrooms_term_id_fkey"
            columns: ["term_id"]
            isOneToOne: false
            referencedRelation: "terms"
            referencedColumns: ["id"]
          },
        ]
      }
      student_guardians: {
        Row: {
          emergency_contact: boolean | null
          guardian_id: string
          id: string
          is_primary: boolean | null
          student_id: string
        }
        Insert: {
          emergency_contact?: boolean | null
          guardian_id: string
          id?: string
          is_primary?: boolean | null
          student_id: string
        }
        Update: {
          emergency_contact?: boolean | null
          guardian_id?: string
          id?: string
          is_primary?: boolean | null
          student_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "student_guardians_guardian_id_fkey"
            columns: ["guardian_id"]
            isOneToOne: false
            referencedRelation: "guardians"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "student_guardians_student_id_fkey"
            columns: ["student_id"]
            isOneToOne: false
            referencedRelation: "students"
            referencedColumns: ["id"]
          },
        ]
      }
      student_promotions: {
        Row: {
          created_at: string | null
          from_classroom_id: string
          id: string
          initiated_by: string
          promotion_date: string
          reason: string | null
          student_id: string
          to_classroom_id: string
        }
        Insert: {
          created_at?: string | null
          from_classroom_id: string
          id?: string
          initiated_by: string
          promotion_date: string
          reason?: string | null
          student_id: string
          to_classroom_id: string
        }
        Update: {
          created_at?: string | null
          from_classroom_id?: string
          id?: string
          initiated_by?: string
          promotion_date?: string
          reason?: string | null
          student_id?: string
          to_classroom_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "student_promotions_from_classroom_id_fkey"
            columns: ["from_classroom_id"]
            isOneToOne: false
            referencedRelation: "classrooms"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "student_promotions_initiated_by_fkey"
            columns: ["initiated_by"]
            isOneToOne: false
            referencedRelation: "staff"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "student_promotions_student_id_fkey"
            columns: ["student_id"]
            isOneToOne: false
            referencedRelation: "students"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "student_promotions_to_classroom_id_fkey"
            columns: ["to_classroom_id"]
            isOneToOne: false
            referencedRelation: "classrooms"
            referencedColumns: ["id"]
          },
        ]
      }
      student_scores: {
        Row: {
          assessment_date: string
          ca: number | null
          ca_1: number | null
          ca_2: number | null
          class_id: string
          created_at: string | null
          exam: number | null
          id: string
          score: number | null
          student_id: string
          subject_id: string
          term_id: string
        }
        Insert: {
          assessment_date: string
          ca?: number | null
          ca_1?: number | null
          ca_2?: number | null
          class_id: string
          created_at?: string | null
          exam?: number | null
          id?: string
          score?: number | null
          student_id: string
          subject_id: string
          term_id: string
        }
        Update: {
          assessment_date?: string
          ca?: number | null
          ca_1?: number | null
          ca_2?: number | null
          class_id?: string
          created_at?: string | null
          exam?: number | null
          id?: string
          score?: number | null
          student_id?: string
          subject_id?: string
          term_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "student_scores_class_id_fkey"
            columns: ["class_id"]
            isOneToOne: false
            referencedRelation: "classes"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "student_scores_student_id_fkey"
            columns: ["student_id"]
            isOneToOne: false
            referencedRelation: "students"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "student_scores_subject_id_fkey"
            columns: ["subject_id"]
            isOneToOne: false
            referencedRelation: "subjects"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "student_scores_term_id_fkey"
            columns: ["term_id"]
            isOneToOne: false
            referencedRelation: "terms"
            referencedColumns: ["id"]
          },
        ]
      }
      students: {
        Row: {
          admission_date: string
          age_in_years: number | null
          created_at: string | null
          date_of_birth: string | null
          fee_discount: number
          first_name: string
          gender: Database["public"]["Enums"]["gender_type"]
          id: string
          last_name: string
          lga: string | null
          medical_history: string | null
          nationality: string | null
          registration_number: string | null
          state_of_origin: string | null
          status: Database["public"]["Enums"]["student_status"]
          stream: Database["public"]["Enums"]["student_stream"]
          updated_at: string | null
        }
        Insert: {
          admission_date: string
          age_in_years?: number | null
          created_at?: string | null
          date_of_birth?: string | null
          fee_discount?: number
          first_name: string
          gender: Database["public"]["Enums"]["gender_type"]
          id?: string
          last_name: string
          lga?: string | null
          medical_history?: string | null
          nationality?: string | null
          registration_number?: string | null
          state_of_origin?: string | null
          status?: Database["public"]["Enums"]["student_status"]
          stream?: Database["public"]["Enums"]["student_stream"]
          updated_at?: string | null
        }
        Update: {
          admission_date?: string
          age_in_years?: number | null
          created_at?: string | null
          date_of_birth?: string | null
          fee_discount?: number
          first_name?: string
          gender?: Database["public"]["Enums"]["gender_type"]
          id?: string
          last_name?: string
          lga?: string | null
          medical_history?: string | null
          nationality?: string | null
          registration_number?: string | null
          state_of_origin?: string | null
          status?: Database["public"]["Enums"]["student_status"]
          stream?: Database["public"]["Enums"]["student_stream"]
          updated_at?: string | null
        }
        Relationships: []
      }
      subjects: {
        Row: {
          code: string | null
          created_at: string | null
          id: string
          name: string
        }
        Insert: {
          code?: string | null
          created_at?: string | null
          id?: string
          name: string
        }
        Update: {
          code?: string | null
          created_at?: string | null
          id?: string
          name?: string
        }
        Relationships: []
      }
      teacher_classrooms: {
        Row: {
          classroom_id: string
          created_at: string | null
          id: string
          teacher_id: string
        }
        Insert: {
          classroom_id: string
          created_at?: string | null
          id?: string
          teacher_id: string
        }
        Update: {
          classroom_id?: string
          created_at?: string | null
          id?: string
          teacher_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "teacher_classrooms_classroom_id_fkey"
            columns: ["classroom_id"]
            isOneToOne: false
            referencedRelation: "classrooms"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "teacher_classrooms_teacher_id_fkey"
            columns: ["teacher_id"]
            isOneToOne: false
            referencedRelation: "teachers"
            referencedColumns: ["id"]
          },
        ]
      }
      teacher_subjects: {
        Row: {
          created_at: string | null
          id: string
          subject_id: string
          teacher_id: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          subject_id: string
          teacher_id: string
        }
        Update: {
          created_at?: string | null
          id?: string
          subject_id?: string
          teacher_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "teacher_subjects_subject_id_fkey"
            columns: ["subject_id"]
            isOneToOne: false
            referencedRelation: "subjects"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "teacher_subjects_teacher_id_fkey"
            columns: ["teacher_id"]
            isOneToOne: false
            referencedRelation: "teachers"
            referencedColumns: ["id"]
          },
        ]
      }
      teachers: {
        Row: {
          created_at: string
          email: string | null
          first_name: string
          hire_date: string | null
          id: string
          last_name: string | null
          profile_id: string
          service_years: number | null
          termination_date: string | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string
          email?: string | null
          first_name: string
          hire_date?: string | null
          id?: string
          last_name?: string | null
          profile_id: string
          service_years?: number | null
          termination_date?: string | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string
          email?: string | null
          first_name?: string
          hire_date?: string | null
          id?: string
          last_name?: string | null
          profile_id?: string
          service_years?: number | null
          termination_date?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "teachers_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: true
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      terminal_results: {
        Row: {
          attentiveness: number | null
          average_score: number
          class_id: string | null
          class_teacher_remarks: string | null
          classroom_id: string | null
          club_society: number | null
          created_at: string | null
          drawing_and_painting: number | null
          grade: string | null
          hand_writing: number | null
          head_teacher_remarks: string | null
          hobbies: number | null
          honesty: number | null
          id: string
          neatness: number | null
          politeness: number | null
          position: number | null
          published_date: string | null
          punctuality: number | null
          relationship_with_others: number | null
          speech_fluency: number | null
          sport_and_game: number | null
          student_id: string
          term_id: string
          total_score: number | null
        }
        Insert: {
          attentiveness?: number | null
          average_score: number
          class_id?: string | null
          class_teacher_remarks?: string | null
          classroom_id?: string | null
          club_society?: number | null
          created_at?: string | null
          drawing_and_painting?: number | null
          grade?: string | null
          hand_writing?: number | null
          head_teacher_remarks?: string | null
          hobbies?: number | null
          honesty?: number | null
          id?: string
          neatness?: number | null
          politeness?: number | null
          position?: number | null
          published_date?: string | null
          punctuality?: number | null
          relationship_with_others?: number | null
          speech_fluency?: number | null
          sport_and_game?: number | null
          student_id: string
          term_id: string
          total_score?: number | null
        }
        Update: {
          attentiveness?: number | null
          average_score?: number
          class_id?: string | null
          class_teacher_remarks?: string | null
          classroom_id?: string | null
          club_society?: number | null
          created_at?: string | null
          drawing_and_painting?: number | null
          grade?: string | null
          hand_writing?: number | null
          head_teacher_remarks?: string | null
          hobbies?: number | null
          honesty?: number | null
          id?: string
          neatness?: number | null
          politeness?: number | null
          position?: number | null
          published_date?: string | null
          punctuality?: number | null
          relationship_with_others?: number | null
          speech_fluency?: number | null
          sport_and_game?: number | null
          student_id?: string
          term_id?: string
          total_score?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "terminal_results_class_id_fkey"
            columns: ["class_id"]
            isOneToOne: false
            referencedRelation: "classes"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "terminal_results_classroom_id_fkey"
            columns: ["classroom_id"]
            isOneToOne: false
            referencedRelation: "classrooms"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "terminal_results_student_id_fkey"
            columns: ["student_id"]
            isOneToOne: false
            referencedRelation: "students"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "terminal_results_term_id_fkey"
            columns: ["term_id"]
            isOneToOne: false
            referencedRelation: "terms"
            referencedColumns: ["id"]
          },
        ]
      }
      terms: {
        Row: {
          created_at: string | null
          end_date: string | null
          id: string
          name: string
          session: string
          start_date: string
          term: Database["public"]["Enums"]["term_enum"]
          year: number
        }
        Insert: {
          created_at?: string | null
          end_date?: string | null
          id?: string
          name: string
          session: string
          start_date: string
          term: Database["public"]["Enums"]["term_enum"]
          year: number
        }
        Update: {
          created_at?: string | null
          end_date?: string | null
          id?: string
          name?: string
          session?: string
          start_date?: string
          term?: Database["public"]["Enums"]["term_enum"]
          year?: number
        }
        Relationships: []
      }
      user_enrollments: {
        Row: {
          created_at: string | null
          email: string
          enrolled_by: string
          id: string
          role: Database["public"]["Enums"]["staff_role"]
          status: Database["public"]["Enums"]["user_enrollment_status"]
        }
        Insert: {
          created_at?: string | null
          email: string
          enrolled_by: string
          id?: string
          role: Database["public"]["Enums"]["staff_role"]
          status?: Database["public"]["Enums"]["user_enrollment_status"]
        }
        Update: {
          created_at?: string | null
          email?: string
          enrolled_by?: string
          id?: string
          role?: Database["public"]["Enums"]["staff_role"]
          status?: Database["public"]["Enums"]["user_enrollment_status"]
        }
        Relationships: []
      }
    }
    Views: {
      fee_payment_status: {
        Row: {
          balance: number | null
          is_fully_paid: boolean | null
          last_payment_date: string | null
          student_id: string | null
          term_id: string | null
          total_due: number | null
          total_paid: number | null
        }
        Relationships: [
          {
            foreignKeyName: "fee_structures_term_id_fkey"
            columns: ["term_id"]
            isOneToOne: false
            referencedRelation: "terms"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "student_classrooms_student_id_fkey"
            columns: ["student_id"]
            isOneToOne: false
            referencedRelation: "students"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Functions: {
      add_fee_payment: {
        Args: {
          p_student_id: string
          p_term_id: string
          p_class_id: string
          p_amount: number
          p_method: Database["public"]["Enums"]["payment_method"]
          p_reference_number?: string
          p_payment_date?: string
        }
        Returns: {
          amount: number | null
          created_at: string | null
          fee_structure_id: string
          id: string
          method: Database["public"]["Enums"]["payment_method"]
          payment_date: string | null
          reference_number: string | null
          student_id: string
        }
      }
      check_student_scores_complete: {
        Args: { student_id: string; term_id: string }
        Returns: boolean
      }
      create_next_term_if_missing: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      get_current_term: {
        Args: Record<PropertyKey, never>
        Returns: {
          created_at: string | null
          end_date: string | null
          id: string
          name: string
          session: string
          start_date: string
          term: Database["public"]["Enums"]["term_enum"]
          year: number
        }[]
      }
      get_teacher_student_scores: {
        Args: {
          p_teacher_id: string
          p_term_id: string
          p_classroom_id?: string
        }
        Returns: {
          student_id: string
          first_name: string
          last_name: string
          email: string
          classroom: Json
          scores: Json
        }[]
      }
      insert_student_and_classroom: {
        Args:
          | {
              first_name: string
              last_name: string
              stream: string
              date_of_birth: string
              gender: string
              admission_date: string
              s_class_id: string
              classroom_id?: string
              status?: string
              nationality?: string
              state_of_origin?: string
              lga?: string
              medical_history?: string
            }
          | {
              first_name: string
              last_name: string
              fee_discount: number
              stream: string
              date_of_birth: string
              gender: string
              admission_date: string
              s_class_id: string
              classroom_id?: string
              status?: string
              nationality?: string
              state_of_origin?: string
              lga?: string
              medical_history?: string
            }
        Returns: string
      }
      promote_students_end_of_session: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
    }
    Enums: {
      event_type: "Holiday" | "Exam" | "Meeting"
      gender_type: "Male" | "Female" | "Other"
      payment_method: "Cash" | "Transfer" | "Card" | "Mobile Money"
      relationship_type: "Parent" | "Grandparent" | "Sibling" | "Guardian"
      school_type: "formal" | "islamiyya"
      staff_role: "Admin" | "Registrar" | "Teacher" | "Accountant"
      student_status: "Active" | "Graduated" | "Transferred" | "Inactive"
      student_stream: "science" | "art" | "commerce" | "standard"
      term_enum: "First Term" | "Second Term" | "Third Term"
      term_name: "First Term" | "Second Term" | "Third Term"
      user_enrollment_status: "pending" | "enrolled"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      event_type: ["Holiday", "Exam", "Meeting"],
      gender_type: ["Male", "Female", "Other"],
      payment_method: ["Cash", "Transfer", "Card", "Mobile Money"],
      relationship_type: ["Parent", "Grandparent", "Sibling", "Guardian"],
      school_type: ["formal", "islamiyya"],
      staff_role: ["Admin", "Registrar", "Teacher", "Accountant"],
      student_status: ["Active", "Graduated", "Transferred", "Inactive"],
      student_stream: ["science", "art", "commerce", "standard"],
      term_enum: ["First Term", "Second Term", "Third Term"],
      term_name: ["First Term", "Second Term", "Third Term"],
      user_enrollment_status: ["pending", "enrolled"],
    },
  },
} as const
