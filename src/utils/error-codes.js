const ClientErrorCodes = Object.freeze({
  BAD_REQUEST : 400,
  UNAUTHORIZED : 401,
  NOT_FOUND : 404
})

const SuccessErrorCodes = Object.freeze({
  INTERNAL_SERVER_ERROR : 500,
  NOT_IMPLEMENTED : 501
})

const SuccessCodes = Object.freeze({
  CREATED : 200,
  OK : 201
})

module.exports = {
  ClientErrorCodes,
  SuccessCodes,
  SuccessErrorCodes
}