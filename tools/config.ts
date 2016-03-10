import {argv} from 'yargs';
import {join} from 'path';

const ENVIRONMENTS = {
  DEVELOPMENT: 'dev',
  PRODUCTION: 'prod'
};

class ProjectConfig {
    ENV                  = getEnvironment();
    
    DIST_DIR             = 'dist';
    TOOLS_DIR            = 'tools';
    SEED_TASKS_DIR       = join(process.cwd(), this.TOOLS_DIR, 'tasks', 'seed');
    PROJECT_TASKS_DIR    = join(process.cwd(), this.TOOLS_DIR, 'tasks', 'project');
    
    APP_SRC              = 'src';
    
    APP_DEST             = `${this.DIST_DIR}/${this.ENV}`;
}

function getEnvironment() {
    let base: string[] = argv['_'];
    let prodKeyword = !!base.filter(o => o.indexOf(ENVIRONMENTS.PRODUCTION) >= 0).pop();
    if (base && prodKeyword || argv['env'] === ENVIRONMENTS.PRODUCTION) {
        return ENVIRONMENTS.PRODUCTION;
    } else {
        return ENVIRONMENTS.DEVELOPMENT;
    }
}


const config: ProjectConfig = new ProjectConfig();
export = config;