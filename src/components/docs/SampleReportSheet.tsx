import DocumentViewer from "../utils/DocumentViewer";
import StudentReportSheet from "./ReportSheet";

function SampleReportSheet() {
  const reportData = {
    schoolName: "MALIKA INTERNATIONAL ACADEMY",
    schoolAddress: "SHEIK JAFAR ROAD ZAWACIKI",
    schoolContact: "TEL: 09033369420, 07036179399",
    pupilName: "John Doe",
    className: "NUR 2 A",
    session: "2022/2023",
    term: "First Term",
    positionInClass: "5th",
    totalStudents: "25",
    finalGrade: "B",
    average: "75%",
    highestAverage: "92%",
    subjects: [
      {
        name: "MATHEMATICS",
        ca: "30",
        exam: "45",
        total: "75",
        grade: "B",
        position: "3rd",
        remark: "Good",
      },
      {
        name: "ENGLISH LANGUAGE",
        ca: "35",
        exam: "40",
        total: "75",
        grade: "B",
        position: "4th",
        remark: "Good",
      },
    ],
    affectiveAssessment: {
      Attentiveness: "5(A)",
      Honesty: "4(B)",
      Neatness: "3(C)",
    },
    psychomotorAssessment: {
      "Drawing and Painting": "5(A)",
      Handwriting: "4(B)",
      SpeechFluency: "3(C)",
    },
  };
  return (
    <DocumentViewer fileName="sample">
      <StudentReportSheet data={reportData} />
    </DocumentViewer>
  );
}

export default SampleReportSheet;
