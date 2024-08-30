export default {
  data: (
    data: object,
    message = "Your request has been processed",
    details: object
  ) => {
    return { success: true, data, message, details };
  },

  paginationData: (
    data: object,
    metaData: object,
    message = "Your request has been processed",
    details: object
  ) => {
    return { success: true, data, metaData, message, details };
  },

  error: (
    message: string,
    details: object,
  ) => {
    return { success: false, message, details }
  }
};
