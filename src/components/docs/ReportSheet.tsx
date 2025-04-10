import {
  Document,
  Page,
  View,
  Text,
  StyleSheet,
  Font,
  Image,
} from "@react-pdf/renderer";
import {
  ClassSubjectJoined,
  StudentScoreJoined,
  TerminalResultJoined,
} from "../../types/db";
import { getGrade } from "../../helpers/functions";
import { LOGO } from "../../assets/images";

// Register font (make sure to provide actual font files)
Font.register({
  family: "Times-Roman",
  fonts: [
    { src: "/fonts/times-roman.ttf" },
    { src: "/fonts/times-roman-bold.ttf", fontWeight: "bold" },
  ],
});

// Create styles
const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontSize: 8,
    fontFamily: "Times-Roman",
  },
  logo: {
    width: 100,
    height: "auto",
  },
  header: {
    borderBottomWidth: 1,
    borderBottomColor: "#000",
    paddingBottom: 10,
    marginBottom: 15,
    textAlign: "center",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  schoolName: {
    fontSize: 20,
    fontWeight: "extrabold",
    marginBottom: 4,
  },
  reportTitle: {
    fontSize: 14,
    marginVertical: 15,
    textAlign: "center",
    textDecoration: "underline",
  },
  studentInfo: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 10,
    gap: 8,
  },
  infoItem: {
    width: "48%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    textTransform: "uppercase",
    paddingHorizontal: 10,
    textAlign: "center",
  },
  infoItemSmall: {
    width: "23%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  table: {
    width: "100%",
    marginVertical: 8,
    borderWidth: 1,
    borderColor: "#000",
  },
  tableRow: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#000",
  },
  tableHeader: {
    backgroundColor: "#f0f0f0",
    fontWeight: "bold",
  },
  tableCell: {
    padding: 5,
    width: "14.28%",
    borderRightWidth: 1,
    borderRightColor: "#000",
    textAlign: "center",
  },
  assessmentWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 15,
    gap: 10,
    fontSize: 7,
  },
  assessmentTable: {
    width: "45%",
    borderWidth: 1,
    borderColor: "#000",
  },
  keyTable: {
    width: "25%",
    borderWidth: 1,
    borderColor: "#000",
  },
  dottedLine: {
    borderBottomWidth: 1,
    borderBottomStyle: "dotted",
    borderBottomColor: "#000",
    flexGrow: 1,
    marginLeft: 5,
  },
  gradeScheme: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginVertical: 10,
    gap: 4,
  },
  gradeItems: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
  remarks: {
    marginVertical: 10,
  },
  signatureSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
});

interface Props {
  record: TerminalResultJoined;
  scores: StudentScoreJoined[];
  subjects: ClassSubjectJoined[];
}

