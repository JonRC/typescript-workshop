import { ErrorRequestHandler } from "express";
import { ValidationError } from "yup";

const errorHandler: ErrorRequestHandler = function (error, request, response, next) {
  if(error instanceof ValidationError) {
    return response.status(400).json(error.errors)
  }

  response.status(500).json(error.message)
}

export { errorHandler }