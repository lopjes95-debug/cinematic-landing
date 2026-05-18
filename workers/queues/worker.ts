import { Worker } from 'bullmq';
import { redis } from '../shared/redis';

export const worker = new Worker(
  'jobs',
  async job => {
    console.log('Processing job:', job.data);
  },
  { connection: redis }
);
