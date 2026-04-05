import { logEvent } from "firebase/analytics";
import { getAnalyticsInstance } from "./firebase";

export async function trackEvent(name, params = {}) {
  const analytics = await getAnalyticsInstance();
  if (!analytics) return;

  logEvent(analytics, name, params);
}