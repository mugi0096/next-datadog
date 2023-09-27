import { datadogRum } from "@datadog/browser-rum";

const initDatadogRum = () => {
  datadogRum.init({
    applicationId: "ab2814dc-60bc-4265-9d72-64f23093c2af",
    clientToken: "pub9e9689477cc56793426af47b2c5a7739",
    site: "datadoghq.com",
    service: "next-demo",
    env: "dev",
    // Specify a version number to identify the deployed version of your application in Datadog
    version: "1.0.0",
    sessionSampleRate: 100,
    sessionReplaySampleRate: 100,
    trackUserInteractions: true,
    trackResources: true,
    trackLongTasks: true,
    defaultPrivacyLevel: "mask-user-input",
  });

  datadogRum.startSessionReplayRecording();
};

export default initDatadogRum;
