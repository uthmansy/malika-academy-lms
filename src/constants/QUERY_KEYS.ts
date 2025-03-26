export const warehousesKeys = {
  getAllWarehouses: "getAllWarehouses",
  getAllWarehousesPaginated: "getAllWarehousesPaginated",
  getWarehousesNames: "getWarehousesNames",
  getDispatchWarehouses: "getDispatchWarehouses",
  getWarehouseOptions: "getWarehouseOptions",
};
export const departmentsKeys = {
  getDepartments: "getDepartments",
  getAllDepartments: "getAllDepartments",
};
export const payrollKeys = {
  getPayrolls: "getPayrolls",
  getAllPayrolls: "getAllPayrolls",
};
export const enrollmentKeys = {
  getEnrollments: "getEnrollments",
  getAllEnrollments: "getAllEnrollments",
};
export const expensesKeys = {
  getExpenses: "getExpenses",
  getAllExpenses: "getAllExpenses",
  getCsv: "getExpensesCsv",
};
export const payablesKeys = {
  getAll: "getPayables",
  getPurchasePaymentsBalanceSum: "getPurchasePaymentsBalanceSum",
};
export const receivablesKeys = {
  getAll: "getReceivables",
  getSalesSum: "getSalesSum",
};
export const positionsKeys = {
  getPositions: "getPositions",
  getAllPositions: "getAllPositions",
};
export const inventoryItemsKeys = {
  getAllItems: "getAllInventoryItems",
  getItemSubItemsPaginated: "getItemSubItemsPaginated",
  getRawAndProduct: "getRawAndProduct",
  getAllInventoryItemsPaginated: "getAllInventoryItemsPaginated",
  getItemsNames: "getItemsNames",
  getItemsNamesExternal: "getItemsNamesExternal",
  getItemRecord: "getItemRecord",
  getProductionRunProducts: "getProductionRunProducts",
  getAllItemsAsOptions: "getAllItemsAsOptions",
  getCsv: "getInventoryItemsCsv",
};
export const stocksKeys = {
  getItemRecord: "getItemRecord",
  getExternalStocks: "getExternalStocks",
  getInternalStocks: "getInternalStocks",
  getStockRecords: "getStockRecords",
};
export const externalStocksKeys = {
  getItemExternalRecord: "getItemExternalRecord",
  getExternalStockRecords: "getExternalStockRecords",
};
export const purchasesKeys = {
  getAllPurchases: "getAllPurchases",
  getPurchasePayments: "getPurchasePayments",
  getCsv: "getPurchasesCsv",
};
export const purchasePaymentsKeys = {
  getAll: "getAllPurchasesPayments",
};
export const salesPaymentsKeys = {
  getAll: "getAllsalesPayments",
};
export const salesKeys = {
  getAllSales: "getAllSales",
  getUncompletedSales: "getUncompletedSales",
  getSalePayments: "getSalePayments",
  getCsvData: "getCsvData",
};
export const accountsKeys = {
  getAll: "getAllAccounts",
};
export const vehiclesKeys = {
  getVehicles: "getVehicles",
  getSingleVehicle: "getSingleVehicle",
  getTransitVehicles: "getTransitVehicles",
  getReceivedVehicles: "getReceivedVehicles",
  getDispatchedVehicles: "getDispatchedVehicles",
  getTransitCsv: "getTransitCsv",
  getReceivedCsv: "getReceivedCsv",
  getDeliveredCsv: "getDeliveredCsv",
};

export const requestsKeys = {
  getAllRequests: "getAllRequests",
  getCsv: "getRequestsCsv",
};
export const productionsKeys = {
  getAllProductions: "getAllProductions",
  getRunsCsv: "getProductionRunsCsv",
};
export const productSubmissionsKeys = {
  getAllSubmissions: "getAllSubmissions",
  getCsv: "getSubmissionsCsv",
};
export const inventoryTransfersKeys = {
  getInventoryTransfersPaginated: "getInventoryTransfersPaginated",
  getAllInventoryTransfers: "getAllInventoryTransfers",
  getCsv: "getInventoryTransferCsv",
};
export const employeesKeys = {
  getAllEmployees: "getAllEmployees",
  getCsv: "getEmployeeCsv",
};
export const userKeys = {
  getUsers: "getUsers",
  getAllUsers: "getAllUsers",
};
export const transportFeesKeys = {
  getFees: "getFees",
  getAllFees: "getAllFees",
};

export const financialReportsKeys = {
  getAll: "getAllFinancialReports",
};
export const stockInKeys = {
  getAll: "getStockAll",
  getCsv: "getStockInCsv",
};
export const dailyProductionKeys = {
  getDay: "getDailyProductionDay",
};
export const finishedProductsKeys = {
  getAll: "getAllFinishedProducts",
  getCsv: "getFinishedProductsCsv",
  getDailyProduction: "getAllFinishedProductsDailyProduction",
};

// constants/QUERY_KEYS.ts
export const sectionKeys = {
  getSections: "school-sections",
  getSectionsAll: "getSectionsAll",
};
export const classesKeys = {
  getClasses: "getClasses",
  getClassesAll: "getClassesAll",
  getStudentCurrentClass: "getStudentCurrentClass",
};
export const postsKeys = {
  getAllPosts: "getAllPosts",
  getSinglePost: "getSinglePost",
};
export const teachersKeys = {
  getTeachers: "getTeachers",
  getTeacher: "getTeacher",
  getTeachersAll: "getTeachersAll",
  getCsv: "getTeachersCsv",
};
export const classroomsKeys = {
  getClassrooms: "getClassrooms",
  getClassroomsAll: "getClassroomsAll",
  byClass: "getClassroomsByClass",
};
export const termsKeys = {
  getTerms: "getTerms",
  getTermsAll: "getTermsAll",
  getCurrentTerm: "getCurrentTerm",
};
export const subjectsKeys = {
  getSubjects: "getSubjects",
  getClassSubjects: "getClassSubjects",
  getSubjectsAll: "getSubjectsAll",
  getStudentSubjects: "getStudentSubjects",
};
export const studentsKeys = {
  getStudents: "getStudents",
  getStudentsAll: "getStudentsAll",
};
export const teacherSubjectKeys = {
  getTeacherSubjects: "getTeacherSubjects",
  getTeacherSubjectsAll: "getTeacherSubjectsAll",
};
export const teacherClassroomKeys = {
  getTeacherClassrooms: "getTeacherClassrooms",
  getTeacherClassroomsAll: "getTeacherClassroomsAll",
};
export const classSubjectKeys = {
  getClassSubjects: "getClassSubjects",
  getClassSubjectsAll: "getClassSubjectsAll",
};
export const studentScoreKeys = {
  getStudentScores: "getStudentScores",
  getStudentScoresAll: "getStudentScoresAll",
  recordComplete: "getRecordComplete",
};
export const terminalResultsKeys = {
  getResults: "getResults",
  getStudentReport: "getStudentReport",
  getResultsAll: "getResultsAll",
};
export const feeStructuresKeys = {
  getStructures: "getStructures",
  getStructuresAll: "getStructuresAll",
  getCsv: "getFeeStructuresCsv",
};
export const feePaymentsKeys = {
  getPayments: "getPayments",
  getPaymentsAll: "getPaymentsAll",
  getCsv: "getPaymentsCsv",
};
