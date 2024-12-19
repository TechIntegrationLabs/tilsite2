export const SYSTEM = {
  VERSION: "1.0",
  VALID_CODE: "INITIAL",
  MESSAGES: {
    PROMPT: "ENTER CLIENT CODE" as const,
    UNKNOWN_CODE: "UNKNOWN CODE" as const,
    EXITING: "EXITING" as const,
    SUCCESS: "ACCESS GRANTED" as const,
  },
  HELP_TEXT: "PRESS ENTER TO SUBMIT • ESC TO EXIT",
} as const;