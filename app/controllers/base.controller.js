const constantUtils = require("../utils/constants.utils");

exports.getPagingData = (data) => {
  return {
    totalItems: data.totalDocs,
    totalPages: data.totalPages,
    currentPage: data.page - 1,
    results: data.docs,
  };
};

exports.getPagination = (page, limit) => {
  const size = limit
    ? Math.abs(limit)
    : constantUtils.DEFAULT_PAGINATION_PAGE_SIZE;
  const offset = page
    ? Math.abs(page) * size
    : constantUtils.DEFAULT_PAGINATION_PAGE;

  return { size, offset };
};