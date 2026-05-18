export type EmailJob = {
  type: 'email.send';
  to: string;
  subject: string;
  body: string;
};

export type Job = EmailJob;
export type JobType = Job['type'];
