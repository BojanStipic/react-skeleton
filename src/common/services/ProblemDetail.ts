// RFC 7807 https://www.rfc-editor.org/rfc/rfc7807
export type ProblemDetail = Record<string, unknown> & {
  status: string;
  type?: string;
  instance?: string;
  title?: string;
  detail?: string;
};
