import { http, HttpResponse } from "msw";
import { ProfileDetails } from "../types/profile-details";

const handlers = [
  http.get(
    "https://fe-hometask-api.dev.vault.tryvault.com/corporation-number/:number",
    ({ params }) => {
      if (params.number === "invalidNumber") {
        return HttpResponse.json(
          {
            valid: false,
            message: "Invalid corporation number",
          },
          { status: 404 }
        );
      } else {
        return HttpResponse.json(
          {
            valid: true,
            corporationNumber: params.number,
          },
          { status: 200 }
        );
      }
    }
  ),

  http.post(
    "https://fe-hometask-api.dev.vault.tryvault.com/profile-details",
    async ({ request }) => {
      const newProfile = (await request.json()) as ProfileDetails;
      if (newProfile && newProfile.phone === "invalidPhone") {
        return HttpResponse.json(
          { message: "Invalid phone number" },
          { status: 400 }
        );
      } else {
        return new HttpResponse(null, { status: 200 });
      }
    }
  ),
];

export { handlers };
