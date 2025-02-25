import umami from "@umami/node";

umami.init({
  websiteId: "f02c807a-982e-428e-b358-3966c4b78b65", // Your website id
  hostUrl: "https://cloud.umami.is", // URL to your Umami instance
});

export const umamiTrackCheckoutSuccessEvent = async (payload: {
  [key: string]: string | number | Date;
}) => {
  await umami.track("checkout_success", payload);
};
