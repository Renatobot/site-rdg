// Proxy para transformar photo_reference do Google Places em imagens diretas publicas do Google CDN
import { createFileRoute } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/react-start";

export interface PhotoProxyParams {
  ref: string;
  key?: string;
}

export const getGooglePhotoUrlServerFn = createServerFn({ method: "GET" })
  .validator((params: PhotoProxyParams) => params)
  .handler(async ({ data }): Promise<{ directUrl: string | null }> => {
    const ref = data?.ref || "";
    const customKey = data?.key || "";
    const apiKey = customKey.trim() || process.env.GOOGLE_PLACES_API_KEY || "";

    if (!ref || !apiKey) {
      return { directUrl: null };
    }

    try {
      const googlePhotoApiUrl = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1200&photo_reference=${ref}&key=${apiKey}`;
      const res = await fetch(googlePhotoApiUrl);
      if (res.url && res.url.includes("googleusercontent")) {
        return { directUrl: res.url };
      }
      return { directUrl: res.url || googlePhotoApiUrl };
    } catch (e) {
      console.error("Erro ao resolver foto do Google Places:", e);
      return { directUrl: null };
    }
  });

export const Route = createFileRoute("/api/photo")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const reqUrl = new URL(request.url);
        const ref = reqUrl.searchParams.get("ref") || "";
        const customKey = reqUrl.searchParams.get("key") || "";
        const apiKey = customKey.trim() || process.env.GOOGLE_PLACES_API_KEY || "";

        if (!ref || !apiKey) {
          return new Response("Photo reference and API key are required", { status: 400 });
        }

        try {
          const googlePhotoApiUrl = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1200&photo_reference=${ref}&key=${apiKey}`;
          const res = await fetch(googlePhotoApiUrl);
          
          if (res.url && (res.url.includes("googleusercontent") || res.url.includes("ggpht"))) {
            return Response.redirect(res.url, 302);
          }

          const imageBuffer = await res.arrayBuffer();
          const contentType = res.headers.get("content-type") || "image/jpeg";

          return new Response(imageBuffer, {
            status: 200,
            headers: {
              "Content-Type": contentType,
              "Cache-Control": "public, max-age=86400, s-maxage=86400",
            },
          });
        } catch (e) {
          console.error("Erro ao redirecionar foto do Google Places:", e);
          return new Response("Failed to fetch image", { status: 500 });
        }
      },
    },
  },
});
