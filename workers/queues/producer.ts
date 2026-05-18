import { Queue } from 'bullmq';
import { redis } from '../shared/redis';
import { Job, JobType } from '../shared/jobs';

const queue = new Queue<Job>('jobs', { connection: redis });

export async function enqueue<T extends JobType>(type: T, payload: any) {
  await queue.add(type, { type, ...payload });
}