const ReportCard = ({ record, scores, subjects }: Props) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header Section */}
        <View style={styles.header}>
          <View>
            <Image src={LOGO} style={styles.logo} />
          </View>
          <View style={{ textAlign: "center", flexGrow: 1 }}>
            <Text style={styles.schoolName}>MALIKA INTERNATIONAL ACADEMY</Text>
            <Text style={{ fontSize: "14" }}>
              ADDRESS: SHEIK JAFAR ROAD ZAWACIKI
            </Text>
            <Text style={{ fontSize: "12" }}>
              TEL: 09033369420, 07036179399 E-MAIL: malikaschoolng@gmail.com
            </Text>
            <Text style={{ fontSize: "12" }}>
              www.malikainternationalacademic.com
            </Text>
          </View>
        </View>

        {/* Report Title */}
        <Text style={styles.reportTitle}>REPORT SHEET</Text>

        {/* Student Information */}
        <View style={styles.studentInfo}>
          <View style={styles.infoItem}>
            <Text>NAME OF PUPIL:</Text>
            <View style={styles.dottedLine}>
              <Text>
                {record.student.first_name} {record.student.last_name}
              </Text>
            </View>
          </View>
          <View style={styles.infoItem}>
            <Text>CLASS:</Text>
            <View style={styles.dottedLine}>
              <Text>{record.class.name}</Text>
            </View>
          </View>
          <View style={styles.infoItem}>
            <Text>CLASSROOM:</Text>
            <View style={styles.dottedLine}>
              <Text>{record.classroom.name}</Text>
            </View>
          </View>
          <View style={styles.infoItem}>
            <Text>ACADEMIC SESSION:</Text>
            <View style={styles.dottedLine}>
              <Text>{record.term.session}</Text>
            </View>
          </View>
          <View style={styles.infoItem}>
            <Text>TERM:</Text>
            <View style={styles.dottedLine}>
              <Text>{record.term.term}</Text>
            </View>
          </View>
          <View style={styles.infoItem}>
            <Text>POSITION IN CLASS:</Text>
            <View style={styles.dottedLine}>
              <Text>{record.position}</Text>
            </View>
          </View>
          <View style={styles.infoItem}>
            <Text>OUT OF:</Text>
            <View style={styles.dottedLine} />
          </View>
          <View style={styles.infoItem}>
            <Text>FINAL GRADE:</Text>
            <View style={styles.dottedLine}>
              <Text>{record.grade}</Text>
            </View>
          </View>
          <View style={styles.infoItem}>
            <Text>AVERAGE:</Text>
            <View style={styles.dottedLine}>
              <Text>{record.average_score}</Text>
            </View>
          </View>
          <View style={styles.infoItem}>
            <Text>HIGHEST AVERAGE:</Text>
            <View style={styles.dottedLine} />
          </View>
        </View>

        {/* Subjects Table */}
        <View style={styles.table}>
          <View style={{ ...styles.tableRow, ...styles.tableHeader }}>
            {[
              "SUBJECTS",
              "CA 40%",
              "EXAM 60%",
              "TOTAL 100%",
              "GRADE",
              "REMARK",
            ].map((header, index) => (
              <Text
                key={header}
                style={{
                  ...styles.tableCell,
                  ...(index === 0 && { width: 250 }),
                }}
              >
                {header}
              </Text>
            ))}
          </View>

          {subjects.map((subject) => {
            const score = scores.find(
              (s) => s.subject_table.name === subject.subject_table.name
            );
            return (
              <View key={subject.subject_id} style={styles.tableRow}>
                <Text
                  style={{ ...styles.tableCell, width: 250, textAlign: "left" }}
                >
                  {subject.subject_table.name}
                </Text>
                <Text style={styles.tableCell}>{score?.ca || "N/A"}</Text>
                <Text style={styles.tableCell}>{score?.exam || "N/A"}</Text>
                <Text style={styles.tableCell}>{score?.score || "N/A"}</Text>
                <Text style={styles.tableCell}>
                  {score?.score ? getGrade(score?.score) : "N/A"}
                </Text>
                <Text style={styles.tableCell}></Text>
              </View>
            );
          })}
        </View>

        {/* Total Section */}
        <View style={styles.studentInfo}>
          <View style={styles.infoItemSmall}>
            <Text>TOTAL SCORE:</Text>
            <View style={styles.dottedLine} />
          </View>
          <View style={styles.infoItemSmall}>
            <Text>OUT OF:</Text>
            <View style={styles.dottedLine} />
          </View>
          <View style={styles.infoItemSmall}>
            <Text>ATTENDANCE:</Text>
            <View style={styles.dottedLine} />
          </View>
          <View style={styles.infoItemSmall}>
            <Text>OUT OF:</Text>
            <View style={styles.dottedLine} />
          </View>
        </View>

        {/* Grading Scheme */}
        <View style={styles.gradeScheme}>
          <Text style={{ width: "100%", fontWeight: "bold" }}>
            GRADING SCHEME:
          </Text>
          <View style={styles.gradeItems}>
            <Text>75-100 = A+ (High Distinction)</Text>
            <Text>70-74 = A (Distinction)</Text>
            <Text>65-69 = B+ (V. Good)</Text>
            <Text>60-64 = B (Good)</Text>
            <Text>55-59 = C+ (Satisfactory)</Text>
            <Text>50-54 = C (Average)</Text>
            <Text>40-49 = D+ (Below Average)</Text>
            <Text>35-39 = D (Pass)</Text>
            <Text>0-34 = E (Unsatisfactory)</Text>
          </View>
        </View>

        {/* Assessments Section */}
        <View style={styles.assessmentWrapper}>
          {/* Affective Assessment */}
          <View style={styles.assessmentTable}>
            <View style={{ ...styles.tableRow, ...styles.tableHeader }}>
              <Text style={{ ...styles.tableCell, width: "80%" }}>
                AFFECTIVE ASSESSMENT
              </Text>
              <Text style={{ ...styles.tableCell, width: "20%" }}>SCORE</Text>
            </View>
            {[
              { label: "Attentiveness", index: "attentiveness" },
              { label: "Honesty", index: "honesty" },
              { label: "Neatness", index: "neatness" },
              { label: "Politeness", index: "politeness" },
              { label: "Punctuality", index: "punctuality" },
              {
                label: "Relationship with Others",
                index: "relationship_with_others",
              },
            ].map((item) => (
              <View key={item.index} style={styles.tableRow}>
                <Text
                  style={{
                    ...styles.tableCell,
                    width: "80%",
                    textAlign: "left",
                  }}
                >
                  {item.label}
                </Text>
                <Text style={{ ...styles.tableCell, width: "20%" }}>
                  {
                    //@ts-ignore
                    record[item.index]
                  }
                </Text>
              </View>
            ))}
          </View>

          {/* Psychomotor Assessment */}
          <View style={styles.assessmentTable}>
            <View style={{ ...styles.tableRow, ...styles.tableHeader }}>
              <Text style={{ ...styles.tableCell, width: "80%" }}>
                PSYCHOMOTOR ASSESSMENT
              </Text>
              <Text style={{ ...styles.tableCell, width: "20%" }}>SCORE</Text>
            </View>
            {[
              { label: "Club / Society", index: "club_society" },
              { label: "Drawing and Painting", index: "drawing_and_painting" },
              { label: "Hand Writing", index: "hand_writing" },
              { label: "Hobbies", index: "hobbies" },
              { label: "Speech Fluency", index: "speech_fluency" },
              { label: "Sport and Game", index: "sport_and_game" },
            ].map((item) => (
              <View key={item.index} style={styles.tableRow}>
                <Text
                  style={{
                    ...styles.tableCell,
                    width: "80%",
                    textAlign: "left",
                  }}
                >
                  {item.label}
                </Text>
                <Text style={{ ...styles.tableCell, width: "20%" }}>
                  {
                    //@ts-ignore
                    record[item.index]
                  }
                </Text>
              </View>
            ))}
          </View>

          {/* Key to Assessment */}
          <View style={styles.keyTable}>
            <View style={{ ...styles.tableRow, ...styles.tableHeader }}>
              <Text style={{ ...styles.tableCell, width: "100%" }}>
                KEY TO ASSESSMENT
              </Text>
            </View>
            {[
              "5(A) Excellent Observable Trait",
              "4(B) Very Good Observable Trait",
              "3(C) Good Observable Trait",
              "2(D) Fair But Acceptable Level of Observation",
              "1(E) Poor and Acceptable Level of Observable Trait",
            ].map((item) => (
              <View key={item} style={styles.tableRow}>
                <Text style={{ ...styles.tableCell, width: "100%" }}>
                  {item}
                </Text>
              </View>
            ))}
          </View>
        </View>

        {/* Remarks Section */}
        <View style={styles.remarks}>
          <View style={{ marginBottom: 8 }}>
            <Text>Class Teacher’s Remark: {record.class_teacher_remarks}</Text>
            <View style={{ ...styles.dottedLine, width: "80%" }} />
          </View>
          <View>
            <Text>Head Teacher’s Remark: {record.head_teacher_remarks}</Text>
            <View style={{ ...styles.dottedLine, width: "80%" }} />
          </View>
        </View>

        {/* Signature Section */}
        <View style={styles.signatureSection}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text>Head Teacher Sign: </Text>
            <View style={{ ...styles.dottedLine, width: 100 }} />
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text>Next Term Begins On: </Text>
            <View style={{ ...styles.dottedLine, width: 80 }} />
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default ReportCard;
