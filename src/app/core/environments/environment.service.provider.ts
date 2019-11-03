import { EnvironmentService } from './environment.service';

export const EnvironmentServiceFactory = () => {
  const environment = new EnvironmentService();

  const browserWindow = window || {};
  const browserWindowEnvironment = browserWindow['environment'] || {};

  for (const key in browserWindowEnvironment) {
    if (browserWindowEnvironment.hasOwnProperty(key)) {
      environment[key] = window['environment'][key];
    }
  }

  return environment;
};

export const EnvironmentServiceProvider: any = {
  provide: EnvironmentService,
  useFactory: EnvironmentServiceFactory,
  deps: []
};
