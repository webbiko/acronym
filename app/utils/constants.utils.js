// Acronyms service constants
module.exports.ERROR_MESSAGE_MISSING_ACRONYM = "Acronym field is required";
module.exports.ERROR_MESSAGE_MISSING_ACRONYM_DEFINITION =
  "Acronym definition field is required!";
module.exports.ERROR_MESSAGE_LOADING_ACRONYM =
  "An error has occured while loading the acronyms";
module.exports.ERROR_MESSAGE_LOADING_RANDOM_ACRONYM =
  "An error has occured while loading random acronyms";
module.exports.ERROR_MESSAGE_CREATING_NEW_ACRONYM =
  "An error has occured while creating a new acronym";
module.exports.ERROR_MESSAGE_UPDATING_ACRONYM =
"An error has occured while updating the acronym";
module.exports.ERROR_MESSAGE_DELETING_ACRONYM =
  "Something went wrong while deleting the acronym";
module.exports.ERROR_MESSAGE_ACRONYM_ALREADY_EXISTS = "Acronym already exists";
module.exports.ERROR_MESSAGE_ACRONYM_DOES_NOT_EXIST = "Acronym does not exist";

// Pagination constants
module.exports.DEFAULT_PAGINATION_PAGE_SIZE = 10; // limit
module.exports.DEFAULT_PAGINATION_PAGE = 0; // offset

module.exports.DEFAULT_SKIP_LOADING_RANDOM_ACRONYMS = 10;

// authorization token
module.exports.ERROR_MESSAGE_USER_NOT_ENOUGH_RIGHTS =
  "User does not have enough permissions to access.";

// Common ERROR codes constants
module.exports.STATUS_CODE_OK = 200;
module.exports.STATUS_CODE_BAD_REQUEST = 400;
module.exports.STATUS_CODE_ACCESS_UNAUTHORIZED = 401;
module.exports.STATUS_CODE_INTERNAL_SERVER_ERROR = 500;
module.exports.STATUS_CODE_SERVICE_UNAVAILABLE = 503;