/**
 * Resume configuration with cache busting
 * 
 * Update RESUME_VERSION each time you deploy a new resume
 * This ensures browsers fetch the latest version instead of using cached files
 */

export const RESUME_VERSION = "1.0.2";

export const getResumeUrl = (): string => {
  return `/Jay_Tambe_Resume.pdf?v=${RESUME_VERSION}`;
};
