import * as gulp from 'gulp';
import * as runSequence from 'run-sequence';
import {loadTasks} from './tools/utils';
import {SEED_TASKS_DIR, PROJECT_TASKS_DIR} from './tools/config';

loadTasks(SEED_TASKS_DIR);
loadTasks(PROJECT_TASKS_DIR);

// --------------
// Sample task.
gulp.task('sample', (done: any) =>
  runSequence('sample.task',
              done));