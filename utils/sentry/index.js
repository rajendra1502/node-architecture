 import * as Sentry from '@sentry/node';
 import * as Tracing from '@sentry/tracing';

Sentry.init({
  dsn: "https://ad3376387c6e40958e2082b8a6bc02b6@o4504445401956352.ingest.sentry.io/4504445407461376",

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

export {
    Sentry
}

