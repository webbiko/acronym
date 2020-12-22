const Acronym = require("../../models/Acronym");
const constantUtils = require("../utils/constants.utils");

const pretty = require("js-object-pretty-print").pretty;

exports.findOne = async (condition) => {
  return Acronym.findOne().where("acronym").equals(condition);
};

exports.findAll = async (search, limit, offset) => {
  var condition = {};
  if (search && search.length > 0) {
    condition = {
     acronym: { $regex: search }
    };
  }

  return Acronym.paginate(condition, { offset, limit });
};

exports.findRandomAcronym = async (count, callback) => {
  const filter = {};
  const fields = {};
  const options = {
    skip: constantUtils.DEFAULT_SKIP_LOADING_RANDOM_ACRONYMS,
    limit: count,
  };
  return Acronym.findRandom(filter, fields, options, callback);
};

exports.count = async () => {
  return Acronym.countDocuments();
};

exports.create = async (acronym) => {
  return Acronym.create(acronym);
};

exports.update = async (acronym) => {
  const filter = { _id: acronym._id };
  return Acronym.updateOne(filter, acronym);
};

exports.delete = async (acronym) => {
  const filter = { acronym: acronym };
  return Acronym.deleteOne(filter);
};