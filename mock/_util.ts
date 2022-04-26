export function resultSuccess<T = Recordable>(result: T, { message = 'ok' } = {}) {
  return {
    data: result,
    code: 0,
    message,
    type: 'success',
  }
}

export function resultError(message = 'Request failed', { code = -1, result = null } = {}) {
  return {
    code,
    result,
    message,
    type: 'error',
  }
}
