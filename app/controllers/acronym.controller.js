const baseController = require("./base.controller");
const repository = require("../repository/acronym.repository");
const constantsUtils = require("../utils/constants.utils");

const logger = require("../controllers/logger.controller");

const DATABASE_TASK_EXECUTION = 1;

exports.create = async (req, res) => {
  const acronym = req.body;

  const validation = validateAcronym(acronym);
  if (validation.error) {
    logger.log("create", validation.errorMessage);
    return res
      .status(validation.errorCode)
      .send({ error: validation.errorMessage });
  }

  try {
    const loadedAcronym = await repository.findOne(acronym.acronym);

    if (loadedAcronym) {
      logger.log("create", constantsUtils.ERROR_MESSAGE_ACRONYM_ALREADY_EXISTS);
      res.header.errorMessage = constantsUtils.ERROR_MESSAGE_ACRONYM_ALREADY_EXISTS;
      return res
        .status(constantsUtils.STATUS_CODE_BAD_REQUEST)
        .send({ error: constantsUtils.ERROR_MESSAGE_ACRONYM_ALREADY_EXISTS });
    }

    const newAcronym = await repository.create(acronym);
    res.send({ acronym: newAcronym.acronym, definition: newAcronym.definition });
  } catch (err) {
    logger.log("create", constantsUtils.ERROR_MESSAGE_CREATING_NEW_ACRONYM, err);
    res
      .status(constantsUtils.STATUS_CODE_INTERNAL_SERVER_ERROR)
      .send({ error: constantsUtils.ERROR_MESSAGE_CREATING_NEW_ACRONYM });
  }
};

exports.update = async (req, res) => {
  const paramAcronym = req.params.acronym;
  const { acronym, definition } = req.body;

  const validation = validateAcronym({
    acronym: acronym,
    definition: definition,
  });

  if (validation.error) {
    logger.log("update", validation.errorMessage);
    return res
      .status(validation.errorCode)
      .send({ error: validation.errorMessage });
  }

  try {
    const loadedAcronym = await repository.findOne(paramAcronym);

    if (!loadedAcronym) {
      logger.log("update", constantsUtils.ERROR_MESSAGE_ACRONYM_DOES_NOT_EXIST);
      return res
        .status(constantsUtils.STATUS_CODE_BAD_REQUEST)
        .send({ error: constantsUtils.ERROR_MESSAGE_ACRONYM_DOES_NOT_EXIST });
    }

    loadedAcronym.acronym = acronym;
    loadedAcronym.definition = definition;

    const result = await repository.update(loadedAcronym);
    if (result.ok == DATABASE_TASK_EXECUTION) {
      res.send();
    } else {
      logger.log("update", constantsUtils.ERROR_MESSAGE_UPDATING_ACRONYM);
      res.status(constantsUtils.STATUS_CODE_BAD_REQUEST).send({
        error: constantsUtils.ERROR_MESSAGE_UPDATING_ACRONYM,
      });
    }
  } catch (err) {
    logger.log("update", constantsUtils.ERROR_MESSAGE_UPDATING_ACRONYM, err);
    res
      .status(constantsUtils.STATUS_CODE_INTERNAL_SERVER_ERROR)
      .send({ error: constantsUtils.ERROR_MESSAGE_UPDATING_ACRONYM });
  }
};

exports.delete = async (req, res) => {
  const acronym = req.params.acronym;

  try {
    const result = await repository.delete(acronym);

    if (result.ok == DATABASE_TASK_EXECUTION) {
      res.send();
    } else {
      logger.log("delete", constantsUtils.ERROR_MESSAGE_DELETING_ACRONYM);
      res
        .status(constantsUtils.STATUS_CODE_BAD_REQUEST)
        .send({ error: constantsUtils.ERROR_MESSAGE_DELETING_ACRONYM });
    }
  } catch (err) {
    logger.log("delete", constantsUtils.ERROR_MESSAGE_DELETING_ACRONYM, err);
    res
      .status(constantsUtils.STATUS_CODE_INTERNAL_SERVER_ERROR)
      .send({ error: constantsUtils.ERROR_MESSAGE_DELETING_ACRONYM });
  }
};

exports.findOne = async (req, res) => {
  const acronym = req.params.acronym;

  repository
    .findOne(acronym)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      logger.log("delete", constantsUtils.ERROR_MESSAGE_UPDATING_ACRONYM, err);
      res
        .status(constantsUtils.STATUS_CODE_BAD_REQUEST)
        .send({ error: constantsUtils.ERROR_MESSAGE_LOADING_ACRONYM });
    });
};

exports.findRandomAcronym = async (req, res) => {
  try {
        const count = parseInt(req.params.count);
        await repository.findRandomAcronym(count, function (err, acronyms) {
          if (err) {
            logger.log("findRandom", constantsUtils.ERROR_MESSAGE_LOADING_RANDOM_ACRONYM, err);
            return res
              .status(constantsUtils.STATUS_CODE_BAD_REQUEST)
              .send({
                error: constantsUtils.ERROR_MESSAGE_LOADING_RANDOM_ACRONYM,
              });
            }

          res.send(acronyms);
        });
      } catch (err) {
        logger.log("findRandom", constantsUtils.ERROR_MESSAGE_LOADING_RANDOM_ACRONYM, err);
    res
      .status(constantsUtils.STATUS_CODE_INTERNAL_SERVER_ERROR)
      .send({ error: constantsUtils.ERROR_MESSAGE_LOADING_RANDOM_ACRONYM });
  }
};

exports.healthCheck = async (req, res) =>  {
  const healthCheck = {
		uptime: process.uptime(),
		message: 'OK',
		timestamp: Date.now()
	};
	try {
		res.send(healthCheck);
	} catch (e) {
		healthCheck.message = e;
		res.status(constantsUtils.STATUS_CODE_SERVICE_UNAVAILABLE).send();
	}
};
exports.findAll = async (req, res) =>  {
  var { from, limit, search } = req.query;

  if(!limit || isNaN(limit)) {
    limit = undefined;    
  }

  if(!from || isNaN(from)) {
    from = undefined;    
  }

  const { size, offset } = baseController.getPagination(from, limit);

  repository
    .findAll(search, size, offset)
    .then((data) => {
        res.send(baseController.getPagingData(data));
    })
    .catch((err) => {
      logger.log("findAll", constantsUtils.ERROR_MESSAGE_LOADING_ACRONYM, err);
      res
        .status(constantsUtils.STATUS_CODE_INTERNAL_SERVER_ERROR)
        .send({ error: constantsUtils.ERROR_MESSAGE_LOADING_ACRONYM });
    });
};

function validateAcronym(data) {
  if (!data.acronym || data.acronym.length === 0)
    return {
      error: true,
      errorCode: constantsUtils.STATUS_CODE_BAD_REQUEST,
      errorMessage: constantsUtils.ERROR_MESSAGE_MISSING_ACRONYM,
    };

  if (!data.definition || data.definition.length === 0)
    return {
      error: true,
      errorCode: constantsUtils.STATUS_CODE_BAD_REQUEST,
      errorMessage: constantsUtils.ERROR_MESSAGE_MISSING_ACRONYM_DEFINITION,
    };

  return { error: false };
}