const projectName = import.meta.env.VITE_GLOB_APP_TITLE;

export function warnlog(message: string) {
  console.warn(`[${projectName} warn]:${message}`);
}

export function errorlog(message: string) {
  throw new Error(`[${projectName} error]:${message}`);
}
