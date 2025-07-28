// src/lib/api.ts
export async function fetchIELTSCourse(lang: "en" | "bn" = "en") {
  const res = await fetch(
    `https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-course?lang=${lang}`,
    {
      headers: {
        "X-TENMS-SOURCE-PLATFORM": "web",
        "accept": "application/json",
      },
      cache: "no-store", // ensures fresh data on each request
    }
  );

  if (!res.ok) throw new Error("Failed to fetch course data");

  return res.json();
}
